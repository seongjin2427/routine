//* 2493. 탑
//* ❌ 실패
//* 스택

//* 1 <= N <= 500_000
//* 1 <= 탑의 높이 <= 100_000_000

export default function tower(input: string) {
  const [rawN, rawTowers] = input.split("\n");
  const N = +rawN;
  const towers = rawTowers.split(" ").map((v) => +v);

  let topArr = [0, ...towers];
  let stack = [];
  let result = [];
  let peek = [];

  label: for (let i = 1; i < N + 1; i++) {
    let curTop = topArr[i];

    while (stack.length > 0) {
      if (curTop > peek[0]) {
        stack.pop();
        peek = stack[stack.length - 1];
      } else {
        result.push(peek[1]);
        stack.push([curTop, i]);
        peek = [curTop, i];
        continue label;
      }
    }

    result.push(0);
    stack.push([curTop, i]);
    peek = [curTop, i];
  }

  return result.join(" ");
}
