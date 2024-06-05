import { makeTest } from "../../@common/test";
import walkWithBeer from "./9205";

const testCases = [
  {
    input: `2
2
0 0
1000 0
1000 1000
2000 1000
2
0 0
1000 0
2000 1000
2000 2000`,
    answer: `happy
sad`,
  },
];

makeTest("9205. 맥주 마시면서 걸어가기", testCases, walkWithBeer);
