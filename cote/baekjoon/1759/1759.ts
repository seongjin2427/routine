//* 1759. 암호 만들기
//* ❌ 실패
//* 브루트포스, 백트래킹

//* 3 <= L <= C <= 15

//* 증가하는 순서 배열
//* 최소 한개의 모음, 최소 두 개의 자음
//* abc -> O , bac -> X

const vowels = ["a", "e", "i", "o", "u"];

export default function makePassword(input: string) {
  const [rawLC, rawChars] = input.split("\n");
  const [L, C] = rawLC.split(" ").map((v) => +v);
  const chars = rawChars.split(" ").sort();

  //todo 모음과 자음을 분리해서 1개, 2개 포함되도록 탐색?
  //? 모음 1개 이상, 자음 2개 이상 반드시 포함되어야 하므로, 분리해서 확인하는게 나을듯?

  const answer = [];

  function backtracking(currentPassword: string, startIndex: number) {
    if (currentPassword.length === L) {
      const vowelCount = currentPassword
        .split("")
        .filter((char) => vowels.includes(char)).length;
      const consonantCount = L - vowelCount;

      if (vowelCount >= 1 && consonantCount >= 2) {
        answer.push(currentPassword);
      }
      return;
    }

    for (let i = startIndex; i < C; i++) {
      backtracking(currentPassword + chars[i], i + 1);
    }
  }

  backtracking("", 0);

  return answer.join("\n");
}
