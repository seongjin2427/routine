import solution from "./17413";

describe("17413. 단어 뒤집기 2", () => {
  it("case 1.", () => {
    const input = "baekjoon online judge";
    expect(solution(input)).toEqual("noojkeab enilno egduj");
  });
  it("case 2.", () => {
    const input = "<open>tag<close>";
    expect(solution(input)).toEqual("<open>gat<close>");
  });
  it("case 3.", () => {
    const input = "<ab cd>ef gh<ij kl>";
    expect(solution(input)).toEqual("<ab cd>fe hg<ij kl>");
  });
  it("case 4.", () => {
    const input = "one1 two2 three3 4fourr 5five 6six";
    expect(solution(input)).toEqual("1eno 2owt 3eerht rruof4 evif5 xis6");
  });
  it("case 5.", () => {
    const input = "<int><max>2147483647<long long><max>9223372036854775807";
    expect(solution(input)).toEqual(
      "<int><max>7463847412<long long><max>7085774586302733229"
    );
  });
  it("case 6.", () => {
    const input = "<problem>17413<is hardest>problem ever<end>";
    expect(solution(input)).toEqual(
      "<problem>31471<is hardest>melborp reve<end>"
    );
  });
  it("case 7.", () => {
    const input = "<   space   >space space space<    spa   c e>";
    expect(solution(input)).toEqual(
      "<   space   >ecaps ecaps ecaps<    spa   c e>"
    );
  });
});
