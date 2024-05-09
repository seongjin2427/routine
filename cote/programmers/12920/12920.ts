//* 12920. 선입 선출 스케줄링
//* ❌ 실패
//* 이분 탐색

//* 2 <= cores.length <= 10_000
//* cores[i] <= 10_000
//* n <= 50_000

export default function FIFOScheduling(n: number, cores: number[]) {
  // 처음에는 모든 코어가 작업하므로, n이 코어의 수보다 작거나 같을 경우 즉시반환
  if (n <= cores.length) return n;

  let min = Math.min(...cores);
  // 최악의 경우, 가장 짧은 처리시간을 갖는 코어가 모든 처리를 할 수 있으므로 min*n, Math.max(...cores) 의 경우 잘못된 처리가 됨
  let max = min * n;
  let mid; // 중앙값
  let work; // 각 코어가 처리할 수 있는 작업의 수

  // 마지막 작업을 처리하는데 걸리는 시간 계산
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    // 처음에는 모든 코어가 작업하므로, 작업 수를 코어의 수로 초기화
    work = cores.length;

    // 각 코어가 중간 시간 동안 처리할 수 있는 작업의 수를 계산하여 합산
    for (let i = 0; i < cores.length; i++) {
      work += Math.floor(mid / cores[i]);
    }

    // 계산한 작업의 수가 n보다 작으면, min을 중간 시간+1로 업데이트
    if (work < n) {
      min = mid + 1;
    } else {
      // 계산한 작업의 수가 n보다 크거나 같으면, max를 중간 시간-1
      max = mid - 1;
    }
  }

  // min-1 시점에서 처리한 작업의 수를 계산
  work = cores.length;
  const prevTime = min - 1;
  for (let i = 0; i < cores.length; i++) {
    work += Math.floor(prevTime / cores[i]);
  }

  // min 시점에서 n번째 작업을 처리하는 코어 탐색
  for (let i = 0; i < cores.length; i++) {
    if (min % cores[i] === 0) work++;
    if (work === n) return i + 1;
  }
}
