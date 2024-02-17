// * 1431. 시리얼 번호
// * ⭕️ 통과
// * 정렬

// * N <= 50

export default function solution(input: string) {
  const [rawN, ...serials] = input.split("\n");

  return serials
    .sort((A, B) => {
      // * 1. A와 B의 길이가 다르면, 짧은 것이 먼저 온다.
      if (A.length !== B.length) {
        return A.length - B.length;
      }

      // * 2. 길이가 같으면, A와 B의 모든 자리수 합을 비교해 작은 합을 가지는 것이 먼저 온다.
      const sumA = A.split("").reduce(sum, 0);
      const sumB = B.split("").reduce(sum, 0);

      if (sumA !== sumB) {
        return sumA - sumB;
      }

      // * 3. 1, 2번 모두 비교할 수 없다면, 사전순으로 비교한다. 숫자가 알파벳보다 사전순으로 작다.
      return A.localeCompare(B);
    })
    .join("\n");
}

const sum = (acc: number, cur: string) => {
  const num = Number(cur);
  return !isNaN(num) ? acc + num : acc;
};
