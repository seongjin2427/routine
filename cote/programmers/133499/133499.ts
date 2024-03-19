//* 133499. 옹알이 (2)
//* ⭕️ 통과
//* 문자열

//* 1 <= babbling.length <= 100
//* 1 <= babbling[i].length <= 30

const arr = ["aya", "ye", "woo", "ma"];

export default function babbling2(babbling: string[]) {
  return babbling.filter((b) => {
    for (let i = 0; i < arr.length; i++) {
      b = b.replaceAll(arr[i], i.toString());
    }

    if (!Number.isInteger(+b)) return;

    for (let i = 0; i < b.length - 1; i++) {
      if (b[i] === b[i + 1]) return;
    }

    return b;
  }).length;
}
