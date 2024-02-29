//* 9019. DSLR
//*
//* BFS

//* 0 <= A, B < 10_000

export default function DSLR(input: string) {
  const [rawN, ...rawRegisters] = input.split("\n");
  const registers = rawRegisters.map((register) =>
    register.split(" ").map((r) => r.padStart(4, "0"))
  );

  const answer = [];

  for (const [initial, final] of registers) {
    const queue: [number, string][] = [[+initial, ""]];
    const visited = { [+initial]: true };

    while (queue.length) {
      let [cur, path] = queue.shift();

      if (+cur === +final) {
        answer.push(path);
        break;
      }

      const nextD = (cur * 2) % 10000;
      if (!visited[nextD]) {
        visited[nextD] = true;
        queue.push([nextD, path + "D"]);
      }

      const nextS = cur === 0 ? 9999 : cur - 1;
      if (!visited[nextS]) {
        visited[nextS] = true;
        queue.push([nextS, path + "S"]);
      }

      const nextL = (cur % 1000) * 10 + Math.floor(cur / 1000);
      if (!visited[nextL]) {
        visited[nextL] = true;
        queue.push([nextL, path + "L"]);
      }

      const nextR = (cur % 10) * 1000 + Math.floor(cur / 10);
      if (!visited[nextR]) {
        visited[nextR] = true;
        queue.push([nextR, path + "R"]);
      }
    }
  }

  return answer.join("\n");
}
