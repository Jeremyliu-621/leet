import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-elements-with-smaller-and-greater-element',
  title: 'Count Elements With Smaller and Greater Element',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return the number of elements that have **both** a smaller and a greater element appearing in \`nums\`.

More formally, count the elements \`nums[i]\` such that there exist indices \`j\` and \`k\` where \`nums[j] < nums[i]\` and \`nums[k] > nums[i]\`.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`-10^5 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [11,7,2,15]',
      output: '2',
      explanation: 'Min=2, max=15. Elements 7 and 11 have smaller and greater elements → count 2.',
    },
    {
      input: 'nums = [-3,3,3,90]',
      output: '2',
      explanation: 'Min=-3, max=90. Both 3s qualify → count 2.',
    },
    {
      input: 'nums = [3,1,2]',
      output: '1',
      explanation: 'Min=1, max=3. Only 2 qualifies → count 1.',
    },
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
  hints: [
    'An element has both a smaller and a greater element if and only if it is strictly between the array minimum and maximum.',
    'Find the minimum and maximum of the array. Then count elements strictly greater than min and strictly less than max.',
    '`return nums.filter(x => x > Math.min(...nums) && x < Math.max(...nums)).length`',
  ],
  visibleTests: [
    { args: [[11, 7, 2, 15]], expected: 2 },
    { args: [[-3, 3, 3, 90]], expected: 2 },
    { args: [[3, 1, 2]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[1, 2, 3, 4, 5]], expected: 3 },
    { args: [[5, 5, 5, 5]], expected: 0 },
    { args: [[-5, 0, 5]], expected: 1 },
    { args: [[1, 2]], expected: 0 },
  ],
};
