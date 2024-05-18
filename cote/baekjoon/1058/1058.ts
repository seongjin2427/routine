//* 1058. 친구
//* ❌ 실패
//* 최단 경로

//* N <= 50

export default function friends(input: string) {
  const lines = input.trim().split("\n");
  const N = parseInt(lines[0]);
  const friendships = lines.slice(1, N + 1);

  // 2-친구 수를 저장할 배열
  let twoFriendCounts = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    let twoFriends = new Set();

    for (let j = 0; j < N; j++) {
      if (i !== j && friendships[i][j] === "Y") {
        twoFriends.add(j); // 직접 친구

        // 직접 친구의 친구들을 2-친구로 추가
        for (let k = 0; k < N; k++) {
          if (j !== k && friendships[j][k] === "Y" && i !== k) {
            twoFriends.add(k);
          }
        }
      }
    }

    // 2-친구 수 기록
    twoFriendCounts[i] = twoFriends.size;
  }

  // 가장 많은 2-친구 수 찾기
  return Math.max(...twoFriendCounts);
}
