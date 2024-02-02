// * 1072. 게임
// * ❌ 실패
// * 수학, 이분 탐색

// * 1 <= X <= 1_000_000_000
// * 0 <= Y <= X

export default function solution(input: string) {
  const [X, Y] = input.split(" ").map((v) => +v);
  let Z = Math.floor((Y * 100) / X);

  // 승률이 99% 이상인 경우, 승률을 변화시킬 수 없으므로 -1 반환
  if (Z >= 99) return -1;

  let left = 0,
    right = 1_000_000_000; // 가능한 게임 수의 범위
  let result = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 추가 게임 수 추정
    const newZ = Math.floor(((Y + mid) * 100) / (X + mid)); // 새 승률 계산

    // 승률이 변화하는 경우, 결과를 갱신하고 탐색 범위를 좁힘
    if (newZ > Z) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}
