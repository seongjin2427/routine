import { makeTest } from "../../@common/test";
import hideAndSeek3 from "./13549";

const testCases = [
  {
    input: "5 17",
    answer: 2,
  },
];

makeTest<(typeof testCases)[0]>("13549. 숨바꼭질 3", testCases, hideAndSeek3);
