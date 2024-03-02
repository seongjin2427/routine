//* 140107. 점 찍기
//* ❌ 실패
//* 수학, 구현

//* 1 <= k <= 1_000_000
//* 1 <= d <= 1_000_000

//* 범위가 1_000_000이라서 단순 반복문은 안됨!

export default function markADot(k: number, d: number) {
  let answer = 0;
  // 1) x좌표 값 만큼 반복 실행
  for (let x = 0; x <= d; x += k) {
    // 2) 원점과의 거리 y의 좌표를 구한다.
    let y = Math.trunc(Math.sqrt(d ** 2 - x ** 2));

    // 3) y 좌표 내부 찍을 수 있는 점의 개수
    answer += Math.trunc(y / k) + 1;
  }
  return answer;
}
