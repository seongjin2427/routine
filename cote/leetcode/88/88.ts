//* 88. Merge Sorted Array
//* ⭕️ 통과
//* 구현

//* nums.length === m + n
//* num2.length === n
//* 0 <= m, n <= 200
//* 1 <= m + n <= 200
//* -1_000_000_000 <= nums1[i] , nums2[j] <= 1_000_000_000

export default function mergeSortedArray(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  const arr = [...nums1.slice(0, m), ...nums2.slice(0, n)].sort(
    (a, b) => a - b
  );
  for (let i = 0; i < arr.length; i++) {
    nums1[i] = arr[i];
  }
}
