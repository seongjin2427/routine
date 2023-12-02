// +, -만 존재하는 식을 사용해 괄호를 쳤을 때, 최소가 되는 값을 반환하기
// ! 시간 초과 
// ❌
// 참고 블로그: https://velog.io/@hyejin_nk/%EB%B0%B1%EC%A4%80

export default function solution(input: string) {
  let answer = input.split("-").reduce((total, item, idx) => {
    //split : 각각 배열은 문자열로 되어있으며, + 연산자가 있는 것도 있다.
    //map : + 기준으로 나눠 배열로 만들고 숫자로 만든다.
    //reduce : 값을 누적하여 합해준다 > 합한 값이 나오도록 한다.
    //2번 sum= [30, 70, 50]
    let sum = item
      .split("+")
      .map((a) => +a)
      .reduce((total, cur) => total + cur);

    return idx === 0 ? total + sum : total - sum;
  }, 0);
  return answer;
}
