// * 10773. 제로
// * ⭕️ 통과
// * 스택

// * 1 <= K <= 100_000
// * 0 <= 정수 <= 1_000_00

export default function solution(input: string) {
  const [rawN, ...rawNumbers] = input.split("\n");
  const N = +rawN;
  const numbers = rawNumbers.map((v) => +v);

  const stack = [];

  for (const number of numbers) {
    if (number === 0) stack.pop();
    else stack.push(number);
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
}
