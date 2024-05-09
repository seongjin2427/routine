//* 1105. 팔
//* ❌ 실패
//* 수학, 그리디

//* L <= R <= 2_000_000_000

export default function eight(input: string) {
  const [L, R] = input.split(" ");

  let answer = 0;

  // 자리 수가 다른 경우 답은 0이다.
  if (L.length === R.length) {
    let i = 0;
    while (i < L.length && L.charAt(i) === R.charAt(i)) {
      if (L.charAt(i) === "8") {
        answer++;
      }
      i++;
    }
  }

  return answer;
}
