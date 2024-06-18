import { makeTest } from "../../@common/test";
import payHelper from "./17212";

const testCases = [
  {
    input: "12",
    answer: 2,
  },
  {
    input: "21",
    answer: 3,
  },
  {
    input: "115",
    answer: 17,
  },
];

makeTest(
  "17212. 달나라 토끼를 위한 구매대금 지불 도우미",
  testCases,
  payHelper
);
