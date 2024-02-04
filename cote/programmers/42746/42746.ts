// * 42746. 가장 큰 수
// * ⭕️ 통과
// * 정렬

// * 1 <= numbers.length <= 100_000
// * 0 <= numbers[i] <= 1_000

export default function solution(numbers: number[]) {
  const sorted = numbers
    .sort((a, b) => {
      const target1 = `${a}${b}`;
      const target2 = `${b}${a}`;
      return +target2 - +target1;
    })
    .join("");

  return sorted[0] === "0" ? "0" : sorted;
}
