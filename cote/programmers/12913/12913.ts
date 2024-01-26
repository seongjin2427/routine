// * 12913. 땅따먹기
// * ❌ 실패
// * DP

// * N <= 100_000
// * N[i] === 4
// * N[i][j] <= 100

// * GPT 코드
export default function GPTSolution(land: number[][]) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      let maxScore = 0;

      // 이전 행에서 같은 열을 제외한 나머지 열 중 최대 점수 찾기
      for (let k = 0; k < 4; k++) {
        if (j !== k) {
          maxScore = Math.max(maxScore, land[i - 1][k]);
        }
      }

      // 현재 칸 업데이트
      land[i][j] += maxScore;
    }
  }

  // 마지막 행에서 최대 점수 찾기
  return Math.max(...land.at(-1));
}

// * 기존에 작성했던 코드
export function solution(land: number[][]) {
  let answer = 0;

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      const arr = [...land[i - 1]];

      arr[j] = 0;
      land[i][j] += Math.max(...arr);
      answer = Math.max(land[i][j], answer);
    }
  }

  return answer;
}
