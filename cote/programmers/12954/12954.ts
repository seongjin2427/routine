//* 12954. x만큼 간격이 있는 n개의 숫자
//* ⭕️ 통과
//* 구현

//* -100_000_000 <= x <= 100_000_000
//* n <= 1000

export default function numbersHasXGap(x: number, n: number) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
