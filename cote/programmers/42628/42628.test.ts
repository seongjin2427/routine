import doublePriorityQueue from "./42628";

describe("42628. 이중우선순위큐", () => {
  it("case 1.", () => {
    const operations = [
      "I 16",
      "I -5643",
      "D -1",
      "D 1",
      "D 1",
      "I 123",
      "D -1",
    ];

    expect(doublePriorityQueue(operations)).toEqual([0, 0]);
  });
  it("case 2.", () => {
    const operations = [
      "I -45",
      "I 653",
      "D 1",
      "I -642",
      "I 45",
      "I 97",
      "D 1",
      "D -1",
      "I 333",
    ];

    expect(doublePriorityQueue(operations)).toEqual([333, -45]);
  });
});
