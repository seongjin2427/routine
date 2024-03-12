import plumTree from "./2240";

describe("2240. 자두 나무", () => {
  it("case 1.", () => {
    const input = `7 2
2
1
1
2
2
1
1`;

    expect(plumTree(input)).toEqual(6);
  });
});
