import specificShortestRoute from "./1504";

describe("1504. 특정한 최단 경로", () => {
  it("case 1.", () => {
    const input = `4 6
1 2 3
2 3 3
3 4 1
1 3 5
2 4 5
1 4 4
2 3`;

    expect(specificShortestRoute(input)).toEqual(7);
  });
});
