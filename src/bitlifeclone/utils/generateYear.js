import { pickChances, generateChances } from "../utils/common";

const milestones = {
  "age-0": character => {
    return [
      `I was born in ${character.country.name}, I was a planned pregnancy`,
      `My name is ${character.firstName} ${character.lastName}`
    ];
  },
  "age-6": character => {
    return [`You started primary school`];
  },
  "age-13": character => {
    return [`You started high school`];
  },
  "age-18": character => {
    return [`You finished school!`, `Congrats you graduated!!!`];
  },
  "age-65": character => {
    return [`Congrats, you retired!`];
  },
  "age-death": character => {
    return [
      `You died at the age of ${character.age}`,
      `You won't be missed!!!`
    ];
  }
};

const getBullied = vals => {
  const chance = Object.keys(vals).reduce((acc, next) => {
    if (next === "smarts") {
      return acc + vals[next];
    }
    return acc + (100 - vals[next]);
  }, 0);

  const bullied = (chance / 400) * 100;

  return generateChances([
    {
      name: "bullied",
      pct: parseInt(bullied, 10),
      value: true
    },
    {
      name: "no-bullied",
      pct: parseInt(100 - bullied, 10),
      value: false
    }
  ]);
};

const bullyEvent = character => {
  const { happiness, health, smarts, looks } = character;
  const bulliedList = getBullied({ happiness, health, smarts, looks });
  return () =>
    pickChances(bulliedList).value
      ? ["You've been bullied!"]
      : ["You've not been bullied!"];
};

const worldEvents = () => {
  return ["WWW III started!"];
};

const generateLife = character => {
  const life = [];
  const bulliedChanche = bullyEvent(character);
  for (let i = 0; i < character.deathAge; i++) {
    if (milestones[`age-${i}`]) {
      life.push(
        Object.assign(
          {},
          {
            age: i,
            events: [
              ...milestones[`age-${i}`](
                Object.assign({}, character, { age: i })
              ),
              ...bulliedChanche(),
              ...worldEvents()
            ]
          }
        )
      );
    } else {
      life.push(
        Object.assign({}, { age: i, events: [bulliedChanche(), worldEvents()] })
      );
    }
  }

  life.push(
    milestones[`age-death`](
      Object.assign({}, character, { age: character.deathAge })
    )
  );

  return life;
};

export { generateLife };
