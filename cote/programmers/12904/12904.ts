//* 12904. 가장 긴 팰린드롬
//* ❌ 실패
//* 문자열

//* s <= 2_500

export default function longestPalindrome(s: string) {
  if (s.length < 2) return s.length;

  let maxLength = 1;

  function expandAroundCenter(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // 중심을 벗어났을 때 길이를 계산하고, 최대 길이를 업데이트
    const currentLength = right - left - 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // 현재 위치를 중심으로 홀수 길이 팰린드롬 탐색
    expandAroundCenter(i, i);
    // 현재 위치와 다음 위치가 동일할 경우, 짝수 길이 팰린드롬 탐색
    if (i + 1 < s.length && s[i] === s[i + 1]) {
      expandAroundCenter(i, i + 1);
    }
  }

  return maxLength;
}
