import type { Problem } from '../types';

export const problem: Problem = {
  id: 'form-smallest-number-from-two-digit-arrays',
  title: 'Form Smallest Number From Two Digit Arrays',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given two arrays of **unique** digits \`nums1\` and \`nums2\`, return the **smallest** number that contains **at least one digit** from each array.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 9',
    '1 <= nums1[i], nums2[j] <= 9',
    'All digits in nums1 are unique.',
    'All digits in nums2 are unique.',
  ],
  examples: [
    {
      input: 'nums1 = [4,1,3], nums2 = [5,7]',
      output: '15',
      explanation: 'No common digit. Smallest from each: 1 and 5. Form min(15, 51) = 15.',
    },
    {
      input: 'nums1 = [3,5,2,6], nums2 = [3,1,7]',
      output: '3',
      explanation: 'Common digit 3 is in both arrays. Return 3 (a single-digit answer).',
    },
    {
      input: 'nums1 = [1], nums2 = [1]',
      output: '1',
      explanation: 'Common digit 1. Return 1.',
    },
  ],
  hints: [
    'If a digit appears in both arrays, it alone satisfies the condition — pick the smallest such digit.',
    'If no common digit exists, you must form a 2-digit number using the minimum from each array.',
    'When forming the 2-digit number, try both orderings (min1*10+min2 and min2*10+min1) and return the smaller.',
  ],
  functionName: 'minNumber',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function minNumber(nums1, nums2) {

}`,
    python: `def minNumber(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[4, 1, 3], [5, 7]], expected: 15 },
    { args: [[3, 5, 2, 6], [3, 1, 7]], expected: 3 },
    { args: [[1], [1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[5, 3], [4, 6]], expected: 34 },
    { args: [[1, 2, 3], [4, 5, 6]], expected: 14 },
    { args: [[9], [9]], expected: 9 },
    { args: [[2, 8], [1, 9]], expected: 12 },
    { args: [[1], [2]], expected: 12 },
  ],
};
