import { makeTest } from "../../@common/test";
import assignClassroom from "./11000";

const testCases = [
  {
    input: `3
1 3
2 4
3 5`,
    answer: 2,
  },
];

makeTest("11000. 강의실 배정", testCases, assignClassroom);
