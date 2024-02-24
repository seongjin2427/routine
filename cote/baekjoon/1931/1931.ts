//* 1931. 회의실 배정
//* ⭕️ 통과
//* 그리디, 정렬

//* 1 <= N <= 100_000

//? 회의시간이 겹치지 않는 경우의 최대 사용 가능 개수

export default function assignConferenceRoom(input: string) {
  const rawTimes = input.split("\n").slice(1);
  const times = rawTimes.map((time) => time.split(" ").map(Number));

  const sortedTime = times.sort((a, b) =>
    a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]
  );

  let count = 1;
  let tempTime = sortedTime.shift();
  for (const currentTime of sortedTime) {
    if (tempTime[1] <= currentTime[0]) {
      tempTime = currentTime;
      count++;
    }
  }

  return count;
}
