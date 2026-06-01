import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-increments-on-subarrays-to-form-target-array',
  title: 'Minimum Number of Increments on Subarrays to Form Target Array',
  difficulty: 'hard',
  tags: ['arrays', 'stack'],
  description: `You are given an integer array \`target\`. You have an integer array \`initial\` of the same size as \`target\` with all elements initially zeros.

In one operation, you can choose **any** subarray from \`initial\` and increment each value by one.

Return the **minimum number of operations** to form a \`target\` array from \`initial\`.

**Key insight:** Think of the target as a histogram. Each time the height increases from left to right, you must start new "painting strokes" for the additional height. Strokes that started in a taller section can continue into a shorter section for free.

- The first element always contributes \`target[0]\` operations.
- For each subsequent element, you need \`max(0, target[i] - target[i-1])\` additional operations (the "rise" in height).`,
  constraints: [
    '`1 <= target.length <= 10^5`',
    '`1 <= target[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'target = [1,2,3,2,1]',
      output: '3',
      explanation:
        'We need 3 operations. Ops: [0,0,1,0,0], [0,1,1,1,0], [1,1,1,1,1]. The rises are: 1 (start), +1 at index 1, +1 at index 2, then the array descends (no extra ops needed).',
    },
    {
      input: 'target = [3,1,1,2]',
      output: '4',
      explanation:
        'We need 4 operations. Rise of 3 at index 0, then drops (0 extra), then a rise of 1 at index 3.',
    },
  ],
  hints: [
    'Think of the array as a histogram viewed from the side. How many distinct "layers" of horizontal strokes do you need?',
    'Each time the height increases from position i-1 to i, you must open `target[i] - target[i-1]` new strokes. Decreases or equal heights cost nothing extra.',
    'The answer is `target[0] + sum of max(0, target[i] - target[i-1]) for i from 1 to n-1`.',
  ],
  functionName: 'minNumberOperations',
  params: ['target'],
  starterCode: {
    javascript: `function minNumberOperations(target) {

}`,
    typescript: `function minNumberOperations(target: number[]): number {\n\n}`,
    python: `def minNumberOperations(target):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 2, 1]], expected: 3 },
    { args: [[3, 1, 1, 2]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[5]], expected: 5 },
    { args: [[1, 1, 1, 1, 1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[5, 4, 3, 2, 1]], expected: 5 },
    { args: [[3, 1, 2]], expected: 4 },
    { args: [[2, 3, 1, 3, 2]], expected: 5 },
    { args: [[100000]], expected: 100000 },
  ],
};
