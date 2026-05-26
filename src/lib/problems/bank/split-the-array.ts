import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-the-array',
  title: 'Split the Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\` of **even** length. You have to split the array into two parts \`nums1\` and \`nums2\` such that:
- \`nums1.length == nums2.length == nums.length / 2\`
- \`nums1\` should contain **distinct** elements.
- \`nums2\` should contain **distinct** elements.

Return \`true\` if it is possible to split the array, and \`false\` otherwise.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`nums.length` is even.',
    '`1 <= nums[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums = [1,1,2,2,3,4]',
      output: 'true',
      explanation: 'Split into nums1 = [1,2,3] and nums2 = [1,2,4]. Both have distinct elements.',
    },
    {
      input: 'nums = [1,1,1,1]',
      output: 'false',
      explanation: '1 appears 4 times. Any split would need a group with a repeated 1.',
    },
  ],
  functionName: 'isPossibleToSplit',
  params: ['nums'],
  starterCode: {
    javascript: `/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isPossibleToSplit(nums) {

}`,
    python: `def isPossibleToSplit(nums: list[int]) -> bool:
    pass`,
  },
  hints: [
    'If any element appears more than twice, it would have to appear in the same group at least twice — making that group non-distinct.',
    'Count the frequency of each element. The split is possible if and only if no element has frequency greater than 2.',
    'Use a Map or frequency array. Return `false` if any count exceeds 2, otherwise `true`.',
  ],
  visibleTests: [
    { args: [[1, 1, 2, 2, 3, 4]], expected: true },
    { args: [[1, 1, 1, 1]], expected: false },
    { args: [[1, 2, 3, 4]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 1, 2, 2]], expected: true },
    { args: [[1, 2, 2, 2]], expected: false },
    { args: [[3, 3, 3, 3, 3, 3]], expected: false },
    { args: [[1, 2, 3, 4, 5, 6]], expected: true },
    { args: [[1, 1, 2, 2, 3, 3]], expected: true },
    { args: [[1, 1, 1, 2, 2, 2]], expected: false },
  ],
};
