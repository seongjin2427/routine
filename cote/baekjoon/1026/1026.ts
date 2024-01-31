// * 1026. 보물
// * ⭕️ 통과
// * 정렬

// * N <= 50
// * A, B <= 100

export default function solution(input: string) {
  const [rawN, rawA, rawB] = input.split("\n");
  const A = rawA.split(" ").map((v) => +v);
  const B = rawB.split(" ").map((v) => +v);

  const descA = [...A].sort((a, b) => b - a);
  const ascB = [...B].sort((a, b) => a - b);

  let answer = 0;

  for (let i = 0; i < +rawN; i++) {
    answer += descA[i] * ascB[i];
  }
  // B.forEach((el) => {
  //   const index = ascB.indexOf(el);
  //   answer += el * descA[index];
  //   ascB.splice(index, 1);
  //   descA.splice(index, 1);
  // });

  return answer;
}
