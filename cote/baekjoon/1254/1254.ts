//* 1254. 팰린드롬 만들기
//* ❌ 실패
//* 브루트포스

//* S <= 50

export default function makePalindrome(input: string) {
  let reverseInput = input.split("").reverse().join("");

  if (reverseInput == input) {
    return reverseInput.length;
  }

  for (let i = 1; i < input.length; i++) {
    let arr = input.split("").slice(i).join("");
    const reverseArray = input.split("").slice(i).reverse().join("");

    if (arr === reverseArray) {
      return input.length + i;
    }
  }
}
