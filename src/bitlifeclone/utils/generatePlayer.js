import { Player } from "./Player";

import nationalities from "../data/nationalities";
import firstNames from "../data/firstNames";
import lastNames from "../data/lastNames";
import genders from "../data/genders";
import sexualOrientations from "../data/sexualOrientations";

const GeneratePlayer = data =>
  Player({
    nationalities,
    firstNames,
    lastNames,
    genders,
    sexualOrientations
  });

export { GeneratePlayer };
