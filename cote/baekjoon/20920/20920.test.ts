import hardToMemorizeVoca from "./20920";

const testCases = [
  {
    input: `7 4
apple
ant
sand
apple
append
sand
sand`,
    result: `sand
apple
append`,
  },
  {
    input: `12 5
appearance
append
attendance
swim
swift
swift
swift
mouse
wallet
mouse
ice
age`,
    result: `swift
mouse
appearance
attendance
append
wallet`,
  },
];

describe("20920. 영단어 암기는 괴로워", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(hardToMemorizeVoca(input)).toEqual(result))
  ));
