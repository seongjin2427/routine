import solution from "./9375";

describe("9375. 패션왕 신해빈", () => {
  it("case 1.", () => {
    const input = `2
3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face`;

    expect(solution(input)).toEqual(`5
3`);
  });
});
