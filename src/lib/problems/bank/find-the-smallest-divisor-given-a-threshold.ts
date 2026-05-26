import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-smallest-divisor-given-a-threshold',
  title: 'Find the Smallest Divisor Given a Threshold',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `Given an array of integers \`nums\` and an integer \`threshold\`, choose a **positive integer divisor**, divide all the elements of the array by it, and sum the results (rounding each division **up** to the nearest integer).

Find the **smallest** such divisor such that the result of the division sum is less than or equal to \`threshold\`.

It is guaranteed that there will be an answer.`,
  constraints: [
    '1 <= nums.length <= 5 * 10^4',
    '1 <= nums[i] <= 10^6',
    'nums.length <= threshold <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,2,5,9], threshold = 6',
      output: '5',
      explanation: 'With divisor 5: ceil(1/5)+ceil(2/5)+ceil(5/5)+ceil(9/5) = 1+1+1+2 = 5 ≤ 6. With divisor 4: 1+1+2+3 = 7 > 6. So 5 is the smallest valid divisor.',
    },
    {
      input: 'nums = [44,22,33,11,1], threshold = 5',
      output: '44',
      explanation: 'The divisor must be at least 44 so that each element contributes at most 1 (the first element). ceil(44/44)+ceil(22/44)+ceil(33/44)+ceil(11/44)+ceil(1/44) = 1+1+1+1+1 = 5 ≤ 5.',
    },
    {
      input: 'nums = [21,21,21,21,21], threshold = 10',
      output: '11',
      explanation: 'With divisor 11: ceil(21/11)*5 = 2*5 = 10 ≤ 10. With divisor 10: ceil(21/10)*5 = 3*5 = 15 > 10.',
    },
  ],
  hints: [
    'The answer lies between 1 and max(nums). Binary search on the divisor value.',
    'The sum function is monotonically non-increasing as the divisor grows — a larger divisor means a smaller (or equal) sum. Use this to decide whether to go left or right.',
    'For a candidate divisor `mid`, compute `sum = Σ ceil(nums[i] / mid)`. If `sum <= threshold`, the answer is ≤ mid (try smaller); otherwise the answer is > mid.',
  ],
  functionName: 'smallestDivisor',
  params: ['nums', 'threshold'],
  starterCode: {
    javascript: `function smallestDivisor(nums, threshold) {
  let lo = 1, hi = Math.max(...nums);
  // Binary search: find smallest divisor d such that Σ ceil(nums[i]/d) <= threshold
}`,
    python: `def smallestDivisor(nums, threshold):
    import math
    lo, hi = 1, max(nums)
    # Binary search: find smallest divisor d such that sum(ceil(x/d) for x in nums) <= threshold
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 5, 9], 6], expected: 5 },
    { args: [[44, 22, 33, 11, 1], 5], expected: 44 },
    { args: [[21, 21, 21, 21, 21], 10], expected: 11 },
  ],
  hiddenTests: [
    { args: [[2, 3, 5, 7, 11], 11], expected: 3 },
    { args: [[1, 2, 3], 6], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 8], expected: 3 },
    { args: [[1000000], 1], expected: 1000000 },
    { args: [[1, 1, 1, 1], 4], expected: 1 },
  ],
};
