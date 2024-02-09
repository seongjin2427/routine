import solution from "./9372";

describe("9372. 상근이의 여행", () => {
  it("case 1.", () => {
    const input = `2
3 3
1 2
2 3
1 3
5 4
2 1
2 3
4 3
4 5`;
    expect(solution(input)).toEqual(`2
4`);
  });
});
