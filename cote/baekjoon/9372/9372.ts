// * 9372. 상근이의 여행
// * ❌ 실패
// * 그래프

// * 2 <= N <= 1,000
// * 1 <= a, b <= n; a != b

export default function solution(input: string) {
  const [rawT, ...rawFlights] = input.split("\n");
  const T = +rawT;
  const flights = rawFlights.map((flight) => flight.split(" ").map(Number));

  let result = [];

  for (let i = 0; i < T; i++) {
    let N = flights[0][0];
    let M = flights[0][1];
    flights.shift();

    for (let j = 0; j < M; j++) {
      flights.shift();
    }

    result.push(N - 1);
  }

  return result.join("\n");
}
