import { makeTest } from "../../@common/test";
import largePizza from "./14607";

const testCases = [
  {
    input: "1",
    answer: 0,
  },
  {
    input: "3",
    answer: 3,
  },
  {
    input: "5",
    answer: 10,
  },
  {
    input: "8",
    answer: 28,
  },
];

makeTest("14607. 피자 (Large)", testCases, largePizza);
