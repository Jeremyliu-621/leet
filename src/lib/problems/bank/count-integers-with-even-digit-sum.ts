import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-integers-with-even-digit-sum',
  title: 'Count Integers With Even Digit Sum',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a positive integer \`num\`, return *the number of positive integers **less than or equal to*** \`num\` *whose **digit sums** are **even**.*

The **digit sum** of a positive integer is the sum of all its digits.

**Approach:** Iterate from 1 to num; for each number compute its digit sum and check if even.`,
  constraints: [
    '1 <= num <= 1000',
  ],
  examples: [
    {
      input: 'num = 4',
      output: '2',
      explanation: 'Numbers with even digit sums ≤ 4: 2 (digit sum=2), 4 (digit sum=4). Count = 2.',
    },
    {
      input: 'num = 30',
      output: '14',
      explanation: '14 numbers from 1 to 30 have an even digit sum.',
    },
  ],
  hints: [
    'For each number from 1 to num, sum its digits and check parity.',
    '```js\nfunction countEven(num) {\n  let count = 0;\n  for (let i = 1; i <= num; i++) {\n    const s = String(i).split("").reduce((a,c)=>a+Number(c),0);\n    if (s%2===0) count++;\n  }\n  return count;\n}\n```',
    `\`\`\`js
function countEven(num) {
  let count = 0;
  for (let n = 1; n <= num; n++) {
    const s = String(n).split("").reduce((a,c)=>a+Number(c),0);
    if (s % 2 === 0) count++;
  }
  return count;
}\`\`\``,
  ],
  functionName: 'countEven',
  params: ['num'],
  starterCode: {
    javascript: `function countEven(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    const s = String(i).split('').reduce((a, c) => a + Number(c), 0);
    if (s % 2 === 0) count++;
  }
  return count;
}`,
    typescript: `function countEven(num: number): number {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    const s = String(i).split('').reduce((a, c) => a + Number(c), 0);
    if (s % 2 === 0) count++;
  }
  return count;
}`,
    python: `def countEven(num):
    count = 0
    for i in range(1, num + 1):
        if sum(int(d) for d in str(i)) % 2 == 0:
            count += 1
    return count
`,
  },
  visibleTests: [
    { args: [4], expected: 2 },
    { args: [30], expected: 14 },
  ],
  hiddenTests: [
    { args: [1], expected: 0 },
    { args: [2], expected: 1 },
    { args: [10], expected: 4 },
    { args: [100], expected: 49 },
    { args: [1000], expected: 499 },
    { args: [20], expected: 10 },
  ],
};
