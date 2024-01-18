// * 17413. 단어 뒤집기 2
// * ⭕️ 통과
// * 스택, 문자열

// * S.length <= 100_000

// * <, > 포함 그 사이 단어는 그대로 스택에 담는다.
// * 이후 다른 단어에 대해서는 띄어쓰기를 기준으로 split한다.
// * 분리된 단어를 뒤집는다.
// * 다시 띄어쓰기를 기준으로 join 한다.

export default function solution(input: string) {
  let answer = "";
  let temp = "";

  const reverseWord = (s: string) =>
    s
      .split(" ")
      .map((string) => string.split("").reverse().join(""))
      .join(" ");

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char == "<") {
      answer += reverseWord(temp);
      temp = "";

      answer += "<";
      while (input[++i] !== ">") {
        answer += input[i];
      }
      answer += ">";
    } else {
      temp += char;
    }
  }

  if (temp.length) {
    answer += reverseWord(temp);
  }

  return answer;
}
