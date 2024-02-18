import solution from "./2529";

describe("2529. 부등호", () => {
  it("case 1.", () => {
    const input = `2
< >`;
    expect(solution(input)).toEqual(`897
021`);
  });
  it("case 2.", () => {
    const input = `9
> < < < > > > < <`;
    expect(solution(input)).toEqual(`9567843012
1023765489`);
  });
});
