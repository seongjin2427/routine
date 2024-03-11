//* 18869. 멀티버스 2
//* ❌ 실패
//* 정렬, 좌표 압축, 이분 탐색

//* 2 <= M <= 100
//* 3 <= N <= 10_000
//* 1 <= 행성의 크기 <= 1_000_000

//* 1. 각 우주의 행성 크기 배열을 순회하며 상대적인 크기 순서로 변환합니다.
//* 2. 변환된 각 우주의 행성 배열을 문자열로 변환하여 비교할 수 있게 합니다.
//* 3. 문자열로 변환된 우주 배열을 사용하여 균등한 우주의 쌍을 찾습니다.

export default function multibus2(input: string) {
  const [rawNM, ...rawUniverses] = input.split("\n");
  const signatures = rawUniverses.map((universe) =>
    universe
      .split(" ")
      .map(Number)
      .map((size, index) => ({ size, index }))
      .sort((a, b) => a.size - b.size)
      .map(({ index }) => index)
      .join(",")
  );

  const signatureCounts = signatures.reduce((acc, signature) => {
    acc[signature] = (acc[signature] || 0) + 1;
    return acc;
  }, {});

  let pairs = 0;
  (Object.values(signatureCounts) as number[]).forEach((count) => {
    if (count > 1) {
      pairs += (count * (count - 1)) / 2; // nC2 조합 계산
    }
  });

  return pairs;
}
