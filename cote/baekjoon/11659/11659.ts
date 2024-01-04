// * 12659 구간 합 구하기 4
// * ❌ 실패
// * 구현

// * 1 <= N, M <= 100_000
// * 1 <= i <= j <= N

// ! 시간 초과
// *
export default function solution(input: string) {
  console.time("start");
  const [rawNM, rawNumbers, ...rawCases] = input.split("\n");

  const [N, M] = rawNM.split(" ").map((v) => +v);
  const numbers = rawNumbers.split(" ").map((v) => +v);
  const cases = rawCases.map((rawCase) => rawCase.split(" ").map((v) => +v));

  const sumArr = new Array(N + 1).fill(0);
  let answer = "";

  // * 주어진 숫자 배열의 길이 + 1만큼의 누적합을 미리 계산한다.
  numbers.forEach((n, i) => {
    sumArr[i + 1] = sumArr[i] + n;
  });

  // * 주어진 케이스의 end까지의 누적합에서 start - 1 까지의 누적합을 빼면 해당 누적합을 계산할 수 있다.
  cases.forEach((target) => {
    const [start, end] = target;
    answer += sumArr[end] - sumArr[start - 1] + "\n";
  });

  console.timeEnd("start");

  return answer.trim();
}
