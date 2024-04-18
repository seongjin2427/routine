//* 169198. 당구 연습
//* ❌ 실패
//* 수학, 브루트포스

//* 3 ≤ m, n ≤ 1_000
//* 0 < startX < m
//* 0 < startY < n
//* 2 ≤ balls.length ≤ 1_000

export default function billiardsPractice(
  m: number,
  n: number,
  startX: number,
  startY: number,
  balls: number[][]
) {
  const calculate = ([x1, y1]: number[], [x2, y2]: number[]) => {
    const [minX, minY] = [Math.min(x1, x2), Math.min(y1, y2)];
    const [maxX, maxY] = [Math.max(x1, x2), Math.max(y1, y2)];

    const result: number[] = [];

    if (x1 !== x2 || y1 > y2) {
      result.push(Math.pow(maxX - minX, 2) + Math.pow(2 * n - minY - maxY, 2));
    }

    if (x1 !== x2 || y1 < y2) {
      result.push(Math.pow(maxX - minX, 2) + Math.pow(minY + maxY, 2));
    }

    if (y1 !== y2 || x1 < x2) {
      result.push(Math.pow(maxY - minY, 2) + Math.pow(minX + maxX, 2));
    }

    if (y1 !== y2 || x1 > x2) {
      result.push(Math.pow(maxY - minY, 2) + Math.pow(2 * m - minX - maxX, 2));
    }

    return result;
  };

  const startPox = [startX, startY];

  return balls.map((ball) => Math.min(...calculate(startPox, ball)));
}
