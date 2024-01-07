// * 131701. 연속 부분 수열 합의 개수
// * ⭕️ 통과
// * 구현

// * 3 <= elements.length <= 1_000
// * 1 <= elements[i] <= 1_000

// * O(n^2)까지 가능

export default function solution(elements: number[]) {
  const sumSet = new Set<number>();

  for (let i = 0; i < elements.length; i++) {
    elements = [...elements.slice(1), elements.at(0)];
    for (let j = 1; j <= elements.length; j++) {
      const sum = elements.slice(j).reduce((acc, cur) => acc + cur, 0);
      sumSet.add(sum);
    }
  }

  return sumSet.size;
}
