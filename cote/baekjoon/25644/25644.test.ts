import { makeTest } from "../../@common/test";
import highestIncreasement from "./25644";

const testCases = [
  {
    input: `5
4 2 3 1 5`,
    answer: 4,
  },
  {
    input: `3
3 2 1`,
    answer: 0,
  },
  {
    input: `4
7 1 2 6`,
    answer: 5,
  },
];

makeTest("25644. 최대 상승", testCases, highestIncreasement);
