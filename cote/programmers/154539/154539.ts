// * 154539.
// * ❌ 실패
// * 스택

// * 4 <= numbers.length <= 1_000_000
// * 1 <= numbers[i] <= 1_000_000

export default function solution(numbers: number[]) {
  const result = new Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      const index = stack.pop();
      result[index] = numbers[i];
    }
    stack.push(i);
  }

  return result;
}
