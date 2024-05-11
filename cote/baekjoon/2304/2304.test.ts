import polygonWarehouse from "./2304";

describe("2304. 창고 다각형", () => {
  it("case 1.", () => {
    const input = `7
2 4
11 4
15 8
4 6
5 3
8 10
13 6`;

    expect(polygonWarehouse(input)).toEqual(98);
  });
});
