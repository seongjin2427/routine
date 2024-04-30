// * 42587. 프로세스
// * ⭕️ 통과
// * 스택/큐

// * 1 <= priorities.length <= 100
// * 1 <= priorities[i] <= 9
// * 0 <= location <= queue.length - 1

export default function process(priorities: number[], location: number) {
  const withLocation = priorities.map((priority, index) =>
    index === location ? [priority, 1] : [priority, 0]
  );

  let count = 0;
  while (1) {
    const maxPriority = Math.max(...withLocation.map(([priority]) => priority));
    const target = withLocation.shift();

    if (target[0] !== maxPriority) {
      withLocation.push(target);
    } else {
      count++;
      if (target[1]) return count;
    }
  }
}

// * GPT 코드
function solution2(priorities: number[], location: number) {
  const withLocation = priorities.map((priority, index) => ({
    priority,
    isTarget: index === location,
  }));
  let count = 0;

  while (withLocation.length > 0) {
    const firstElement = withLocation.shift();
    if (
      withLocation.some((element) => element.priority > firstElement.priority)
    ) {
      withLocation.push(firstElement);
    } else {
      count++;
      if (firstElement.isTarget) {
        return count;
      }
    }
  }
}
