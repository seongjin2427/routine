import ants from "./4307";

describe("4307. 개미", () => {
  it("case 1.", () => {
    const input = `2
10 3
2
6
7
214 7
11
12
7
13
176
23
191`;

    expect(ants(input)).toEqual(`4 8
38 207`);
  });
});
