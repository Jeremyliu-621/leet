import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-strong-pair-xor-i',
  title: 'Maximum Strong Pair XOR I',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\`. A pair of integers \`x\` and \`y\` is called a **strong pair** if it satisfies: \`|x - y| <= min(x, y)\`.

Return the **maximum** XOR value of any strong pair in the array \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 50',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '7',
      explanation: 'The pair (3,4) is strong (|3-4|=1 <= min(3,4)=3) and 3 XOR 4 = 7.',
    },
    {
      input: 'nums = [10,100]',
      output: '0',
      explanation: 'No strong pairs exist (|10-100|=90 > 10). Return 0.',
    },
    {
      input: 'nums = [5,6,25,25]',
      output: '3',
      explanation: 'Strong pairs: (5,6) since |5-6|=1<=5 (XOR=3), (5,5),(6,6),(25,25) with XOR=0. (5,25): |20|>5, not strong. Max XOR = 3.',
    },
  ],
  hints: [
    'Since n ≤ 50 and values ≤ 100, brute-force all O(n²) pairs.',
    'For pair (x, y), check |x - y| <= min(x, y). If so, compute x XOR y.',
    'Track the maximum XOR across all valid strong pairs.',
  ],
  functionName: 'maximumStrongPairXor',
  params: ['nums'],
  starterCode: {
    javascript: 'function maximumStrongPairXor(nums) {\n  \n}\n',
    python: 'def maximumStrongPairXor(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,2,3,4,5]], expected: 7 },
    { args: [[10,100]], expected: 0 },
    { args: [[5,6,25,25]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1,2]], expected: 3 },
    { args: [[3,6]], expected: 5 },
    { args: [[4,5,6]], expected: 3 },
    { args: [[7,7,7]], expected: 0 },
  ],
};
