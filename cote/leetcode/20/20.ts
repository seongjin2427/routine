//* 20. Valid Parentheses
//* ⭕️ 통과
//* 스택

//* 1 <= s.length <= 100_000

const brackets = {
  ")": "(",
  "]": "[",
  "}": "{",
};

export default function validParentheses(s: string) {
  const stack = [s[0]];

  for (const target of s.slice(1)) {
    if (0 < stack.length && stack.at(-1) === brackets[target]) {
      stack.pop();
    } else {
      stack.push(target);
    }
  }

  return stack.length === 0;
}
