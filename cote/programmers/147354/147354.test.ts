import tableHashFunction from "./147354";

describe("147354. 테이블 해시 함수", () => {
  it("case 1.", () => {
    const data = [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ];
    const [col, row_begin, row_end] = [2, 2, 3];

    expect(tableHashFunction(data, col, row_begin, row_end)).toEqual(4);
  });
});
