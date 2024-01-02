// * ⭕️ 성공
// * 그리디

// * 1 <= people.length <= 50_000
// * 한 번에 최대 2명 타야함

export default function solution(people: number[], limit: number) {
  let count = 1;
  let weight = 0;
  people.sort((a, b) => a - b);

  for (const person of people) {
    weight += person;
    if (limit < weight) {
      count++;
      weight = person;
    }
  }

  return count || 1;
}
