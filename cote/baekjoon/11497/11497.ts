//* 11497. 통나무 건너뛰기
//* ❌ 실패
//* 그리디, 정렬

//* 5 <= N <= 10_000
//* 1 <= L[i] <= 100_000

function* makeInitialValue(input: string) {
  const [rawT, ...rawTestCases] = input.split("\n");
  const T = +rawT;
  const testCases = rawTestCases.map((t) => t.split(" ").map((v) => +v));

  for (let i = 0; i < testCases.length; i += 2) {
    yield testCases.slice(i, i + 2);
  }
}

export default function jumpLog(input: string) {
  const inputValues = makeInitialValue(input);
  const answer = [];

  //? 주어진 숫자 중 인접한 숫자들의 차이 중 가장 큰 차이의 정도가 작은 경우를 출력
  for (const [[N], logs] of inputValues) {
    // 통나무 높이를 오름차순으로 정렬
    logs.sort((a, b) => a - b);

    // 인접한 두 통나무의 높이 차가 최소가 되도록 배열 재배치
    const resultOrder = [];
    for (let i = 0; i < N; i++) {
      if (i % 2 === 0) {
        resultOrder.push(i);
      } else {
        resultOrder.unshift(i);
      }
    }

    // 재배치된 순서대로 통나무 높이를 가져와 최대 난이도 계산
    let result = 0;
    for (let i = 0; i < N; i++) {
      const j = (i + 1) % N;
      result = Math.max(
        result,
        Math.abs(logs[resultOrder[i]] - logs[resultOrder[j]])
      );
    }

    answer.push(result);
  }

  return answer.join("\n");
}
