//* 42884. 단속카메라
//* ⭕️ 통과
//* 그리디

//* 1 <= routes.length <= 10_000
//* routes = [고속도로 진입 지점, 고속도로 나간 지점][]
//* -30_000 <= 진입 지점, 진출 지점 <= 30_000

export default function regulationCamera(routes: number[][]) {
  let count = 0;
  const sorted = routes.sort((a, b) => a[1] - b[1]);

  let next = -30_001;
  sorted.forEach(([enter, out]) => {
    if (next < enter) {
      count++;
      next = out;
    }
  });

  return count;
}
