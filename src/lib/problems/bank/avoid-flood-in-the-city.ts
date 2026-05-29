import type { Problem } from '../types';

export const problem: Problem = {
  id: 'avoid-flood-in-the-city',
  title: 'Avoid Flood in The City',
  difficulty: 'medium',
  tags: ['hash-map', 'binary-search', 'arrays'],
  description: `Your country has an infinite number of lakes. Initially all lakes are empty, but when it rains over the \`i\`-th lake, the \`i\`-th lake becomes full of water.

You are given an integer array \`rains\` where:
- \`rains[i] > 0\` means there will be heavy rain over the \`rains[i]\`-th lake.
- \`rains[i] == 0\` means there is no rain, and you can choose **one** full lake and drain it on that day.

A lake will overflow if full and it rains on it. Return an array \`ans\` where:
- \`ans[i] == -1\` if \`rains[i] > 0\`.
- \`ans[i]\` is the lake you chose to drain on day \`i\` if \`rains[i] == 0\`.

If it is impossible to avoid flooding, return an **empty array**.

**Note:** If multiple answers are possible, return any of them. If a dry day does not need to be used, you may drain any non-empty lake.`,
  constraints: [
    '1 <= rains.length <= 10^5',
    '0 <= rains[i] <= 10^9',
  ],
  examples: [
    {
      input: 'rains = [1,2,3,4]',
      output: '[-1,-1,-1,-1]',
      explanation: 'No dry days. Each lake fills once and is never refilled. No overflow possible.',
    },
    {
      input: 'rains = [1,2,0,1,2]',
      output: '[]',
      explanation: 'There is only one dry day (day 2). Lake 1 refills on day 3 and lake 2 refills on day 4. Both need draining before refill but only one dry day is available.',
    },
    {
      input: 'rains = [1,0,1]',
      output: '[-1,1,-1]',
      explanation: 'Lake 1 fills on day 0 and refills on day 2. The dry day on day 1 must drain lake 1.',
    },
  ],
  hints: [
    'Track which lake is currently full using a map from lake → day it was last filled.',
    'Keep a sorted list of available dry-day indices. When a lake is about to overflow, binary-search for the earliest dry day that comes AFTER the lake was last filled.',
    'If no such dry day exists, return []. Assign remaining unused dry days to any lake (e.g., lake 1).',
  ],
  functionName: 'avoidFlood',
  params: ['rains'],
  starterCode: {
    javascript: `function avoidFlood(rains) {

}`,
    typescript: 'function avoidFlood(rains: number[]): number[] {\n\n}',
    python: `def avoidFlood(rains):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [-1, -1, -1, -1] },
    { args: [[1, 2, 0, 1, 2]], expected: [] },
    { args: [[1, 0, 1]], expected: [-1, 1, -1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 0, 2]], expected: [-1, -1, 2, -1] },
    { args: [[1, 2, 0, 1]], expected: [-1, -1, 1, -1] },
    { args: [[0, 1, 1]], expected: [] },
    { args: [[1, 0, 2, 0, 1, 2]], expected: [-1, 1, -1, 2, -1, -1] },
    { args: [[1, 2, 0, 2, 0, 1]], expected: [-1, -1, 2, -1, 1, -1] },
    { args: [[1, 2, 3, 0, 1]], expected: [-1, -1, -1, 1, -1] },
    { args: [[2, 3, 0, 3, 0, 2, 1]], expected: [-1, -1, 3, -1, 2, -1, -1] },
    { args: [[1, 2]], expected: [-1, -1] },
  ],
};
