import type { Problem } from '../types';

export const problem: Problem = {
  id: 'keep-multiplying-found-values',
  title: 'Keep Multiplying Found Values by Two',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array of integers \`nums\`. You are also given an integer \`original\` which is the first number that needs to be searched for in \`nums\`.

You then do the following steps:
1. If \`original\` is found in \`nums\`, **multiply** it by two (i.e., set \`original = 2 * original\`).
2. Otherwise, **stop** the process.
3. **Repeat** this process with the new number as long as you keep finding the number.

Return the **final** value of \`original\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i], original <= 1000',
  ],
  examples: [
    {
      input: 'nums = [5,3,6,1,12], original = 3',
      output: '24',
      explanation: '3 → found → 6 → found → 12 → found → 24 → not found → 24.',
    },
    {
      input: 'nums = [2,7,9], original = 4',
      output: '4',
      explanation: '4 not found in array, return 4 immediately.',
    },
  ],
  hints: [
    'Level 1: Put all nums in a Set for O(1) lookup.',
    'Level 2: While original is in the set, double it.',
    'Level 3: const s=new Set(nums);while(s.has(original))original*=2;return original;',
  ],
  functionName: 'findFinalValue',
  params: ['nums', 'original'],
  starterCode: {
    javascript: `function findFinalValue(nums, original) {
  const s = new Set(nums);
  while (s.has(original)) original *= 2;
  return original;
}`,
    typescript: `function findFinalValue(nums: number[], original: number): number {
  const s = new Set(nums);
  while (s.has(original)) original *= 2;
  return original;
}`,
    python: `def findFinalValue(nums, original):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    s = set(nums)
    while original in s:
        original *= 2
    return original`,
  },
  visibleTests: [
    { args: [[5, 3, 6, 1, 12], 3], expected: 24 },
    { args: [[2, 7, 9], 4], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 2, 4, 8], 1], expected: 16 },
    { args: [[1000], 1000], expected: 2000 },
    { args: [[5], 5], expected: 10 },
    { args: [[1, 2, 4], 3], expected: 3 },
    { args: [[3, 6, 12], 3], expected: 24 },
  ],
};
