// * 11047. 동전 0
// * ⭕️ 통과
// * 그리디

export default function solution(input: string) {
  const [rawNK, ...rawCoins] = input.split("\n");
  const [N, K] = rawNK.split(" ").map((v) => +v);
  const coins = rawCoins.map((v) => +v).sort((prev, cur) => cur - prev);

  let count = 0;
  let leftMoney = K;

  for (const coin of coins) {
    if (leftMoney < 0) break;
    const amount = Math.floor(leftMoney / coin);

    if (amount > 0) {
      count += amount;
      leftMoney -= amount * coin;
    }
  }

  return count;
}
