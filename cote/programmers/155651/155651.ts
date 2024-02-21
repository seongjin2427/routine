//* 155651. 호텔 대실
//* ❌ 실패
//* 정렬

//* 1 <= book_time.length <= 1_000

export default function reserveHotel(book_time: string[][]) {
  // 시작 시간 순으로 정렬해줍니다.
  book_time.sort();

  // 종료 시간이 들어갈 배열
  const room = [];

  // forEach를 통해 하나씩 확인해줍니다.
  book_time.forEach((t) => {
    // split() 메서드를 이용해 시간을 분리해준다.
    const tmp = t[0].split(":");

    // 문자열 시간을 숫자로 변환한다.
    const startTime = Number(tmp[0]) * 60 + Number(tmp[1]);

    // times 배열에서 시작 시간과 같거나 시작 시간보다 작은 수를 찾는다.
    const idx = room.findIndex((e) => e <= startTime);

    // 만약 없다면 room을 추가하고 새로운 종료시간을 넣어준다.
    if (idx === -1) room.push(getNextTime(t[1]));
    // 만약 있다면 기존 room의 종료시간을 변경해준다.
    else room[idx] = getNextTime(t[1]);
  });

  // room의 갯수를 리턴해준다.
  return room.length;
}

// 다음 이용 가능 시간을 리턴해주는 함수
function getNextTime(endTime) {
  // split() 메서드를 이용해 시간을 분리해준다.
  const next = endTime.split(":");

  // 문자열 시간은 숫자로 변환해서 리턴해준다.
  // 종료 시간 + 10을 해서 다음 이용 가능 시간을 리턴해준다.
  // ex) => "19:20" => 1,170
  return Number(next[0]) * 60 + Number(next[1]) + 10;
}
