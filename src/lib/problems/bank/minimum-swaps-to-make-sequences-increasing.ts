import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-make-sequences-increasing',
  title: 'Minimum Swaps To Make Sequences Increasing',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\` of the same length. In one operation, you can swap \`nums1[i]\` and \`nums2[i]\`.

Return the **minimum number of swaps** to make both \`nums1\` and \`nums2\` **strictly increasing**. The input is guaranteed to have a valid solution.

**Approach:** DP with two states per index:
- \`keep\`: min swaps to make prefixes valid **without** swapping at this index
- \`swap\`: min swaps to make prefixes valid **by** swapping at this index`,
  constraints: [
    '2 <= nums1.length <= 10^5',
    '0 <= nums1[i], nums2[i] <= 2 * 10^4',
    'The input is guaranteed to have a valid solution.',
  ],
  examples: [
    {
      input: 'nums1 = [1,3,5,4], nums2 = [1,2,3,7]',
      output: '1',
      explanation: 'Swap at index 3: nums1=[1,3,5,7], nums2=[1,2,3,4]. Both strictly increasing.',
    },
    {
      input: 'nums1 = [0,3,5,8,9], nums2 = [2,1,4,6,9]',
      output: '1',
      explanation: 'Swap at index 1: nums1=[0,1,5,8,9], nums2=[2,3,4,6,9].',
    },
    {
      input: 'nums1 = [1,2,3], nums2 = [2,3,4]',
      output: '0',
      explanation: 'Both are already strictly increasing.',
    },
  ],
  hints: [
    'At each index i, two conditions can hold: (A) both pairs work in-place: nums1[i]>nums1[i-1] && nums2[i]>nums2[i-1]; (B) both pairs work crossed: nums1[i]>nums2[i-1] && nums2[i]>nums1[i-1].',
    'If condition A: keep[i]=min(keep[i], keep[i-1]); swap[i]=min(swap[i], swap[i-1]+1). If condition B: keep[i]=min(keep[i], swap[i-1]); swap[i]=min(swap[i], keep[i-1]+1).',
    '```js\nlet keep = 0, swap = 1;\nfor (let i = 1; i < nums1.length; i++) {\n  let nk = Infinity, ns = Infinity;\n  if (nums1[i]>nums1[i-1] && nums2[i]>nums2[i-1]) {\n    nk = Math.min(nk, keep); ns = Math.min(ns, swap+1);\n  }\n  if (nums1[i]>nums2[i-1] && nums2[i]>nums1[i-1]) {\n    nk = Math.min(nk, swap); ns = Math.min(ns, keep+1);\n  }\n  keep = nk; swap = ns;\n}\nreturn Math.min(keep, swap);\n```',
  ],
  functionName: 'minSwap',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function minSwap(nums1, nums2) {
  // return minimum swaps to make both arrays strictly increasing

}`,
    python: `def minSwap(nums1: list, nums2: list) -> int:
    # return minimum swaps to make both arrays strictly increasing
    pass
`,
  },
  visibleTests: [
    { args: [[1, 3, 5, 4], [1, 2, 3, 7]], expected: 1 },
    { args: [[0, 3, 5, 8, 9], [2, 1, 4, 6, 9]], expected: 1 },
    { args: [[1, 2, 3], [2, 3, 4]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 4, 4], [2, 3, 3, 5]], expected: 1 },
    { args: [[1, 3, 5, 7], [2, 4, 6, 8]], expected: 0 },
    { args: [[2, 3, 5], [1, 4, 6]], expected: 0 },
    { args: [[1, 2, 4], [2, 3, 3]], expected: 1 },
  ],
};
