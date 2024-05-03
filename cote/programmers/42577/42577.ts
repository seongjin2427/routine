// * 42577. 전화번호 목록
// * ❌ 실패
// * 해시, 정렬

// * 1 <= phone_book <= 1_000_000
// * 1 <= phone_book[i] <= 20
// * 중복 X

export default function solution(phone_book: string[]) {
  return !phone_book
    .sort()
    .some(
      (_, index) =>
        index !== Number(phone_book.length - 1) &&
        phone_book[index + 1].startsWith(phone_book[index])
    );
}
