import { makeTest } from "../../@common/test";
import creamPasta from "./25214";

const testCases = [
  {
    input: `6
50 100 70 110 10 100`,
    answer: `0 50 50 60 60 90`,
  },
  {
    input: `6
3 3 2 8 3 1000000000`,
    answer: `0 0 0 6 6 999999998`,
  },
];

makeTest("25214. 크림 파스타", testCases, creamPasta);
