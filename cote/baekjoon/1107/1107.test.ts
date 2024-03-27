import remoteController from "./1107";

const testCases = [
  {
    input: `5457
3
6 7 8`,
    result: 6,
  },
  {
    input: `100
5
0 1 2 3 4`,
    result: 0,
  },
  {
    input: `500000
8
0 2 3 4 6 7 8 9`,
    result: 11117,
  },
  {
    input: `100
3
1 0 5`,
    result: 0,
  },
  {
    input: `14124
0`,
    result: 5,
  },
  {
    input: `1
9
1 2 3 4 5 6 7 8 9`,
    result: 2,
  },
  {
    input: `80000
2
8 9`,
    result: 2228,
  },
];

describe("1107. 리모컨", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(remoteController(input)).toEqual(result))
  ));
