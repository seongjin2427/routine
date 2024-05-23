//* 6236. 용돈 관리
//* ❌ 실패
//* 이분 탐색

//* 1 <= N <= 100_000
//* 1 <= M <= N
//* 1 <= 금액 <= 10_000

const spent = (cash: number, days: number[]) => {
  let amount = cash;
  let withdrawCount = 1;

  for (const spentAmount of days) {
    if (amount < spentAmount) {
      amount = cash;
      withdrawCount++;
    }

    amount -= spentAmount;
  }

  return withdrawCount;
};

export default function managePocketMoney(input: string) {
  const [rawNM, ...rawSpentDays] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const spentDays = rawSpentDays.map((v) => +v);

  let left = Math.max(...spentDays),
    right = spentDays.reduce((a, b) => a + b, 0);
  let result = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const targetCount = spent(mid, spentDays);

    if (targetCount <= M) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}
