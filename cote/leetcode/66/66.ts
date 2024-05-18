//* 66. Plus One
//* ⭕️ 통과
//* 문자열

//* 1 <= digits.length <= 100
//* 0 <= digits[i] <= 9

export default function plusOne(digits: number[]) {
  const integer = BigInt(digits.join("")) + 1n;
  return integer.toString().split("").map(Number);
}
