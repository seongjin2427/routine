import { makeTest } from "../../@common/test";
import splitSnack from "./16401";

const testCases = [
  {
    input: `3 10
1 2 3 4 5 6 7 8 9 10`,
    answer: 8,
  },
  {
    input: `4 3
10 10 15`,
    answer: 7,
  },
];

makeTest("16401. 과자 나눠주기", testCases, splitSnack);
