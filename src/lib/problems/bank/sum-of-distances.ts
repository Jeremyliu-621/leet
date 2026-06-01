import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-distances',
  title: 'Sum of Distances',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`arr\`. Return *an integer array* \`answer\` *of the same length where* \`answer[i]\` *is the sum of absolute differences between index* \`i\` *and every other index* \`j\` *where* \`arr[j] == arr[i]\`.*

Formally, \`answer[i] = Σ |i − j|\` for all \`j ≠ i\` such that \`arr[j] == arr[i]\`.`,
  constraints: [
    '2 <= arr.length <= 10^5',
    '0 <= arr[i] <= 10^9',
  ],
  examples: [
    {
      input: 'arr = [1,3,1,1,2]',
      output: '[5,0,3,4,0]',
      explanation:
        'Value 1 appears at indices 0,2,3. For index 0: |0-2|+|0-3|=5. For index 2: |2-0|+|2-3|=3. For index 3: |3-0|+|3-2|=4. Values 3 and 2 each appear once → 0.',
    },
    {
      input: 'arr = [0,5,3]',
      output: '[0,0,0]',
      explanation: 'Each value is unique; no other element shares its value.',
    },
  ],
  hints: [
    'Group indices by their value. For each group, sort the indices (they\'re already in order).',
    'For a group [i0, i1, …, im] and position k: sum = ik * k − prefix[k] + (suffix[k] − ik * (m − k)), where prefix[k] is the sum of all indices before k.',
    'Use a running prefix sum to avoid O(n²) nested loops.',
  ],
  functionName: 'distance',
  params: ['arr'],
  starterCode: {
    javascript: 'function distance(arr) {\n\n}\n',
    typescript: 'function distance(arr: number[]): number[] {\n\n}\n',
    python: 'def distance(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 1, 1, 2]], expected: [5, 0, 3, 4, 0] },
    { args: [[0, 5, 3]], expected: [0, 0, 0] },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: [1, 1] },
    { args: [[1, 1, 1]], expected: [3, 2, 3] },
    { args: [[1, 2, 1, 2]], expected: [2, 2, 2, 2] },
    { args: [[5, 5, 5, 5]], expected: [6, 4, 4, 6] },
    { args: [[0, 0, 0]], expected: [3, 2, 3] },
    { args: [[1, 2, 3, 4]], expected: [0, 0, 0, 0] },
    { args: [[3, 3, 3, 3, 3]], expected: [10, 7, 6, 7, 10] },
  ],
};
