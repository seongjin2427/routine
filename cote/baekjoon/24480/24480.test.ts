import algorithmDFS from "./24480";

describe("24480. 알고리즘 수업 - 깊이 우선 탐색 2", () => {
  it("case 1.", () => {
    const input = `5 5 1
1 4
1 2
2 3
2 4
3 4`;

    expect(algorithmDFS(input)).toEqual(`1
4
3
2
0`);
  });
});
