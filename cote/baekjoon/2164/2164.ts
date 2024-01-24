// * 2164. 카드2
// * ❌ 실패
// * 큐

// * 1 <= N <= 500_000

class Node {
  value: number;
  next: Node;
  prev: Node;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  head: Node;
  tail: Node;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }

  add(n: number) {
    const newNode = new Node(n);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.size++;

    return newNode;
  }

  getSize() {
    return this.size;
  }
}

export default function solution(input: string) {
  const cards = new LinkedList();

  for (let i = 1; i <= +input; i++) {
    cards.add(i);
  }

  while (cards.getSize() > 1) {
    cards.removeHead();
    cards.add(cards.getHead());
    cards.removeHead();
  }
  return cards.getHead();
}
