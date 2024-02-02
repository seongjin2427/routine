import solution from "./1965";

describe("1965. 상자넣기", () => {
  it("case 1.", () => {
    const input = `8
1 6 2 5 7 3 5 6`;

    expect(solution(input)).toEqual(5);
  });
  it("case 2.", () => {
    const input = `10
1 2 3 4 5 6 7 8 9 10`;

    expect(solution(input)).toEqual(10);
  });
  it("case 3.", () => {
    const input = `5
1 5 3 4 2`;

    expect(solution(input)).toEqual(3);
  });
});
