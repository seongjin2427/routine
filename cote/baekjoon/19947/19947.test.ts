import { makeTest } from "../../@common/test";
import geniusOfInvestment from "./19947";

const testCases = [
  {
    input: "95229 3",
    answer: 114274,
  },
  {
    input: "25542 10",
    answer: 46549,
  },
];

makeTest("19947. 투자의 귀재 배주형", testCases, geniusOfInvestment);
