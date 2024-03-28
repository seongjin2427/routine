//* 12947. 하샤드 수
//* ⭕️
//* 통과

//* 1 <= x <= 10_000

export default function harshadNumber(x: number) {
  var sum = +(x + "").split("").reduce((a, b) => +a + +b, 0);
  return x % sum === 0 ? true : false;
}
