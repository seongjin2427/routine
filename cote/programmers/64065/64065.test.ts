import solution from "./64065";

describe("64065. 튜플", () => {
  it("case 1.", () => {
    const s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
    expect(solution(s)).toEqual([2, 1, 3, 4]);
  });
  it("case 2.", () => {
    const s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
    expect(solution(s)).toEqual([2, 1, 3, 4]);
  });
  it("case 3.", () => {
    const s = "{{20,111},{111}}";
    expect(solution(s)).toEqual([111, 20]);
  });
  it("case 4.", () => {
    const s = "{{123}}";
    expect(solution(s)).toEqual([123]);
  });
  it("case 5.", () => {
    const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
    expect(solution(s)).toEqual([3, 2, 4, 1]);
  });
});
