import DSLR from "./9019";

describe("9019. DSLR", () => {
  it("case 1.", () => {
    const input = `3
1234 3412
1000 1
1 16`;

    expect(DSLR(input)).toEqual(`LL
L
DDDD`);
  });
});
