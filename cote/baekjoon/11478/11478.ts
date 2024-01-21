// * 11478. 서로 다른 부분 문자열의 개수
// * ❌ 실패
// * 문자열

// * S <= 1_000

export default function solution(input: string) {
  let strSet = new Set();

  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      strSet.add(input.substring(i, j + 1));
    }
  }

  return strSet.size;
}
