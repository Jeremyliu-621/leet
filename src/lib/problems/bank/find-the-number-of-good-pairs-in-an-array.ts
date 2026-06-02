import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-number-of-good-pairs-in-an-array',
  title: 'Find the Number of Good Pairs in an Array',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given two **0-indexed** integer arrays \`nums1\` and \`nums2\` of equal length \`n\`. A pair of indices \`(i, j)\` is called **good** if \`nums1[i]\` is divisible by \`nums2[j]\` **and** \`nums1[i] / nums2[j]\` appears somewhere in \`nums1\`.

Return the **total number of good pairs** \`(i, j)\`.`,
  constraints: [
    '1 <= nums1.length == nums2.length <= 50',
    '1 <= nums1[i], nums2[j] <= 50',
  ],
  examples: [
    {
      input: 'nums1 = [1,3,4], nums2 = [1,3,4]',
      output: '5',
      explanation: 'Pairs (i,j): (0,0): 1/1=1 → 1 in nums1 ✓. (1,0): 3/1=3 → 3 in nums1 ✓. (1,1): 3/3=1 → 1 in nums1 ✓. (2,0): 4/1=4 → 4 in nums1 ✓. (2,2): 4/4=1 → 1 in nums1 ✓. Total = 5.',
    },
    {
      input: 'nums1 = [1,2,4,12], nums2 = [2,4]',
      output: '3',
      explanation: 'nums1 set = {1,2,4,12}. Valid pairs: (i=1,j=0): 2%2=0, 2/2=1 ∈ nums1 ✓. (i=2,j=0): 4%2=0, 4/2=2 ∈ nums1 ✓. (i=2,j=1): 4%4=0, 4/4=1 ∈ nums1 ✓. All others fail. Total = 3.',
    },
  ],
  hints: [
    'Build a hash set from nums1 for O(1) membership lookup.',
    'For each pair (i, j), check if nums1[i] % nums2[j] == 0 and nums1[i] / nums2[j] is in the nums1 set.',
    'Since n ≤ 50, O(n²) is fine.',
  ],
  functionName: 'numberOfPairs',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function numberOfPairs(nums1, nums2) {
  const set1 = new Set(nums1);
  let count = 0;
  for (const a of nums1) {
    for (const b of nums2) {
      if (a % b === 0 && set1.has(a / b)) count++;
    }
  }
  return count;
}`,
    typescript: `function numberOfPairs(nums1: number[], nums2: number[]): number {
  const set1 = new Set(nums1);
  let count = 0;
  for (const a of nums1) {
    for (const b of nums2) {
      if (a % b === 0 && set1.has(a / b)) count++;
    }
  }
  return count;
}`,
    python: `def numberOfPairs(nums1: list[int], nums2: list[int]) -> int:
    set1 = set(nums1)
    count = 0
    for a in nums1:
        for b in nums2:
            if a % b == 0 and a // b in set1:
                count += 1
    return count`,
  },
  visibleTests: [
    { args: [[1, 3, 4], [1, 3, 4]], expected: 5 },
    { args: [[1, 2, 4, 12], [2, 4]], expected: 3 },
    { args: [[1], [1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], [1, 1]], expected: 6 },
    { args: [[2, 4, 8], [2, 4]], expected: 3 },
    { args: [[6, 12], [3, 6]], expected: 0 },
    { args: [[1, 2, 3, 4], [1, 2]], expected: 6 },
    { args: [[5, 10, 20], [5, 10]], expected: 0 },
    { args: [[3, 5, 7], [2, 4]], expected: 0 },
  ],
};
