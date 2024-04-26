import recommendCandidate from "./1713";

describe("1713. 후보자 추천하기", () => {
  it("case 1.", () => {
    const input = `3
9
2 1 4 3 5 6 2 7 2`;

    expect(recommendCandidate(input)).toEqual("2 6 7");
  });
  it("case 2.", () => {
    const input = `3
9
1 3 1 1 1 1 3 2 4 2`;

    expect(recommendCandidate(input)).toEqual("1 2 3");
  });
});
