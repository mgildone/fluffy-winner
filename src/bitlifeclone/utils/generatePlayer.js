import { Player } from "./Player";

import nationalities from "../data/nationalities";
import countries from "../data/countries";
import firstNames from "../data/firstNames";
import lastNames from "../data/lastNames";
import genders from "../data/genders";
import sexualOrientations from "../data/sexualOrientations";

const GeneratePlayer = data =>
  Player({
    nationalities,
    countries,
    firstNames,
    lastNames,
    genders,
    sexualOrientations
  });

export { GeneratePlayer };
