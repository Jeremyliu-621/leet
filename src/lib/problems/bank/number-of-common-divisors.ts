import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-common-divisors',
  title: 'Number of Common Divisors',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given two positive integers \`a\` and \`b\`, return the number of **common divisors** of \`a\` and \`b\`.

An integer \`x\` is a **common divisor** of \`a\` and \`b\` if \`x\` divides both \`a\` and \`b\`.`,
  constraints: [
    '1 <= a, b <= 10^9',
  ],
  examples: [
    {
      input: 'a = 12, b = 8',
      output: '3',
      explanation: 'The common divisors of 12 and 8 are 1, 2, and 4.',
    },
    {
      input: 'a = 6, b = 5',
      output: '1',
      explanation: 'gcd(6,5) = 1. The only common divisor is 1.',
    },
  ],
  hints: [
    'Every common divisor of a and b divides gcd(a, b).',
    'Count the divisors of gcd(a, b) in O(sqrt(gcd)) time.',
    `\`\`\`js
function commonDivisors(a, b) {
  function gcd(x,y){return y?gcd(y,x%y):x;}
  const g = gcd(a,b);
  let count=0;
  for (let i=1;i*i<=g;i++) {
    if(g%i===0){count++;if(i!==g/i)count++;}
  }
  return count;
}\`\`\``,
  ],
  functionName: 'commonDivisors',
  params: ['a', 'b'],
  starterCode: {
    javascript: 'function commonDivisors(a, b) {\n  \n}\n',
    typescript: "function commonDivisors(a: number, b: number): number {\n  \n}",

    python: 'def commonDivisors(a, b):\n    pass\n',
  },
  visibleTests: [
    { args: [12, 8], expected: 3 },
    { args: [6, 5], expected: 1 },
    { args: [1, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [100, 75], expected: 3 },
    { args: [24, 36], expected: 6 },
    { args: [1000000000, 1000000000], expected: 100 },
    { args: [7, 14], expected: 2 },
    { args: [1, 1000000000], expected: 1 },
  ],
};
