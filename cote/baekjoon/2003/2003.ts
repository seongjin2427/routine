// * 2003. 수들의 합 2
// * ❌ 실패
// * 브루트포스, 누적합, 투포인터

// * 1 <= N <= 10_000 -> O(n^2) 까지 가능
// * 1 <= M <= 300_000_000 -> BigInt 쓸 필요 X
// * A[i] <= 30_000

export default function solution(input: string) {
  const [rawNM, rawNumbers] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const numbers = rawNumbers.split(" ").map((v) => +v);

  let answer = 0;

  const twoPointer = () => {
    let left = 0;
    let right = 0;
    let sum = numbers[right];

    while (left < N && right < N) {
      if (sum === M) {
        answer++;
        sum += numbers[++right];
      } else if (sum < M) {
        sum += numbers[++right];
      } else if (sum > M) {
        sum -= numbers[left++];
      }
    }
  };

  twoPointer();
  return answer;
}
