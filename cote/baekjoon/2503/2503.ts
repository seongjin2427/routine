// * 2503. 숫자 야구
// * ❌ 실패
// * 구현, 브루트포스

// * 1 <= N <= 100

export default function GPTSolution(input: string) {
  function isStrikeOrBall(target: string, guess: string) {
    let strikes = 0;
    let balls = 0;
    target.split("").forEach((num, idx) => {
      if (num === guess[idx]) {
        strikes += 1;
      } else if (guess.includes(num)) {
        balls += 1;
      }
    });
    return { strikes, balls };
  }

  function isValidNumber(number: string) {
    // 중복된 숫자가 없고, 0이 포함되지 않은 3자리 숫자인지 검사
    return new Set(number).size === 3 && !number.includes("0");
  }

  function solution(input: string) {
    let possibleAnswers = [];
    for (let num = 123; num <= 987; num++) {
      const strNum = num.toString();
      if (isValidNumber(strNum)) {
        possibleAnswers.push(strNum);
      }
    }

    const queries = input
      .split("\n")
      .slice(1)
      .map((query) => {
        const [num, strikes, balls] = query.split(" ").map(Number);
        return { num: num.toString(), strikes, balls };
      });

    queries.forEach(({ num, strikes, balls }) => {
      possibleAnswers = possibleAnswers.filter((candidate) => {
        const { strikes: s, balls: b } = isStrikeOrBall(candidate, num);
        return s === strikes && b === balls;
      });
    });

    return possibleAnswers.length;
  }

  return solution(input);
}

export function blogSolution(input: string) {
  function isBall(answer: string, hint: string) {
    let cnt = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i !== j) {
          if (answer[i] === hint[j]) cnt++;
        }
      }
    }
    return cnt;
  }

  function isStrike(answer: string, hint: string) {
    let cnt = 0;
    for (let i = 0; i < 3; i++) {
      if (answer[i] === hint[i]) cnt++;
    }
    return cnt;
  }

  function solution(input: string) {
    const [rawN, ...rawHints] = input.split("\n");
    const hints = rawHints.map((hint) => hint.split(" ").map(Number));

    const visit = Array(10).fill(0);
    const answer = [];

    function dfs(res: number[], visit: number[]) {
      if (res.length === 3) {
        let flag = true;
        const target = res.join("");

        for (const [hint, s, b] of hints) {
          const strHint = hint.toString();

          const strike = isStrike(target, strHint);
          if (s !== strike) {
            flag = false;
            break;
          }

          const ball = isBall(target, strHint);
          if (b !== ball) {
            flag = false;
            break;
          }
        }

        if (flag) answer.push(target);
        return;
      }

      for (let i = 1; i <= 9; i++) {
        if (!visit[i]) {
          res.push(i);
          visit[i] = 1;
          dfs(res, visit);
          visit[i] = 0;
          res.pop();
        }
      }
    }

    dfs([], visit);
    return answer.length;
  }

  return solution(input);
}
