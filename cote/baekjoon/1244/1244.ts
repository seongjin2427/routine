// ! 시간초과
// ❌
// * 구현, 시뮬레이션

// 1 <= N, M <= 100
// switch on = 1, switch off = 0
// man = 1, woman = 2

export default function solution(input: string) {
  const [N, rawSwitches, M, ...cases] = input.split("\n");

  const switches = rawSwitches.split(" ").map((v) => +v);
  const numbers = cases.map((v) => v.split(" ").map((v) => +v));

  for (const [gender, number] of numbers) {
    if (gender === 1) {
      // 남학생 조작 로직
      for (let i = number - 1; i < +N; i += number) {
        switches[i] = switches[i] ? 0 : 1;
      }
    } else {
      // 여학생 조작 로직
      let left = number - 1;
      let right = number - 1;

      // 대칭 구간 찾기
      while (left > 0 && right < +N - 1) {
        if (switches[left - 1] !== switches[right + 1]) {
          break;
        }
        left--;
        right++;
      }

      // 대칭 구간 내 스위치 상태 변경
      for (let k = left; k <= right; k++) {
        switches[k] = switches[k] ? 0 : 1;
      }
    }
  }

  // ! fail
  // for (const [gender, number] of numbers) {
  //   if (gender === 1) {
  //     for (let i = number - 1; i < +N; i += number) {
  //       switches[i] = switches[i] ? 0 : 1;
  //     }
  //     continue;
  //   }

  //   if (number === 1 || number === +M) {
  //     switches[number] = switches[number] ? 0 : 1;
  //     continue;
  //   }

  //   let isSymmetry = true;
  //   let left, right;

  //   for (let j = 1; j < +N / 2 - 1; j++) {
  //     left = number - j;
  //     right = number + j;

  //     if (switches[left - 1] !== switches[right - 1]) {
  //       isSymmetry = false;
  //     }
  //   }

  //   if (isSymmetry) {
  //     for (let k = left - 1; k < right; k++) {
  //       switches[k] = switches[k] ? 0 : 1;
  //     }
  //     continue;
  //   }

  //   switches[number] = switches[number] ? 0 : 1;
  // }

  return switches.join(" ");
}
