// * 17686. 파일명 정렬
// * ❌ 실패
// * 문자열

// * files.length <= 1_000

export default function GPTSolution(files: string[]) {
  const fileRegex = /^([a-z\- ]+)(\d{1,5})/i;

  files.sort((a, b) => {
    const [, aHead, aNumber] = a.match(fileRegex) || [];
    const [, bHead, bNumber] = b.match(fileRegex) || [];

    const headCompare = aHead.toLowerCase().localeCompare(bHead.toLowerCase());
    if (headCompare !== 0) return headCompare;

    const numCompare = parseInt(aNumber) - parseInt(bNumber);
    return numCompare;
  });

  return files;
}

export function solution(files: string[]) {
  const converted = (file: string) => [
    file.split(/\d/g)[0].toLowerCase(),
    file.replace(/\D/g, ""),
  ];

  return files.sort((prev, cur) => {
    const [prevHead, prevNumber] = converted(prev);
    const [curHead, curNumber] = converted(cur);

    const headCompare = prevHead
      .toLowerCase()
      .localeCompare(curHead.toLowerCase());

    if (headCompare !== 0) return headCompare;
    return +prevNumber - +curNumber;
  });
}
