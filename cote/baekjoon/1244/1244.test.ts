import solution from "./1244";

describe("1244. 스위치 켜고 끄기", () => {
  it("case 1", () => {
    const input = `8
0 1 0 1 0 0 0 1
2
1 3
2 3`;
    expect(solution(input)).toEqual("1 0 0 0 1 1 0 1");
  });
});
