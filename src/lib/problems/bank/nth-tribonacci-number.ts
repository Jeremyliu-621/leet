import type { Problem } from '../types';

export const problem: Problem = {
  id: 'nth-tribonacci-number',
  title: 'N-th Tribonacci Number',
  difficulty: 'easy',
  tags: ['math', 'dynamic-programming'],
  description: `The Tribonacci sequence T(n) is defined as follows:

- T(0) = 0, T(1) = 1, T(2) = 1
- T(n + 3) = T(n) + T(n + 1) + T(n + 2) for n >= 0

Given \`n\`, return the value of T(n).`,
  constraints: ['`0 <= n <= 37`', 'The answer is guaranteed to fit in a 32-bit integer.'],
  examples: [
    {
      input: 'n = 4',
      output: '4',
      explanation: 'T(3) = 0+1+1 = 2, T(4) = 1+1+2 = 4.',
    },
    {
      input: 'n = 25',
      output: '1389537',
    },
  ],
  hints: [
    'Use three variables to track the previous three values and update them iteratively.',
    'T(0)=0, T(1)=1, T(2)=1; for n≥3: next = a+b+c, then shift.',
    `\`\`\`js
function tribonacci(n) {
  if (n===0) return 0; if (n<=2) return 1;
  let a=0,b=1,c=1;
  for (let i=3;i<=n;i++) [a,b,c]=[b,c,a+b+c];
  return c;
}\`\`\``,
  ],
  functionName: 'tribonacci',
  params: ['n'],
  starterCode: {
    javascript: `function tribonacci(n) {

}`,
    typescript: "function tribonacci(n: number): number {\n\n}",

    python: `def tribonacci(n):
    pass`,
  },
  visibleTests: [
    { args: [4], expected: 4 },
    { args: [25], expected: 1389537 },
    { args: [0], expected: 0 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 1 },
    { args: [3], expected: 2 },
    { args: [10], expected: 149 },
    { args: [37], expected: 2082876103 },
  ],
};
