//* 152996. 시소 짝꿍
//* ❌ 실패
//* 정렬, 해시

//* 2 <= weights.length <= 100_000
//* 100 <= weights[i] <= 1_000

//? weights.length가 최대 100_00이므로 n^2를 통한 단순 반복문으로는 시간초과가 발생함

export default function seesaw(weights: number[]) {
  const map = {};
  const ratio = [1, 3 / 2, 4 / 3, 2]; // 비율 배열

  // 무게를 내림차순 정렬 후 reduce로 합산
  return weights
    .sort((a, b) => b - a)
    .reduce((result, weight) => {
      // 해당 무게의 비율을 곱하여 result에 합산
      ratio.map((v) => (result += map[weight * v] || 0));

      // 해당 무게의 등장 횟수 1 증가
      map[weight] = (map[weight] || 0) + 1;
      return result;
    }, 0);
}
