import solution from "./15988";

describe("15988. 1, 2, 3 더하기 3", () => {
  it("case 1. ", () => {
    const input = `3
4
7
10`;

    expect(solution(input)).toEqual(`7
44
274`)
  });
});
