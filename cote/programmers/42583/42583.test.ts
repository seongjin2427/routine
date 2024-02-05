import solution from "./42583";

describe("42583. 다리를 지나는 트럭", () => {
  it("case 1.", () => {
    const bridge_length = 2;
    const weight = 10;
    const truck_weights = [7, 4, 5, 6];

    expect(solution(bridge_length, weight, truck_weights)).toEqual(8);
  });
  it("case 2.", () => {
    const bridge_length = 100;
    const weight = 100;
    const truck_weights = [10];

    expect(solution(bridge_length, weight, truck_weights)).toEqual(101);
  });
  it("case 3.", () => {
    const bridge_length = 100;
    const weight = 100;
    const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

    expect(solution(bridge_length, weight, truck_weights)).toEqual(110);
  });
});
