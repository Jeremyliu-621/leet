import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-impossible-or',
  title: 'Minimum Impossible OR',
  difficulty: 'medium',
  tags: ['bit-manipulation'],
  description: `You are given a **0-indexed** integer array \`nums\`.

We say that a positive integer \`x\` is **expressible** from \`nums\` if there exist some integers \`nums[i1], nums[i2], ..., nums[ik]\` in \`nums\` such that \`nums[i1] OR nums[i2] OR ... OR nums[ik] = x\`. In other words, \`x\` is expressible if it can be written as the bitwise OR of some subsequence of \`nums\`.

Return the **minimum positive integer** that is **not expressible** from \`nums\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
    'The integers in `nums` are **distinct**.',
  ],
  examples: [
    {
      input: 'nums = [2,1]',
      output: '4',
      explanation: '1 = nums[1], 2 = nums[0], 3 = nums[0] OR nums[1] = 3. 4 is not expressible.',
    },
    {
      input: 'nums = [5,3,2]',
      output: '1',
      explanation: '1 is not expressible since there is no subset whose OR equals 1.',
    },
  ],
  hints: [
    'If a power of 2 is missing from nums, it cannot be expressed as an OR of any subset (no single bit can be synthesized from others).',
    'Check each power of 2 in order: 1, 2, 4, 8, ... The first one absent from nums is the answer.',
    '```js\nfunction minImpossibleOR(nums) {\n  const set = new Set(nums);\n  let x = 1;\n  while (set.has(x)) x *= 2;\n  return x;\n}\n```',
  ],
  functionName: 'minImpossibleOR',
  params: ['nums'],
  starterCode: {
    javascript: `function minImpossibleOR(nums) {
  const set = new Set(nums);
  let x = 1;
  while (set.has(x)) x *= 2;
  return x;
}`,
    typescript: `function minImpossibleOR(nums: number[]): number {
  const set = new Set(nums);
  let x = 1;
  while (set.has(x)) x *= 2;
  return x;
}`,
    python: `def minImpossibleOR(nums):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    s = set(nums); x = 1
    while x in s: x *= 2
    return x`,
  },
  visibleTests: [
    { args: [[2, 1]], expected: 4 },
    { args: [[5, 3, 2]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 2 },
    { args: [[2, 4, 8]], expected: 1 },
    { args: [[1, 2, 4]], expected: 8 },
    { args: [[1, 2, 3]], expected: 4 },
    { args: [[3, 5, 7]], expected: 1 },
    { args: [[1, 2, 4, 8, 16]], expected: 32 },
  ],
};
