import guitarLesson from "./2343";

describe("2343. 기타 레슨", () => {
  it("case 1.", () => {
    const input = `9 3
1 2 3 4 5 6 7 8 9`;

    expect(guitarLesson(input)).toEqual(17);
  });
});
