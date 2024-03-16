import installBaseStation from "./12979";

const testCases = [
  {
    N: 11,
    stations: [4, 11],
    W: 1,
    answer: 3,
  },
  {
    N: 16,
    stations: [9],
    W: 2,
    answer: 3,
  },
];

describe("first", () => {
  testCases.forEach(({ N, stations, W, answer }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(installBaseStation(N, stations, W)).toEqual(answer))
  );
});
