//* 15312. 이름 궁합
//* ❌ 실패
//* 구현

//* 2 <= A.length, B.length <= 2_000
//* A.length === B.length

const strokes = [
  3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1,
];

export default function nameHarmony(input: string) {
  const [nameA, nameB] = input.split("\n");

  let combined = "";
  const len = nameA.length;

  for (let i = 0; i < len; i++) {
    combined += nameA[i] + nameB[i];
  }

  let strokeArray = combined
    .split("")
    .map((char) => strokes[char.charCodeAt(0) - 65]);

  while (strokeArray.length > 2) {
    let tempArray = [];
    for (let i = 0; i < strokeArray.length - 1; i++) {
      tempArray.push((strokeArray[i] + strokeArray[i + 1]) % 10);
    }
    strokeArray = tempArray;
  }

  return +strokeArray.join("");
}
