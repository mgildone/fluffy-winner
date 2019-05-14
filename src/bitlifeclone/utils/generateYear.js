import { pickChances } from "../utils/common";

const generateFirstYear = (firstName, lastName, country) => {
  return {
    age: 0,
    events: [
      `I was born in ${country.name}, I was a planned pregnancy`,
      `My name is ${firstName} ${lastName}`
    ]
  };
};

const bullyEvent = character => {
  const bullied = pickChances(character.bullied).value;
  if (bullied) {
    return "You've been bullied!";
  }
  return "You've not been bullied!";
};

const worldEvents = () => {
  return "WWW III started!";
};

const generateYear = (years, character) => {
  const age = years[years.length - 1].age + 1;
  return [
    ...years,
    Object.assign({}, { age, events: [bullyEvent(character), worldEvents()] })
  ];
};

export { generateYear, generateFirstYear };
