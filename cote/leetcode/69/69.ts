//* 69. Sqrt(x)
//* ⭕️ 성공
//* 구현

//* 0 <= x <= 2^21 - 1

export default function sqrt(number: number) {
  let x = number;
  let y = 1;
  const e = 0.000001; // precision level

  while (x - y > e) {
    x = (x + y) / 2;
    y = number / x;
  }

  return ~~x;
}

function sqrt1(x: number) {
  return Math.floor(Math.sqrt(x));
}
