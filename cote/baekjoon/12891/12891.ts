//* 12891. DNA 비밀번호
//* ⭕️ 통과
//* 슬라이딩 윈도우

//* 1 <= |P| <= |S| <= 1_000_000

export default function DNAPassword(input: string) {
  const [rawSP, dna, rawConditions] = input.split("\n");
  const [S, P] = rawSP.split(" ").map((v) => +v);
  const [A, C, G, T] = rawConditions.split(" ").map((v) => +v);

  let answer = 0;
  const nums = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };
  for (let i = 0; i < P; i++) {
    nums[dna[i]]++;
  }

  for (let i = 0; i <= S - P; i++) {
    if (i !== 0) {
      nums[dna[i - 1]]--;
      nums[dna[i + P - 1]]++;
    }

    if (nums["A"] >= A && nums["C"] >= C && nums["G"] >= G && nums["T"] >= T)
      answer++;
  }

  return answer;
}
