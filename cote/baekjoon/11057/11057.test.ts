import { makeTest } from "../../@common/test";
import inclineNumber from "./11057";

const testCases = [
  {
    input: "1",
    answer: 10,
  },
  {
    input: "2",
    answer: 55,
  },
  {
    input: "3",
    answer: 220,
  },
];

makeTest("11057. 오르막 수", testCases, inclineNumber);
