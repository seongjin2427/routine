// * 131127. 할인 행사
// * ⭕️ 통과
// * 해시

export default function solution(
  want: string[],
  number: number[],
  discount: string[]
) {
  const items = {};
  let days = 0;

  want.forEach((item, index) => {
    items[item] = index;
  });

  for (let i = 0; i < discount.length - 9; i++) {
    const targets = discount.slice(i, i + 10);
    const check = [...number];

    for (const target of targets) {
      if (items[target] !== undefined) {
        check[items[target]] -= 1;
      }
    }

    if (check.every((el) => el <= 0)) {
      days++;
    }
  }

  return days;
}


// * 기존 답변
// function solution(want, number, discount) {
//   let count = 0;
//   for (let i = 0; i < discount.length - 9; i++) {
//     const target = discount.slice(i, i + 10);
//     if (
//       want.every(
//         (item, index) =>
//           number[index] === target.filter((el) => el === item).length
//       )
//     )
//       count++;
//   }

//   return count;
// }