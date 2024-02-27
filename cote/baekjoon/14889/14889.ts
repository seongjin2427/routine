//* 14889. 스타트와 링크
//* ❌ 실패
//* 브루트포스, 백트래킹

//* 4 <= N <= 20 (짝수)
//* S[i][i] === 0, 1 <= S[i][j] <= 100

//* depth가 N이 되면 각 팀의 합이 최소값인 경우를 출력

function chatGPTSolution2(input) {
  const lines = input.split("\n");
  const N = parseInt(lines[0], 10);
  const S = lines.slice(1).map((line) => line.split(" ").map(Number));

  let minDiff = Infinity;

  function getTeamScore(team) {
    let score = 0;
    for (let i = 0; i < team.length; i++) {
      for (let j = i + 1; j < team.length; j++) {
        score += S[team[i]][team[j]] + S[team[j]][team[i]];
      }
    }
    return score;
  }

  function dfs(index, teamStart = [], teamLink = []) {
    if (index === N) {
      const startScore = getTeamScore(teamStart);
      const linkScore = getTeamScore(teamLink);
      const diff = Math.abs(startScore - linkScore);
      minDiff = Math.min(minDiff, diff);
      return;
    }

    if (teamStart.length < N / 2) {
      dfs(index + 1, [...teamStart, index], teamLink);
    }
    if (teamLink.length < N / 2) {
      dfs(index + 1, teamStart, [...teamLink, index]);
    }
  }

  dfs(0);

  return minDiff;
}

export default function chatGPTSolution1(input: string) {
  const [rawN, ...rawStartLinks] = input.split("\n");
  const N = Number(rawN);
  const S = rawStartLinks.map((startLink) => startLink.split(" ").map(Number));

  let minDiff = Infinity;

  function calculateDifference(team) {
    let startTeam = [],
      linkTeam = [];
    for (let i = 0; i < N; i++) {
      if (team.includes(i)) startTeam.push(i);
      else linkTeam.push(i);
    }

    let startScore = 0,
      linkScore = 0;
    for (let i = 0; i < N / 2; i++) {
      for (let j = 0; j < N / 2; j++) {
        if (i !== j) {
          startScore += S[startTeam[i]][startTeam[j]];
          linkScore += S[linkTeam[i]][linkTeam[j]];
        }
      }
    }

    return Math.abs(startScore - linkScore);
  }

  function backtrack(team = [], start = 0) {
    if (team.length === N / 2) {
      const diff = calculateDifference(team);
      minDiff = Math.min(minDiff, diff);
      return;
    }

    for (let i = start; i < N; i++) {
      team.push(i);
      backtrack(team, i + 1);
      team.pop();
    }
  }

  backtrack();
  return minDiff;
}
