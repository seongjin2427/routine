// * 42586. 기능개발
// * ⭕️ 통과
// * 스택/큐

// * progress.length, speeds.length <= 100
// * progress[i] < 100
// * speeds[i] <= 100

export default function solution(progresses: number[], speeds: number[]) {
  const leftDays = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  const answer = [0];
  let temp = leftDays[0];

  for (let i = 0, j = 0; i < leftDays.length; i++) {
    if (leftDays[i] <= temp) {
      answer[j] += 1;
    } else {
      temp = leftDays[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
