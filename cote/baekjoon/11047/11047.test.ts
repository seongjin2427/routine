import solution from "./11047";

describe("11047.", () => {
  it("case 1.", () => {
    const input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`;

    expect(solution(input)).toEqual(6);
  });
  it("case 2.", () => {
    const input = `10 4790
1
5
10
50
100
500
1000
5000
10000
50000`;

    expect(solution(input)).toEqual(12);
  });
});
