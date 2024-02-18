// * 2529. 부등호
// *
// * 브루트포스, 백트래킹

// * 2 <= k <= 9

// * 0~9자리의 숫자로 모두 다르게 써야 한다.
// * 주어진 부등호에 맞는 숫자 모두를 이어 붙이면 부등호를 만족하는 정수라고 부른다.
// * 부등호에 만족하는 정수는 여러개이다.
// * 여러개의 '부등호를 만족하는 정수'의 최대값, 최소값을 출력한다.

const checkInequalSign = (
  sign: string,
  targetNumber: number,
  compareNumber: number
) => {
  return sign === "<"
    ? targetNumber < compareNumber
    : targetNumber > compareNumber;
};

const isNotVisited = (visitedNumberArr: boolean[], target: number) => {
  return !visitedNumberArr[target];
};

export default function solution(input: string) {
  const [rawK, rawInequals] = input.split("\n");
  const LIMIT = Number(rawK) + 1;
  const inequalSignSet = rawInequals.split(" ");

  let minNumber = "";
  let maxNumber = "";
  const visited = new Array(10).fill(false);

  const dfs = (integerArr: number[], signIndex: number) => {
    if (LIMIT === integerArr.length) {
      const candidate = integerArr.join("");
      if (!minNumber) minNumber = candidate;
      maxNumber = candidate;
    }

    const currentNumber = integerArr.at(-1);

    if (isNotVisited(visited, currentNumber)) {
      visited[currentNumber] = true;
      const inequalSign = inequalSignSet[signIndex];

      for (let nextNumber = 0; nextNumber < 10; nextNumber++) {
        if (
          isNotVisited(visited, nextNumber) &&
          checkInequalSign(inequalSign, currentNumber, nextNumber)
        ) {
          integerArr.push(nextNumber);
          dfs(integerArr, signIndex + 1);
          integerArr.pop();
        }
      }
      visited[currentNumber] = false;
    }
  };

  for (let startNumber = 0; startNumber < 10; startNumber++) {
    dfs([startNumber], 0);
  }

  return [maxNumber, minNumber].join("\n");
}
