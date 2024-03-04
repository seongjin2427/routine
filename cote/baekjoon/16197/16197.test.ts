import twoCoins from "./16197";

describe("16197. 두 동전", () => {
  it("case 1.", () => {
    const input = `1 2
oo`;

    expect(twoCoins(input)).toEqual(1);
  });
  it("case 2.", () => {
    const input = `6 2
.#
.#
.#
o#
o#
##`;

    expect(twoCoins(input)).toEqual(4);
  });
  it("case 3.", () => {
    const input = `6 2
..
..
..
o#
o#
##`;

    expect(twoCoins(input)).toEqual(3);
  });
  it("case 4.", () => {
    const input = `5 3
###
.o.
###
.o.
###`;

    expect(twoCoins(input)).toEqual(-1);
  });
  it("case 5.", () => {
    const input = `5 3
###
.o.
#.#
.o.
###`;

    expect(twoCoins(input)).toEqual(3);
  });
});
