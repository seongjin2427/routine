//* 12928. 약수의 합
//* ⭕️ 통과
//* 수학

//* 0 <= n <= 3_000

export default function divisorSum(n: number) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) sum += i;
  }

  return sum;
}
