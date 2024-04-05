//* 258711. 도넛과 막대 그래프
//* ❌ 실패
//* 그래프

//* 1 <= edges.length <= 1_000_000
//* 1 <= a, b <= 1_000_000

export default function donutAndBarGraph(edges: number[][]) {
  let start = null; // 시작 정점
  let bar = 0; // 막대 그래프의 수
  let donut = 0; // 도넛 그래프의 수
  let character8 = 0; // 8자 그래프의 수
  const graph = []; // 그래프 생성

  // 그래프 구성
  for (const [from, to] of edges) {
    if (!graph[from]) {
      graph[from] = { from: [], to: [to], val: from };
    } else {
      graph[from].to.push(to);
    }
    if (!graph[to]) {
      graph[to] = { from: [from], to: [], val: to };
    } else {
      graph[to].from.push(from);
    }
  }

  graph.shift(); // index 0 삭제 (빈 값일 가능성 때문에)

  // 각 정점을 순회하며 그래프 유형 판별
  for (const node of graph) {
    if (node === undefined) continue; // 정의되지 않은 정점 건너뛰기

    const toLen = node.to.length;
    const fromLen = node.from.length;

    if (toLen === 0) bar++; // 막대 그래프
    else if (toLen === 2) {
      if (fromLen > 0) character8++; // 8자 그래프
      else start = node; // 시작 정점
    } else if (toLen > 2) start = node; // 시작 정점 (진출 간선이 2개 이상)
  }

  // 도넛 그래프 수 계산
  donut = start.to.length - bar - character8;

  return [start.val, donut, bar, character8];
}
