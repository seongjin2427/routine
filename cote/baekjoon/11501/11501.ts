//* 11501. 주식
//* ❌ 실패
//* 그리디

//* 2 <= N <= 1_000_000
//* stockPrice <= 10_000

export default function stock(input: string) {
  const [rawT, ...rawStockPrices] = input.split("\n");
  const T = +rawT;
  let answer = [];

  for (let i = 0; i < T * 2; i += 2) {
    const N = Number(rawStockPrices[i]); // 날 수
    const stock = rawStockPrices[i + 1].split(" ").map(Number); // 날 별 주가
    let profit = 0; // 이익
    let maxStock = 0; // 현재까지 주가 중 최댓값

    // 뒤에서부터 최댓값 갱신
    for (let j = N - 1; j >= 0; j--) {
      if (stock[j] > maxStock) maxStock = stock[j];
      // 최댓값보다 작다면 이익에 최댓값과 차이만큼 더하기
      else if (stock[j] < maxStock) profit += maxStock - stock[j];
    }
    answer.push(profit);
  }

  return answer.join("\n");
}
