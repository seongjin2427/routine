import { makeTest } from "../../@common/test";
import nameHarmony from "./15312";

const testCases = [
  {
    input: `CJM
HER`,
    answer: 99,
  },
];

makeTest("15312. 이름 궁합", testCases, nameHarmony);
