//* 12979. 기지국 설치
//* ❌ 실패
//* 그리디

//* N <= 200_000_000
//* W, stations.length <= 10_000

export default function installBaseStation(
  N: number,
  stations: number[],
  W: number
) {
  let additionalStationsNeeded = 0;
  let currentCoverageEnd = 0; // 현재까지 커버된 아파트의 마지막 번호
  let i = 0; // stations 배열을 순회하는 인덱스

  while (currentCoverageEnd < N) {
    // 현재 커버되지 않은 아파트가 기존 기지국의 범위 내에 있는 경우
    if (i < stations.length && stations[i] - W <= currentCoverageEnd + 1) {
      // 해당 기지국으로 인해 새롭게 커버되는 범위의 끝을 업데이트
      currentCoverageEnd = stations[i] + W;
      i++; // 다음 기지국으로 이동
    } else {
      // 새로운 기지국을 설치해야 하는 경우
      // 설치할 기지국 위치를 기준으로 새로운 커버 범위 계산
      currentCoverageEnd += 2 * W + 1;
      additionalStationsNeeded++; // 추가 기지국 수 증가
    }
  }

  return additionalStationsNeeded;
}
