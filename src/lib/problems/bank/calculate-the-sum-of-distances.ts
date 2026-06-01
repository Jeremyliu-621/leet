import type { Problem } from '../types';

export const problem: Problem = {
  id: 'calculate-the-sum-of-distances',
  title: 'Calculate the Sum of Distances',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`arr\` of length \`n\`.

Return an array \`result\` of length \`n\` where \`result[i]\` equals the **sum of absolute differences** between \`i\` and every index \`j\` where \`arr[i] == arr[j]\`.

Formally, \`result[i] = sum(|i - j|)\` for all \`j\` such that \`arr[i] == arr[j]\`.`,
  constraints: [
    '1 <= n <= 10^5',
    '0 <= arr[i] <= 10^9',
  ],
  examples: [
    {
      input: 'arr = [1, 3, 1, 1, 2]',
      output: '[5, 0, 3, 4, 0]',
      explanation: 'Value 1 at indices 0,2,3. result[0]=|0−2|+|0−3|=5, result[2]=3, result[3]=4. Values 3 and 2 appear once: 0.',
    },
    {
      input: 'arr = [0, 5, 3]',
      output: '[0, 0, 0]',
      explanation: 'Each value is unique, so every result is 0.',
    },
  ],
  hints: [
    "Group indices by their value. For a group with sorted positions [p0, p1, …, pm-1], compute each element's distance sum efficiently.",
    'For position p[k], the sum of distances = (sum of p[k]−p[j] for j < k) + (sum of p[j]−p[k] for j > k). Use a running prefix sum: left contribution = k*p[k] − prefix[k−1]; right contribution = (suffix sum after k) − (m−1−k)*p[k].',
    'Process each group in order to maintain the prefix sum. This gives an O(n) algorithm overall.',
  ],
  functionName: 'distance',
  params: ['arr'],
  starterCode: {
    javascript: `function distance(arr) {\n\n}`,
    typescript: `function distance(arr: number[]): number[] {

}`,
    python: `def distance(arr):\n    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 1, 1, 2]], expected: [5, 0, 3, 4, 0] },
    { args: [[0, 5, 3]], expected: [0, 0, 0] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [0] },
    { args: [[0, 0]], expected: [1, 1] },
    { args: [[1, 2, 1]], expected: [2, 0, 2] },
    { args: [[3, 1, 3, 3]], expected: [5, 0, 3, 4] },
    { args: [[0, 1, 0, 1, 0]], expected: [6, 2, 4, 2, 6] },
    { args: [[5, 5, 5]], expected: [3, 2, 3] },
  ],
};
