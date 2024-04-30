//* 15990. 1, 2, 3 더하기 5
//* ❌ 실패
//* DP

//* n <= 100_000

export default function additionFive(input: string) {
  const [rawT, ...rawNumbers] = input.split("\n");
  const T = +rawT;
  const numbers = rawNumbers.map((v) => +v);
  const max = Math.max(...numbers);
  const MOD = 1_000_000_009;

  const answer = [];
  var DP = [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ];

  for (var i = 4; i <= max; i++) {
    DP[i] = [
      (DP[i - 1][1] + DP[i - 1][2]) % MOD,
      (DP[i - 2][0] + DP[i - 2][2]) % MOD,
      (DP[i - 3][0] + DP[i - 3][1]) % MOD,
    ];
  }

  for (var k = 0; k < T; k++) {
    const sum = DP[numbers[k]].reduce((a, v) => a + v, 0) % MOD;
    answer.push(sum);
  }

  return answer.join("\n");
}
