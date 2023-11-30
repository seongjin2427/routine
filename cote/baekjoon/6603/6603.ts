export default function solution(input: string) {
  // 줄바꿈 기준으로 테스트 케이스가 주어진다.
  const lottos = input.split("\n");
  // 마지막 입력 값 0 제거
  lottos.pop();

  let answer = "";

  lottos.forEach((lotto) => {
    const [N, ...S] = lotto.split(" ").map(Number);

    const pickNumbers = (start: number, pick: number[]) => {
      if (pick.length === 6) {
        answer += `${pick.join(" ")}\n`;
        return;
      }
      for (let i = start; i < N; i++) {
        pickNumbers(i + 1, [...pick, S[i]]);
      }
    };

    pickNumbers(0, []);
    answer += "\n";
  });

  return answer.trim();
}
