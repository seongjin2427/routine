import solution from "./14501";

describe("14501. 퇴사", () => {
  it("case 1.", () => {
    const input = `7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`;

    expect(solution(input)).toEqual(45);
  });
  it("case 2.", () => {
    const input = `10
1 1
1 2
1 3
1 4
1 5
1 6
1 7
1 8
1 9
1 10`;

    expect(solution(input)).toEqual(55);
  });
  it("case 3.", () => {
    const input = `10
5 10
5 9
5 8
5 7
5 6
5 10
5 9
5 8
5 7
5 6`;

    expect(solution(input)).toEqual(20);
  });
  it("case 4.", () => {
    const input = `10
5 50
4 40
3 30
2 20
1 10
1 10
2 20
3 30
4 40
5 50`;

    expect(solution(input)).toEqual(90);
  });
});
