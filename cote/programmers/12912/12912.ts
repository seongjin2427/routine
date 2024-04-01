//* 12912. 두 정수 사이의 합
//* ⭕️ 통과
//* 구현

//* -10_000_000 <= a, b <= 10_000_000

export default function sumBetweenTwoIntegers(a: number, b: number) {
  let answer = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) answer += i;
  } else {
    for (let i = a; i >= b; i--) answer += i;
  }
  return answer;
}
