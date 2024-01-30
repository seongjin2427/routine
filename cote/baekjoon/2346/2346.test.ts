import solution from "./2346";

describe("2346. 풍선 터뜨리기", () => {
  it("case 1.", () => {
    const input = `5
3 2 1 -3 -1`;
    expect(solution(input)).toEqual(`1 4 5 3 2`);
  });
});
