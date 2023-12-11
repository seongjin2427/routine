import solution from "./2468";

describe("2468. 안전 영역", () => {
  it("case 1.", () => {
    const input = `5
6 8 2 6 2
3 2 3 4 6
6 7 3 3 2
7 2 5 3 6
8 9 5 2 7`;

    expect(solution(input)).toBe(5);
  });

  it("case 2.", () => {
    const input = `7
9 9 9 9 9 9 9
9 2 1 2 1 2 9
9 1 8 7 8 1 9
9 2 7 9 7 2 9
9 1 8 7 8 1 9
9 2 1 2 1 2 9
9 9 9 9 9 9 9`;

    expect(solution(input)).toBe(6);
  });
});
