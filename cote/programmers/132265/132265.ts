// * 132265. 롤케이크 자르기
// * ❌ 실패
// * 투 포인터

// * 1 <= topping.length <= 1_000_000
// * 1 <= topping[i] <= 10_000

export default function solution(toppings: number[]) {
  let answer = 0;
  const allTopping = new Map();
  const brother = new Map();

  toppings.forEach((topping) => {
    allTopping.set(topping, (allTopping.get(topping) ?? 0) + 1);
  });

  for (const topping of toppings) {
    allTopping.set(topping, allTopping.get(topping) - 1);
    if (!allTopping.get(topping)) allTopping.delete(topping);
    brother.set(topping, 1);

    if (allTopping.size === brother.size) answer++;
  }

  return answer;
}
