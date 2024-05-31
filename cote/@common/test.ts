type WithoutAnswer<T> = Omit<T, "answer">;
type Params<T> = WithoutAnswer<T>[keyof WithoutAnswer<T>][];

const makeTest = <T extends Record<string, any>>(
  description: string,
  testCases: T[],
  solution: (...params: Params<T>) => any
) =>
  describe(description, () =>
    testCases.forEach((testCase, index) =>
      it(`case ${index + 1}.`, () => {
        const { answer, ...params } = testCase;
        expect(solution(...(Object.values(params) as Params<T>))).toEqual(
          answer
        );
      })
    )
  );

export { makeTest };
