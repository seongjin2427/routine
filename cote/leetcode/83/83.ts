//* 83. Remove Duplicates from Sorted List
//* ⭕️ 통과
//* 구현

//* -100 <= Node.val <= 100

import { ListNode } from "./83.test";

export default function removeDuplicatesfromSortedList(
  head: ListNode
): ListNode {
  let temp: ListNode | null = head;

  while (temp) {
    if (temp.val === temp.next?.val) {
      temp.next = temp.next.next;
      continue;
    }

    temp = temp.next;
  }

  return head;
}
