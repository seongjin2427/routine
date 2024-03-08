import ordinaryBackpack from "./12865";

describe("12865. 평범한 배낭", () => {
  it("case 1.", () => {
    const input = `4 7
6 13
4 8
3 6
5 12`;

    expect(ordinaryBackpack(input)).toBe(14);
  });
});
