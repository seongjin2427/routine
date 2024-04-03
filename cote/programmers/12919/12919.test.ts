import findKim from "./12919";

describe("12919. 서울에서 김서방 찾기", () => {
  it("case 1.", () => {
    const seoul = ["Jane", "Kim"];

    expect(findKim(seoul)).toEqual("김서방은 1에 있다");
  });
});
