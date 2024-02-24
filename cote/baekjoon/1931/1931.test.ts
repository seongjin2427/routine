import assignConferenceRoom from "./1931";

describe("1931. 회의실 배정", () => {
  it("case 1.", () => {
    const input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`;

    expect(assignConferenceRoom(input)).toEqual(4);
  });
});
