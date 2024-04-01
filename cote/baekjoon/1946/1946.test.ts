import newEmployee from "./1946";

describe("1946. 신입 사원", () => {
  it("case 1.", () => {
    const input = `2
5
3 2
1 4
4 1
2 3
5 5
7
3 6
7 3
4 2
1 4
5 7
2 5
6 1`;

    expect(newEmployee(input)).toEqual(`4
3`);
  });
});
