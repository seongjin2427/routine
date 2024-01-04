// * 12953. N개의 최소공배수
// * ❌ 실패
// * 수학

function gcd(a: number, b: number) {
  let c: number;
  while (b !== 0) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
}

function lcm(a: number, b: number) {
  return (a * b) / gcd(a, b);
}

export default function solution(arr: number[]) {
  return arr.reduce((acc, cur) => lcm(acc, cur), 1);
}
