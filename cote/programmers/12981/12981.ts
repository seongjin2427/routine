//
//
// * 12981. 영어 끝말잇기

export default function solution(n: number, words: string[]) {
  const history = [words[0]];

  for (let i = 1; i < words.length; i++) {
    if (history.includes(words[i]) || words[i - 1].at(-1) !== words[i][0]) {
      return [(i % n) + 1, Math.ceil(n % 2 === 0 ? i / n + 1 : i / n)];
    }

    history.push(words[i]);
  }
  return [0, 0];
}
