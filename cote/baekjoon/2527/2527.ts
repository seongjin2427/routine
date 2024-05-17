//* 2527. 직사각형
//* ❌ 실패
//* 구현

//* 1 <= 좌표 값 <= 50_000

export default function rectangular(input: string) {
  const rects = input.split("\n").map((rect) => rect.split(" ").map((v) => +v));

  let answer = "";
  for (const testCase of rects) {
    const [x1, y1, p1, q1] = testCase.slice(0, 4);
    const [x2, y2, p2, q2] = testCase.slice(4);

    if (p1 < x2 || q1 < y2 || p2 < x1 || q2 < y1) {
      answer += "d\n";
    } else if (
      (x1 == p2 && y1 == q2) ||
      (x1 == p2 && q1 == y2) ||
      (p1 == x2 && q1 == y2) ||
      (p1 == x2 && y1 == q2)
    ) {
      answer += "c\n";
    } else if (p1 == x2 || q1 == y2 || p2 == x1 || y1 == q2) {
      answer += "b\n";
    } else {
      answer += "a\n";
    }
  }

  return answer.trim();
}
