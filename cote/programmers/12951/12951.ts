// 모든 단어의 첫 문자가 대문자이고 그 외의 알파벳은 소문자인 문자열을 만들기

export default function solution(s: string) {
  return s
    .split(" ")
    .map((c) => (c ? c[0].toUpperCase() + c.slice(1).toLowerCase() : ""))
    .join(" ");
}
