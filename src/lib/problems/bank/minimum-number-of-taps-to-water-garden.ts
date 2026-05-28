import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-taps-to-water-garden',
  title: 'Minimum Number of Taps to Open to Water a Garden',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays', 'sliding-window'],
  description: `There is a **one-dimensional** garden on the x-axis from \`x = 0\` to \`x = n\`. There are \`n + 1\` taps located at points \`0, 1, ..., n\` in the garden.

Given an integer \`n\` and an integer array \`ranges\` of length \`n + 1\`, where \`ranges[i]\` (0-indexed) means the \`i\`-th tap can water the area \`[i - ranges[i], i + ranges[i]]\` if it is open.

Return the **minimum number of taps** that should be open to water the **whole garden** \`[0, n]\`, or \`-1\` if the garden cannot be watered.`,
  constraints: [
    '1 <= n <= 10^4',
    'ranges.length == n + 1',
    '0 <= ranges[i] <= 100',
  ],
  examples: [
    {
      input: 'n = 5, ranges = [3,4,1,1,0,0]',
      output: '1',
      explanation: 'Tap 1 (index 1) waters area [1-4, 1+4] = [-3, 5], which covers [0, 5]. Only 1 tap needed.',
    },
    {
      input: 'n = 3, ranges = [0,0,0,0]',
      output: '-1',
      explanation: 'Every tap has range 0, so each only covers a single point. The full interval [0,3] cannot be covered.',
    },
    {
      input: 'n = 7, ranges = [1,2,1,0,2,1,0,1]',
      output: '3',
      explanation: 'Open tap 1 → [0,3], tap 4 → [2,6], tap 7 → [6,7]. Three taps cover [0,7].',
    },
  ],
  hints: [
    'Reduce this to the interval covering / jump game problem. Each tap i with range r covers [max(0, i-r), min(n, i+r)]. Convert: for each left endpoint l, record the farthest right endpoint reachable from l.',
    'Build an array maxReach[0..n] where maxReach[l] = maximum right endpoint from any interval starting at l or earlier. Then apply the greedy jump-game II approach: maintain current covered boundary and farthest reachable, incrementing taps whenever you advance the boundary.',
    'If at any position i ≤ n the farthest reachable is still less than i, return -1. Otherwise after processing all positions the tap count is the answer.',
  ],
  functionName: 'minTaps',
  params: ['n', 'ranges'],
  starterCode: {
    javascript: `function minTaps(n, ranges) {
  // Return minimum taps to water [0, n], or -1 if impossible
}`,
    typescript: "function minTaps(n: number, ranges: number[]): number {\n  // Return minimum taps to water [0, n], or -1 if impossible\n}",

    python: `def minTaps(n: int, ranges: list[int]) -> int:
    # Return minimum taps to water [0, n], or -1 if impossible
    pass`,
  },
  visibleTests: [
    { args: [5, [3, 4, 1, 1, 0, 0]], expected: 1 },
    { args: [3, [0, 0, 0, 0]], expected: -1 },
    { args: [7, [1, 2, 1, 0, 2, 1, 0, 1]], expected: 3 },
    { args: [1, [0, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [4, [1, 1, 1, 1, 1]], expected: 2 },
    { args: [3, [0, 1, 1, 0]], expected: 2 },
    { args: [9, [0, 5, 0, 3, 4, 0, 3, 2, 1, 0]], expected: 2 },
    { args: [6, [2, 0, 0, 0, 0, 0, 2]], expected: -1 },
    { args: [2, [1, 1, 1]], expected: 1 },
    { args: [5, [1, 0, 1, 0, 1, 0]], expected: 3 },
  ],
};
