//* 12789. 도키도키 간식 드리미
//* ⭕️ 통과
//* 스택

//* 1 <= N <= 1_000

export default function snackGranter(input: string) {
  const [rawN, rawStudents] = input.split("\n");
  const N = +rawN;
  const students = rawStudents.split(" ").map((v) => +v);

  const stack = [];
  let order = 1;

  for (let i = 0; i < N; i++) {
    const target = students[i];

    if (target !== order) {
      stack.push(target);
    } else {
      order++;
    }

    while (stack.at(-1) === order) {
      stack.pop();
      order++;
    }
  }

  return stack.length ? "Sad" : "Nice";
}
