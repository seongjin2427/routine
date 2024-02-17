// * 72411. 메뉴 리뉴얼
// * ❌ 실패
// * 해시

// * 2 <= orders.length <= 20
// * 2 <= orders[i].length <= 10
// * 1 <= course.length <= 10

// * 주어진 코스요리 개수에 따라서 단품 요리가 2번 이상 나온 메뉴들을 사전순으로 정렬하여 반환

export default function solution(orders: string[], courses: number[]) {
  const answer = [];

  for (const course of courses) {
    const menus = {};
    let max = 0;

    for (const order of orders) {
      Combinations(order.split(""), course).forEach((candidate) => {
        !menus[candidate] ? (menus[candidate] = 1) : menus[candidate]++;
      });
    }

    for (const menu in menus) {
      if (menus[menu] > max) {
        max = menus[menu];
      }
    }

    for (const menu in menus) {
      if (menus[menu] === max && max > 1) {
        answer.push(menu);
      }
    }
  }

  return answer.sort();
}
const Combinations = (arr: string[], num: number) => {
  const results = [];

  if (num === 1) {
    return arr.map((value) => [value]);
  }

  arr.forEach((select, i, origin) => {
    const rest = origin.slice(i + 1);
    const combinations = Combinations(rest, num - 1);
    const combine = combinations.map((value) =>
      [select, ...value].sort().join("")
    );
    results.push(...combine);
  });

  return results;
};
