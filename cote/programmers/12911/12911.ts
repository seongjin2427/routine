export default function solution(n: number) {
  const regexp = /1/g;
  let answer = n;
  const answerLength = n.toString(2).match(regexp).length;

  while (answer++) {
    const targetLength = answer.toString(2).match(regexp).length;
    if (answerLength === targetLength) return answer;
  }
}
