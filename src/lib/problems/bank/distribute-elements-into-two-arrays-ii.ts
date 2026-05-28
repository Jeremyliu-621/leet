import type { Problem } from '../types';

export const problem: Problem = {
  id: 'distribute-elements-into-two-arrays-ii',
  title: 'Distribute Elements Into Two Arrays II',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\` of length \`n\`.

We apply the following procedure:

1. Let \`arr1\` = [\`nums[0]\`] and \`arr2\` = [\`nums[1]\`].
2. For each subsequent element \`nums[i]\` (2 <= i < n):
   - Let \`greaterCount(arr, val)\` = the number of elements in \`arr\` that are **strictly greater** than \`val\`.
   - If \`greaterCount(arr1, nums[i]) > greaterCount(arr2, nums[i])\`, append \`nums[i]\` to \`arr1\`.
   - If \`greaterCount(arr1, nums[i]) < greaterCount(arr2, nums[i])\`, append \`nums[i]\` to \`arr2\`.
   - If they are **equal**, append \`nums[i]\` to \`arr1\`.

Return the concatenation of \`arr1\` and \`arr2\` as the result array.`,
  constraints: [
    '`3 <= n <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
    '`nums[0] != nums[1]`',
  ],
  examples: [
    {
      input: 'nums = [2,1,3,3]',
      output: '[2,3,3,1]',
      explanation: 'arr1=[2], arr2=[1]. For 3: greaterCount([2],3)=0, greaterCount([1],3)=0 — tie, append to arr1 → arr1=[2,3]. For second 3: greaterCount([2,3],3)=0, greaterCount([1],3)=0 — tie, append to arr1 → arr1=[2,3,3]. Result: [2,3,3,1].',
    },
    {
      input: 'nums = [5,14,3,1,2]',
      output: '[5,3,1,2,14]',
      explanation: 'arr1=[5], arr2=[14]. For 3: greaterCount([5],3)=1, greaterCount([14],3)=1 — tie → arr1=[5,3]. For 1: greaterCount([5,3],1)=2, greaterCount([14],1)=1 → arr1=[5,3,1]. For 2: greaterCount([5,3,1],2)=2, greaterCount([14],2)=1 → arr1=[5,3,1,2]. 14 goes to arr2. Result: [5,3,1,2,14].',
    },
    {
      input: 'nums = [3,3,3,3]',
      output: '[3,3,3,3]',
      explanation: 'All ties result in appending to arr1. arr1=[3,3,3], arr2=[3]. Result: [3,3,3,3].',
    },
  ],
  hints: [
    'For each new element, you need to count how many elements in arr1 and arr2 are strictly greater than it.',
    'A simple O(n²) approach: iterate through each array to count strictly greater elements.',
    'For a more efficient solution, maintain sorted arrays and use binary search to find the count of elements greater than the target.',
    'The number of elements strictly greater than val in a sorted array is: arr.length - (index of first element > val).',
  ],
  functionName: 'resultArray',
  params: ['nums'],
  starterCode: {
    javascript: `function resultArray(nums) {

}`,
    typescript: "function resultArray(nums: number[]): number[] {\n\n}",

    python: `def resultArray(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 3]], expected: [2, 3, 3, 1] },
    { args: [[5, 14, 3, 1, 2]], expected: [5, 3, 1, 2, 14] },
    { args: [[3, 3, 3, 3]], expected: [3, 3, 3, 3] },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: [1, 2] },
    { args: [[2, 1]], expected: [2, 1] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 3, 4, 5, 2] },
  ],
};
