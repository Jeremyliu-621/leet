import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-taps-to-open-to-water-a-garden',
  title: 'Minimum Number of Taps to Open to Water a Garden',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `There is a one-dimensional garden on the x-axis. The garden starts at the point \`0\` and ends at the point \`n\`. (i.e., the length of the garden is \`n\`).

There are \`n + 1\` taps located at points \`0, 1, ..., n\` in the garden.

Given an integer \`n\` and an integer array \`ranges\` of length \`n + 1\` where \`ranges[i]\` (0-indexed) means the \`i\`-th tap can water the area \`[i - ranges[i], i + ranges[i]]\` if it was open.

Return the **minimum** number of taps that should be open to water the **whole** garden \`[0, n]\`. If the garden cannot be watered, return \`-1\`.

**Example 1:**
\`\`\`
Input: n = 5, ranges = [3,4,1,1,0,0]
Output: 1
\`\`\`
**Explanation:** The tap at point 1 waters [1-4, 1+4] = [-3, 5] which covers the whole garden [0, 5].

**Example 2:**
\`\`\`
Input: n = 3, ranges = [0,0,0,0]
Output: -1
\`\`\`

**Constraints:**
- \`1 <= n <= 10^4\`
- \`ranges.length == n + 1\`
- \`0 <= ranges[i] <= 100\``,
  constraints: [
    '1 <= n <= 10^4',
    'ranges.length == n + 1',
    '0 <= ranges[i] <= 100',
  ],
  examples: [
    { input: 'n = 5, ranges = [3,4,1,1,0,0]', output: '1' },
    { input: 'n = 3, ranges = [0,0,0,0]', output: '-1' },
  ],
  hints: [
    'Reduce to the "Jump Game II" / minimum interval cover problem.',
    'Build maxReach[i] = max right endpoint achievable by any tap that covers position i (left endpoint <= i).',
    'Greedy: iterate from 0 to n-1, tracking current coverage end and furthest reachable end. Each time you hit the current end, open a new tap.',
  ],
  functionName: 'minTaps',
  params: ['n', 'ranges'],
  starterCode: {
    javascript: 'function minTaps(n, ranges) {\n  // your code here\n}\n',
    python: 'def minTaps(n, ranges):\n    pass\n',
  },
  visibleTests: [
    { args: [5, [3,4,1,1,0,0]], expected: 1 },
    { args: [3, [0,0,0,0]], expected: -1 },
    { args: [7, [1,2,1,0,2,1,0,1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [1, [1,1]], expected: 1 },
    { args: [2, [0,1,0]], expected: 1 },
    { args: [4, [1,0,0,0,1]], expected: -1 },
    { args: [4, [1,1,1,1,1]], expected: 2 },
  ],
};
