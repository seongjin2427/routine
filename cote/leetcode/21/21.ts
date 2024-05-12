//* 21. Merge Two Sorted Lists
//* ❌ 실패
//* 재귀

//* -100 <= Node.val <= 100

import { ListNode } from "./21.test";

export default function mergeTwoSortedLists2(
  list1: ListNode,
  list2: ListNode
): ListNode | null {
  // 결과 연결 리스트의 '헤더' 역할을 할 더미 노드를 생성.
  // 이 더미 노드는 실제 데이터를 포함하지 않고, 결과 리스트의 시작 부분을 가리키는 용도로 사용.
  const dummy = new ListNode();
  // 'cur' 포인터를 사용하여 결과 리스트를 구성.
  let cur = dummy;

  // list1과 list2 모두 끝에 도달할 때까지 반복.
  while (list1 != null && list2 != null) {
    // list1과 list2의 현재 노드를 비교하여, 더 작은 값의 노드를 결과 리스트에 연결.
    if (list1.val <= list2.val) {
      cur.next = list1; // list1의 값이 더 작거나 같은 경우, list1을 결과 리스트에 연결.
      list1 = list1.next; // list1을 다음 노드로 이동시킨다.
    } else {
      cur.next = list2; // list2의 값이 더 작은 경우, list2를 결과 리스트에 연결한다.
      list2 = list2.next; // list2를 다음 노드로 이동시킨다.
    }
    cur = cur.next; // 'cur' 포인터를 업데이트하여, 새로 연결된 노드로 이동한다.
  }

  // 한 리스트가 먼저 끝에 도달하면, 남은 리스트의 나머지 노드들을 모두 결과 리스트에 연결한다.
  if (list1 != null) {
    cur.next = list1; // list1에 노드가 남아 있으면, 그 노드를 모두 결과 리스트에 추가한다.
  } else if (list2 != null) {
    cur.next = list2; // list2에 노드가 남아 있으면, 그 노드를 모두 결과 리스트에 추가한다.
  }

  return dummy.next; // 'dummy' 노드의 다음 노드 (실제 데이터가 시작되는 노드)를 반환하여,
  // 병합된 연결 리스트를 제공한다.
}

function mergeTwoSortedLists(
  list1: ListNode,
  list2: ListNode
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoSortedLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoSortedLists(list1, list2.next);
    return list2;
  }
}
