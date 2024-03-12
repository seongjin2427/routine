import bestAlbum from "./42579";

describe("42579. 베스트앨범", () => {
  it("case 1.", () => {
    const genres = ["classic", "pop", "classic", "classic", "pop"];
    const plays = [500, 600, 150, 800, 2500];

    expect(bestAlbum(genres, plays)).toEqual([4, 1, 3, 0]);
  });
});
