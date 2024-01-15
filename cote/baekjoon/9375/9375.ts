// * 9375 패션왕 신해빈
// * ❌ 실패
// * 해시

// * 0 <= n <= 30

export default function solution(input: string) {
  const [n, ...arr] = input.split("\n");
  const answer = [];

  function getAnswer(allClothes: string[]) {
    const test = +allClothes.shift();
    const clothes = allClothes.splice(0, test);
    const kinds = {};
    let sum = 1;

    for (const wearing of clothes) {
      const [_, kind] = wearing.split(" ");
      kinds[kind] = kinds[kind] ? kinds[kind] + 1 : 1;
    }

    for (const key in kinds) {
      sum *= kinds[key] + 1;
    }
    answer.push(sum - 1);

    return allClothes.length > 0 ? getAnswer(arr) : null;
  }
  getAnswer(arr);

  return answer.join("\n");
}
