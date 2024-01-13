// * 1920. 수 찾기
// *
// * 정렬, 이분 탐색

// * 1 <= N <= 100_000
// * 1 <= M <= 100_000

export default function solution(input: string) {
  const [rawN, rawNNumber, rawM, rawMNumber] = input.split("\n");
  const NNumber = rawNNumber
    .split(" ")
    .map((v) => +v)
    .sort((prev, cur) => prev - cur);
  const MNumber = rawMNumber.split(" ").map((v) => +v);

  let answer = "";

  function 이분탐색(target: number) {
    let left = 0;
    let right = NNumber.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (target > NNumber[mid]) {
        left = mid + 1;
      } else if (target < NNumber[mid]) {
        right = mid - 1;
      } else {
        return (answer += "1\n");
      }
    }

    return (answer += "0\n");
  }

  for (const target of MNumber) {
    이분탐색(target);
  }

  return answer.trim();
}
