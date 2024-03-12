//* 15686. 치킨 배달
//* ⭕️ 통과
//* 브루트포스

//* 2 <= N <= 50
//* 1 <= M <= 13

export default function chickenDelivery(input: string) {
  const [rawNM, ...rawMap] = input.split("\n");
  const [N, M] = rawNM.split(" ").map(Number);
  const map = rawMap.map((row) => row.split(" ").map(Number));

  const house: number[][] = [];
  const chickenShop: number[][] = [];

  map.forEach((row, rowIndex) =>
    row.forEach((column, columnIndex) => {
      if (column === 1) house.push([rowIndex, columnIndex]);
      if (column === 2) chickenShop.push([rowIndex, columnIndex]);
    })
  );

  let resultMinDistance = Infinity;
  const visited = new Array(chickenShop.length).fill(false);

  const dfs = (selectShops: number[], limit: number) => {
    if (selectShops.length === limit) {
      let targetDistance = 0;

      for (const [houseY, houseX] of house) {
        let calculateDistance = Infinity;

        for (const select of selectShops) {
          const [shopY, shopX] = chickenShop[select];
          const distance = Math.abs(shopY - houseY) + Math.abs(shopX - houseX);
          calculateDistance = Math.min(calculateDistance, distance);
        }

        targetDistance += calculateDistance;
      }

      resultMinDistance = Math.min(resultMinDistance, targetDistance);
      return;
    }

    for (let i = selectShops.at(-1) || 0; i < chickenShop.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs([...selectShops, i], M);
      visited[i] = false;
    }
  };

  dfs([], M);

  return resultMinDistance;
}
