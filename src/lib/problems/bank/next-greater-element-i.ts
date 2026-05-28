import type { Problem } from '../types';

export const problem: Problem = {
  id: 'next-greater-element-i',
  title: 'Next Greater Element I',
  difficulty: 'easy',
  tags: ['stack', 'hash-map'],
  description: `The **next greater element** of some element \`x\` in an array is the **first greater** element that is to the right of \`x\` in the same array.

You are given two **distinct 0-indexed** integer arrays \`nums1\` and \`nums2\`, where \`nums1\` is a subset of \`nums2\`.

For each \`0 <= i < nums1.length\`, find the index \`j\` such that \`nums1[i] == nums2[j]\` and determine the **next greater element** of \`nums2[j]\` in \`nums2\`. If there is no next greater element, then the answer for this query is \`-1\`.

Return an array \`ans\` of length \`nums1.length\` such that \`ans[i]\` is the next greater element as described above.`,
  constraints: [
    '1 <= nums1.length <= nums2.length <= 1000',
    '0 <= nums1[i], nums2[i] <= 10^4',
    'All integers in nums1 and nums2 are unique.',
    'All the integers of nums1 also appear in nums2.',
  ],
  examples: [
    {
      input: 'nums1 = [4,1,2], nums2 = [1,3,4,2]',
      output: '[-1,3,-1]',
      explanation: '4: no greater element to the right → -1. 1: next greater is 3. 2: none → -1.',
    },
    {
      input: 'nums1 = [2,4], nums2 = [1,2,3,4]',
      output: '[3,-1]',
      explanation: '2: next greater is 3. 4: none → -1.',
    },
  ],
  hints: [
    'Use a monotonic decreasing stack on nums2 to build a next-greater map.',
    'Then for each element in nums1, look up the map.',
    `\`\`\`js
function nextGreaterElement(nums1, nums2) {
  const nextGreater = {};
  const stack = [];
  for (const n of nums2) {
    while (stack.length && stack[stack.length-1]<n) nextGreater[stack.pop()]=n;
    stack.push(n);
  }
  return nums1.map(n => nextGreater[n]??-1);
}\`\`\``,
  ],
  functionName: 'nextGreaterElement',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function nextGreaterElement(nums1, nums2) {

}`,
    typescript: "function nextGreaterElement(nums1: number[], nums2: number[]): number[] {\n\n}",

    python: `def nextGreaterElement(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[4, 1, 2], [1, 3, 4, 2]], expected: [-1, 3, -1] },
    { args: [[2, 4], [1, 2, 3, 4]], expected: [3, -1] },
  ],
  hiddenTests: [
    { args: [[1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]], expected: [7, 7, 7, 7, 7] },
    { args: [[1], [1, 2]], expected: [2] },
    { args: [[3], [1, 2, 3]], expected: [-1] },
    { args: [[2, 3, 1], [1, 2, 3, 4]], expected: [3, 4, 2] },
  ],
};
