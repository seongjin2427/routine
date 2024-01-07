// * 76502. 괄호 회전하기
// * ⭕️ 통과
// * 스택

// * 1 <= s.length <= 1_000

const brackets = {
  "}": "{",
  ")": "(",
  "]": "[",
};

export default function solution(s: string) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];

    for (const bracket of s) {
      if (stack.at(-1) && stack.at(-1) === brackets[bracket]) {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    }

    s = s.slice(1) + s[0];
    answer += stack.length === 0 ? 1 : 0;
  }

  return answer;
}
