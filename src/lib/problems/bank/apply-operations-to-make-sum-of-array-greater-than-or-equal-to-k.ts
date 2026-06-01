import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k',
  title: 'Apply Operations to Make Sum of Array Greater Than or Equal to k',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **positive** integer \`k\`. There is an array of positive integers initialized with the single element \`1\`.

You can apply the following operations to the array **any** number of times (in any order):

- Choose any element of the array and **increase** it by \`1\`. This costs **1** operation.
- Choose any element of the array and **duplicate** it (append a copy). This costs **1** operation.

Return the **minimum** number of operations required to make the **sum** of elements in the array **greater than or equal to** \`k\`.`,
  constraints: [
    '1 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'k = 11',
      output: '5',
      explanation: 'Increment once to get [2]. Increment again to get [3]. Duplicate 3 times to get [3,3,3,3]. Sum = 12 >= 11. Total operations = 2 + 3 = 5.',
    },
    {
      input: 'k = 1',
      output: '0',
      explanation: 'The array [1] already has sum 1 >= 1.',
    },
  ],
  hints: [
    'After d increment operations (cost d), the element value is 1+d. After m duplicate operations (cost m), the array has m+1 copies, so sum = (1+d)*(m+1).',
    'Try all values of d from 0 to k-1. For each d, compute the minimum m such that (1+d)*(m+1) >= k: m = ceil(k/(1+d)) - 1.',
    'The total cost is d + m. Return the minimum over all d.',
  ],
  functionName: 'minOperations',
  params: ['k'],
  starterCode: {
    javascript: `function minOperations(k) {
  if (k === 1) return 0;
  let best = Infinity;
  for (let a = 0; a < k; a++) {
    const d = Math.ceil(k / (1 + a)) - 1;
    best = Math.min(best, a + d);
  }
  return best;
}`,
    typescript: `function minOperations(k: number): number {
  if (k === 1) return 0;
  let best = Infinity;
  for (let a = 0; a < k; a++) {
    const d = Math.ceil(k / (1 + a)) - 1;
    best = Math.min(best, a + d);
  }
  return best;
}`,
    python: `def minOperations(k):
    import math
    if k == 1: return 0
    best = float('inf')
    for a in range(k):
        d = math.ceil(k / (1 + a)) - 1
        best = min(best, a + d)
    return best`,
  },
  visibleTests: [
    { args: [11], expected: 5 },
    { args: [1], expected: 0 },
    { args: [2], expected: 1 },
    { args: [4], expected: 2 },
    { args: [6], expected: 3 },
  ],
  hiddenTests: [
    { args: [9], expected: 4 },
    { args: [16], expected: 6 },
    { args: [25], expected: 8 },
    { args: [3], expected: 2 },
    { args: [5], expected: 3 },
    { args: [7], expected: 4 },
    { args: [10], expected: 5 },
    { args: [100], expected: 18 },
  ],
};
