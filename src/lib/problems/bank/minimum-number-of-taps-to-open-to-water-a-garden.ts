import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-taps-to-open-to-water-a-garden',
  title: 'Minimum Number of Taps to Open to Water a Garden',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `There is a one-dimensional garden on the x-axis from position \`0\` to position \`n\`. There are \`n + 1\` taps located at positions \`0, 1, ..., n\` in the garden.

Given an integer \`n\` and an integer array \`ranges\` of length \`n + 1\` where \`ranges[i]\` (0-indexed) means the \`i\`-th tap can water the area \`[i - ranges[i], i + ranges[i]]\` if it is open.

Return the **minimum number of taps** that should be opened to water the whole garden \`[0, n]\`. If the garden cannot be watered return \`-1\`.

**Jump Game approach:**
Convert taps to intervals. Sort intervals by left endpoint. Use a greedy sweep: track the current reach. For each gap in coverage, pick the interval that extends coverage furthest.

Alternatively, reduce to Jump Game II: create an array \`maxReach[i]\` = the furthest right endpoint achievable from position \`i\`, then apply the Jump Game II greedy.`,
  constraints: [
    '1 <= n <= 10000',
    'ranges.length == n + 1',
    '0 <= ranges[i] <= 100',
  ],
  examples: [
    {
      input: 'n = 5, ranges = [3,4,1,1,0,0]',
      output: '1',
      explanation: 'Tap 1 with range 4 covers [−3, 5]. Opening just tap 1 waters the full garden [0, 5].',
    },
    {
      input: 'n = 3, ranges = [0,0,0,0]',
      output: '-1',
      explanation: 'No tap covers the garden.',
    },
    {
      input: 'n = 7, ranges = [1,2,1,0,2,1,0,1]',
      output: '3',
    },
  ],
  hints: [
    'Convert each tap at position i with range r into an interval [max(0, i-r), min(n, i+r)].',
    'The problem is equivalent to Jump Game II. Create a `maxReach` array where `maxReach[left]` = max right endpoint over all intervals starting at or before `left`.',
    'Greedy sweep: maintain `curEnd` (current rightmost position covered) and `nextEnd` (furthest reachable). Each time we reach `curEnd`, we must open another tap. If `nextEnd` doesn\'t advance, return -1.',
  ],
  functionName: 'minTaps',
  params: ['n', 'ranges'],
  starterCode: {
    javascript: 'function minTaps(n, ranges) {\n\n}\n',
    typescript: "function minTaps(n: number, ranges: number[]): number {\n\n}",

    python: 'def minTaps(n: int, ranges: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [5, [3,4,1,1,0,0]], expected: 1 },
    { args: [3, [0,0,0,0]], expected: -1 },
    { args: [7, [1,2,1,0,2,1,0,1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [1, [0,0]], expected: -1 },
    { args: [1, [1,0]], expected: 1 },
    { args: [4, [0,0,0,0,0]], expected: -1 },
    { args: [4, [1,0,0,0,1]], expected: -1 },
    { args: [9, [0,5,0,3,3,3,1,1,0,1]], expected: 3 },
  ],
};
