import overtake from "./2002";

const testCases = [
  {
    input: `4
ZG431SN
ZG5080K
ST123D
ZG206A
ZG206A
ZG431SN
ZG5080K
ST123D`,
    result: 1,
  },
  {
    input: `5
ZG508OK
PU305A
RI604B
ZG206A
ZG232ZF
PU305A
ZG232ZF
ZG206A
ZG508OK
RI604B`,
    result: 3,
  },
  {
    input: `5
ZG206A
PU234Q
OS945CK
ZG431SN
ZG5962J
ZG5962J
OS945CK
ZG206A
PU234Q
ZG431SN`,
    result: 2,
  },
];

describe("2002. 추월", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(overtake(input)).toEqual(result))
  ));
