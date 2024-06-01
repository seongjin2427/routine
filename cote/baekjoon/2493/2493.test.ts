import { makeTest } from "../../@common/test";
import tower from "./2493";

const testCases = [
  {
    input: `5
6 9 5 7 4`,
    answer: "0 0 2 2 4",
  },
];

makeTest("2493. 탑", testCases, tower);
