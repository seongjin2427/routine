// * 3986. 좋은 단어
// * ⭕️ 통과
// * 스택

// * 1 <= N <= 100
// * 2 <= N[i].length <= 100_000

export default function solution(input: string) {
  const strings = returnStrings(input);
  let answer = 0;

  for (const string of strings) {
    answer += checkIsGoodString(string);
  }

  return answer;
}

const returnStrings = (input: string): string[] => {
  const [rawN, ...strings] = input.split("\n");
  return strings;
};

const isSameWithLastStackCharAndNextChar = (
  firstChar: string,
  secondChar: string
) => firstChar === secondChar;

const checkIsGoodString = (string: string) => {
  const stack = [];

  for (const char of string) {
    isSameWithLastStackCharAndNextChar(stack.at(-1), char)
      ? stack.pop()
      : stack.push(char);
  }

  return stack.length === 0 ? 1 : 0;
};
