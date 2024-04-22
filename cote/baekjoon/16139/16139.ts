//* 16139. 인간-컴퓨터 상호작용
//* ❌ 실패
//* 누적합

//* S <= 200_000
//* 1 <= q <= 200_000

export default function interactWithHumanAndComputer(input: string) {
  //? 문자열에서 특정 알파벳이 몇 번 나타나는지 알아보기
  //* 문자열 S, 알파벳 a, 문자열 구간[l, r]
  //* 문자열의 l부터 r문자 사이에 a가 몇 번 나타나는지 구하기
  //* 같은 문자열 S를 두고 여러번 질문 q를 실시함

  //! 문자열의 최대 길이가 200_000이기 때문에 중첩 반복문은 어려울 듯?
  const inputs = input.split("\n");
  const S = inputs[0];
  const q = Number(inputs[1]);
  const questions = inputs
    .slice(2)
    .map((question) => question.split(" "))
    .map(([s, l, r]) => [s, Number(l), Number(r)]) as [
    string,
    number,
    number
  ][];

  const obj = {};
  let answer = "";

  for (const [a, l, r] of questions) {
    if (!obj[a]) {
      const arr = [];

      for (let i = 0; i < S.length; i++) {
        let temp = i === 0 ? 0 : arr[i - 1];
        if (S[i] === a) temp++;
        arr.push(temp);
      }

      obj[a] = arr;
    }

    if (l === 0) {
      answer += `${obj[a][r]}\n`;
    } else {
      answer += `${obj[a][r] - obj[a][l - 1]}\n`;
    }

    console.log(obj);
  }

  return answer.trim();
}
