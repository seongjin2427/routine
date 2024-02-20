//* 1790. 수 이어 쓰기 2
//* ❌
//* 수학, 이분 탐색

//* 1 <= N <= 100_000_000
//* 1 <= k <= 1_000_000_000

//* 1부터 N까지 수를 이어서 썼을 때, k번째 숫자는 무엇인지 반환
//? N이 100_000_000까지라서 단순 반복문은 시간초과 발생

export default function correctSolution(input: string) {
  let [N, k] = input.split(" ").map(Number);
  //* 마지막으로 사용된 숫자
  let lastNum = 0;
  //* 현재 자릿수
  let numLength = 1;
  //* 현자 자릿수의 모든 숫자의 개수
  let numCount = 9;

  //* 남은 자릿수가 [현재 자릿수 * 현재 자릿수의 모든 숫자의 개수] 보다 크다면
  while (k > numLength * numCount) {
    //* 남은 자릿수 업데이트
    k -= numLength * numCount;
    //* 마지막으로 사용된 숫자
    lastNum += numCount;
    //* 현재 자릿수 증가
    numLength += 1;
    //* 현재 자릿수의 모든 숫자의 개수 증가
    numCount = numCount * 10;
  }

  //* (마지막으로 사용된 숫자 + 1) + (다음 자릿수에서 남은 숫자의 개수)
  lastNum = lastNum + 1 + (k - 1) / numLength;

  //* 마지막으로 사용된 숫자가 n보다 크다면
  return lastNum > N
    ? -1
    : //* 나머지를 계산함으로써 마지막으로 사용된 숫자의 몇번째 숫자인지 확인
      Number(String(lastNum)[(k - 1) % numLength]);
}

function subsequentWriteNumber(input: string) {
  const [N, k] = input.split(" ").map(Number);

  const cases = [0, 9, 90, 900, 9_000, 90_000, 900_000, 9_000_000, 90_000_000];
  //* 1~9: 1자리 - 9개
  //* 10~99: 2자리 - 90개
  //* 100~999: 3자리 - 900개
  //* 1_000~9_999: 4자리 - 9000개
  //* 90_000
  //* 900_000
  //* 9_000_000
  //* 90_000_000

  //? k = 23이라면?
  //* k의 자리수 - 1을 배열 인덱스로 해당되는 개수를 찾는다.
  //? k.length === 2, k.length - 1 === 1
  //* k -  cases[k의 자리수 - 1]
  //? 23 - 9 = 23 - 9 = 14
  //* start = cases[k의 자리수] / 9
  //? cases[2] / 9 = 90 / 9 = 10
  //? "10"11121314151"6"

  //? k = 101이라면?
  //* k의 자리수 - 1을 배열 인덱스로 해당되는 개수를 찾는다.
  //? k.length === 3, k.length - 1 === 2
  //* k - cases[k의 자리수 - 1])
  //? 101 - 90 = 11
  //* k - cases[k의 자리수 - 2])
  //? 11 - 9 = 2
  //* start = cases[k의 자리수] / 9
  //? 900 / 9 = 100
  //* 1"0"0

  const kLength = String(k).length;
  const initial = cases.slice(0, kLength).reduce((acc, cur) => {
    return acc - cur;
  }, k);

  const start = cases[kLength] / 9;

  console.log(start + Math.trunc(initial / kLength));

  let str = "";
  for (let i = start; i <= start + Math.trunc(initial / kLength); i++) {
    str += i;
  }

  console.log(str, initial, start);

  return Number(str[initial - 1]);
}
