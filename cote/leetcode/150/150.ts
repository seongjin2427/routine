// * 150. Evaluate Reverse Polish Notation
// * ⭕️ 통과
// * 스택

// * 1 <= tokens.length <= 10_000
// * tokens[i] = ["+", "-", "*", "/"] or -200 <= tokens[i] <= 200

export default function evalRPN(tokens: string[]) {
  const stack = [];

  tokens.forEach((token) => {
    if (Number.isInteger(+token)) {
      stack.push(+token);
    } else {
      const firstNumber = stack.pop();
      const secondNumber = stack.pop();
      if (token === "+") {
        return stack.push(secondNumber + firstNumber);
      }
      if (token === "-") {
        return stack.push(secondNumber - firstNumber);
      }
      if (token === "*") {
        return stack.push(secondNumber * firstNumber);
      }
      if (token === "/") {
        return stack.push((secondNumber / firstNumber) | 0);
      }
    }
  });

  return stack[0];
}
