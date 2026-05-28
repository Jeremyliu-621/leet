import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-sum-of-array-after-k-negations',
  title: 'Maximize Sum Of Array After K Negations',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` and an integer \`k\`, modify the array exactly \`k\` times: choose any index and replace \`nums[i]\` with \`-nums[i]\`. Return the **largest possible sum** of the array.

**Key insight:** To maximize the sum, negate the most negative values first. If \`k\` negations remain after all negatives are gone, negate the smallest absolute value repeatedly (negating it twice cancels out).`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-100 <= nums[i] <= 100',
    '1 <= k <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [4,2,3], k = 1',
      output: '5',
      explanation: 'Negate 2 → [4,-2,3]? No. Negate the element to minimize loss: negate 2 → sum=4+(-2)+3=5? Better: negate none or negate... Actually negate 4? No. Best: leave as is? Sum=9. Wait, we MUST negate exactly once. Negating 2 gives [4,-2,3]=5. Negating 4 gives [-4,2,3]=1. Negating 3 gives [4,2,-3]=3. Best is negate 2 → 5.',
    },
    {
      input: 'nums = [3,-1,0,2], k = 3',
      output: '6',
      explanation: 'Negate -1 → [3,1,0,2]. k=2 remain, negate 0 twice (no effect): sum=3+1+0+2=6.',
    },
    {
      input: 'nums = [2,-3,-1,5,-4], k = 2',
      output: '13',
      explanation: 'Negate -4 and -3: [2,3,-1,5,4]. Sum=2+3+(-1)+5+4=13. Or negate -4 and -1: 2+3+1+5+(-4)=7. Best: negate the two most negative.',
    },
  ],
  hints: [
    'Sort the array. Negate the most negative values first (smallest values in sorted order).',
    'After negating all negative values (or exhausting k), if k is still odd, negate the element with the smallest absolute value once more.',
    'The answer is the sum of the modified array.',
  ],
  functionName: 'largestSumAfterKNegations',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function largestSumAfterKNegations(nums, k) {
  // nums: number[], k: number
  // Return maximum possible sum after exactly k negations
}`,
    typescript: "function largestSumAfterKNegations(nums: number[], k: number): number {\n  // nums: number[], k: number\n  // Return maximum possible sum after exactly k negations\n}",

    python: `def largestSumAfterKNegations(nums: list[int], k: int) -> int:
    # Your code here
    pass`,
  },
  visibleTests: [
    { args: [[4, 2, 3], 1], expected: 5 },
    { args: [[3, -1, 0, 2], 3], expected: 6 },
    { args: [[2, -3, -1, 5, -4], 2], expected: 13 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: -1 },
    { args: [[-1], 1], expected: 1 },
    { args: [[-1, -1, -1], 3], expected: 3 },
    { args: [[-1, -1, -1], 4], expected: 1 },
    { args: [[1, 2, 3], 3], expected: 4 },
    { args: [[-5, -2, 0, 3], 4], expected: 10 },
    { args: [[5, 6, 9, -3, 3], 2], expected: 20 },
  ],
};
