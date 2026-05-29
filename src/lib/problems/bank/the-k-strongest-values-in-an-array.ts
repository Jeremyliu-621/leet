import type { Problem } from '../types';

export const problem: Problem = {
  id: 'the-k-strongest-values-in-an-array',
  title: 'The K Strongest Values in an Array',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an array of integers \`nums\` and a positive integer \`k\`, return the \`k\` strongest values in the array in **any order**.

The **strength** of a value \`nums[i]\` is defined as:
- Let \`m\` be the **median** of the array, defined as \`sorted[⌊(n-1)/2⌋]\` where \`sorted\` is the array sorted in non-decreasing order and \`n = nums.length\`.
- The strength of \`nums[i]\` is \`|nums[i] - m|\`. If two values have equal strength, the **larger** value is considered stronger.

Return the \`k\` values sorted by strength descending (ties broken by larger value descending).`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^5 <= nums[i] <= 10^5',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5], k = 2',
      output: '[5,1]',
      explanation: 'Sort: [1,2,3,4,5], median = sorted[2] = 3. Strengths: |1-3|=2,|2-3|=1,|3-3|=0,|4-3|=1,|5-3|=2. Strongest two: 5 (str 2) then 1 (str 2, but 5>1).',
    },
    {
      input: 'nums = [1,1,3,5,5], k = 2',
      output: '[5,5]',
      explanation: 'Sort: [1,1,3,5,5], median = sorted[2] = 3. Strengths: 1→2, 1→2, 3→0, 5→2, 5→2. Four values tie at strength 2; the two 5s are strongest by value.',
    },
    {
      input: 'nums = [6,7,11,7,6,8], k = 5',
      output: '[11,8,6,6,7]',
      explanation: 'Sort: [6,6,7,7,8,11], median = sorted[2] = 7. Strengths: 11→4, 8→1, 6→1, 7→0. Top 5 by (str desc, val desc): 11, 8, 6, 6, 7.',
    },
  ],
  hints: [
    'Sort the array to find the median: m = sorted[Math.floor((n-1)/2)].',
    'Sort (a copy of) the array with a custom comparator: primary key is |x-m| descending, secondary key is x descending to break ties by larger value.',
    'Return the first k elements of this sorted result.',
  ],
  functionName: 'getStrongest',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function getStrongest(nums, k) {\n\n}`,
    python: `def getStrongest(nums: list[int], k: int) -> list[int]:\n    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: [5, 1] },
    { args: [[1, 1, 3, 5, 5], 2], expected: [5, 5] },
    { args: [[6, 7, 11, 7, 6, 8], 5], expected: [11, 8, 6, 6, 7] },
  ],
  hiddenTests: [
    // single element
    { args: [[1], 1], expected: [1] },
    // two elements — median = sorted[0], larger wins
    { args: [[1, 5], 1], expected: [5] },
    // all same values — all strength 0, all equal by value
    { args: [[10, 10, 10], 2], expected: [10, 10] },
    // all same, k=1
    { args: [[3, 3, 3, 3], 1], expected: [3] },
    // mixed unsorted array
    { args: [[2, 4, 3, 1, 5], 3], expected: [5, 1, 4] },
    // longer — median at index 3
    { args: [[1, 2, 3, 4, 5, 6, 7], 4], expected: [7, 1, 6, 2] },
    // unsorted, median at index 3
    { args: [[4, 2, 3, 1, 5, 7, 6], 3], expected: [7, 1, 6] },
    // symmetric around median
    { args: [[1, 9, 2, 8, 3, 7, 4, 6, 5], 3], expected: [9, 1, 8] },
    // even-length — median = sorted[2]
    { args: [[1, 2, 3, 4, 5, 6], 2], expected: [6, 5] },
    // negative numbers
    { args: [[-5, -3, -1, 0, 2, 4], 3], expected: [4, -5, 2] },
  ],
};
