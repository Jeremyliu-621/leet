import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-strong-pair-xor-ii',
  title: 'Maximum Strong Pair XOR II',
  difficulty: 'hard',
  tags: ['arrays', 'bit-manipulation', 'trie'],
  description: `You are given a **0-indexed** integer array \`nums\`. A pair of integers \`x\` and \`y\` is called a **strong** pair if it satisfies the condition:

- \`|x - y| <= min(x, y)\`

You need to select two integers from \`nums\` and form a strong pair whose **bitwise XOR** is the **maximum** among all strong pairs in the array.

Return the **maximum** XOR value out of all possible strong pairs in the array \`nums\`.

**Note** that you can pick the same integer twice to form a pair.`,
  constraints: [
    '1 <= nums.length <= 5 * 10^4',
    '1 <= nums[i] <= 2^20 - 1',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '7',
      explanation:
        'The strong pair (3,4) satisfies |3-4|=1 <= min(3,4)=3. XOR = 3^4 = 7, which is the maximum.',
    },
    {
      input: 'nums = [5,6,25,30]',
      output: '7',
      explanation:
        '(5,6): |5-6|=1<=5, XOR=3. (25,30): |25-30|=5<=25, XOR=7. Maximum is 7.',
    },
  ],
  hints: [
    'A pair (x,y) with x<=y is strong iff y <= 2*x.',
    'Sort nums and use a sliding window trie: for each y=nums[j], keep all x with x >= y/2 in the trie.',
    'Use a trie with counts. When nums[left]*2 < nums[right], remove nums[left] from the trie and advance left.',
    'Query the trie greedily bit-by-bit (try to set each bit) to find max XOR with the current y.',
  ],
  functionName: 'maximumStrongPairXor',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumStrongPairXor(nums) {\n  \n}`,
    typescript: `function maximumStrongPairXor(nums: number[]): number {\n  \n}`,
    python: `def maximumStrongPairXor(nums):\n    `,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 7 },
    { args: [[5, 6, 25, 30]], expected: 7 },
    { args: [[1, 6, 1, 1, 2]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 7 },
    { args: [[5, 6, 25, 30]], expected: 7 },
    { args: [[1, 6, 1, 1, 2]], expected: 3 },
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 3 },
    { args: [[3, 4]], expected: 7 },
    { args: [[6, 12]], expected: 10 },
    { args: [[10, 11, 20, 21]], expected: 31 },
  ],
};
