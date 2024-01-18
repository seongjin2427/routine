// * 87946. 피로도
// * ⭕️ 통과
// * 완전탐색

// * 1 <= k <= 5_000
// * 1 <= dungeons[세로] 8
// * dungeons[가로] = 2

export default function solution(k: number, dungeons: number[][]) {
  let answer = 0;

  const dfs = (fatigue: number, visitCheckArr: boolean[], count: number) => {
    answer = answer < count ? count : answer;

    dungeons.forEach(([minFatigue, spentFatigue], index) => {
      if (!visitCheckArr[index] && minFatigue <= fatigue) {
        visitCheckArr[index] = true;
        dfs(fatigue - spentFatigue, visitCheckArr, count + 1);
        visitCheckArr[index] = false;
      }
    });
  };

  const visited = new Array(dungeons.length).fill(false);
  dfs(k, visited, 0);

  return answer;
}
