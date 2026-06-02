import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-k-beauty-of-a-number',
  title: 'Find the K-Beauty of a Number',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `The **k-beauty** of an integer \`num\` is defined as the number of **substrings** of \`num\` when it is read as a string that meet the following conditions:
- It has a length of \`k\`.
- It is a divisor of \`num\`.

Given integers \`num\` and \`k\`, return the **k-beauty** of \`num\`.

Note:
- **Leading zeros** are allowed.
- \`0\` is not a divisor of any value.

A **substring** is a contiguous sequence of characters in a string.`,
  constraints: [
    '1 <= num <= 10^9',
    '1 <= k <= num.length (as a string)',
  ],
  examples: [
    {
      input: 'num = 240, k = 2',
      output: '2',
      explanation: '"240". Substrings of length 2: "24" (240%24=0 ✓), "40" (240%40=0 ✓). Count=2.',
    },
    {
      input: 'num = 430, k = 2',
      output: '1',
      explanation: '"430". Substrings: "43" (430%43=0 ✓), "30" (430%30=10 ✗). Count=1.',
    },
  ],
  hints: [
    'Convert num to a string and slide a window of size k.',
    'For each window, parse as an integer (skip zeros) and check if it divides num.',
    `\`\`\`js
function divisorSubstrings(num, k) {
  const s = String(num);
  let count = 0;
  for (let i = 0; i <= s.length-k; i++) {
    const sub = Number(s.slice(i, i+k));
    if (sub !== 0 && num % sub === 0) count++;
  }
  return count;
}\`\`\``,
  ],
  functionName: 'divisorSubstrings',
  params: ['num', 'k'],
  starterCode: {
    javascript: `function divisorSubstrings(num, k) {
  const s = String(num);
  let count = 0;
  for (let i = 0; i <= s.length - k; i++) {
    const sub = Number(s.slice(i, i + k));
    if (sub !== 0 && num % sub === 0) count++;
  }
  return count;
}`,
    typescript: `function divisorSubstrings(num: number, k: number): number {
  const s = String(num);
  let count = 0;
  for (let i = 0; i <= s.length - k; i++) {
    const sub = Number(s.slice(i, i + k));
    if (sub !== 0 && num % sub === 0) count++;
  }
  return count;
}`,
    python: `def divisorSubstrings(num, k):
    s, count = str(num), 0
    for i in range(len(s) - k + 1):
        sub = int(s[i:i+k])
        if sub != 0 and num % sub == 0: count += 1
    return count`,
  },
  visibleTests: [
    { args: [240, 2], expected: 2 },
    { args: [430, 2], expected: 1 },
  ],
  hiddenTests: [
    { args: [7, 1], expected: 1 },
    { args: [99, 1], expected: 2 },
    { args: [121, 2], expected: 0 },
    { args: [1, 1], expected: 1 },
  ],
};
