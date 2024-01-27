import solution from "./2477";

describe("2477. 참외밭", () => {
  it("case 1.", () => {
    const input = `7
4 50
2 160
3 30
1 60
3 20
1 100`;
    expect(solution(input)).toEqual(47600);
  });
});
