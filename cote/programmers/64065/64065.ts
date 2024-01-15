// * 64065. 튜플
// * ❌ 실패
// * 집합

// * 5 <= s.length <= 1_000_000
// * 1 <= s[i] <= 100_000
// * 1 <= returnValue.length <= 500

export default function solution(s: string) {
  var answer = [];
  const tuple: string[][] = JSON.parse(
    s.replace(/{/g, "[").replace(/}/g, "]")
  ).sort((a, b) => a.length - b.length);

  tuple.forEach((t) => {
    answer.push(...t.filter((el) => !answer.includes(el)));
  });
  return answer;
}
