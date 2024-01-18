// * 42577. 전화번호 목록
// * ❌ 실패
// * 해시

// * 1 <= phone_book <= 1_000_000
// * 1 <= phone_book[i] <= 20
// * 중복 X

export default function solution(phone_book: string[]) {
  phone_book.sort((prev, cur) => prev.localeCompare(cur));

  for (let i = 1; i < phone_book.length; i++) {
    const prevNumber = phone_book[i - 1];
    const curNumber = phone_book[i];
    if (curNumber.startsWith(prevNumber)) return false;
  }

  return true;
}
