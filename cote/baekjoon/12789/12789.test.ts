import snackGranter from "./12789";

describe("12789. 도키도키 간식드리미", () => {
  it("case 1.", () => {
    const input = `5
5 4 1 3 2`;

    expect(snackGranter(input)).toEqual("Nice");
  });

  it("case 2.", () => {
    const input = `5
5 1 3 4 2`;

    expect(snackGranter(input)).toEqual("Sad");
  });
});
