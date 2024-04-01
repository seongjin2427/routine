//* 1946. 신입 사원
//* ❌ 실패
//* 정렬, 그리디

//* 1 <= T <= 20
//* 1 <= N <= 100_000

export default function newEmployee(input: string) {
  const [, ...testCases] = input.split("\n");
  let answer = "";

  for (let i = 0; i < testCases.length; i++) {
    const count = +testCases[i];
    const employees = testCases
      .slice(i + 1, i + count + 1)
      .map((e) => e.split(" ").map((v) => +v))
      .sort((a, b) => a[0] - b[0]);

    let result = 1;
    let minRank = employees[0][1];

    for (let j = 1; j < employees.length; j++) {
      if (minRank > employees[j][1]) {
        result += 1;
        minRank = employees[j][1];
      }
    }
    answer += `${result}\n`;

    i += count;
  }

  return answer.trim();
}
