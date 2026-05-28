import type { Problem } from '../types';

export const problem: Problem = {
  id: 'string-multiply',
  title: 'Multiply Two Non-Negative Integers as Strings',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given two non-negative integers represented as strings \`num1\` and \`num2\`, return their product, also represented as a string.

**Do not** convert the inputs to integers directly. Simulate the grade-school multiplication algorithm using digit-by-digit arithmetic.`,
  constraints: [
    '1 <= num1.length, num2.length <= 20',
    'num1 and num2 consist of digits only.',
    'Neither num1 nor num2 has leading zeros, except for the number "0" itself.',
  ],
  examples: [
    {
      input: 'num1 = "2", num2 = "3"',
      output: '"6"',
      explanation: '2 × 3 = 6.',
    },
    {
      input: 'num1 = "123", num2 = "456"',
      output: '"56088"',
      explanation: '123 × 456 = 56088.',
    },
    {
      input: 'num1 = "0", num2 = "999"',
      output: '"0"',
      explanation: 'Anything multiplied by zero is zero.',
    },
  ],
  hints: [
    'Level 1: Multiply digit by digit as you would on paper. The product of num1[i] and num2[j] contributes to positions i+j and i+j+1 in a result array of length num1.length + num2.length.',
    'Level 2: Allocate a result array of zeros with length m+n. For each pair (i, j), compute the partial product and add it: `result[i+j+1] += digit1 * digit2`. Then propagate carries from right to left: `result[i] += Math.floor(result[i+1] / 10); result[i+1] %= 10`.',
    'Level 3: `const m = num1.length, n = num2.length; const res = new Array(m + n).fill(0); for (let i = m - 1; i >= 0; i--) { for (let j = n - 1; j >= 0; j--) { const mul = (+num1[i]) * (+num2[j]); res[i+j+1] += mul; res[i+j] += Math.floor(res[i+j+1] / 10); res[i+j+1] %= 10; } } const str = res.join("").replace(/^0+/, ""); return str || "0";`',
  ],
  functionName: 'multiplyStrings',
  params: ['num1', 'num2'],
  starterCode: {
    javascript: 'function multiplyStrings(num1, num2) {\n  // your code here\n}\n',
    typescript: "function multiplyStrings(num1: string, num2: string): string {\n  // your code here\n}",

    python: 'def multiplyStrings(num1, num2):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['2', '3'], expected: '6' },
    { args: ['123', '456'], expected: '56088' },
    { args: ['0', '999'], expected: '0' },
  ],
  hiddenTests: [
    { args: ['1', '1'], expected: '1' },
    { args: ['0', '0'], expected: '0' },
    { args: ['9', '9'], expected: '81' },
    { args: ['99', '99'], expected: '9801' },
    { args: ['12345', '6789'], expected: '83810205' },
    { args: ['100', '200'], expected: '20000' },
    { args: ['999', '1'], expected: '999' },
  ],
};
