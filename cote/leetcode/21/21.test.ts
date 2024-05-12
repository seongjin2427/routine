import mergeTwoSortedLists from "./21";

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const makeListNodeArr = (list: number[]) => {
  if (list.length === 0) return new ListNode();
  const node = new ListNode(list[0]);

  let temp = node;
  for (let i = 1; i < list.length; i++) {
    temp.next = new ListNode(list[i]);
    temp = temp.next;
  }

  return node;
};

const testCases = [
  {
    list1: makeListNodeArr([1, 2, 4]),
    list2: makeListNodeArr([1, 3, 4]),
    result: makeListNodeArr([1, 1, 2, 3, 4, 4]),
  },
  {
    list1: makeListNodeArr([]),
    list2: makeListNodeArr([]),
    result: makeListNodeArr([]),
  },
  {
    list1: makeListNodeArr([]),
    list2: makeListNodeArr([0]),
    result: makeListNodeArr([0]),
  },
];

describe("21. Merge Two Sorted Lists", () =>
  testCases.forEach(({ list1, list2, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(mergeTwoSortedLists(list1, list2)).toEqual(result))
  ));
