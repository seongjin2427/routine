//* 13. Roman to Integer
//* ⭕️ 통과
//* 해시

//* 1 <= s.length <= 15
//* s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//* It is guaranteed that s is a valid roman numeral in the range [1, 3999].

const ROMAN = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export default function romanToInteger(s: string) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const current = ROMAN[s[i]];
    const next = ROMAN[s[i + 1]];

    if (current < next) {
      answer += next - current;
      i += 1;
    } else {
      answer += current;
    }
  }

  return answer;
}
