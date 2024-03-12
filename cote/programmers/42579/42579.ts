//* 42579. 베스트앨범
//* ⭕️ 통과
//* 해시

//* 1 <= genres.length = plays.length <= 10_000

type SongType = { genre: string; play: number; index: number }[];

export default function bestAlbum(genres: string[], plays: number[]) {
  const best: number[] = [];
  const songs: SongType = [];
  const sortedSongs: SongType[] = [];
  const uniqueGenres = new Set(genres);

  genres.forEach((genre, index) => {
    songs.push({ genre, play: plays[index], index });
  });

  [...uniqueGenres].forEach((genre) => {
    const filteredSongs = songs.filter((song) => song.genre === genre);
    sortedSongs.push(
      filteredSongs.sort(
        (prevSong, nextSong) =>
          nextSong.play - prevSong.play || prevSong.index - nextSong.index
      )
    );
  });

  const sum = (arr: { play: number }[]) =>
    arr.reduce((acc, cur) => acc + cur.play, 0);
  sortedSongs.sort((prevGenre, nextGenre) => sum(nextGenre) - sum(prevGenre));

  sortedSongs.forEach((genreArr: { index: number }[]) => {
    best.push(...genreArr.slice(0, 2).map((song) => song.index));
  });

  return best;
}
