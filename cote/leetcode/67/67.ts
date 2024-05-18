//* 67. Add Binary
//* ❌ 실패
//* 비트연산

//* 1 <= a.length, b.length <= 10_000

export default function addBinary(a: string, b: string) {
  // return (BigInt(parseInt(a, 2)) + BigInt(parseInt(b, 2))).toString(2);
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
}
