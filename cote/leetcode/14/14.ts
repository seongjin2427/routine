//* 14. Longest Common Prefix
//* ⭕️ 성공
//* 정렬

//* 1 <= strs.length <= 200
//* 0 <= str[i].length <= 200

export default function longestCommonPrefix(strs: string[]) {
  let answer = "";

  const sortedByLength = strs.sort((a, b) => a.length - b.length);
  const shortest = sortedByLength[0];
  const left = sortedByLength.slice(1);

  for (let i = 1; i <= shortest.length; i++) {
    const target = shortest.slice(0, i);

    if (left.every((str) => str.startsWith(target))) {
      answer = target;
    }
  }

  return answer;
}
