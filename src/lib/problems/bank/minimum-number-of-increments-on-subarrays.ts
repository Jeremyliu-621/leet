import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-increments-on-subarrays',
  title: 'Minimum Number of Increments on Subarrays',
  difficulty: 'hard',
  tags: ['arrays', 'stack', 'dynamic-programming'],
  description: `You are given an array \`target\` of positive integers. You start with an array \`initial\` of all zeros with the same length.

Each operation: choose any non-empty **contiguous subarray** of \`initial\` and increment **every element** in it by 1.

Return the **minimum number of operations** needed to make \`initial\` equal to \`target\`.`,
  constraints: [
    '1 <= target.length <= 10^5',
    '1 <= target[i] <= 10^5',
  ],
  examples: [
    {
      input: 'target = [3,1,1,2]',
      output: '4',
      explanation: '3 ops covering index 0 (reaching 3), then 1 op covering index 3 to bring it to 2. Total: 4.',
    },
    {
      input: 'target = [1,1,1,1]',
      output: '1',
      explanation: 'One operation covering the entire array increments all elements to 1.',
    },
  ],
  hints: [
    'Level 1: Think about what changes between adjacent elements. Each upward step from target[i-1] to target[i] must be covered by new operations that start at index i (they cannot extend from the left).',
    'Level 2: The answer equals target[0] plus the sum of max(0, target[i] - target[i-1]) for all i from 1 to n-1. Downward steps reuse existing operations; only upward steps require new ones.',
    'Level 3: Formal proof: each "mountain" in the target array requires target[0] + sum of positive differences. This is because operations that cover a downward transition can simply terminate earlier, while new operations must begin at each increase.',
  ],
  functionName: 'minNumberOperations',
  params: ['target'],
  starterCode: {
    javascript: `function minNumberOperations(target) {
  let ops = target[0];
  for (let i = 1; i < target.length; i++) {
    if (target[i] > target[i - 1]) {
      ops += target[i] - target[i - 1];
    }
  }
  return ops;
}`,
    typescript: `function minNumberOperations(target: number[]): number {
  let ops = target[0];
  for (let i = 1; i < target.length; i++) {
    if (target[i] > target[i - 1]) {
      ops += target[i] - target[i - 1];
    }
  }
  return ops;
}`,
    python: `def minNumberOperations(target):
    ops = target[0]
    for i in range(1, len(target)):
        if target[i] > target[i - 1]:
            ops += target[i] - target[i - 1]
    return ops`,
  },
  visibleTests: [
    { args: [[1, 1, 1, 1]], expected: 1 },
    { args: [[3, 1, 1, 2]], expected: 4 },
    { args: [[3, 3]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2, 3, 4]], expected: 4 },
    { args: [[4, 2, 1, 3]], expected: 6 },
    { args: [[1, 10, 1]], expected: 10 },
    { args: [[5, 1, 5]], expected: 9 },
    { args: [[1, 2, 3, 2, 1]], expected: 3 },
  ],
};
