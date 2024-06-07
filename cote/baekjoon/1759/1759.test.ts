import { makeTest } from "../../@common/test";
import makePassword from "./1759";

const testCases = [
  {
    input: `4 6
a t c i s w`,
    answer: `acis
acit
aciw
acst
acsw
actw
aist
aisw
aitw
astw
cist
cisw
citw
istw`,
  },
];

makeTest("1759. 암호 만들기", testCases, makePassword);
