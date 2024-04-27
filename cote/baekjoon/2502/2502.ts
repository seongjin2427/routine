//* 2502. 떡 먹는 호랑이
//* ❌ 실패
//* DP, 브루트포스

//* 3 <= D <= 30
//* 10 <= K <= 100_000

export default function eatingRiceCakeTiger(input: string) {
  const [D, K] = input.split(" ").map((v) => +v);

  // 피보나치 계수 계산
  let f1 = 1,
    f2 = 1,
    temp;
  for (let i = 3; i < D; i++) {
    temp = f1 + f2;
    f1 = f2;
    f2 = temp;
  }
  // A를 최대 가능 값에서 시작하여 B를 계산
  for (let A = Math.floor(K / f1); A >= 1; A--) {
    if ((K - f1 * A) % f2 === 0) {
      // B가 정수인지 확인
      let B = (K - f1 * A) / f2;
      if (A <= B) {
        return [A, B].join("\n"); // 조건을 만족하는 A, B를 반환
      }
    }
  }
  return []; // 조건을 만족하는 A, B가 없는 경우(문제에서는 항상 존재한다고 가정)
}
