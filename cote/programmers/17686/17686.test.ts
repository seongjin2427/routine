import solution from "./17686";

describe("17686. 파일명 정렬", () => {
  it("case 1.", () => {
    const files = [
      "img12.png",
      "img10.png",
      "img02.png",
      "img1.png",
      "IMG01.GIF",
      "img2.JPG",
    ];
    expect(solution(files)).toEqual([
      "img1.png",
      "IMG01.GIF",
      "img02.png",
      "img2.JPG",
      "img10.png",
      "img12.png",
    ]);
  });
  it("case 2.", () => {
    const files = [
      "F-5 Freedom Fighter",
      "B-50 Superfortress",
      "A-10 Thunderbolt II",
      "F-14 Tomcat",
    ];
    expect(solution(files)).toEqual([
      "A-10 Thunderbolt II",
      "B-50 Superfortress",
      "F-5 Freedom Fighter",
      "F-14 Tomcat",
    ]);
  });
  it("case 3.", () => {
    const files = [
      "F-5 Freedom Fighter",
      "B-50 Superfortress",
      "foo010bar021.zip",
      "foo010",
      "A-10 Thunderbolt II",
      "F-14 Tomcat",
    ];
    expect(solution(files)).toEqual([
      "A-10 Thunderbolt II",
      "B-50 Superfortress",
      "F-5 Freedom Fighter",
      "F-14 Tomcat",
      "foo010bar021.zip",
      "foo010",
    ]);
  });
});
