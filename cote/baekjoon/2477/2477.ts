// * 2477. 참외밭
// * ❌ 실패
// * 수학, 구현

// * 1 <= K <= 20
// * 1 <= 변의 길이 <= 500

export default function solution(input: string) {
  const [rawK, ...rawSides] = input.split("\n");
  const K = +rawK;
  const sides = rawSides.map((side) => side.split(" ").map((v) => +v));

  let maxHeight = 0,
    maxWidth = 0;
  let maxHeightIdx = -1,
    maxWidthIdx = -1;

  //전체 큰 사각형의 넓이를 구하고 작은 사각형의 넓이를 구하여 빼는 방법.
  for (let i = 0; i < sides.length; i++) {
    if (sides[i][0] == 1 || sides[i][0] == 2) {
      //가로 방향
      if (maxHeight < sides[i][1]) {
        //가로 최대값, 인덱스 저장
        maxHeight = sides[i][1];
        maxHeightIdx = i;
      }
    } else {
      if (maxWidth < sides[i][1]) {
        //세로 최대값, 인덱스 저장
        maxWidth = sides[i][1];
        maxWidthIdx = i;
      }
    }
  }
  let squareMax = maxWidth * maxHeight; //큰 사각형 넓이
  let squareMin =
    sides[(maxWidthIdx + 3) % 6][1] * sides[(maxHeightIdx + 3) % 6][1]; //작은 사각형 넓이

  return (squareMax - squareMin) * K;
}

export function solution2(input: string) {
  const [rawK, ...rawSides] = input.split("\n");
  const K = +rawK;
  const sides = rawSides.map((side) => side.split(" ").map((v) => +v));
  let bigRect = 0;
  let smallRect = 0;

  let idx = -1;

  for (let i = 0; i < 6; i++) {
    let curLen = sides[i][1];
    let nextRect = sides[(i + 1) % 6][1];

    let curRect = curLen * nextRect;

    if (curRect > bigRect) {
      bigRect = curRect;
      idx = i;
    }
  }

  smallRect = sides[(idx + 3) % 6][1] * sides[(idx + 4) % 6][1];

  const result = (bigRect - smallRect) * K;
  return result;
}
