//* 17677. 뉴스 클러스터링
//* ❌ 실패
//* 구현

//* 2 <= str1, str2 <= 1_000

export default function newsClustering(str1: string, str2: string) {
  const regexp = /^[a-z]+$/;
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < str1.length - 1; i++) {
    const target = str1.slice(i, i + 2).toLowerCase();
    if (regexp.test(target)) arr1.push(target);
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const target = str2.slice(i, i + 2).toLowerCase();
    if (regexp.test(target)) arr2.push(target);
  }

  let intersection = 0;
  const temp = [];

  for (const str of arr1) {
    if (!temp.includes(str)) {
      const min1 = arr1.filter((el) => el === str).length;
      const min2 = arr2.filter((el) => el === str).length;
      intersection += Math.min(min1, min2);
      temp.push(str);
    }
  }

  const NUMBER = 65536;
  const union = arr1.length + arr2.length - intersection;
  if (union === 0) return NUMBER;

  return Math.floor((intersection / union) * NUMBER);
}
