// * 118667. 두 큐 합 같게 만들기
// * ❌ 실패
// * 투 포인터

// * 1 <= queue1.length = queue2.length <= 300_000
// * 1 <= queue1[i], queue2[i] <= 1_000_000_000

export default function programmersSolution(
  queue1: number[],
  queue2: number[]
) {
  let answer = 0;
  const max = queue1.length * 2;
  let value = queue1.reduce((acc, cur, idx) => acc + cur - queue2[idx], 0) / 2;
  let [i, j] = [0, 0];
  while (value !== 0 && answer < max * 2) {
    if (value > 0) {
      const v = queue1[i];
      i++;
      value -= v;
      queue2.push(v);
    } else {
      const v = queue2[j];
      j++;
      value += v;
      queue1.push(v);
    }
    answer++;
  }
  return value !== 0 ? -1 : answer;
}

export function GPTSolution(queue1: number[], queue2: number[]) {
  const totalSum =
    queue1.reduce((acc, cur) => acc + cur, 0) +
    queue2.reduce((acc, cur) => acc + cur, 0);
  // 전체 합이 홀수인 경우, 두 큐의 합을 같게 만들 수 없음
  if (totalSum % 2 !== 0) return -1;

  const targetSum = totalSum / 2;
  let currentSum = queue1.reduce((acc, cur) => acc + cur, 0);
  let queue = [...queue1, ...queue2]; // 두 큐를 이어 붙임
  let left = 0,
    right = queue1.length - 1;
  let minOps = Number.MAX_SAFE_INTEGER;
  let ops = 0;

  while (left < queue.length && right < queue.length * 2) {
    if (currentSum === targetSum) {
      minOps = Math.min(minOps, ops);
      // 현재 합이 타겟 합과 같으면, 오른쪽 포인터를 이동시키며 상태를 변경
      currentSum += queue[(right + 1) % queue.length];
      right++;
      ops++;
    } else if (currentSum < targetSum) {
      // 현재 합이 타겟 합보다 작으면, 오른쪽 포인터를 이동
      right++;
      currentSum += queue[right % queue.length];
      ops++;
    } else {
      // 현재 합이 타겟 합보다 크면, 왼쪽 포인터를 이동
      currentSum -= queue[left % queue.length];
      left++;
      ops++;
    }
  }

  return minOps === Number.MAX_SAFE_INTEGER ? -1 : minOps;
}
