// * 42839. 소수 찾기
// * ⭕️ 통과
// * 완전탐색

// * 1 <= numbers.length <= 7
// * 0 <= numbers[i] <= 9

function isPrime(n: number) {
  if (n < 2) return false;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

export default function solution(numbers: string) {
  const arr = numbers.split("").map(Number);
  const visited = new Array(arr.length).fill(false);

  let answer = new Set();

  const dfs = (target: number, index: number) => {
    if (!visited[index]) {
      if (isPrime(target)) {
        answer.add(target);
      }

      visited[index] = true;
      for (let i = 0; i < arr.length; i++) {
        if (!visited[i]) {
          const nextTarget = arr[i];
          dfs(Number(`${target}${nextTarget}`), i);
        }
      }
      visited[index] = false;
    }
  };

  for (let i = 0; i < arr.length; i++) {
    dfs(arr[i], i);
  }

  return answer.size;
}

function GPTSolution(numbers: string) {
  let answer = new Set();
  const digits = numbers.split("");

  function makeNumbers(currentNumber: string, remainingDigits: string[]) {
    if (currentNumber.length > 0) {
      const num = parseInt(currentNumber);
      if (isPrime(num)) answer.add(num);
    }

    remainingDigits.forEach((digit, index) => {
      const nextRemainingDigits = [...remainingDigits];
      nextRemainingDigits.splice(index, 1); // 현재 숫자를 제외한 나머지 숫자들
      makeNumbers(currentNumber + digit, nextRemainingDigits);
    });
  }

  makeNumbers("", digits);

  return answer.size;
}
