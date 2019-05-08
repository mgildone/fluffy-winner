import { pick, randomScore } from "./common";

const validate = (data) => {
    const mandatoryKeys = [
    "firstNames",
    "lastNames",
    "nationalities",
    "genders",
    "sexualOrientations"
  ];
  return mandatoryKeys.reduce((acc, key) => {
    return data[key] ? acc : acc.concat(key);
  }, []);
};

const Player = (data = {}) => {
  const errors = validate(data);
  if (errors.length) {
    throw new Error(`${errors.join(",")} are missing!`);
  }

  const nationality = pick(data["nationalities"]);
  const gender = pick(data["genders"]);
  const sexualOrientation = pick(data["sexualOrientations"]);
  const firstName = pick(
    data["firstNames"][gender.abbreviation][nationality.abbreviation]
  );
  const lastName = pick(data["lastNames"][nationality.abbreviation]);

  return {
    nationality,
    gender,
    sexualOrientation,
    firstName,
    lastName,
    happiness: randomScore(1, 100),
    health: randomScore(1, 100),
    smarts: randomScore(1, 100),
    looks: randomScore(1, 100)
  };
};

export { Player };
