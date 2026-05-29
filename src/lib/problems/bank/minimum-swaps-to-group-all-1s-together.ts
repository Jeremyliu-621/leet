import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-group-all-1s-together',
  title: "Minimum Swaps to Group All 1's Together",
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `Given a binary array \`data\`, return the minimum number of swaps required to group all \`1\`s present in the array together in **any place** in the array.

A **swap** exchanges values at two positions.`,
  constraints: [
    '1 <= data.length <= 10^5',
    'data[i] is either 0 or 1',
  ],
  examples: [
    {
      input: 'data = [0,1,0,1,1,0,0]',
      output: '1',
      explanation: 'There are 3 ones. The best window of size 3 is [0,1,1] (1 zero) or [1,1,0] (1 zero). Answer is 1.',
    },
    {
      input: 'data = [1,0,1,0,1]',
      output: '1',
      explanation: 'There are 3 ones. Best window [1,0,1] has 1 zero. Answer is 1.',
    },
    {
      input: 'data = [1,0,0,0,1,0,0,1,0,0]',
      output: '2',
      explanation: 'There are 3 ones. Best window of size 3 has 1 one, needing 2 swaps.',
    },
  ],
  hints: [
    'Count the total number of 1s — call it `k`. You need to pack all `k` ones into some contiguous window of size `k`.',
    'The minimum swaps equals the minimum number of zeros in any window of size `k` (each zero in the window must be swapped with a one outside).',
    'Use a sliding window of size `k` across the array. Track the number of zeros in the current window with O(1) updates.',
  ],
  functionName: 'minSwaps',
  params: ['data'],
  starterCode: {
    javascript: 'function minSwaps(data) {\n  \n}\n',
    typescript: 'function minSwaps(data: number[]): number {\n  \n}\n',
    python: 'def minSwaps(data):\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 1, 0, 1, 1, 0, 0]], expected: 1 },
    { args: [[1, 0, 1, 0, 1]], expected: 1 },
    { args: [[1, 0, 0, 0, 1, 0, 0, 1, 0, 0]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 0, 0, 1, 0, 1, 0, 1]], expected: 2 },
    { args: [[0, 0, 0, 1, 0]], expected: 0 },
    { args: [[1, 1, 1, 1]], expected: 0 },
    { args: [[1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1]], expected: 3 },
    { args: [[0, 0, 0, 0, 0]], expected: 0 },
    { args: [[1, 0, 0, 1, 0, 0, 1, 0, 0, 1]], expected: 2 },
  ],
};
