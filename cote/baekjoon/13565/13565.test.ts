import { makeTest } from "../../@common/test";
import percolate from "./13565";

const testCases = [
  {
    input: `5 6
010101
010000
011101
100011
001011`,
    answer: "NO",
  },
  {
    input: `8 8
11000111
01100000
00011001
11001000
10001001
10111100
01010000
00001011`,
    answer: "YES",
  },
];

makeTest(`13565. 침투`, testCases, percolate);
