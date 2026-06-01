import type { Problem } from '../types';

export const problem: Problem = {
  id: 'keep-multiplying-found-values-by-two',
  title: 'Keep Multiplying Found Values by Two',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array of integers \`nums\`. You are also given an integer \`original\` which is the first value that needs to be searched for in \`nums\`.

You then do the following steps:

1. If \`original\` is found in \`nums\`, **multiply** it by two.
2. Otherwise, **stop** the process.
3. Repeat this process with the new value of \`original\`.

Return the **final** value of \`original\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i], original <= 1000',
  ],
  examples: [
    {
      input: 'nums = [5,3,6,1,12], original = 3',
      output: '24',
      explanation: '3 → found, multiply → 6. 6 → found, multiply → 12. 12 → found, multiply → 24. 24 → not found, stop.',
    },
    {
      input: 'nums = [2,7,9], original = 4',
      output: '4',
      explanation: '4 is not in nums, stop immediately.',
    },
    {
      input: 'nums = [1,2,4,8,16], original = 1',
      output: '32',
      explanation: '1→2→4→8→16→32. 32 not in nums, stop.',
    },
  ],
  hints: [
    'Level 1: Put all nums into a HashSet for O(1) lookup. While the current value is in the set, double it.',
    'Level 2: The value keeps doubling, so the loop runs at most O(log(max_value)) times. With a Set, total time is O(n).',
    'Level 3: while (set.has(original)) original *= 2; return original;',
  ],
  functionName: 'findFinalValue',
  params: ['nums', 'original'],
  starterCode: {
    javascript: `function findFinalValue(nums, original) {
  const set = new Set(nums);
  while (set.has(original)) original *= 2;
  return original;
}`,
    typescript: `function findFinalValue(nums: number[], original: number): number {
  const set = new Set(nums);
  while (set.has(original)) original *= 2;
  return original;
}`,
    python: `def findFinalValue(nums, original):
    s = set(nums)
    while original in s:
        original *= 2
    return original`,
  },
  visibleTests: [
    { args: [[5, 3, 6, 1, 12], 3], expected: 24 },
    { args: [[2, 7, 9], 4], expected: 4 },
    { args: [[1, 2, 4, 8, 16], 1], expected: 32 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 2 },
    { args: [[1], 2], expected: 2 },
    { args: [[3, 6, 12], 3], expected: 24 },
    { args: [[1, 3, 5], 2], expected: 2 },
    { args: [[1000], 500], expected: 500 },
    { args: [[2, 4, 8], 2], expected: 16 },
    { args: [[1, 2, 4, 8, 16, 32, 64], 1], expected: 128 },
  ],
};
