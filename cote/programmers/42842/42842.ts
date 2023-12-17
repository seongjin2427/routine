// ! 시간초과
// ❌
// * Lv 2. 카펫

// 8 <= brown <= 5,000
// 1 <= yellow <= 2,000,000
// 카펫의 세로 길이 <= 카펫의 가로 길이

export default function solution(brown: number, yellow: number) {
  var totalArea = brown + yellow;

  for (var width = 3; width <= totalArea; width++) {
    if (totalArea % width === 0) {
      var height = totalArea / width;
      if (width >= height) {
        if (2 * width + 2 * height - 4 === brown) {
          return [width, height];
        }
      }
    }
  }
}
