// * 42584. 주식가격
// * ❌ 실패
// * 스택, 큐

// * 1 <= prices[i] <= 10_000
// * 2 <= prices.length <= 100_000

// * n-1보다 n이 크면 value를 1만큼 증가시킨다.
// * [0, 1, 2, 2, 4]
export default function solution(prices: number[]) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
    let stack = 0;
    for (let j = i + 1; j < prices.length; j++) {
      stack++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    answer.push(stack);
  }
  return answer;
}
