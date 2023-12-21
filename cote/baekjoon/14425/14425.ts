// * 통과!
// * 해시, 맵

export default function solution(input: string) {
  const inputs = input.split("\n");
  const [N, M] = inputs.shift().split(" ").map(Number);
  const NWords = inputs.splice(0, N);
  const S = {};
  let answer = 0;

  for (const elementWord of NWords) {
    S[elementWord] = 1;
  }

  for (const word of inputs) {
    if (S[word]) answer++;
  }

  return answer;
}
