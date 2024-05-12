//* 21736. 헌내기는 친구가 필요해
//*
//* 완전탐색

//* 1 <= N <= 600
//* 1 <= M <= 600

class Node {
  val: number[];
  next: Node | null;

  constructor(val: number[]) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val: number[]) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    }

    let temp = this.tail;
    if (!this.tail) {
      this.tail = newNode;
    } else {
      this.tail = newNode;
      temp.next = newNode;
    }

    this.length++;
  }
  dequeue() {
    if (!this.head) return null;

    let temp = this.head;
    this.head = this.head.next;

    this.length--;
    return temp;
  }
}

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const OBJECT = {
  EMPTY: "O",
  WALL: "X",
  DOYEON: "I",
  PERSON: "P",
};

export default function heonaegiNeedsFriends(input: string) {
  const [rawNM, ...rawCampus] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const campus = rawCampus;

  let answer = 0;
  const doyeon: number[] = [];
  const visited = Array.from({ length: N }, () => Array.from({ length: M }));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (campus[i][j] === OBJECT.DOYEON) {
        doyeon.push(i, j);
      }
    }
  }

  const bfs = () => {
    const queue = new Queue();
    queue.enqueue(doyeon);

    while (queue.length) {
      const [y, x] = queue.dequeue().val;

      if (!visited[y][x]) {
        visited[y][x] = true;
        if (campus[y][x] === OBJECT.PERSON) {
          answer++;
        }

        for (const [dy, dx] of directions) {
          const [my, mx] = [y + dy, x + dx];

          if (
            0 <= my &&
            0 <= mx &&
            my < N &&
            mx < M &&
            !visited[my][mx] &&
            campus[my][mx] !== OBJECT.WALL
          ) {
            queue.enqueue([my, mx]);
          }
        }
      }
    }
  };

  bfs();

  return answer === 0 ? "TT" : answer;
}
