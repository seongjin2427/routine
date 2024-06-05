//* 9205. 맥주 마시면서 걸어가기
//* ❌ 포기
//* BFS

//* t <= 50
//* 0 <= n <= 100
//* -32_768 <= x, y <= 32_768

export default function walkWithBeer(input: string) {
  const [rawT, ...lines] = input.split("\n");
  const answer = [];

  for (let i = 0; i < lines.length; i++) {
    const n = +lines[i];
    const places = lines
      .slice(i + 1, i + n + 3)
      .map((place) => place.split(" ").map((v) => +v));

    answer.push(canReachFestival(n, places));
    i += n + 2;
  }

  return answer.join("\n");
}

function canReachFestival(n: number, locations: number[][]) {
  const home = locations[0];
  const festival = locations.at(-1);

  const queue = [home];
  const visited = new Array(n + 2).fill(false);
  visited[0] = true;

  while (queue.length > 0) {
    const current = queue.shift();

    if (getDistance(current, festival) <= 1000) {
      return "happy";
    }

    for (let i = 0; i < locations.length; i++) {
      if (!visited[i] && getDistance(current, locations[i]) <= 1000) {
        visited[i] = true;
        queue.push(locations[i]);
      }
    }
  }
  return "sad";
}

function getDistance([x1, y1]: number[], [x2, y2]: number[]) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
