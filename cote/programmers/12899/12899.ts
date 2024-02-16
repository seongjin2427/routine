// * 12899. 124 나라의 숫자
// * ❌ 실패
// * 수학

// * n <= 50_000_000

export default function solution(n: number) {
  let answer = "";
  const numArr = [4, 1, 2];

  while (n) {
    answer = numArr[n % 3] + answer;
    // 0 == false
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  return Number(answer);
}
