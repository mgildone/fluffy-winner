import { pick } from "./common";

const Player = (data = {}) => {
  const mandatoryKeys = [
    "firstNames",
    "lastNames",
    "nationalities",
    "genders",
    "sexualOrientations"
  ];
  const errors = mandatoryKeys.reduce((acc, key) => {
    return data[key] ? acc : acc.concat(key);
  }, []);
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
    lastName
  };
};

export { Player };
