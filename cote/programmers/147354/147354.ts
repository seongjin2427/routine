//* 147354. 테이블 해시 함수
//* ❌ 실패
//* 비트마스킹

//* 1 <= data.length <= 2_500
//* 1 <= data[i].length <= 500
//* 1 <= data[i][j] <= 1_000_000
//* 1 <= col <= data[i][j].length
//* 1 <= row_begin <= row_end <= data.length

export default function tableHashFunction(
  data: number[][],
  col: number,
  row_begin: number,
  row_end: number
) {
  let answer = 0;
  const sortedData = data.sort(
    (a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]
  );

  for (let i = row_begin; i <= row_end; i++) {
    answer ^= sortedData[i - 1].reduce((acc, cur) => acc + (cur % i), 0);
  }

  return answer;
}
