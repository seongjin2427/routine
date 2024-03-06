import networks from "./43162";

describe("43162. 네트워크", () => {
  it("case 1.", () => {
    const n = 3;
    const computers = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ];

    expect(networks(n, computers)).toEqual(2);
  });
  it("case e.", () => {
    const n = 3;
    const computers = [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ];

    expect(networks(n, computers)).toEqual(1);
  });
});
