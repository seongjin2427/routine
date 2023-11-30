export default function solution(s: string) {
  const str = s
    .split(" ")
    .map(Number)
    .sort((prev, cur) => prev - cur);

  return `${str[0]} ${str.at(-1)}`;
}
