export default function solution(s: string) {
  let count = 0;

  if (s[0] === ")") return false;
  for (const bracket of s) {
    if (count < 0) return false;

    if (bracket === "(") count++;
    else count--;
  }

  return !count;
}
