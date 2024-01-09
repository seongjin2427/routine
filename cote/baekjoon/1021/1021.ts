// * 1021. 회전하는 큐
// * ❌ 실패
// * 덱

// * N, M <= 50
// * 1 <= N[i] <= N

class Deque {
  arr: number[];
  length: number;

  constructor(length: number) {
    this.arr = Array.from({ length }, (_, i) => i + 1);
    this.length = this.arr.length;
  }

  front() {
    return this.arr[0];
  }
  back() {
    return this.arr.at(-1);
  }
  popLeft() {
    this.length--;
    return this.arr.shift();
  }
  rotate(idx: number) {
    if (idx > 0) {
      while (idx--) this.arr.unshift(this.arr.pop());
    } else {
      while (idx++) this.arr.push(this.arr.shift());
    }
  }
  indexOf(index: number) {
    return this.arr.findIndex((target) => target === index);
  }
}

export default function solution(input: string) {
  const [rawNM, rawNumbers] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const numbers = rawNumbers.split(" ").map((v) => +v);

  let answer = 0;
  const deque = new Deque(N);

  numbers.forEach((number) => {
    const idx = deque.indexOf(number);

    if (idx === 0) deque.popLeft();
    else {
      if (idx <= Math.floor(deque.length / 2)) {
        deque.rotate(-idx);
        deque.popLeft();
        answer += idx;
      } else {
        deque.rotate(deque.length - idx);
        answer += deque.length - idx;
        deque.popLeft();
      }
    }
  });

  return answer;
}
