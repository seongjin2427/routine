// * 42583. 다리를 지나는 트럭
// * ⭕️ 통과
// * 스택, 큐

// * 1 <= bridge_length <= 10_000
// * 1 <= weight <= 10_000
// * 1 <= truck_weight <= 10_000
// * 1 <= truck_weight[i] <= weight

export default function solution(
  bridge_length: number,
  weight: number,
  truck_weights: number[]
) {
  const TOTAL_TRUCK_COUNT = truck_weights.length;
  const bridge = new Array(bridge_length).fill(0);

  let weightOnBridge = 0;
  let escapedTruckCount = 0;
  let time = 0;

  while (escapedTruckCount < TOTAL_TRUCK_COUNT) {
    time++;

    const escapedTruck = bridge.shift();
    const willEnterTruck = truck_weights.shift();

    if (escapedTruck > 0) {
      escapedTruckCount++;
      weightOnBridge -= escapedTruck;
    }

    if (weightOnBridge + willEnterTruck > weight) {
      bridge.push(0);
      truck_weights.unshift(willEnterTruck);
      continue;
    }

    bridge.push(willEnterTruck);
    weightOnBridge += willEnterTruck;
  }

  return time;
}
