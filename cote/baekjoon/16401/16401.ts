//* 16401. 과자 나눠주기
//* ❌ 실패
//* 이분 탐색

//* 1 <= M <= 1_000_000
//* 1 <= N <= 1_000_000

function check(M: number, snacks: number[], ans: number) {
  let cnt = 0;
  for (let i = 0; i < snacks.length; i++) {
    cnt += Math.floor(snacks[i] / ans);
  }
  if (cnt >= M) return true;
  return false;
}

function binarySearch(M: number, snacks: number[]) {
  let answer = 0;

  let left = 1;
  let right = 1_000_000;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (check(M, snacks, mid)) {
      left = mid + 1;
      answer = mid;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

export default function splitSnack(input: string) {
  const [rawMN, rawSnacks] = input.split("\n");
  const [M, N] = rawMN.split(" ").map((v) => +v);
  const snacks = rawSnacks
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);

  return binarySearch(M, snacks);
}
