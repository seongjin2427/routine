import solution from "./131127";

describe("131127. 할인 행사", () => {
  it("case 1.", () => {
    const want = ["banana", "apple", "rice", "pork", "pot"];
    const number = [3, 2, 2, 2, 1];
    const discount = [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ];

    expect(solution(want, number, discount)).toEqual(3);
  });
  it("case 2.", () => {
    const want = ["apple"];
    const number = [10];
    const discount = [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ];

    expect(solution(want, number, discount)).toEqual(0);
  });
});
