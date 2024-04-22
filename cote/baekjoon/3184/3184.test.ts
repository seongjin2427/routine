import sheep from "./3184";

const testCases = [
  {
    input: `6 6
...#..
.##v#.
#v.#.#
#.o#.#
.###.#
...###`,
    result: "0 2",
  },
  {
    input: `8 8
.######.
#..o...#
#.####.#
#.#v.#.#
#.#.o#o#
#o.##..#
#.v..v.#
.######.`,
    result: "3 1",
  },
  {
    input: `9 12
.###.#####..
#.oo#...#v#.
#..o#.#.#.#.
#..##o#...#.
#.#v#o###.#.
#..#v#....#.
#...v#v####.
.####.#vv.o#
.......####.`,
    result: "3 5",
  },
];

describe("3184. 양", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}`, () => expect(sheep(input)).toEqual(result))
  ));
