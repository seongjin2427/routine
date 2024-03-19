//* 12971. 스티커 모으기
//* ❌ 실패
//* DP

//* 1 <= N <= 100_000
//* 1 <= stickers[i] <= 100

export default function collectStickers(sticker: number[]) {
  const n = sticker.length;
  if (n === 1) return sticker[0]; // 스티커가 하나뿐이면 그 스티커의 값이 최대값
  if (n === 2) return Math.max(sticker[0], sticker[1]); // 스티커가 두 개이면 둘 중 큰 값이 최대값

  // 첫 번째 스티커를 사용하는 경우
  let dp1 = Array(n).fill(0);
  dp1[0] = sticker[0];
  dp1[1] = sticker[0];
  for (let i = 2; i < n - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
  }

  // 마지막 스티커를 사용하는 경우
  let dp2 = Array(n).fill(0);
  dp2[0] = 0;
  dp2[1] = sticker[1];
  for (let i = 2; i < n; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }

  return Math.max(dp1[n - 2], dp2[n - 1]);
}
