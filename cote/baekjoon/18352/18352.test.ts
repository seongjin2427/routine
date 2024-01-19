import solution from "./18352";

describe("18352. 특정 거리의 도시 찾기", () => {
  it("case 1.", () => {
    const input = `4 4 2 1
1 2
1 3
2 3
2 4`;
    expect(solution(input)).toEqual("4");
  });
  it("case 2.", () => {
    const input = `4 3 2 1
1 2
1 3
1 4`;
    expect(solution(input)).toEqual("-1");
  });
  it("case 3.", () => {
    const input = `4 4 1 1
1 2
1 3
2 3
2 4`;
    expect(solution(input)).toEqual(`2
3`);
  });
});
