//* 2531. 회전 초밥
//* ⭕️ 성공
//* 브루트포스, 투 포인터

//* 2 <= N <= 30_000
//* 2 <= d <= 30_000
//* 2 <= k <= 3_000, k <= N
//* 1 <= c <= d

export default function rotateSushi(input: string) {
  const [rawNdkc, ...rawSushi] = input.split("\n");
  //* 회전 초밥 벨트 위 개수 N, 초밥의 가짓 수 d, 연속해서 먹는 접시 수 k, 쿠폰번호 c
  const [N, d, k, c] = rawNdkc.split(" ").map((v) => +v);
  const sushi = rawSushi.map((v) => +v);

  const circularSushi = [...sushi, ...sushi.slice(0, k)];

  let max = 0;
  for (let i = 0; i < circularSushi.length - k; i++) {
    const target = circularSushi.slice(i, i + k);
    const kinds = new Set(target);
    const size = kinds.has(c) ? kinds.size : kinds.size + 1;

    max = Math.max(size, max);
  }

  return max;
}
