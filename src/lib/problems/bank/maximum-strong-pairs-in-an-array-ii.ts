import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-strong-pairs-in-an-array-ii',
  title: 'Maximum Strong Pairs in an Array II',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation', 'trie', 'sliding-window'],
  description: `You are given a **0-indexed** integer array \`nums\`. A pair of integers \`x\` and \`y\` is called a **strong** pair if it satisfies:

- \`|x - y| <= min(x, y)\`

You need to select two integers from \`nums\` and form a strong pair whose **bitwise XOR** is the **maximum** among all strong pairs in the array.

Return the **maximum** XOR value out of all possible strong pairs in the array \`nums\`.

**Note** that you can pick the same integer twice to form a pair (XOR of equal integers is 0).

> **Hint on the condition:** For positive integers, \`|x - y| <= min(x, y)\` is equivalent to \`max(x, y) <= 2 * min(x, y)\`. After sorting, a pair \`(nums[i], nums[j])\` with \`i <= j\` is strong iff \`nums[j] <= 2 * nums[i]\`.`,
  constraints: [
    '1 <= nums.length <= 5 * 10^4',
    '1 <= nums[i] <= 2^20 - 1',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '7',
      explanation: 'The strong pair (3,4) satisfies |3-4|=1 ≤ min(3,4)=3, and 3 XOR 4 = 7. This is the maximum XOR among all strong pairs.',
    },
    {
      input: 'nums = [10,100]',
      output: '0',
      explanation: '|10-100|=90 > min(10,100)=10, so (10,100) is not a strong pair. The only valid pairs use the same element: (10,10) and (100,100) both give XOR=0.',
    },
    {
      input: 'nums = [5,6,25,30]',
      output: '7',
      explanation: '(5,6): |5-6|=1≤5, XOR=3. (25,30): |25-30|=5≤25, XOR=7. The maximum is 7.',
    },
  ],
  hints: [
    'Level 1: A pair (x,y) with x≤y is strong iff y ≤ 2*x. Sort the array and use a two-pointer sliding window: for each j, advance i while nums[j] > 2*nums[i]. The valid candidates for pairing with nums[j] are nums[i..j].',
    'Level 2: To find max XOR within the sliding window efficiently, maintain a binary trie of the elements currently in the window. When the window slides, insert new elements and remove elements no longer valid.',
    'Level 3: Implement the trie with reference counts so deletion is O(log maxVal). For each bit from the most significant down, greedily choose the opposite bit if a path with that bit exists in the trie. The result is the max XOR of nums[j] with any element in the window.',
  ],
  functionName: 'maximumStrongPairXorII',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumStrongPairXorII(nums) {\n\n}`,
    typescript: `function maximumStrongPairXorII(nums: number[]): number {\n\n}`,
    python: `def maximumStrongPairXorII(nums):\n    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 7 },
    { args: [[10, 100]], expected: 0 },
    { args: [[5, 6, 25, 30]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[3, 3]], expected: 0 },
    { args: [[1, 2, 4, 8]], expected: 12 },
    { args: [[1]], expected: 0 },
    { args: [[2, 4]], expected: 6 },
    { args: [[1, 2]], expected: 3 },
    { args: [[3, 4]], expected: 7 },
    { args: [[6, 12]], expected: 10 },
    { args: [[10, 11, 20, 21]], expected: 31 },
  ],
};
