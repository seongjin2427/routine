import justTheSong from "./17683";

describe("17683. 방금그곡", () => {
  it("case 1.", () => {
    const m = "ABCDEFG";
    const musicinfos = [
      "12:00,12:14,HELLO,CDEFGAB",
      "13:00,13:05,WORLD,ABCDEF",
    ];
    expect(justTheSong(m, musicinfos)).toEqual("HELLO");
  });
  it("case 2.", () => {
    const m = "CC#BCC#BCC#BCC#B";
    const musicinfos = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"];
    expect(justTheSong(m, musicinfos)).toEqual("FOO");
  });
  it("case 3.", () => {
    const m = "ABC";
    const musicinfos = [
      "12:00,12:14,HELLO,C#DEFGAB",
      "13:00,13:05,WORLD,ABCDEF",
    ];
    expect(justTheSong(m, musicinfos)).toEqual("WORLD");
  });
});
