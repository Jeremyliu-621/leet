import type { Problem } from '../types';

export const problem: Problem = {
  id: 'monotone-increasing-digits',
  title: 'Monotone Increasing Digits',
  difficulty: 'medium',
  tags: ['math'],
  description: `An integer has **monotone increasing digits** if every pair of adjacent digits satisfies \`d[i] <= d[i+1]\`.

Given an integer \`n\`, return the **largest** number less than or equal to \`n\` with monotone increasing digits.

**Approach:** Scan from right to left. Whenever a digit is greater than the one to its right, decrement it and mark everything to its right as \`9\`. Repeat until the whole number is non-decreasing.`,
  constraints: [
    '0 <= n <= 10^9',
  ],
  examples: [
    {
      input: 'n = 332',
      output: '299',
      explanation: '332 is not monotone (3 > 2). Decrement first 3 to 2, set rest to 9 → 299.',
    },
    {
      input: 'n = 321',
      output: '299',
    },
    {
      input: 'n = 10',
      output: '9',
    },
  ],
  hints: [
    'Convert n to an array of digits. Scan right-to-left: when digits[i-1] > digits[i], decrement digits[i-1] and record the position to fill with 9s.',
    'After finding all violations, fill digits from the mark position onward with 9.',
    '```js\nconst d = n.toString().split("").map(Number);\nlet mark = d.length;\nfor (let i = d.length - 1; i > 0; i--) {\n  if (d[i-1] > d[i]) { mark = i; d[i-1]--; }\n}\nfor (let i = mark; i < d.length; i++) d[i] = 9;\nreturn parseInt(d.join(""));\n```',
  ],
  functionName: 'monotoneIncreasingDigits',
  params: ['n'],
  starterCode: {
    javascript: `function monotoneIncreasingDigits(n) {
  // return largest number <= n with monotone increasing digits

}`,
    typescript: "function monotoneIncreasingDigits(n: number): number {\n  // return largest number <= n with monotone increasing digits\n\n}",

    python: `def monotoneIncreasingDigits(n: int) -> int:
    # return largest number <= n with monotone increasing digits
    pass
`,
  },
  visibleTests: [
    { args: [332], expected: 299 },
    { args: [321], expected: 299 },
    { args: [10], expected: 9 },
  ],
  hiddenTests: [
    { args: [0], expected: 0 },
    { args: [9], expected: 9 },
    { args: [100], expected: 99 },
    { args: [1232], expected: 1229 },
    { args: [120], expected: 119 },
    { args: [999], expected: 999 },
  ],
};
