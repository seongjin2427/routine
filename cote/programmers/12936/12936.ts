//* 12936. 줄 서는 방법
//* ❌ 실패
//* 순열

//* n <= 20
//* k <= n!

//* 조합 구하기

export default function lineupWays(n: number, k: number) {
  const numbers = Array.from({ length: n }, (_, i) => i + 1); // 1부터 n까지의 숫자 배열 생성
  const answer = [];
  let factorial = 1; // 팩토리얼을 저장할 변수, 초기값은 1
  k -= 1; // 인덱스는 0부터 시작하므로 k에서 1을 빼준다

  // n-1까지의 팩토리얼 값을 구한다. (n-1)!은 첫 번째 숫자를 결정하는 데 사용됨
  for (let i = 1; i < n; i++) factorial *= i;

  while (n > 0) {
    let index = Math.floor(k / factorial); // 현재 숫자의 인덱스를 결정
    answer.push(numbers[index]); // 결정된 숫자를 정답 배열에 추가
    numbers.splice(index, 1); // 사용된 숫자를 배열에서 제거

    k %= factorial; // k를 업데이트
    factorial /= n - 1; // 팩토리얼 값을 업데이트
    n -= 1; // 숫자의 개수를 하나 줄임
  }

  return answer;
}
