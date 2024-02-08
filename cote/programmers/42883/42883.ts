// * 42883. 큰 수 만들기
// * ❌ 실패
// * 그리디

// * 2 <-= number <= 1_000_000
// * 1 <= k < number.length

export default function GPTSolution(number: string, k: number) {
  const stack = [];
  let count = k;

  for (let num of number) {
    // 스택이 비어있지 않고, k가 0보다 크며, 스택의 마지막 요소가 현재 숫자보다 작은 경우
    // 스택의 마지막 요소를 제거하고 k를 감소시킵니다.
    while (stack.length > 0 && count > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      count--;
    }
    // 현재 숫자를 스택에 추가합니다.
    stack.push(num);
  }

  // k개를 모두 제거하지 못한 경우(예: 숫자가 모두 같은 경우), 남은 k만큼의 숫자를 끝에서 제거합니다.
  while (count > 0) {
    stack.pop();
    count--;
  }

  // 스택에 남은 숫자들을 합쳐서 문자열로 반환합니다.
  return stack.join("");
}
