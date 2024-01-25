// * 10816. 숫자 카드 2
// * ⭕️ 통과
// * 이분 탐색, 해시

// * 1 <= N <= 500_000
// * -10_000_000 <= i <= 10_000_000
// * 1 <= M <= 500_000
// * -10_000_000 <= j <= 10_000_000

export default function solution(input: string) {
  const [rawN, rawCards, rawM, rawNumbers] = input.split("\n");
  const cards = rawCards.split(" ").map((v) => +v);
  const numbers = rawNumbers.split(" ").map((v) => +v);

  const sanguen = {};
  let answer = "";

  cards.forEach(
    (card) => (sanguen[card] = sanguen[card] ? sanguen[card] + 1 : 1)
  );

  numbers.forEach((number) => {
    answer += sanguen[number] ? sanguen[number] + " " : "0 ";
  });

  return answer.trim();
}

// * GPT 코드
function GPTSolution(input: string) {
  const [rawN, rawCards, rawM, rawNumbers] = input.split("\n");
  const cards = rawCards
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const numbers = rawNumbers.split(" ").map(Number);

  const countCards: Map<number, number> = new Map();
  cards.forEach((card) => {
    countCards.set(card, (countCards.get(card) || 0) + 1);
  });

  const answer = numbers.map((number) =>
    binarySearchCount(cards, number, countCards)
  );

  return answer.join(" ");
}

function binarySearchCount(
  cards: number[],
  target: number,
  countCards: Map<number, number>
) {
  let left = 0;
  let right = cards.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (cards[mid] === target) {
      return countCards.get(target);
    } else if (cards[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}
