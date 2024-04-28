//* 1138. 한 줄로 서기
//* ❌ 포기
//* 구현

//* N <= 10

export default function standingInLine(input: string) {
  const [rawN, rawPeople] = input.split("\n");
  const N = +rawN;
  const list = rawPeople.split(" ").map((v) => +v);

  let people = [];
  for (let i = N - 1; i >= 0; i--) {
    people = people.slice(0, list[i]).concat([i + 1, ...people.slice(list[i])]);
  }

  return people.join(" ");
}
