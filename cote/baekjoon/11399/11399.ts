// * 11399. ATM
// * ⭕️ 통과
// * 그리디

// * 1 <= N <= 1_000

export default function solution(input: string) {
  const [rawN, rawPeople] = input.split("\n");
  const people = rawPeople.split(" ").map((v) => +v);

  let answer = 0;
  let temp = 0;

  people.sort((prev, cur) => prev - cur);

  for (const time of people) {
    temp += time;
    answer += temp;
  }

  return answer;
}
