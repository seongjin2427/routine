import roadOfFlower from "./14620";

const testCases = [
  {
    input: `6
1 0 2 3 3 4
1 1 1 1 1 1
0 0 1 1 1 1
3 9 9 0 1 99
9 11 3 1 0 3
12 3 0 0 0 1`,
    result: 12,
  },
];

describe("14620. 꽃길", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(roadOfFlower(input)).toEqual(result))
  ));
