//* 12933. 정수 내림차순으로 배치하기
//* ⭕️ 성공
//* 구현

//* 1 <= n <= 8_000_000_000

export default function sortDescWithIntegers(n: string) {
  return +(n.toString().split('').sort((a, b) => +b - +a).join(''));
}