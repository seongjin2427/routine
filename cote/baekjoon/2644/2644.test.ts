import solution from "./2644";

function makeGraph(input: string) {
  const [n, targetRelation, m, ...relations] = input.split("\n");
  const [person1, person2] = targetRelation.split(" ");

  const graph = {};

  relations.forEach((relation) => {
    const [x, y] = relation.split(" ");
    graph[x] ? graph[x].push(y) : (graph[x] = [y]);
    graph[y] ? graph[y].push(x) : (graph[y] = [x]);
  });

  console.log(graph);
}

describe("2644. 촌수 계산", () => {
  it("case 1.", () => {
    const input = `9
7 3
7
1 2
1 3
2 7
2 8
2 9
4 5
4 6`;
    // makeGraph(input);
    expect(solution(input)).toEqual(3);
  });
  it("case 2.", () => {
    const input = `9
8 6
7
1 2
1 3
2 7
2 8
2 9
4 5
4 6`;
    expect(solution(input)).toEqual(-1);
  });
  it("case 3.", () => {
    const input = `9
1 3
2
1 2
3 4`;
    expect(solution(input)).toEqual(-1);
  });
  it("case 4.", () => {
    const input = `7
1 6
6
1 2
1 3
2 4
2 5
3 6
3 7`;
    expect(solution(input)).toEqual(2);
  });
});
