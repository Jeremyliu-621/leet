import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-turbulent-subarray',
  title: 'Longest Turbulent Subarray',
  difficulty: 'medium',
  tags: ['sliding-window'],
  description: `Given an integer array \`arr\`, return the length of a maximum size turbulent subarray of \`arr\`.

A subarray is **turbulent** if the comparison sign flips between each adjacent pair of elements in the subarray.

More formally, a subarray \`arr[i..j]\` is **turbulent** if:
- For \`i <= k < j\`: \`arr[k] > arr[k+1]\` when \`k\` is odd, and \`arr[k] < arr[k+1]\` when \`k\` is even.
- **Or,** for \`i <= k < j\`: \`arr[k] > arr[k+1]\` when \`k\` is even, and \`arr[k] < arr[k+1]\` when \`k\` is odd.`,
  constraints: [
    '1 <= arr.length <= 4 * 10^4',
    '0 <= arr[i] <= 10^9',
  ],
  examples: [
    {
      input: 'arr = [9,4,2,10,7,8,8,1,9]',
      output: '5',
      explanation: 'arr[1] > arr[2] < arr[3] > arr[4] < arr[5]. The turbulent subarray is [4,2,10,7,8].',
    },
    {
      input: 'arr = [4,8,12,16]',
      output: '2',
    },
    {
      input: 'arr = [100]',
      output: '1',
    },
  ],
  hints: [
    'Use a sliding window. Track the start of the current turbulent subarray.',
    'For each position i > 0, check if the current comparison direction alternates from the previous one.',
    'When the pattern breaks (equal elements or same direction twice), reset the window start.',
  ],
  functionName: 'maxTurbulenceSize',
  params: ['arr'],
  starterCode: {
    javascript: `function maxTurbulenceSize(arr) {
  // Return length of longest turbulent subarray
}`,
    python: `def maxTurbulenceSize(arr):
    # Return length of longest turbulent subarray
    pass`,
  },
  visibleTests: [
    { args: [[9, 4, 2, 10, 7, 8, 8, 1, 9]], expected: 5 },
    { args: [[4, 8, 12, 16]], expected: 2 },
    { args: [[100]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[0, 1, 0, 1]], expected: 4 },
    { args: [[2, 0, 4, 3, 5]], expected: 5 },
    { args: [[9, 9]], expected: 1 },
  ],
};
