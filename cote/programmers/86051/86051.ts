//* 86051. 없는 숫자 더하기
//* ⭕️ 통과
//* 구현

//* 1 <= numbers.length <= 9
//* 0 <= numbers[i] <= 9

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function sumNumbersOfNotExisted(numbers: number[]) {
  return arr.filter((n) => !numbers.includes(n)).reduce((a, b) => a + b);
}
