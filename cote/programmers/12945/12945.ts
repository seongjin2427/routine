export default function solution(n: number) {
  const fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = (fibonacci[i - 2] + fibonacci[i - 1]) % 1234567;
  }

  return fibonacci[n];
}

// * 기존에 풀었던 방식 - 굳이 BigInt를 쓰지 않아도 문제 해결 가능
// function solution(n) {
//   const arr = [BigInt(0), BigInt(1)];
//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 2] + arr[i - 1];
//   }

//   return +(arr[n] % BigInt(1234567)).toString();
// }