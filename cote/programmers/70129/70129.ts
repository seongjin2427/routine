export default function solution(s: string) {
  const answer = [0, 0];
  const regexp = /0/g;

  while (s !== "1") {
    answer[0] += 1;
    answer[1] += s.match(regexp)?.length || 0;
    s = s.replace(regexp, "").length.toString(2);
  }

  return answer;
}
