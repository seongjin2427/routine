//* 2792. 보석상자
//* ❌ 실패
//* 이분 탐색

//* 1 <= N <= 1_000_000_000
//* 1 <= M <= 300_000
//* M <= N

export default function jewelBox(input: string) {
  const [rawNM, ...rawJewels] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const jewels = rawJewels.map((v) => +v);

  let min = 0;
  let max = Math.max(...jewels);
  let mid;
  let answer = Infinity;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    let res = 0;
    jewels.forEach((v) => {
      res += Math.ceil(v / mid);
    });

    if (res <= N) {
      if (mid < answer) {
        answer = mid;
      }
      max = mid - 1;
    } else if (res > N) {
      min = mid + 1;
    }
  }

  return answer;
}
