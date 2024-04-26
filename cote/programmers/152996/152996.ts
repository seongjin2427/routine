//* 152996. 시소 짝꿍
//* ❌ 실패
//* 정렬, 해시

//* 2 <= weights.length <= 100_000
//* 100 <= weights[i] <= 1_000

//? weights.length가 최대 100_00이므로 n^2를 통한 단순 반복문으로는 시간초과가 발생함

export default function seesaw(weights: number[]) {
  const map = {};
  const ratios = [1, 3 / 2, 4 / 3, 2]; // 비율 배열

  // 무게를 내림차순 정렬 후 reduce로 합산
  return weights
    .sort((a, b) => b - a)
    .reduce((result, weight) => {
      // 현재 무게에 대한 모든 비율 확인
      ratios.forEach((ratio) => {
        const matchedWeight = weight * ratio;
        // 맵에서 해당 비율에 맞는 무게의 카운트를 결과에 추가
        if (map[matchedWeight]) {
          result += map[matchedWeight];
        }
      });

      // 현재 무게를 맵에 추가 (이후 계산을 위해)
      map[weight] = (map[weight] || 0) + 1;

      return result;
    }, 0);
}
