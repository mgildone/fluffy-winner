import { pick, randomScore, generateChances } from "./common";

const validate = (data) => {
    const mandatoryKeys = [
    "firstNames",
    "lastNames",
    "nationalities",
    "countries",
    "genders",
    "sexualOrientations"
  ];
  return mandatoryKeys.reduce((acc, key) => {
    return data[key] ? acc : acc.concat(key);
  }, []);
};

const getBullied = (vals) => {
    const chance = Object.keys(vals).reduce((acc, next) => {
        if(next === "smarts") {
            return acc + vals[next];
        }
         return   acc + (100 - vals[next]);
    }, 0)

    const bullied = (chance / 400) * 100;
    console.log(chance);

    return generateChances([{
        "name": "bullied",
        "pct": parseInt(bullied, 10),
        "value": true
        }, {
        "name": "no-bullied",
        "pct": parseInt((100 - bullied), 10),
        "value": false
    }]);
}

const Player = (data = {}) => {
  const errors = validate(data);
  if (errors.length) {
    throw new Error(`${errors.join(",")} are missing!`);
  }

  const nationality = pick(data["nationalities"]);
  const country = pick(data["countries"]);
  const gender = pick(data["genders"]);
  const sexualOrientation = pick(data["sexualOrientations"]);
  const firstName = pick(
    data["firstNames"][gender.abbreviation][nationality.abbreviation]
  );
  const lastName = pick(data["lastNames"][nationality.abbreviation]);
  const happiness = randomScore(1, 100);
  const health = randomScore(1, 100);
  const smarts = randomScore(1, 100);
  const looks = randomScore(1, 100);

  return {
    newCharacter: true,
    age: 0,
    dearhAge: randomScore(1, 120),
    lifePhase: "infant",
    nationality,
    country,
    gender,
    sexualOrientation,
    firstName,
    lastName,
    happiness,
    health,
    smarts,
    looks,
    bullied: getBullied({happiness,
    health,
    smarts,
    looks})
  };
};

export { Player };
