import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-in-two-arrays',
  title: 'Count Pairs in Two Arrays',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `Given two **0-indexed** integer arrays \`nums1\` and \`nums2\` of length \`n\`, return the number of pairs of indices \`(i, j)\` where \`i < j\` and:

\`\`\`
nums1[i] + nums1[j] > nums2[i] + nums2[j]
\`\`\``,
  constraints: [
    '1 <= n <= 10^5',
    '-10^4 <= nums1[i], nums2[i] <= 10^4',
    'nums1.length == nums2.length == n',
  ],
  examples: [
    {
      input: 'nums1 = [2,1,2,1], nums2 = [1,2,1,2]',
      output: '1',
      explanation:
        'diff = [1,-1,1,-1]. Sorted: [-1,-1,1,1]. Only pair (2,3) has diff[2]+diff[3]=1+1=2>0. Count=1.',
    },
    {
      input: 'nums1 = [1,10,6,2], nums2 = [1,4,1,2]',
      output: '5',
      explanation:
        'diff = [0,6,5,0]. Sorted: [0,0,5,6]. Valid pairs where diff[i]+diff[j]>0: (0,2),(0,3),(1,2),(1,3),(2,3) — 5 pairs.',
    },
    {
      input: 'nums1 = [3,2,1], nums2 = [1,2,3]',
      output: '1',
      explanation:
        'diff = [2,0,-2]. Sorted: [-2,0,2]. Only pair (1,2): 0+2=2>0. Count=1.',
    },
  ],
  hints: [
    'Level 1: Rewrite the condition: nums1[i]+nums1[j] > nums2[i]+nums2[j] is equivalent to (nums1[i]-nums2[i]) + (nums1[j]-nums2[j]) > 0. Define diff[k] = nums1[k] - nums2[k].',
    'Level 2: Sort the diff array. For each index i (left pointer), use binary search to find the smallest index j > i such that diff[i] + diff[j] > 0, i.e., diff[j] > -diff[i].',
    'Level 3: All indices from that binary-search lower bound to n-1 form valid pairs with i. Accumulate (n - lo) for each i where lo is the binary-search result.',
  ],
  functionName: 'countPairs',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function countPairs(nums1, nums2) {

}`,
    typescript: `function countPairs(nums1: number[], nums2: number[]): number {

}`,
    python: `def countPairs(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 2, 1], [1, 2, 1, 2]], expected: 1 },
    { args: [[1, 10, 6, 2], [1, 4, 1, 2]], expected: 5 },
    { args: [[3, 2, 1], [1, 2, 3]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 1], [1, 1]], expected: 0 },
    { args: [[2, 2, 2], [1, 1, 1]], expected: 3 },
    { args: [[1, 2, 3], [3, 2, 1]], expected: 1 },
    { args: [[5, 5, 5, 5], [1, 1, 1, 1]], expected: 6 },
    { args: [[1, 1, 1, 1], [5, 5, 5, 5]], expected: 0 },
    { args: [[3, 1, 4, 1, 5], [9, 2, 6, 5, 3]], expected: 1 },
    { args: [[1], [1]], expected: 0 },
    { args: [[4, 3], [1, 2]], expected: 1 },
  ],
};
