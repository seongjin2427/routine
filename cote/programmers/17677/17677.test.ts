import newsClustering from "./17677";

const testCases = [
  {
    str1: "FRANCE",
    str2: "french",
    result: 16384,
  },
  {
    str1: "handshake",
    str2: "shake hands",
    result: 65536,
  },
  {
    str1: "aa1+aa2",
    str2: "AAAA12",
    result: 43690,
  },
  {
    str1: "E=M*C^2",
    str2: "e=m*c^2",
    result: 65536,
  },
];

describe("65536. 뉴스 클러스터링", () =>
  testCases.forEach(({ str1, str2, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(newsClustering(str1, str2)).toEqual(result))
  ));
