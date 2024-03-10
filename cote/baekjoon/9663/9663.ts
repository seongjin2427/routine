//* 9663. N-Queen
//* ❌ 실패
//* 브루트포스

//* 1 <= N < 15

export default function NQueen(input: string) {
  const n = Number(input);
  const queens = [];
  let count = 0;

  function possible(x: number, y: number) {
    for (const [a, b] of queens) {
      if (a === x || b === y) return false;
      if (Math.abs(a - x) === Math.abs(b - y)) return false;
    }
    return true;
  }

  function dfs(row: number) {
    if (row === n) {
      return count++;
    }

    for (let i = 0; i < n; i++) {
      if (!possible(row, i)) continue;
      queens.push([row, i]);
      dfs(row + 1);
      queens.pop();
    }
  }
  dfs(0);

  return count;
}
