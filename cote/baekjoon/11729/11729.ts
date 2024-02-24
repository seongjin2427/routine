//* 11729. 하노이 탑 이동순서
//* ❌ 실패
//* 재귀

//* 1 <= N <= 20

export default function hanoiMoveOrder(input: string) {
  const N = Number(input);

  const answer = [];
  function hanoi(n: number, from: number, to: number, via: number) {
    if (n === 1) answer.push([from, to]);
    else {
      hanoi(n - 1, from, via, to);
      answer.push([from, to]);
      hanoi(n - 1, via, to, from);
    }
  }

  hanoi(N, 1, 3, 2);
  return `${answer.length}\n${answer.map((h) => h.join(" ")).join("\n")}`;
}
