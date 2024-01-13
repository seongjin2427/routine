// * 42578. 의상
// *
// * 해시

// * 1 <= clothes.length <= 30
// * 중복 X, 1 <= clothes[i].length <= 20

export default function solution(clothes: string[][]) {
  let answer = 1;
  const obj = {};

  clothes.forEach((v) => (obj[v[1]] = (obj[v[1]] || 0) + 1));
  for (let v in obj) answer *= obj[v] + 1;

  return answer - 1;
}
