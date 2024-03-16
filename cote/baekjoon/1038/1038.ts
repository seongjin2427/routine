//* 1038. 감소하는 수
//* ⭕️ 통과
//* 브루트포스

//* 1 <= N <= 1_000_000

export default function decreasingNumber(input: number) {
  //* 단순 이중 반복문을 시도하면 1_000_000_000_000의 연산으로 시간 초과 발생
  //* 필요 없는 확인 과정은 패스할 수 있어야 함.
  const numbers = [];
  const queue: (string | number)[] = Array.from({ length: 10 }, (_, i) => i);
  let index = 0;

  //* 별도의 index를 두고, 마지막에서 2번째 숫자가 마지막 숫자보다 크면 배열에 해당 수를 재할당
  //* 1(1번째) -> 11 (탐색 중단) -> 12 -> 13
  //* 2(2번째) -> 20 -> 21 -> 22 (탐색 중단)
  //* 1~10찾고 그 다음 순서로 찾아야 하니까 BFS가 적합
  while (queue.length) {
    const target = +queue.shift();

    if (numbers.length > input) break;

    if (target < 10) {
      numbers[index++] = target;

      for (let i = 0; i < 10; i++) {
        if (target > i) {
          queue.push(String(target) + String(i));
        }
      }
      continue;
    }

    const stringTarget = String(target);
    const [lastSecond, last] = stringTarget.slice(-2);
    if (lastSecond > last) {
      numbers[index++] = target;

      for (let i = 0; i < 10; i++) {
        if (Number(last) > i) {
          queue.push(stringTarget + String(i));
        }
      }
    }
  }

  return numbers[input] ?? -1;
}
