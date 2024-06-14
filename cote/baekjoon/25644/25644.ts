//* 25644. 최대 상승
//* ⭕️ 통과
//* 그리디

//* 1 <= N <= 200_000

export default function highestIncreasementDP(input: string) {
  const [rawN, rawStocks] = input.split("\n");
  const N = +rawN;
  const stocks = rawStocks.split(" ").map((v) => +v);

  let minPrice = stocks[0];
  let maxProfit = 0;

  for (let i = 1; i < N; i++) {
    // 현재 가격에서 최소 가격을 뺀 값이 현재 이득
    let profit = stocks[i] - minPrice;

    // 최대 이득 업데이트
    maxProfit = Math.max(maxProfit, profit);

    // 최소 가격 업데이트
    minPrice = Math.min(minPrice, stocks[i]);
  }

  return maxProfit;
}

function highestIncreasementGreedy(input: string) {
  const [rawN, rawStocks] = input.split("\n");
  const N = +rawN;

  //? 1. stocks 배열을 역순으로 바꾼다.
  const stocks = rawStocks
    .split(" ")
    .map((v) => +v)
    .reverse();

  //? 2. max 변수를 0으로 초기화, answer 변수를 0으로 초기화 한다.
  let max = 0;
  let answer = 0;

  //? 3. 0부터 N - 1까지 반복 순회한다.
  for (let i = 0; i < N; i++) {
    //? 4. max와 stocks[i]와 비교
    //? 4-1. stocks[i]가 크다면, max에 stocks[i]를 할당한다.
    if (max < stocks[i]) {
      max = stocks[i];
    } else {
      //? 4-2. stocks[i]가 작다면, max - stocks[i]와 answer를 비교
      if (answer < max - stocks[i]) {
        //? 4-2-1. max - stocks[i]가 더 크다면, answer에 max - stocks[i]를 재 할당
        answer = max - stocks[i];
      }
    }
  }

  return answer;
}
