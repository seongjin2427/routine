// * 17680. 캐시
// * ⭕️ 통과
// * 스택

// * 0 <= cacheSize <= 30
// * cities.length <= 100_000
// * LRU 알고리즘 사용
// * cache hit = 1
// * cache miss = 5

export default function solution(cacheSize: number, cities: string[]) {
  let time = 0;
  const cache = [];
  const lowerCities = cities.map((city) => city.toLowerCase());

  for (const city of lowerCities) {
    if (cache.includes(city)) {
      cache.push(...cache.splice(cache.indexOf(city), 1));
      time += 1;
    } else {
      if (cache.length === cacheSize) cache.shift();
      if (cacheSize > 0) cache.push(city);
      time += 5;
    }
  }

  return time;
}
