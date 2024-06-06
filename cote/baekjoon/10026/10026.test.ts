import { makeTest } from "../../@common/test";
import redGreenColorWeakness from "./10026";

const testCases = [
  {
    input: `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR`,
    answer: "4 3",
  },
];

makeTest("10026. 적록색약", testCases, redGreenColorWeakness);
