import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-distinct-integers-added-to-array',
  title: 'Count Distinct Integers Added to Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given two **0-indexed** integer arrays \`nums1\` and \`nums2\`. Each element of \`nums2\` is added to \`nums1\`.

Return the **number of distinct integers** belonging to the resulting array of \`nums1\` after adding all elements of \`nums2\`.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 1000',
    '1 <= nums1[i], nums2[j] <= 1000',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,3,4,5], nums2 = [1,2,3,4,5]',
      output: '5',
      explanation: 'Both arrays have the same elements, so the resulting distinct set is {1,2,3,4,5} with size 5.',
    },
    {
      input: 'nums1 = [1,3,5,7,9], nums2 = [0,2,4,6,8]',
      output: '10',
      explanation: 'No overlap between the arrays. All 10 elements are distinct.',
    },
    {
      input: 'nums1 = [1], nums2 = [1,2,3]',
      output: '3',
      explanation: 'After adding nums2 to nums1, the resulting set is {1,2,3} with size 3.',
    },
  ],
  hints: [
    'Level 1: Add all elements from nums2 into nums1, then count the distinct elements.',
    'Level 2: Use a Set containing all elements from both arrays. The answer is the set size.',
    'Level 3: One-liner: new Set([...nums1, ...nums2]).size.',
  ],
  functionName: 'distinctIntegers',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function distinctIntegers(nums1, nums2) {
  return new Set([...nums1, ...nums2]).size;
}`,
    typescript: `function distinctIntegers(nums1: number[], nums2: number[]): number {
  return new Set([...nums1, ...nums2]).size;
}`,
    python: `def distinctIntegers(nums1, nums2):
    return len(set(nums1) | set(nums2))`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]], expected: 5 },
    { args: [[1, 3, 5, 7, 9], [0, 2, 4, 6, 8]], expected: 10 },
    { args: [[1], [1, 2, 3]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[1, 2], [3, 4]], expected: 4 },
    { args: [[1, 1, 1], [2, 2, 2]], expected: 2 },
    { args: [[5, 3, 1], [1, 3, 5]], expected: 3 },
    { args: [[1000], [1]], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12]], expected: 12 },
  ],
};
