//* 17683. 방금그곡
//* ❌ 실패
//* 정렬, 구현

//* 1 <= m <= 1439
//* musicinfos <= 100

export default function justTheSong(m: string, musicinfos: string[]) {
  m = m.replace(/(C|D|F|G|A)#/g, (_, a) => a.toLowerCase());

  const result = (
    musicinfos.map((music) => {
      let [start, end, title, melody] = music.split(",");
      let h = Number(end.slice(0, 2)) - Number(start.slice(0, 2));
      let m = Number(end.slice(3)) - Number(start.slice(3));
      const time = h * 60 + m;
      melody = melody.replace(/(C|D|F|G|A)#/g, (_, a) => a.toLowerCase());
      return [time, melody.padEnd(time, melody).slice(0, time), title];
    }) as [number, string, string][]
  )
    .filter(([_, melody]) => melody.includes(m))
    .sort(([a], [b]) => b - a);

  return result[0]?.[2] || "(None)";
}

// export default function justTheSong(m: string, musicinfos: string[]) {
//   const numberNotes = convertNotes(m);

//   const infos = (
//     musicinfos.map((music) => {
//       const [start, end, title, codes] = music.split(",");
//       const [startHour, startMinute] = start.split(":").map(Number);
//       const [endHour, endMinute] = end.split(":").map(Number);

//       const checkMinute =
//         (endHour - startHour) * 60 + (endMinute - startMinute);
//       let finalMinute = checkMinute;
//       const codeLength = codes.length;
//       let notes = "";

//       while (finalMinute) {
//         if (codeLength <= finalMinute) {
//           notes += codes.slice(0);
//           finalMinute -= codeLength;
//           continue;
//         }

//         notes += codes.slice(0, finalMinute);
//         finalMinute -= finalMinute;
//       }

//       const convertedNote = convertNotes(notes);
//       return convertedNote.includes(numberNotes)
//         ? [title, checkMinute]
//         : ["", 0];
//     }) as [string, number][]
//   ).sort((a, b) => b[1] - a[1]);

//   return infos[0][0] || "(None)";
// }
