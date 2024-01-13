import solution from "./42578";

describe("42578. 의상", () => {
  it("case 1.", () => {
    const clothes = [
      ["yellow_hat", "headgear"],
      ["blue_sunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ];
    expect(solution(clothes)).toEqual(5);
  });
  it("case 2.", () => {
    const clothes = [
      ["crow_mask", "face"],
      ["blue_sunglasses", "face"],
      ["smoky_makeup", "face"],
    ];
    expect(solution(clothes)).toEqual(3);
  });
});
