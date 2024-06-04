//* 11000. 강의실 배정
//* ❌ 실패
//* 그리디, 최소 힙

//* 1 <= N <= 200_000

class minHeap {
  heap: number[];

  constructor() {
    this.heap = [];
    this.heap.push(-Infinity);
  }
  insert(val) {
    this.heap.push(val);
    this.upheap(this.heap.length - 1);
  }
  upheap(pos: number) {
    let tmp = this.heap[pos];
    while (tmp < this.heap[Math.floor(pos / 2)]) {
      this.heap[pos] = this.heap[Math.floor(pos / 2)];
      pos = Math.floor(pos / 2);
    }
    this.heap[pos] = tmp;
  }
  get() {
    if (this.heap.length === 2) return this.heap.pop();
    let res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return res;
  }
  downheap(pos: number, len: number) {
    let tmp = this.heap[pos],
      child;
    while (pos <= Math.floor(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child] > this.heap[child + 1]) child++;
      if (tmp <= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = tmp;
  }
  size() {
    return this.heap.length - 1;
  }
  front() {
    return this.heap[1];
  }
}

export default function assignClassroom2(input: string) {
  const [rawN, ...rawTimes] = input.split("\n");
  const N = +rawN;
  const lecture = rawTimes.map((room) => room.split(" ").map((v) => +v));

  const mh = new minHeap();

  mh.insert(lecture[0][1]);

  for (let i = 1; i < N; i++) {
    const [start, finish] = lecture[i];

    const finishTime = mh.get();

    if (finishTime > start) {
      mh.insert(finishTime);
    }
    mh.insert(finish);
  }

  return mh.size();
}

function assignClassroom1(input: string) {
  const [rawN, ...rawTimes] = input.split("\n");
  const N = +rawN;
  const times = rawTimes.map((room) => room.split(" ").map((v) => +v));

  let answer = 0;
  let classroom = 0;
  const arr = [];

  for (let i = 0; i < N; i++) {
    arr.push({ time: times[i][0], start: 1 });
    arr.push({ time: times[i][1], start: -1 });
  }

  arr.sort((a, b) => (a.time === b.time ? a.start - b.start : a.time - b.time));

  arr.forEach((schedule) => {
    if (schedule.start === -1) {
      classroom--;
    } else if (schedule.start === 1) {
      classroom++;
    }

    answer = classroom > answer ? classroom : answer;
  });

  return answer;
}
