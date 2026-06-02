import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-minimum-value-after-replacing-with-digit-sum',
  title: 'Find Minimum Value After Replacing With Digit Sum',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\`.

You are allowed to replace every element in \`nums\` with its **digit sum**.

The **digit sum** of a number is the sum of all its digits.

Return the **minimum** element in \`nums\` after all replacements.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`1 <= nums[i] <= 10^4`',
  ],
  examples: [
    {
      input: 'nums = [10,12,13,14]',
      output: '1',
      explanation: 'Digit sums: 1+0=1, 1+2=3, 1+3=4, 1+4=5. Minimum is 1.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '1',
      explanation: 'Single-digit numbers stay as-is. Minimum is 1.',
    },
    {
      input: 'nums = [999,19,199]',
      output: '10',
      explanation: 'Digit sums: 9+9+9=27, 1+9=10, 1+9+9=19. Minimum is 10.',
    },
  ],
  hints: [
    'For each number, compute its digit sum by summing the individual digits.',
    'A simple way: convert to string, split, map to Number, and sum.',
    `\`\`\`js
function minValueAfterReplacingWithDigitSum(nums) {
  return Math.min(...nums.map(n => String(n).split('').reduce((s, d) => s + Number(d), 0)));
}\`\`\``,
  ],
  functionName: 'minValueAfterReplacingWithDigitSum',
  params: ['nums'],
  starterCode: {
    javascript: `function minValueAfterReplacingWithDigitSum(nums) {
  return Math.min(...nums.map(n => String(n).split('').reduce((s, d) => s + Number(d), 0)));
}`,
    typescript: `function minValueAfterReplacingWithDigitSum(nums: number[]): number {
  return Math.min(...nums.map(n => String(n).split('').reduce((s, d) => s + Number(d), 0)));
}`,
    python: `def minValueAfterReplacingWithDigitSum(nums):
    return min(sum(int(d) for d in str(n)) for n in nums)`,
  },
  visibleTests: [
    { args: [[10, 12, 13, 14]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: 1 },
    { args: [[999, 19, 199]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[100]], expected: 1 },
    { args: [[9999]], expected: 36 },
    { args: [[11, 22, 33]], expected: 2 },
    { args: [[1000]], expected: 1 },
    { args: [[5678, 1234, 9999]], expected: 10 },
    { args: [[10000]], expected: 1 },
  ],
};
