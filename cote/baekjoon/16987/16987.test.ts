import eggHitsEgg from "./16987";

describe("16987. 계란으로 계란치기", () => {
  it("case 1.", () => {
    const input = `3
8 5
1 100
3 5`;
    expect(eggHitsEgg(input)).toEqual(3);
  });
  it("case 2.", () => {
    const input = `3
1 100
8 5
3 5`;
    expect(eggHitsEgg(input)).toEqual(2);
  });
  it("case 3.", () => {
    const input = `1
123 45`;
    expect(eggHitsEgg(input)).toEqual(0);
  });
  it("case 4.", () => {
    const input = `8
222 117
176 92
287 6
284 81
221 96
263 96
188 40
225 1`;
    expect(eggHitsEgg(input)).toEqual(4);
  });
  it("case 5.", () => {
    const input = `6
65 281
272 145
233 175
229 12
99 88
142 159`;
    expect(eggHitsEgg(input)).toEqual(6);
  });
  it("case 6.", () => {
    const input = `8
161 36
248 93
233 13
241 122
285 91
260 25
221 14
233 42`;
    expect(eggHitsEgg(input)).toEqual(3);
  });
  it("case 7.", () => {
    const input = `3
213 295
153 24
15 233`;
    expect(eggHitsEgg(input)).toEqual(3);
  });
  it("case 2.", () => {
    const input = `8
44 11
116 73
121 54
49 232
69 136
159 242
109 172
28 31`;
    expect(eggHitsEgg(input)).toEqual(8);
  });
  it("case 9.", () => {
    const input = `6
100 1
100 1
100 1
100 1
100 1
100 1`;
    expect(eggHitsEgg(input)).toEqual(0);
  });
});
