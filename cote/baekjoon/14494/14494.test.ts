import { makeTest } from "../../@common/test";
import whatIsDynamic from "./14494";

const testCases = [
  {
    input: `3 2`,
    answer: 5,
  },
  {
    input: `4 5`,
    answer: 129,
  },
  {
    input: `1000 1000`,
    answer: 910657857,
  },
];

makeTest("14494. 다이나믹이 뭐에요?", testCases, whatIsDynamic);
