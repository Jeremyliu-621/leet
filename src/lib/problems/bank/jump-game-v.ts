import type { Problem } from '../types';

export const problem: Problem = {
  id: 'jump-game-v',
  title: 'Jump Game V',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Given an array of integers \`arr\` and an integer \`d\`. In one step you can jump from index \`i\` to index \`j\` where:

- \`i + 1 <= j <= min(i + d, arr.length - 1)\`, or
- \`max(0, i - d) <= j <= i - 1\`

In addition, you can only jump from index \`i\` to index \`j\` if \`arr[i] > arr[j]\` and \`arr[i] > arr[k]\` for all indices \`k\` between \`i\` and \`j\`.

You can choose any index of the array and start jumping. Return **the maximum number of indices** you can visit.`,
  constraints: [
    '1 <= arr.length <= 1000',
    '1 <= arr[i] <= 10^5',
    '1 <= d <= arr.length',
  ],
  examples: [
    {
      input: 'arr = [6,4,14,6,8,13,9,7,10,6,12], d = 2',
      output: '4',
      explanation: 'You can visit the indices 5 → 3 → 0 → 1, gaining a count of 4.',
    },
    {
      input: 'arr = [3,3,3,3,3], d = 3',
      output: '1',
      explanation: 'You can only visit index 0 since all elements are equal.',
    },
    {
      input: 'arr = [7,6,5,4,3,2,1], d = 1',
      output: '7',
      explanation: 'Start at index 0 and visit all indices.',
    },
  ],
  hints: [
    'Process indices in ascending order of their array values so that dp[j] is already computed when you compute dp[i].',
    'For each index i, scan left and right within distance d; stop scanning in a direction once you hit an element >= arr[i].',
    'dp[i] = 1 + max(dp[j]) for all reachable j.',
  ],
  functionName: 'maxJumps',
  params: ['arr', 'd'],
  starterCode: {
    javascript: 'function maxJumps(arr, d) {\n\n}\n',
    typescript: "function maxJumps(arr: number[], d: number): number {\n\n}",

    python: 'def maxJumps(arr, d):\n    pass\n',
  },
  visibleTests: [
    { args: [[6,4,14,6,8,13,9,7,10,6,12], 2], expected: 4 },
    { args: [[3,3,3,3,3], 3], expected: 1 },
    { args: [[7,6,5,4,3,2,1], 1], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[2,3,1], 1], expected: 2 },
    { args: [[5,1,3,2,4], 2], expected: 3 },
    { args: [[1,2,3,4,5], 3], expected: 5 },
  ],
};
