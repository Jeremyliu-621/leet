import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-maximum-divisibility-score',
  title: 'Find the Maximum Divisibility Score',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given two **0-indexed** integer arrays \`nums\` and \`divisors\`.

The **divisibility score** of \`divisors[i]\` is the number of indices \`j\` such that \`nums[j]\` is divisible by \`divisors[i]\`.

Return the integer \`divisors[i]\` with the **maximum** divisibility score. If there is more than one integer with the maximum score, return the **minimum** of them.`,
  constraints: [
    '1 <= nums.length, divisors.length <= 1000',
    '1 <= nums[i], divisors[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [4,7,9,3,9], divisors = [5,2,3]',
      output: '3',
      explanation: 'Scores: 5→0, 2→1, 3→3. Max score 3 belongs to divisor 3.',
    },
    {
      input: 'nums = [20,14,21,10], divisors = [5,7,5]',
      output: '5',
      explanation: 'Scores: 5→2, 7→2. Tie at 2 → return smallest = 5.',
    },
    {
      input: 'nums = [12], divisors = [10,16]',
      output: '10',
      explanation: 'Scores: 10→0, 16→0. Tie at 0 → return smallest = 10.',
    },
  ],
  hints: [
    'For each divisor, count how many nums are divisible by it. Track the max score and the corresponding minimum divisor.',
    'On a tie (same score), take the smaller divisor value. Iterate divisors and use `score > best || (score == best && d < bestDiv)` to update.',
    'Time complexity: O(n × m) where n = len(nums) and m = len(divisors). This is fine given the constraints.',
  ],
  functionName: 'maxDivScore',
  params: ['nums', 'divisors'],
  starterCode: {
    javascript: `function maxDivScore(nums, divisors) {

}`,
    typescript: "function maxDivScore(nums: number[], divisors: number[]): number {\n\n}",

    python: `def maxDivScore(nums, divisors):
    pass`,
  },
  visibleTests: [
    { args: [[4, 7, 9, 3, 9], [5, 2, 3]], expected: 3 },
    { args: [[20, 14, 21, 10], [5, 7, 5]], expected: 5 },
    { args: [[12], [10, 16]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], [1]], expected: 1 },
    { args: [[6, 12, 18], [2, 3, 6]], expected: 2 },
    { args: [[5], [5, 10]], expected: 5 },
    { args: [[100], [2, 5, 10]], expected: 2 },
  ],
};
