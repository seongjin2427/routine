import heonaegiNeedFriends from "./21736";

const testCases = [
  {
    input: `3 5
OOOPO
OIOOX
OOOXP`,
    result: 1,
  },
  {
    input: `3 3
IOX
OXP
XPP`,
    result: "TT",
  },
];

describe("21736. 헌내기는 친구가 필요해", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(heonaegiNeedFriends(input)).toEqual(result))
  ));
