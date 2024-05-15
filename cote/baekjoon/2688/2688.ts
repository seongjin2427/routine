//* 2688. 줄어들지 않아
//* ❌ 실패
//* DP

//* 1 <= T <= 1_000
//* 1 <= n <= 64

export default function notShrink(input: string) {
  const [rawT, ...rawDigits] = input.split("\n");
  const T = +rawT;
  const digits = rawDigits.map((digit) => +digit);

  const maxN = Math.max(...digits);
  const results = [];

  // DP 테이블 준비
  // dp[digit][lastDigit] = 해당 자릿수에서 lastDigit로 끝나는 줄어들지 않는 숫자의 개수
  const dp = Array.from({ length: maxN + 1 }, () => Array(10).fill(0));

  // 초기값 설정: 한 자릿수 숫자들
  for (let i = 0; i <= 9; i++) {
    dp[1][i] = 1;
  }

  // DP 테이블 채우기
  for (let digit = 2; digit <= maxN; digit++) {
    for (let lastDigit = 0; lastDigit <= 9; lastDigit++) {
      // dp[digit][lastDigit]는 dp[digit-1][0]부터 dp[digit-1][lastDigit]까지의 합
      let sum = 0n;
      for (let j = 0; j <= lastDigit; j++) {
        sum += BigInt(dp[digit - 1][j]);
      }
      dp[digit][lastDigit] = sum;
    }
  }

  // 각 테스트 케이스에 대한 결과 계산
  for (let n of digits) {
    let total = 0n;
    for (let i = 0; i <= 9; i++) {
      total += BigInt(dp[n][i]);
    }
    results.push(total.toString());
  }

  return results.join("\n");
}
