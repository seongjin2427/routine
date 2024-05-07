//* 9. Palinedrome Number
//* ⭕️ 통과
//* 수학, 구현

//* -2^21 <= x <= 2^21 - 1

export default function palindromeNumber(x: number) {
  if (x < 0) return false;
  if (x % 10 === x) return true;

  let digit = 0;
  let mod = 1;
  let temp = x;

  while (temp % mod !== x) {
    digit++;
    mod *= 10;
  }

  for (let i = 1; i <= Math.floor(digit / 2); i++) {
    const forward = Math.floor((x / 10 ** (digit - i)) % 10);
    const backward = Math.floor((x % 10 ** i) / 10 ** (i - 1));

    if (forward !== backward) return false;
  }

  return true;
}

// export default function palindromeNumber(x: number) {
//   return x === Number(String(x).split("").reverse().join(""));
// }
