// ⭕️
// 1시간 30분...

// N <= 100_000
// 1 <= M <= 500_000
// 처음에는 문장의 맨 뒤에 커서가 위치함

export default function solution(input: string) {
  let [string, M, ...commands] = input.split("\n");
  const left = string.split("");
  const right = [];

  for (const commandLine of commands) {
    let [command, char] = commandLine.split(" ");

    if (command === "L" && left.length > 0) {
      right.push(left.pop());
    } else if (command === "D" && right.length > 0) {
      left.push(right.pop());
    } else if (command === "B") {
      left.pop();
    } else if (command === "P") {
      left.push(char);
    }
  }

  return left.join("") + right.reverse().join("");
}
