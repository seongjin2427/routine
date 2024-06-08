import { makeTest } from "../../@common/test";
import calculateLowestCost from "./1916";

const testCases = [
  {
    input: `5
8
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
1 5`,
    answer: 4,
  },
];

makeTest("1916. 최소비용 구하기", testCases, calculateLowestCost);
