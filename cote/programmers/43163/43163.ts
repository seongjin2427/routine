//* 43163. 단어 변환
//* ⭕️ 통과
//* 완전탐색

//* 3 <= words[i] <= 50
//* 3 <= words.length <= 50

const isConvertable = (target: string, candidate: string) =>
  target.split("").filter((alphabet, index) => alphabet !== candidate[index])
    .length === 1;

export default function convertWord(
  begin: string,
  target: string,
  words: string[]
) {
  let result = Infinity;
  const visited = new Array(words.length).fill(false);

  const dfs = (word: string, index: number, count: number) => {
    if (word === target) {
      result = result > count ? count : result;
      return;
    }
    if (!visited[index] && isConvertable(word, words[index])) {
      visited[index] = true;
      for (let i = 0; i < words.length; i++) {
        dfs(words[index], i, count + 1);
      }
      visited[index] = false;
    }
  };

  for (let i = 0; i < words.length; i++) {
    dfs(begin, i, 0);
  }

  return result === Infinity ? 0 : result;
}
