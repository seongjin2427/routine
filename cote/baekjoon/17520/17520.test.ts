import { makeTest } from "../../@common/test";
import balancedString from "./17520";

const testCases = [
  {
    input: 3,
    answer: 4,
  },
  {
    input: 5,
    answer: 8,
  },
  {
    input: 22,
    answer: 2048,
  },
  {
    input: 101,
    answer: 393256,
  },
];

makeTest("17520. Balanced String", testCases, balancedString);
