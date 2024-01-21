// * 84512. 모음사전
// * ❌ 실패
// * 완전탐색

// * 1 <= word.length <= 5

export default function solution(word: string) {
  const weights = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  let sum = 0;
  let multiplier = 781; // 5^4 + 5^3 + 5^2 + 5 + 1

  for (let i = 0; i < word.length; i++) {
    sum += weights[word[i]] * multiplier;
    multiplier = Math.floor(multiplier / 5); // 다음 자리의 가중치 계산
  }

  return sum + word.length; // 단어 길이를 더해 최종 순서 계산
}
