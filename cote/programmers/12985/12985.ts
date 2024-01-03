export default function solution(N: number, a: number, b: number) {
  let answer = 0;
  
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
