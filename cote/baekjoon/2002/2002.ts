//* 2002. 추월
//* ❌ 실패
//* 해시

//* 1 <= N <= 1_000

export default function overtake(input: string) {
  const [rawN, ...carInfo] = input.split("\n");
  const N = +rawN;

  const daegeun = carInfo.slice(0, N);
  const youngsik = carInfo.slice(N);
  const visited = Array.from({ length: N }, () => false);
  const map = new Map();

  daegeun.map((car, idx) => {
    map.set(car, idx);
  });

  let cur = 0;
  let cnt = 0;

  youngsik.map((car) => {
    if (map.get(car) > cur) {
      let flag = false;
      for (let i = 0; i < map.get(car); i++) {
        if (!visited[i]) {
          flag = true;
          cnt++;
          break;
        }
      }
      if (!flag) cur = map.get(car) + 1;
    }
    visited[map.get(car)] = true;
  });

  return cnt;
}
