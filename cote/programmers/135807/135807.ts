//* 135807. 숫자 카드 나누기
//* ❌ 실패
//* 정렬

//* 1 <= arrayA.length = arrayB.length <= 500_000
//* 1 <= arrayA[i], arrayB[i] <= 100_000_000

export default function divideNumberCards(arrayA: number[], arrayB: number[]) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);
  // curr은 모두 나누고 target은 모두 나눌 수 없는 최대값을 도출하는 함수 입니다
  const findA = (cur: number[], target: number[]) => {
    for (let i = cur[0]; i > 0; i--) {
      if (cur.every((v) => v % i === 0) && !target.some((v) => v % i === 0))
        return i;
    }
    return 0;
  };
  return Math.max(findA(arrayA, arrayB), findA(arrayB, arrayA));
}
