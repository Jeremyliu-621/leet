import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-elements-with-strictly-smaller-and-greater-elements',
  title: 'Count Elements With Strictly Smaller and Greater Elements',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return the number of elements that have **both** a strictly smaller and a strictly greater element appear in \`nums\`.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`-10^5 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [11,7,2,15]',
      output: '2',
      explanation: 'The element 7 has a strictly smaller element (2) and a strictly greater element (11). Similarly, 11 has 7 and 15. Elements 2 and 15 do not qualify.',
    },
    {
      input: 'nums = [-3,3,3,90]',
      output: '2',
      explanation: 'Both 3s have -3 (strictly smaller) and 90 (strictly greater).',
    },
    {
      input: 'nums = [6,5,4,3,2]',
      output: '3',
      explanation: 'Elements 3, 4, and 5 each have something strictly smaller and strictly greater.',
    },
  ],
  hints: [
    'Find the minimum and maximum of the array first. Any element equal to the minimum has nothing strictly smaller, and any element equal to the maximum has nothing strictly greater.',
    'An element qualifies if and only if it is strictly greater than the array minimum AND strictly less than the array maximum.',
    'Use `Math.min(...nums)` and `Math.max(...nums)`, then count elements `x` where `x !== min && x !== max` — which is equivalent to `x > min && x < max`.',
  ],
  functionName: 'countElements',
  params: ['nums'],
  starterCode: {
    javascript: `function countElements(nums) {
  const mn = Math.min(...nums), mx = Math.max(...nums);
  return nums.filter(x => x > mn && x < mx).length;
}`,
    typescript: `function countElements(nums: number[]): number {
  const mn = Math.min(...nums), mx = Math.max(...nums);
  return nums.filter(x => x > mn && x < mx).length;
}`,
    python: `def countElements(nums):
    mn, mx = min(nums), max(nums)
    return sum(1 for x in nums if mn < x < mx)`,
  },
  visibleTests: [
    { args: [[11, 7, 2, 15]], expected: 2 },
    { args: [[-3, 3, 3, 90]], expected: 2 },
    { args: [[6, 5, 4, 3, 2]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[11, 7, 2, 15]], expected: 2 },
    { args: [[-3, 3, 3, 90]], expected: 2 },
    { args: [[6, 5, 4, 3, 2]], expected: 3 },
    { args: [[3, 3, 3, 3]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[100]], expected: 0 },
    { args: [[1, 3, 2, 5, 4]], expected: 3 },
  ],
};
