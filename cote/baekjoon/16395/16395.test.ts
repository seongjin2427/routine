import { makeTest } from "../../@common/test";
import pascalsTriangle from "./16395";

const testCases = [
  {
    input: "5 3",
    answer: 6,
  },
  {
    input: "11 3",
    answer: 45,
  },
];

makeTest("16395. 파스칼의 삼각형", testCases, pascalsTriangle);
