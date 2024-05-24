//* 4889. 안정적인 문자열
//*
//* 문자열, 스택

//* S <= 2_000

export default function stableString(input: string) {
  let results = [];
  let testCase = 1;

  input.split("\n").forEach((line) => {
    if (line.includes("-")) return;

    let stack = [];
    let operations = 0;

    for (let char of line) {
      if (char === "{") {
        stack.push(char);
      } else {
        if (stack.length > 0 && stack.at(-1) === "{") {
          stack.pop();
        } else {
          stack.push(char);
        }
      }
    }

    for (let i = 0; i < stack.length; i++) {
      if (i % 2 === 0 && stack[i] === "}") {
        operations++;
      } else if (i % 2 === 1 && stack[i] === "{") {
        operations++;
      }
    }

    results.push(`${testCase}. ${operations}`);
    testCase++;
  });

  return results.join("\n");
}
