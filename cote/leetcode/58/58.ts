//* 58. Length of Last Word
//* ⭕️ 통과
//* 문자열

//* 1 <= s.length <= 10_000

export default function lengthOfLastWord(s: string) {
  const splitted = s.split(" ").filter((v) => Boolean(v));
  return splitted.at(-1).length;
}
