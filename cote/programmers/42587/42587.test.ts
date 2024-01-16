import solution from "./42587";

describe("42587. 프로세스", () => {
  it("case 1.", () => {
    const priorities = [2, 1, 3, 2];
    const location = 2;

    expect(solution(priorities, location)).toEqual(1);
  });
  it("case 2.", () => {
    const priorities = [1, 1, 9, 1, 1, 1];
    const location = 0;

    expect(solution(priorities, location)).toEqual(5);
  });
});
