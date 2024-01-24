// * 92341. 주차 요금 계산
// * ❌ 실패
// * 구현

// * GPT 코드
function calculateFee(duration: number, fees: number[]): number {
  if (duration <= fees[0]) {
    return fees[1];
  } else {
    const extraTime = Math.ceil((duration - fees[0]) / fees[2]);
    return fees[1] + extraTime * fees[3];
  }
}

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export default function solution(fees: number[], records: string[]): number[] {
  const carTimes: { [carNumber: string]: number } = {};
  const carInTimes: { [carNumber: string]: number } = {};

  records.forEach((record) => {
    const [time, carNumber, action] = record.split(" ");
    if (action === "IN") {
      carInTimes[carNumber] = timeToMinutes(time);
    } else {
      const parkedTime = timeToMinutes(time) - carInTimes[carNumber];
      carTimes[carNumber] = (carTimes[carNumber] || 0) + parkedTime;
      delete carInTimes[carNumber];
    }
  });

  for (const carNumber in carInTimes) {
    const parkedTime = timeToMinutes("23:59") - carInTimes[carNumber];
    carTimes[carNumber] = (carTimes[carNumber] || 0) + parkedTime;
  }

  return Object.keys(carTimes)
    .sort()
    .map((carNumber) => calculateFee(carTimes[carNumber], fees));
}

// * 개선 1
// export default function solution(fees: number[], records: string[]) {
//   const cars = {};

//   records.forEach((record) => {
//     const [time, carNumber, state] = record.split(" ");
//     if (!cars[carNumber]) {
//       cars[carNumber] = [];
//     }
//     cars[carNumber].push([time, state]);
//   });

//   return Object.keys(cars)
//     .sort()
//     .map((carNumber) => {
//       const timeSet = cars[carNumber];
//       let totalTime = 0;

//       for (const timeState of timeSet) {
//         const [time, state] = timeState;
//         const [hour, minute] = time.split(":").map(Number);
//         totalTime += (hour * 60 + minute) * (state === "IN" ? -1 : 1);
//       }

//       if (totalTime <= 0) totalTime += 23 * 60 + 59;
//       if (totalTime < fees[0]) return fees[1];
//       return fees[1] + Math.ceil((totalTime - fees[0]) / fees[2]) * fees[3];
//     });
// }

// * 기존
// export default function solution(fees: number[], records: string[]) {
//   const cars = {};
//   const carSet: Set<number> = new Set();

//   records.forEach((record) => {
//     const [time, carNumber, state] = record.split(" ");
//     if (!cars[+carNumber]) cars[+carNumber] = [];
//     cars[+carNumber].push([time, state]);
//     carSet.add(+carNumber);
//   });

//   const result: number[] = [...carSet].sort(
//     (prevCar, currentCar) => +prevCar - +currentCar
//   );

//   return result.map((carNumber) => {
//     let totalTime = cars[carNumber]
//       .map((car) => {
//         const [time, state] = car;
//         const [hour, minute] = time.split(":").map(Number);
//         return (hour * 60 + minute) * (state === "IN" ? -1 : 1);
//       })
//       .reduce((acc, cur) => acc + cur, 0);

//     if (totalTime <= 0) totalTime += 23 * 60 + 59;
//     if (totalTime <= fees[0]) return fees[1];
//     return fees[1] + Math.ceil((totalTime - fees[0]) / fees[2]) * fees[3];
//   });
// }
