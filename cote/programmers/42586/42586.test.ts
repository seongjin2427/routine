import solution from "./42586";

describe("42586. 기능개발", () => {
  it("case 1.", () => {
    const progresses = [93, 30, 55];
    const speeds = [1, 30, 5];

    expect(solution(progresses, speeds)).toEqual([2, 1]);
  });
  it("case 2.", () => {
    const progresses = [95, 90, 99, 99, 80, 99];
    const speeds = [1, 1, 1, 1, 1, 1];

    expect(solution(progresses, speeds)).toEqual([1, 3, 2]);
  });
});
