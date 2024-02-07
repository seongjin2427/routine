import solution from "./2503";

describe("2503. 숫자 야구", () => {
  it("case 1.", () => {
    const input = `4
123 1 1
356 1 0
327 2 0
489 0 1`;
    expect(solution(input)).toEqual(2);
  });
});
