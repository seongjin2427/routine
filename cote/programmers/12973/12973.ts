export default function solution(s: string) {
  const str = [];

  for (const char of s) {
    if (str.at(-1) === char) str.pop();
    else str.push(char);
  }

  return str.length ? 0 : 1;
}
