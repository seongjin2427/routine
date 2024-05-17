import rectangular from "./2527";

describe("2527. 직사각형", () => {
  it("case 1.", () => {
    const input = `3 10 50 60 100 100 200 300
45 50 600 600 400 450 500 543
11 120 120 230 50 40 60 440
35 56 67 90 67 80 500 600`;

    expect(rectangular(input)).toEqual(`d
a
a
b`);
  });
});
