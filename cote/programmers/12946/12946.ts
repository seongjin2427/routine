//* 12946. 하노이의 탑
//* ❌ 실패
//* 재귀

//* n <= 15

export default function towerOfHanoi(n: number) {
  const answer = [];

  function hanoi(n: number, from: number, to: number, via: number) {
    if (n === 1) answer.push([from, to]);
    else {
      hanoi(n - 1, from, via, to);
      answer.push([from, to]);
      hanoi(n - 1, via, to, from);
    }
  }

  hanoi(n, 1, 3, 2);
  return answer;
}
