import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-elements-in-two-arrays',
  title: 'Maximum Number of Elements in Two Arrays',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given two **0-indexed** integer arrays \`nums1\` and \`nums2\`. A number is considered **good** if it appears in **at most one** of the two arrays.

You want to build a new array by selecting elements such that:
- Each element you select is **good**.
- You select the **maximum** number of elements.

Return the **maximum** number of elements you can select.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 10^5',
    '1 <= nums1[i], nums2[j] <= 10^6',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,3,4,5], nums2 = [1,2,3,8,9]',
      output: '7',
      explanation: 'Shared elements: {1,2,3}. Good (unique) elements: {4,5} from nums1 and {8,9} from nums2. Plus all 3 shared elements can each be counted once from one array. Total: 4+5 unique = 4 distinct good? No: 4,5,8,9 are unique (4 elements). Shared 1,2,3 each appear in both so they are NOT good. Answer = 4.',
    },
    {
      input: 'nums1 = [1,2,3], nums2 = [4,5,6]',
      output: '6',
      explanation: 'No shared elements. All 6 elements are good.',
    },
  ],
  hints: [
    'An element is "good" if it appears in exactly one of the two arrays.',
    'Use a Set or frequency map to find elements unique to nums1 and elements unique to nums2.',
    'The answer is simply count(nums1 unique) + count(nums2 unique), since all elements that appear in exactly one array can be selected.',
    'Deduplicate each array first (use Set). Then count how many distinct values appear in nums1 but not nums2, plus how many appear in nums2 but not nums1.',
  ],
  functionName: 'maxElements',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function maxElements(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  let count = 0;
  for (const x of set1) if (!set2.has(x)) count++;
  for (const x of set2) if (!set1.has(x)) count++;
  return count;
}`,
    typescript: `function maxElements(nums1: number[], nums2: number[]): number {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  let count = 0;
  for (const x of set1) if (!set2.has(x)) count++;
  for (const x of set2) if (!set1.has(x)) count++;
  return count;
}`,
    python: `def maxElements(nums1, nums2):
    set1, set2 = set(nums1), set(nums2)
    return len(set1 - set2) + len(set2 - set1)`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], [1, 2, 3, 8, 9]], expected: 4 },
    { args: [[1, 2, 3], [4, 5, 6]], expected: 6 },
    { args: [[1, 1, 2, 2], [1, 3]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 0 },
    { args: [[5], [6]], expected: 2 },
    { args: [[1, 2, 3], [1, 2, 3]], expected: 0 },
    { args: [[1, 2, 3, 4], [3, 4, 5, 6]], expected: 4 },
    { args: [[1, 1, 1], [2, 2, 2]], expected: 2 },
    { args: [[1, 2], [2, 3]], expected: 2 },
  ],
};
