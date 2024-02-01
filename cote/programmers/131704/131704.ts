// * 131704. 택배상자
// * ❌ 실패
// * 스택

// * 1 <= order.length <= 1_000_000

export default function solution(order: number[]) {
  let result = 0;
  const stack = [];

  for (let i = 1; i <= order.length; i++) {
    stack.push(i);

    while (stack.length !== 0 && stack.at(-1) === order[result]) {
      stack.pop();
      result++;
    }
  }

  return result;
}
