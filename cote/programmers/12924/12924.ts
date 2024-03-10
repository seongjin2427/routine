//* 12924. 숫자의 표현
//* ❌ 실패
//* 수학

//* n <= 10_000

export default function numberExpressions(n: number) {
  var answer = 0;

  for (var i = 1; i <= n; i++) {
    if (n % i == 0 && i % 2 == 1) answer++;
  }

  return answer;
}
