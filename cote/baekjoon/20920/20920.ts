//* 20920. 영단어 암기는 괴로워
//* ⭕️ 통과
//* 정렬, 해시

//* 1 <= N <= 100_000
//* 1 <= M <= 10

export default function hardToMemorizeVoca(input: string) {
  const [rawNM, ...words] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);

  const dictionary = {};
  const longWords = words.filter((word) => word.length >= M);

  longWords.forEach((word) =>
    dictionary[word] ? dictionary[word]++ : (dictionary[word] = 1)
  );

  return [...new Set(longWords)]
    .sort((aWord, bWord) => {
      if (
        dictionary[aWord] === dictionary[bWord] &&
        aWord.length === bWord.length
      ) {
        return aWord.localeCompare(bWord);
      }

      if (dictionary[aWord] === dictionary[bWord]) {
        return bWord.length - aWord.length;
      }

      return dictionary[bWord] - dictionary[aWord];
    })
    .join("\n");
}
