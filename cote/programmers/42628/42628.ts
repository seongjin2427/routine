//* 42628. 이중우선순위큐
//* ❌ 실패
//* 힙

//* 1 <= operations.length <= 1_000_000

export default function doublePriorityQueue(operations: string[]) {
  const answer = [0, 0];
  const queue = [];
  operations.forEach((commands) => {
    const [command, number] = commands.split(" ");
    if (command === "I") queue.push(Number(number));
    else {
      if (Number(number) < 0) queue.shift();
      else queue.pop();
    }

    queue.sort((prevNumber, currentNumber) => prevNumber - currentNumber);
  });

  if (queue.length) {
    answer[0] = queue.at(-1);
    answer[1] = queue[0];
  }
  return answer;
}
