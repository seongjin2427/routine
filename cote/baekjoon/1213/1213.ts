// * 1213. 팰린드롬 만들기
// * ❌ 실패
// * 그리디

// * input.length <= 50

export default function solution(input: string) {
  const freq = {};
  for (let char of input) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let oddCount = 0,
    oddChar = "",
    halfPalindrome = "";
  const sortedChars = Object.keys(freq).sort(); // 사전순 정렬

  for (let char of sortedChars) {
    if (freq[char] % 2 !== 0) {
      oddCount++;
      oddChar = char;
    }
    halfPalindrome += char.repeat((freq[char] / 2) | 0);
  }

  if (oddCount > 1) return "I'm Sorry Hansoo";

  return halfPalindrome + oddChar + halfPalindrome.split("").reverse().join("");
}
