//* 14888. 연산자 끼워넣기
//* ⭕️ 통과
//* 완전탐색

//* 2 <= N <= 11
//* 1 <= Ai <= 100

const operatorMapper = [
  (value1: number, value2: number) => value1 + value2,
  (value1: number, value2: number) => value1 - value2,
  (value1: number, value2: number) => value1 * value2,
  (value1: number, value2: number) => Math.trunc(value1 / value2),
];

export default function insertOperators(input: string) {
  const [rawN, rawNumbers, rawOperators] = input.split("\n");
  const N = Number(rawN);
  const numbers = rawNumbers.split(" ").map(Number);
  const operators = rawOperators.split(" ").map(Number);

  //* 최소 값, 최대 값을 최종적으로 반환할 max, min 변수를 각각 Infinity, 0으로 초기화한다.
  let max = -Infinity;
  let min = Infinity;
  //* 방문 여부를 판단할 visited 배열을 선언한다.
  const visited = new Array(N).fill(false);

  //* dfs 함수를 선언한다.
  //* 이 함수는 모든 연산자를 사용했을 때, 주어진 연산을 수행한 값을 min과 max에 업데이트 한다.
  const dfs = (current: number, numIndex: number, operatorCounts: number[]) => {
    if (N === numIndex) {
      max = max < current ? current : max;
      min = min > current ? current : min;
    }

    if (!visited[numIndex]) {
      visited[numIndex] = true;

      for (let i = 0; i < operatorCounts.length; i++) {
        if (operatorCounts[i] !== 0) {
          const next = numbers[numIndex];
          const result = operatorMapper[i](current, next);

          operatorCounts[i]--;
          dfs(result, numIndex + 1, operatorCounts);
          operatorCounts[i]++;
        }
      }
      visited[numIndex] = false;
    }
  };

  //* dfs 함수를 실행한다.
  dfs(numbers[0], 1, operators);

  return [max, min].join("\n");
}
