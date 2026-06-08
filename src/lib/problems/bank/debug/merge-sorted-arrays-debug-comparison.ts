import type { Problem } from '../../types';

export const problem: Problem = {
  id: 'merge-sorted-arrays-debug-comparison',
  title: 'Fix the Bug: Merge Two Sorted Arrays',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  kind: 'debug',
  description: `The following implementation to **merge two sorted arrays** into one sorted array has a bug. Given two sorted arrays \`nums1\` and \`nums2\`, return a single sorted array containing all elements.

Find and fix the bug so all tests pass.

**Hint:** The comparison operator is wrong.`,
  constraints: [
    '0 <= nums1.length, nums2.length <= 1000',
    '-10^6 <= nums1[i], nums2[i] <= 10^6',
    'nums1 and nums2 are sorted in non-decreasing order.',
  ],
  examples: [
    {
      input: 'nums1 = [1,3,5], nums2 = [2,4,6]',
      output: '[1,2,3,4,5,6]',
    },
    {
      input: 'nums1 = [1,2], nums2 = [3,4]',
      output: '[1,2,3,4]',
    },
  ],
  hints: [
    'Run the code on [1,3,5] and [2,4,6]. Is the output sorted in ascending order?',
    'The comparison `nums1[i] >= nums2[j]` picks from nums1 when it should pick the *smaller* element. The condition should be `<=` or just `<`.',
    'Change `>=` to `<=` (or `>` to `<`) so we always take the smaller element first.',
  ],
  functionName: 'mergeSorted',
  params: ['nums1', 'nums2'],
  buggyCode: {
    javascript: `function mergeSorted(nums1, nums2) {
  const result = [];
  let i = 0, j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] >= nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) { result.push(nums1[i]); i++; }
  while (j < nums2.length) { result.push(nums2[j]); j++; }
  return result;
}`,
    python: `def mergeSorted(nums1, nums2):
    result = []
    i, j = 0, 0
    while i < len(nums1) and j < len(nums2):
        if nums1[i] >= nums2[j]:
            result.append(nums1[i])
            i += 1
        else:
            result.append(nums2[j])
            j += 1
    result.extend(nums1[i:])
    result.extend(nums2[j:])
    return result`,
  },
  starterCode: {
    javascript: `function mergeSorted(nums1, nums2) {
  const result = [];
  let i = 0, j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] >= nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) { result.push(nums1[i]); i++; }
  while (j < nums2.length) { result.push(nums2[j]); j++; }
  return result;
}`,
    python: `def mergeSorted(nums1, nums2):
    result = []
    i, j = 0, 0
    while i < len(nums1) and j < len(nums2):
        if nums1[i] >= nums2[j]:
            result.append(nums1[i])
            i += 1
        else:
            result.append(nums2[j])
            j += 1
    result.extend(nums1[i:])
    result.extend(nums2[j:])
    return result`,
  },
  visibleTests: [
    { args: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[1, 2], [3, 4]], expected: [1, 2, 3, 4] },
  ],
  hiddenTests: [
    { args: [[], [1, 2, 3]], expected: [1, 2, 3] },
    { args: [[1, 2, 3], []], expected: [1, 2, 3] },
    { args: [[1, 1], [1, 1]], expected: [1, 1, 1, 1] },
    { args: [[-3, -1, 0], [-2, 1, 5]], expected: [-3, -2, -1, 0, 1, 5] },
  ],
};
