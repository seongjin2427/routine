import algorithmClassBFS from "./24444";

const testCases = [
  {
    input: `5 5 1
1 4
1 2
2 3
2 4
3 4`,
    result: `1
2
4
3
0`,
  },
];

describe("24444. 알고리즘 수업 - 너비 우선 탐색 1", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(algorithmClassBFS(input)).toEqual(result))
  ));
