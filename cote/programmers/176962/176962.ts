//* 176962. 과제 진행
//* ❌ 실패
//* 정렬, 스택

//* 3 <= plan.length <= 1_000

export default function subjectProgressing(plans: string[][]) {
  //* 분단위로 변경, 시작 시간을 기준으로 오름차순 정렬
  const minutePlans = plans
    .map(([subject, start, playtime]) => {
      const [hour, minute] = start.split(":").map((v) => +v);
      const startMinutes = hour * 60 + minute;
      const playTime = parseInt(playtime);

      return { subject, startMinutes, playTime };
    })
    .sort(
      (prevPlan, nextPlan) => prevPlan.startMinutes - nextPlan.startMinutes
    );

  const stack: { subject: string; endTime: number }[] = [];

  for (const plan of minutePlans) {
    const { subject, startMinutes, playTime } = plan;

    stack.forEach(({ endTime }, index) => {
      //* 각 plan의 startTime이 currentTime보다 크다면
      if (startMinutes < endTime) {
        //* plan의 각 종료시간을 currentPlaytime만큼 연장
        stack[index].endTime += playTime;
      }
    });

    stack.push({ subject, endTime: startMinutes + playTime });
  }

  //* 각 plan의 종료시간을 기준으로 오름차순 정렬
  //* 정렬된 plan의 subject만 반환
  return stack
    .sort((prev, next) => prev.endTime - next.endTime)
    .map(({ subject }) => subject);
}
