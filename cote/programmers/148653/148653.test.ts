import solution from "../148653/148653";

describe("148653. 마법의 엘리베이터", () => {
  it("case 1.", () => {
    const storey = 16;
    expect(solution(storey)).toEqual(6);
  });
  it("case 2.", () => {
    const storey = 2554;
    expect(solution(storey)).toEqual(16);
  });
  it("case 3.", () => {
    const storey = 6000;
    expect(solution(storey)).toEqual(5);
  });
  it("case 4.", () => {
    const storey = 95;
    expect(solution(storey)).toEqual(6);
  });
  it("case 4.", () => {
    const storey = 45;
    expect(solution(storey)).toEqual(9);
  });
});
