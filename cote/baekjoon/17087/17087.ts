//* 17087. 숨바꼭질 6
//* ❌ 실패
//* 수학

//* 1 <= N <= 100_000
//* 1 <= S <= 1_000_000_000
//* 1 <= A[i] <= 1_000_000

export default function hideAndSeek6(input: string) {
  const [rawNS, rawBrothers] = input.split("\n");
  const [N, S] = rawNS.split(" ").map((v) => +v);
  const brothers = rawBrothers.split(" ").map((v) => Math.abs(S - +v));

  if (N == 1) {
    return brothers[0];
  } else {
    let gcd = GCD(brothers[0], brothers[1]);
    for (let i = 1; i < brothers.length; i++) {
      gcd = GCD(gcd, brothers[i]);
    }

    return gcd;
  }

  function GCD(a: number, b: number) {
    if (b == 0) return a;
    return a > b ? GCD(b, a % b) : GCD(a, b % a);
  }
}
