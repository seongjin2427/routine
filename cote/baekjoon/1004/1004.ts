// * 1004. 어린 왕자
// * ❌ 실패
// * 수학

// * -1000 ≤ x1, y1, x2, y2, cx, cy ≤ 1000
// * 1 ≤ r ≤ 1000
// * 1 ≤ n ≤ 50

// * (x − cx)^2 + (y − cy)^2 < r^2
// * 특정 좌표가 원 내부에 존재하는지 확인하는 수학공식
// * 참이면 원 내부에 좌표가 존재하고, 거짓이면 원 외부에 좌표가 존재

export default function solution(input: string) {
  const lines = input.split("\n");
  const N = +lines.shift(); // 테스트 케이스의 수

  let answer = "";

  const isPointInsidePlanet = (
    px: number,
    py: number,
    x: number,
    y: number,
    r: number
  ) => (px - x) ** 2 + (py - y) ** 2 < r ** 2;

  for (let i = 0; i < N; i++) {
    const [startX, startY, endX, endY] = lines.shift().split(" ").map(Number);
    const planetsCount = +lines.shift();
    const planets = lines
      .splice(0, planetsCount)
      .map((planet) => planet.split(" ").map(Number));
    let count = 0;

    planets.forEach(([x, y, r]) => {
      if (
        isPointInsidePlanet(startX, startY, x, y, r) !==
        isPointInsidePlanet(endX, endY, x, y, r)
      ) {
        count++;
      }
    });

    answer += `${count}\n`;
  }

  return answer.trim();
}
