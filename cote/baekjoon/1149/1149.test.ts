import RGBStreet from "./1149";

const testCases = [
  {
    input: `3
26 40 83
49 60 57
13 89 99`,
    result: 96,
  },
  {
    input: `3
1 100 100
100 1 100
100 100 1`,
    result: 3,
  },
  {
    input: `3
1 100 100
100 100 100
1 100 100`,
    result: 102,
  },
  {
    input: `6
30 19 5
64 77 64
15 19 97
4 71 57
90 86 84
93 32 91`,
    result: 208,
  },
  {
    input: `8
71 39 44
32 83 55
51 37 63
89 29 100
83 58 11
65 13 15
47 25 29
60 66 19`,
    result: 253,
  },
];

describe("1149. RGB거리", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(RGBStreet(input)).toEqual(result))
  ));
