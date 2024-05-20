//* 1535. 안녕
//* ❌ 실패
//* DP

//* N <= 20
//* 체력, 기쁨 <= 100

export default function hi(input: string) {
  const [rawN, rawL, rawJ] = input.split("\n");
  const N = +rawN;
  const L = rawL.split(" ").map((v) => +v);
  const J = rawJ.split(" ").map((v) => +v);

  const maxHealth = 100;
  const dp = Array(maxHealth + 1).fill(0);

  for (let i = 0; i < N; i++) {
    const [loss, joy] = [L[i], J[i]];
    for (let health = maxHealth; health > loss; health--) {
      dp[health] = Math.max(dp[health], dp[health - loss] + joy);
    }
  }

  return Math.max(...dp);
}
