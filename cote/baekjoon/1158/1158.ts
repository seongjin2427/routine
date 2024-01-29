// * 1158. 요세푸스 문제
// * ⭕️ 통과
// * 큐

// * 1 <= K <= N <= 5_000

export default function solution(input: string) {
  const [N, K] = input.split(" ").map((v) => +v);

  const answer = [];
  const queue = Array.from({ length: N }, (_, i) => i + 1);
  let index = 1;

  while (queue.length) {
    const target = queue.shift();
    if (index % K === 0) {
      answer.push(target);
    } else {
      queue.push(target);
    }
    index++;
  }

  return `<${answer.join(", ")}>`;
}

export function GPTSolution(input: string) {
  const [N, K] = input.split(" ").map((v) => +v);

  const answer = [];
  const people = Array.from({ length: N }, (_, i) => i + 1);
  let idx = 0;

  while (people.length > 0) {
    idx = (idx + K - 1) % people.length;
    answer.push(people.splice(idx, 1)[0]);
  }

  return `<${answer.join(", ")}>`;
}
