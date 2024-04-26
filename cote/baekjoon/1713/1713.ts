//* 1713. 후보 추천하기
//* ❌ 실패
//* 시뮬레이션

//* 1 <= N <= 20
//* M <= 1_000
//* 1 <= frames[i] <= 100

export default function recommendCandidate(input: string) {
  const [rawN, rawM, rawRecommend] = input.split("\n");
  const [N, M] = [+rawN, +rawM];
  const recommendations = rawRecommend.split(" ").map(Number);
  const frames = new Map(); // {학생 번호: [추천 횟수, 최근 등록 순서]}

  let order = 0; // 등록 순서를 추적하기 위한 변수

  recommendations.forEach((candidate) => {
    if (frames.has(candidate)) {
      // 이미 사진틀에 있으면 추천 횟수만 증가
      frames.get(candidate)[0]++;
    } else {
      if (frames.size < N) {
        // 비어있는 사진틀이 있으면 새 학생 추가
        frames.set(candidate, [1, order++]);
      } else {
        // 사진틀이 모두 찼고, 새 학생이 추천받으면
        // 가장 적게 추천받은 사람 중 가장 오래된 사진을 제거
        let [min, oldest, toRemove] = [Infinity, Infinity, null];

        frames.forEach(([recommend, index], key) => {
          if (recommend < min || (recommend === min && index < oldest)) {
            [min, oldest, toRemove] = [recommend, index, key];
          }
        });
        frames.delete(toRemove); // 가장 적게 추천받고 오래된 학생 제거
        frames.set(candidate, [1, order++]); // 새 학생 추가
      }
    }
  });

  // 결과 출력을 위해 학생 번호를 오름차순으로 정렬
  return Array.from(frames.keys())
    .sort((a, b) => a - b)
    .join(" ");
}
