// ❌
// 시간 초과
// GPT의 도움으로 해결

// 분할정복
// 1 <= N <+ 3^7, N^3k

export default function solution(input: string) {
  const [rawN, ...rawPaper] = input.split("\n");
  const N = +rawN;
  const paper = rawPaper.map((row) => row.split(" ").map((v) => +v));
  const count = [0, 0, 0];

  const checkIsSame = ([iy, ix, ey, ex]: number[]) => {
    for (let y = iy; y < ey; y++) {
      for (let x = ix; x < ex; x++) {
        if (paper[y][x] !== paper[iy][ix]) return false;
      }
    }

    return true;
  };

  const divide = (target: number[]) => {
    const [iy, ix, ey, ex] = target;

    if (ey - iy === 1 && ex - ix === 1) {
      return count[paper[iy][ix] + 1]++;
    }

    const initialNumber = paper[iy][ix];

    if (checkIsSame(target)) {
      return count[initialNumber + 1]++;
    }

    const newSize = (ey - iy) / 3;

    for (let i = iy; i < ey; i += newSize) {
      for (let j = ix; j < ex; j += newSize) {
        divide([i, j, i + newSize, j + newSize]);
      }
    }
  };

  divide([0, 0, N, N]);

  return count.join("\n");
}

// * 기존에 해결 못한 코드
function solution2(input: string) {
  const [rawN, ...rawPaper] = input.split("\n");
  const N = +rawN;
  const paper = rawPaper.map((row) => row.split(" ").map((v) => +v));
  const count = [0, 0, 0];

  const checkIsSame = ([iy, ix, ey, ex]: number[]) => {
    for (let y = iy; y < ey; y++) {
      for (let x = ix; x < ex; x++) {
        if (paper[y][x] !== paper[iy][ix]) return false;
      }
    }

    return true;
  };

  const divide = (target: number[]) => {
    const [iy, ix, ey, ex] = target;

    if (ey - iy === 1 && ex - ix === 1) {
      return count[target[0] + 1]++;
      // ! target[0]이 아니라 paper[iy][ix]를 확인해야 했다.
    }

    const initialNumber = paper[iy][ix];

    if (checkIsSame(target)) {
      return count[initialNumber + 1]++;
    }

    // ! 3을 하드 코딩 하는 것이 아니라 (ey - iy) / 3을 변수로 지정해 할당해야 했다.
    for (let i = 0; i < ey; i += 3) {
      for (let j = 0; j < ex; j += 3) {
        divide([i, j, i + 3, j + 3]);
      }
    }
  };

  divide([6, 6, 9, 9]);

  return count;
}

// * GPT가 해결한 코드
function solution3(input: string): string {
  const [rawN, ...rawPaper] = input.split("\n");
  const N = +rawN;
  const paper: number[][] = rawPaper.map((row) => row.split(" ").map(Number));
  const count: number[] = [0, 0, 0];

  const isSame = (iy: number, ix: number, size: number): boolean => {
    const value = paper[iy][ix];
    for (let i = iy; i < iy + size; i++) {
      for (let j = ix; j < ix + size; j++) {
        if (paper[i][j] !== value) {
          return false;
        }
      }
    }
    return true;
  };

  const dividePaper = (iy: number, ix: number, size: number): void => {
    if (isSame(iy, ix, size)) {
      count[paper[iy][ix] + 1]++;
    } else {
      const newSize = size / 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          dividePaper(iy + i * newSize, ix + j * newSize, newSize);
        }
      }
    }
  };

  dividePaper(0, 0, N);

  return count.join("\n");
}
