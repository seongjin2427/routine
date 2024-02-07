import solution from "./118667";

describe("118667. 두 큐 합 같게 만들기", () => {
  it("case 1.", () => {
    const queue1 = [3, 2, 7, 2];
    const queue2 = [4, 6, 5, 1];

    expect(solution(queue1, queue2)).toEqual(2);
  });
  it("case 2.", () => {
    const queue1 = [1, 2, 1, 2];
    const queue2 = [1, 10, 1, 2];

    expect(solution(queue1, queue2)).toEqual(7);
  });
  it("case 3.", () => {
    const queue1 = [1, 1];
    const queue2 = [1, 5];

    expect(solution(queue1, queue2)).toEqual(-1);
  });
});
