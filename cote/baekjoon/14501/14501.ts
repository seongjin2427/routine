// ! 시간 초과
// ❌
// ? 브루트포스
// 참고 블로그: https://kau-algorithm.tistory.com/800

// 1 <= N <= 15
// 1 <= Ti <= 5, 1 <= Pi <= 1000

export default function solution(input: string) {
  const [N, ...rawLeftDays] = input.split("\n");
  const leftDays = rawLeftDays.map((day) => day.split(" ").map((v) => +v));

  // * 주어진 상담 중에서 최대의 수입을 만들어야 한다.
  // * 상담한 날 포함, spentDays 기간동안은 건너뛴다.
  // * wholeDay가 spendtDays미만 이라면 중단해야 한다.
  // * 가능한 한 최대 수입을 얻는 상담을 하고 wholeDay에서 그 상담의 spentDays만큼을 뺀다.
  // ? spentDays가 낮으면서도 income이 높은 것만을 더해야 할 것 같다.
  // ? N이 최대 15니까, 브루트포스로 모든 경우의 수를 체크해도 괜찮을 것 같다.

  const DP = Array(+N).fill(0);

  for (let i = 0; i < +N; i++) {
    const [period, profit] = leftDays[i];
    if (i + period > +N) continue;
    DP[i] = DP[i] + profit;

    for (let j = i + period; j < +N; j++) {
      DP[j] = Math.max(DP[j], DP[i]);
    }
  }
  return Math.max(...DP);

  // ! fail logic
  // let maxIncome = 0;
  // const planning = (start: number) => {
  //   let tempIncome = 0;

  //   // ! 무조건 순서대로 더한다고 최대의 수입이 나오진 않겠다.
  //   // ! 브루트 포스 맞네...?
  //   // ! DP로 풀어보자.
  //   for (let j = start; j < +N; j++) {
  //     const [spentDay, income] = leftDays[j];
  //     if (+N - j - spentDay < 0) continue;
  //     tempIncome += income;
  //     j += spentDay - 1;
  //   }

  //   maxIncome = maxIncome > tempIncome ? maxIncome : tempIncome;
  // };

  // for (let i = 0; i < +N; i++) {
  //   const [spentDay] = leftDays[i];
  //   // * 남은 날보다 spentDay가 크면 건너뛰어야 한다.
  //   if (+N - i - spentDay < 0) continue;
  //   planning(i);
  // }
}

// * GPT - 재귀 + 메모이제이션 동적계획법
function solution2(input: string) {
  const [N, ...rawLeftDays] = input.split("\n");
  const leftDays = rawLeftDays.map((day) => day.split(" ").map((v) => +v));

  function getMaxIncome(leftDays: number[][], N: number): number {
    const memo: number[] = new Array(N).fill(-1);

    function planning(currentDay: number): number {
      // 기저 조건: 더 이상 선택할 수 있는 날이 없을 때
      if (currentDay >= N) {
        return 0;
      }

      // Memoization: 이미 계산한 경우 해당 결과를 반환
      if (memo[currentDay] !== -1) {
        return memo[currentDay];
      }

      // 현재 날짜의 상담을 선택하지 않는 경우
      const maxIncomeWithoutCurrent = planning(currentDay + 1);

      // 현재 날짜의 상담을 선택하는 경우
      const [spentDay, income] = leftDays[currentDay];
      let maxIncomeWithCurrent = 0;
      if (currentDay + spentDay <= N) {
        maxIncomeWithCurrent = income + planning(currentDay + spentDay);
      }

      // 두 경우 중에서 더 큰 값을 Memoization에 저장하고 반환
      memo[currentDay] = Math.max(
        maxIncomeWithoutCurrent,
        maxIncomeWithCurrent
      );
      return memo[currentDay];
    }

    // 최대 이익 계산
    return planning(0);
  }

  return getMaxIncome(leftDays, +N);
}
