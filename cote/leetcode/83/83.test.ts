import removeDuplicatesfromSortedList from "./83";

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const makeListNode = (head: number[]) => {
  const listNode = new ListNode(head.shift());
  let temp = listNode;

  while (head.length) {
    temp.next = new ListNode(head.shift());
    temp = temp.next;
  }

  return listNode;
};

const testCases = [
  {
    head: makeListNode([1, 1, 2]),
    result: makeListNode([1, 2]),
  },
  {
    head: makeListNode([1, 1, 2, 3, 3]),
    result: makeListNode([1, 2, 3]),
  },
];

describe("83. Remove Duplicates from Sorted List", () =>
  testCases.forEach(({ head, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(removeDuplicatesfromSortedList(head)).toEqual(result))
  ));
