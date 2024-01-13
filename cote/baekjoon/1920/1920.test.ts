import solution from "./1920";

describe("1920. 수 찾기", () => {
  it("case 1.", () => {
    const input = `5
4 1 5 2 3
5
1 3 7 9 5`;
    expect(solution(input)).toEqual(`1
1
0
0
1`);
  });
});
