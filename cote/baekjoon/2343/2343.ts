//* 2343. 기타 레슨
//* ❌ 실패
//* 이분 탐색

//* 1 <= N <= 100_000
//* 1 <= M <= N

function canDivide(lectures: number[], maxLen: number, m: number) {
  let count = 1;
  let sum = 0;

  for (const len of lectures) {
    if (sum + len > maxLen) {
      count += 1;
      sum = len;
      if (count > m) return false;
    } else {
      sum += len;
    }
  }

  return true;
}

export default function guitarLesson(input: string) {
  const [rawNM, rawlectures] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const lectures = rawlectures.split(" ").map((v) => +v);

  let left = Math.max(...lectures);
  let right = lectures.reduce((acc, val) => acc + val, 0);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canDivide(lectures, mid, M)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
