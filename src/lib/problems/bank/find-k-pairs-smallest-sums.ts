import type { Problem } from '../types';

const JS_PREAMBLE = `
function findKPairsRunner(nums1, nums2, k) {
  const r = findKPairs(nums1, nums2, Number(k));
  return r.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]));
}
`.trim();

const PY_PREAMBLE = `
def findKPairsRunner(nums1, nums2, k):
    r = findKPairs(list(nums1), list(nums2), int(k))
    return sorted(r, key=lambda p: (p[0], p[1]))
`.trim();

export const problem: Problem = {
  id: 'find-k-pairs-smallest-sums',
  title: 'Find K Pairs with Smallest Sums',
  difficulty: 'medium',
  tags: ['heap', 'binary-search'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\` sorted in **non-decreasing** order and an integer \`k\`.

Define a pair \`(u, v)\` which consists of one element from the first array and one element from the second array.

Return the \`k\` pairs \`(u1, v1), (u2, v2), ..., (uk, vk)\` with the **smallest sums**.

> **Note:** The \`findKPairsRunner\` wrapper sorts pairs for comparison. Implement \`findKPairs(nums1, nums2, k)\`.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 10^5',
    '-10^9 <= nums1[i], nums2[i] <= 10^9',
    'nums1 and nums2 are sorted in non-decreasing order',
    '1 <= k <= 10^4',
  ],
  examples: [
    {
      input: 'nums1 = [1,7,11], nums2 = [2,4,6], k = 3',
      output: '[[1,2],[1,4],[1,6]]',
      explanation: 'The first 3 pairs are: [1,2] (sum=3), [1,4] (sum=5), [1,6] (sum=7).',
    },
    {
      input: 'nums1 = [1,1,2], nums2 = [1,2,3], k = 2',
      output: '[[1,1],[1,1]]',
      explanation: 'The first 2 pairs with smallest sums are both [1,1].',
    },
  ],
  hints: [
    'Use a min-heap seeded with (nums1[i] + nums2[0], i, 0) for each i in nums1 (up to k entries).',
    'Each time you pop (sum, i, j) from the heap, add (i, j) to results, then push (nums1[i] + nums2[j+1], i, j+1) if j+1 is valid.',
    'Stop after extracting k pairs.',
  ],
  functionName: 'findKPairsRunner',
  params: ['nums1', 'nums2', 'k'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: 'function findKPairs(nums1, nums2, k) {\n  \n}\n',
    python: 'def findKPairs(nums1, nums2, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 7, 11], [2, 4, 6], 3], expected: [[1, 2], [1, 4], [1, 6]] },
    { args: [[1, 1, 2], [1, 2, 3], 2], expected: [[1, 1], [1, 1]] },
    { args: [[1, 2], [3], 3], expected: [[1, 3], [2, 3]] },
  ],
  hiddenTests: [
    { args: [[1, 7, 11], [2, 4, 6], 5], expected: [[1, 2], [1, 4], [1, 6], [7, 2], [7, 4]] },
    { args: [[-10, -4, 0, 0, 6], [3, 5, 6, 7, 8, 100], 6], expected: [[-10, 3], [-10, 5], [-10, 6], [-10, 7], [-10, 8], [-4, 3]] },
  ],
};
