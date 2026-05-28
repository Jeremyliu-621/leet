import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-sum-four-digit-number',
  title: 'Minimum Sum of Four Digit Number After Splitting Digits',
  difficulty: 'easy',
  tags: ['math', 'arrays'],
  description: `You are given a **positive** integer \`num\` consisting of exactly **four** digits. Split \`num\` into two new integers \`new1\` and \`new2\` by using the **digits** found in \`num\`. **Leading zeros** are allowed in \`new1\` and \`new2\`, and all the digits found in \`num\` must be used.

Return the **minimum** possible sum of \`new1\` and \`new2\`.`,
  constraints: [
    '1000 <= num <= 9999',
  ],
  examples: [
    {
      input: 'num = 2932',
      output: '52',
      explanation: 'Some possible pairs: (29,23)→52, (23,29)→52. The minimum is 52.',
    },
    {
      input: 'num = 4009',
      output: '13',
      explanation: 'Some possible pairs: (04,09)→13, (40,09)→49. The minimum is 4+9=13.',
    },
  ],
  hints: [
    'Sort the four digits. To minimize the sum, the two smallest digits should be the tens digits of the two numbers.',
    'With sorted digits [d0,d1,d2,d3], the minimum sum is d0*10 + d1*10 + d2 + d3.',
    `\`\`\`js
function minimumSum(num) {
  const d = String(num).split("").map(Number).sort((a,b)=>a-b);
  // pair smallest with third smallest to minimize carry
  return (10*d[0]+d[2]) + (10*d[1]+d[3]);
}\`\`\``,
  ],
  functionName: 'minimumSum',
  params: ['num'],
  starterCode: {
    javascript: 'function minimumSum(num) {\n  \n}\n',
    typescript: "function minimumSum(num: number): number {\n  \n}",

    python: 'def minimumSum(num):\n    pass\n',
  },
  visibleTests: [
    { args: [2932], expected: 52 },
    { args: [4009], expected: 13 },
    { args: [1234], expected: 37 },
  ],
  hiddenTests: [
    { args: [1111], expected: 22 },
    { args: [9999], expected: 198 },
    { args: [1000], expected: 1 },
    { args: [1199], expected: 38 },
    { args: [5050], expected: 10 },
  ],
};
