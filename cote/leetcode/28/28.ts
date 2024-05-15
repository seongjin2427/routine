//* 28. Find the Index of the First Occurrence in a String
//* ⭕️ 성공
//* 문자열

//* 1 <= haystack.length
//* needle.length <= 10_0000

export default function findTheIndexOfTheFirstOccurrenceInAString(
  haystack: string,
  needle: string
) {
  return haystack.indexOf(needle);
}
