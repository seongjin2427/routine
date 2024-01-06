// * 2839. 설탕 배달
// * ❌ 실패
// * 그리디, DP

// * 3 <= N <= 5_000

export default function solution(input: number) {
  let answer = 0;

  while (1) {
    if (input % 5 === 0) {
      return input / 5 + answer;
    }

    if (input < 0) {
      return -1;
    }

    answer++;
    input -= 3;
  }
}
