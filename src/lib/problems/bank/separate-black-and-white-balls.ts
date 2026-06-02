import type { Problem } from '../types';

export const problem: Problem = {
  id: 'separate-black-and-white-balls',
  title: 'Separate Black and White Balls',
  difficulty: 'medium',
  tags: ['strings'],
  description: `There are \`n\` balls on a table, each ball has a color black or white.

You are given a **0-indexed** binary string \`s\` of length \`n\`, where \`'1'\` and \`'0'\` represent black and white balls, respectively.

In each step, you can choose two **adjacent** balls and swap them.

Return the **minimum** number of steps to group all the black balls to the right and all the white balls to the left.

**Example 1:**
\`\`\`
Input: s = "101"
Output: 1
\`\`\`

**Example 2:**
\`\`\`
Input: s = "100"
Output: 2
\`\`\`

**Example 3:**
\`\`\`
Input: s = "0111"
Output: 0
\`\`\`

**Constraints:**
- \`1 <= n <= 10^5\`
- \`s[i]\` is either \`'0'\` or \`'1'\`.`,
  constraints: [
    '1 <= n <= 10^5',
    "s[i] is either '0' or '1'",
  ],
  examples: [
    { input: 's = "101"', output: '1' },
    { input: 's = "100"', output: '2' },
    { input: 's = "0111"', output: '0' },
  ],
  hints: [
    'Count the number of adjacent swaps needed to bubble all black balls (1s) to the right.',
    'For each white ball (0), count how many black balls (1s) appear before it — that is the number of swaps needed to move those black balls past this white ball.',
    'Iterate left to right, maintaining a running count of 1s seen so far. Add that count whenever a 0 is encountered.',
  ],
  functionName: 'minimumSteps',
  params: ['s'],
  starterCode: {
    javascript: `function minimumSteps(s) {
  let ones = 0, steps = 0;
  for (const c of s) { if (c === '1') ones++; else steps += ones; }
  return steps;
}`,
    typescript: `function minimumSteps(s: string): number {
  let ones = 0, steps = 0;
  for (const c of s) { if (c === '1') ones++; else steps += ones; }
  return steps;
}`,
    python: `def minimumSteps(s):
    if hasattr(s, 'to_py'): s = s.to_py()
    ones = 0; steps = 0
    for c in str(s):
        if c == '1': ones += 1
        else: steps += ones
    return steps`,
  },
  visibleTests: [
    { args: ['101'], expected: 1 },
    { args: ['100'], expected: 2 },
    { args: ['0111'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['0'], expected: 0 },
    { args: ['1001'], expected: 2 },
    { args: ['11000'], expected: 6 },
    { args: ['010101'], expected: 3 },
  ],
};
