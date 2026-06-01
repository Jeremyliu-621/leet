import type { Problem } from '../types';

export const problem: Problem = {
  id: 'xor-parity-of-sum',
  title: 'XOR Parity of Array Sum',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'arrays'],
  description: `Given an integer array \`nums\`, determine whether the **sum of all elements** is odd or even without actually computing the sum.

Return \`true\` if the sum is **odd**, or \`false\` if the sum is **even**.

**Key insight:** The parity (odd/even) of a sum equals the XOR of the parities of each element. An integer is odd if its least-significant bit is 1. Therefore, the parity of the sum equals the XOR of the least-significant bits of all elements.

You must solve this in **O(n)** time using only bit operations — no division or modulo.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1, 2, 3]',
      output: 'false',
      explanation: '1 + 2 + 3 = 6 (even). XOR of LSBs: 1 XOR 0 XOR 1 = 0 → false.',
    },
    {
      input: 'nums = [1, 3, 5]',
      output: 'true',
      explanation: '1 + 3 + 5 = 9 (odd). XOR of LSBs: 1 XOR 1 XOR 1 = 1 → true.',
    },
    {
      input: 'nums = [2, 4, 6]',
      output: 'false',
      explanation: 'All even numbers. Sum = 12 (even). XOR of LSBs: 0 XOR 0 XOR 0 = 0 → false.',
    },
  ],
  hints: [
    'The parity of a sum depends only on how many odd numbers appear. Even numbers do not change parity. Count the odd numbers — if the count is odd, the sum is odd.',
    'You can avoid counting altogether: XOR together the lowest bit (`n & 1`) of each element. The result is 1 if and only if the sum is odd.',
    `XOR the parity bit of every element:\n\`\`\`js\nfunction isOddSum(nums) {\n  let parity = 0;\n  for (const n of nums) parity ^= (n & 1);\n  return parity === 1;\n}\n\`\`\``,
  ],
  functionName: 'isOddSum',
  params: ['nums'],
  starterCode: {
    javascript: `function isOddSum(nums) {\n\n}`,
    typescript: `function isOddSum(nums: number[]): boolean {\n\n}`,
    python: `def is_odd_sum(nums: list[int]) -> bool:\n    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: false },
    { args: [[1, 3, 5]], expected: true },
    { args: [[2, 4, 6]], expected: false },
    { args: [[7]], expected: true },
  ],
  hiddenTests: [
    { args: [[0]], expected: false },
    { args: [[1]], expected: true },
    { args: [[-1, -1]], expected: false },
    { args: [[-1, 2]], expected: true },
    { args: [[1000000000, 999999999]], expected: true },
    { args: [[2, 2, 2, 2]], expected: false },
    { args: [[1, 1, 1]], expected: true },
    { args: [[0, 0, 0, 1]], expected: true },
  ],
};
