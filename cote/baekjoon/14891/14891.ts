//* 14891. 톱니바퀴
//* ❌ 실패
//* 구현

//* 1 <= K <= 100

class Gear {
  state: number[];
  constructor(state: string) {
    this.state = state.split("").map(Number);
  }

  turn(direction: number) {
    direction === 1
      ? this.state.unshift(this.state.pop())
      : this.state.push(this.state.shift());
  }
}

export default function gears(input: string) {
  const lines = input.split("\n");
  let gear = lines.slice(0, 4).map((g) => new Gear(g));
  const rotates = lines.slice(5).map((r) => r.split(" ").map(Number));

  for (const [index, direction] of rotates) {
    const turnCommands = [[index - 1, direction]];
    let tempNextDirection: number = direction;
    let tempPrevDirection: number = direction;

    for (let i = index - 1; i < 3; i++) {
      if (gear[i].state[2] !== gear[i + 1].state[6]) {
        tempNextDirection = -tempNextDirection;
        turnCommands.push([i + 1, tempNextDirection]);
      } else break;
    }

    for (let i = index - 1; i >= 1; i--) {
      if (gear[i - 1].state[2] !== gear[i].state[6]) {
        tempPrevDirection = -tempPrevDirection;
        turnCommands.push([i - 1, tempPrevDirection]);
      } else break;
    }

    turnCommands.forEach(([gearIndex, direction]) =>
      gear[gearIndex].turn(direction)
    );
  }

  return gear.reduce(
    (acc, gear, i) => acc + (gear.state[0] === 1 ? Math.pow(2, i) : 0),
    0
  );
}
