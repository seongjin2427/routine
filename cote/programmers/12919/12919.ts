//* 12919. 서울에서 김서방 찾기
//* ⭕️ 통과
//* 문자열

//* 1 <= seoul.length <= 1_000
//* 1 <= seoul[i].length <= 20

export default function findKim(seoul: string[]) {
  return `김서방은 ${seoul.findIndex((s) => s === "Kim")}에 있다`;
}
