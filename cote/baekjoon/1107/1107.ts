//* 1107. 리모컨
//* ❌ 실패
//* 브루트포스

//* 0 <= N <= 500_000
//* 0 <= M <= 10

export default function remoteController(input: string) {
  const [rawTargetChannel, rawM, rawBrokenButtons] = input.split("\n");
  const targetChannel = +rawTargetChannel;
  const brokenButtons = rawBrokenButtons?.split(" ").map((v) => +v);

  const currentChannel = 100; // 수빈이가 현재 보고 있는 채널
  const broken = new Set(brokenButtons); // 고장난 버튼 목록
  // +, - 버튼만 사용해서 이동하는 경우
  let minPresses = Math.abs(targetChannel - currentChannel);

  function canPress(channel) {
    for (let c of channel.toString()) {
      if (broken.has(parseInt(c))) return false;
    }
    return true;
  }

  for (let channel = 0; channel <= 1_000_000; channel++) {
    // 채널 0부터 최대 범위까지 탐색
    if (canPress(channel)) {
      // 해당 채널로 직접 이동한 뒤 +, -를 눌러 목표 채널로 이동하는 경우
      const presses =
        channel.toString().length + Math.abs(channel - targetChannel);
      minPresses = Math.min(minPresses, presses);
    }
  }
  return minPresses;
}
