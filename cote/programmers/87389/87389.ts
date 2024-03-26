//* 87389. 나머지가 1이 되는 수 찾기
//* ⭕️ 통과
//* 구현

//* 3 <= n <= 1_000_000

export default function findNumberWithRemainderOne(n: number) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
