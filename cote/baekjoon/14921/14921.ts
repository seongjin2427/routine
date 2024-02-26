//* 14921. 용액 합성하기
//* ⭕️ 통과
//* 투 포인터, 정렬

//* 2 <= N <= 100_000
//* -100_000_000 <= A[i] <= 100_000_000

export default function compoundSolution(input: string) {
  const [rawN, rawSolutions] = input.split("\n");
  const N = Number(rawN);
  const solutions = rawSolutions.split(" ").map(Number);

  solutions.sort((a, b) => Math.abs(a) - Math.abs(b));

  const candidates = [];

  for (let i = 0; i < N - 1; i++) {
    const s1 = solutions[i];
    const s2 = solutions[i + 1];

    const compounded = Math.abs(s1 + s2);
    candidates.push([compounded, s1, s2]);
  }

  const [minSolution] = candidates.sort(
    ([aCompounded], [bCompounded]) => aCompounded - bCompounded
  );
  return minSolution[1] + minSolution[2];
}
