// * 1316. 그룹 단어 체커
// * ❌ 실패
// * 문자열

// * N <= 100
// * 소문자, 중복 X, 길이는 최대 100
// * 알파벳이 연속적으로 나온 것은 그룹 단어 O
// * 다른 알파벳 후에 다시 나오면 그룹 단어 X

// * 연속적이 아니지만 한번 나온 단어가 다시 나왔다는 걸 알 수 있는 방법은?

export default function solution(input: string) {
  const [rawN, ...strings] = input.split("\n");
  let answer = 0;

  const checker = (string: string) => {
    const letters = [];

    for (const char of string) {
      if (!letters.includes(char)) letters.push(char);
      if (letters.at(-1) !== char) return 0;
    }

    return 1;
  };

  for (const string of strings) {
    answer += checker(string);
  }

  return answer;
}
