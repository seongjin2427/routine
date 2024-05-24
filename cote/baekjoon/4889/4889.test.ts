import stableString from "./4889";

describe("4889. 안정적인 문자열", () => {
  it.skip("case 1.", () => {
    const input = `}{
{}{}{}
{{{}
}{}{
{{{{

{{{}}}
}}}}}}
{{}{
{}{}
{{}{}}
{{{{{{}}}}}}
---`;

    expect(stableString(input)).toEqual(`1. 2
2. 0
3. 1
4. 2
5. 2
6. 0
7. 0
8. 3
9. 1
10. 0
11. 0
12. 0`);
  });

  it("case 2.", () => {
    const input = `
}{}{}{
}{{}{{
---`;

    expect(stableString(input)).toEqual(`1. 0
2. 2
3. 3`);
  });
});
