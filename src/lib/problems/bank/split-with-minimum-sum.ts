import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-with-minimum-sum',
  title: 'Split With Minimum Sum',
  difficulty: 'easy',
  tags: ['math', 'arrays'],
  description: `Given a positive integer \`num\`, split it into two non-negative integers \`num1\` and \`num2\` such that:

- The concatenation of \`num1\` and \`num2\` is a permutation of \`num\`.
  - In other words, the sum of occurrences of each digit in \`num1\` and \`num2\` equals that of \`num\`.
- \`num1\` and \`num2\` can contain leading zeros.

Return the **minimum** possible sum of \`num1\` and \`num2\`.

**Note:**
- It is guaranteed that \`num\` does not contain any leading zeros.
- It is not allowed to use the same digit twice.`,
  constraints: [
    '10 <= num <= 10^9',
  ],
  examples: [
    {
      input: 'num = 4325',
      output: '59',
      explanation: 'Sort digits: [2,3,4,5]. Assign 2,4 to num1 → 24. Assign 3,5 to num2 → 35. 24+35=59.',
    },
    {
      input: 'num = 687',
      output: '75',
      explanation: 'Sort digits: [6,7,8]. Assign 6,8 to num1 → 68 or alternate: 6 to num1, 7 to num2, 8 to num1. Best: num1=6+8/10=... actually assign alternately: num1 digits [6,8], num2 digits [7]. Wait — best is to alternate: digits sorted [6,7,8], assign to num1=6,8 (=68) and num2=7 (=7), sum=75. Or num1=7 (=7) num2=6,8 (=68), sum=75. Or num1=6,7 (=67) num2=8, sum=75.',
    },
  ],
  hints: [
    'Level 1: Sort the digits. Distribute them alternately to two numbers to keep them balanced.',
    'Level 2: Assign even-indexed digits to num1 and odd-indexed digits to num2 (after sorting). Sum them.',
    'Level 3: const d=String(num).split("").map(Number).sort((a,b)=>a-b);let n1=0,n2=0,p=1;for(let i=d.length-1;i>=0;i-=2){n1+=d[i]*p;if(i-1>=0)n2+=d[i-1]*p;p*=10;}return n1+n2;',
  ],
  functionName: 'splitNum',
  params: ['num'],
  starterCode: {
    javascript: `function splitNum(num) {
  const d = String(num).split('').map(Number).sort((a, b) => a - b);
  let n1 = 0, n2 = 0, p = 1;
  for (let i = d.length - 1; i >= 0; i -= 2) {
    n1 += d[i] * p;
    if (i - 1 >= 0) n2 += d[i - 1] * p;
    p *= 10;
  }
  return n1 + n2;
}`,
    typescript: `function splitNum(num: number): number {
  const d = String(num).split('').map(Number).sort((a, b) => a - b);
  let n1 = 0, n2 = 0, p = 1;
  for (let i = d.length - 1; i >= 0; i -= 2) {
    n1 += d[i]! * p;
    if (i - 1 >= 0) n2 += d[i - 1]! * p;
    p *= 10;
  }
  return n1 + n2;
}`,
    python: `def splitNum(num):
    if hasattr(num, 'to_py'): num = num.to_py()
    num = int(num)
    d = sorted(int(c) for c in str(num))
    n1, n2, p = 0, 0, 1
    i = len(d) - 1
    while i >= 0:
        n1 += d[i] * p
        if i - 1 >= 0: n2 += d[i-1] * p
        p *= 10; i -= 2
    return n1 + n2`,
  },
  visibleTests: [
    { args: [4325], expected: 59 },
    { args: [687], expected: 75 },
  ],
  hiddenTests: [
    { args: [10], expected: 1 },
    { args: [23], expected: 5 },
    { args: [99], expected: 18 },
    { args: [1234], expected: 37 },
    { args: [9999], expected: 198 },
  ],
};
