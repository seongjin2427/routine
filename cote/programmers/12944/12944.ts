//* 12944. 평균 구하기
//* ⭕️ 통과
//* 수학

//* 1 <= arr.length <= 100
//* -10_000 <= arr[i] <= 10_000

export default function getAverage(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
