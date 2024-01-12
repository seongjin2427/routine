// * 42747. H-Index
// * ❌ 실패
// * 정렬

// * 1 <= 논문의 수 <= 1_000
// * 0 <= 인용 횟수 <= 10_000

export default function solution(citations: number[]) {
  citations.sort((a, b) => b - a);

  let answer = 0;

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) answer++;
    else break;
  }

  return answer;
}
