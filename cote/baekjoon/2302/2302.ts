//* 2302. 극장 좌석
//* ❌ 실패
//* DP

//* 1 <= N <= 40
//* 0 <= M <= N

export default function theaterSeat(input: string) {
  const [rawN, rawM, ...rawVIPSeats] = input.split("\n");
  const [N, M] = [+rawN, +rawM];
  const VIPSeats = rawVIPSeats.map(Number);

  const dp = [1, 1, 2]; // dp[i]는 i개의 연속된 비VIP 좌석에 대한 배치 방법의 수
  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // 피보나치 수열과 같은 방식으로 계산
  }

  let totalWays = 1;
  let lastVIPSeat = 0; // 마지막 VIP 좌석 번호를 추적
  for (let i = 0; i < VIPSeats.length; i++) {
    const gap = VIPSeats[i] - lastVIPSeat - 1; // 현재 VIP 좌석과 마지막 VIP 좌석 사이의 비VIP 좌석의 개수
    totalWays *= dp[gap]; // 구간별 방법의 수를 곱함
    lastVIPSeat = VIPSeats[i]; // 마지막 VIP 좌석 번호 갱신
  }

  totalWays *= dp[N - lastVIPSeat]; // 마지막 VIP 좌석과 전체 좌석 수 사이의 구간에 대한 처리
  return totalWays;
}
