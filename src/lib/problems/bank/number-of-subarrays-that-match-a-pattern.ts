import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-subarrays-that-match-a-pattern',
  title: 'Number of Subarrays That Match a Pattern I',
  difficulty: 'medium',
  tags: ['arrays', 'strings'],
  description: `You are given a **0-indexed** integer array \`nums\` of size \`n\`, and a **0-indexed** integer array \`pattern\` of size \`m\` consisting of integers \`-1\`, \`0\`, and \`1\`.

A subarray \`nums[i..i+m]\` of length \`m + 1\` is said to **match** the pattern if the following conditions are true for each \`j\` in the range \`[0, m - 1]\`:

- \`nums[i + j + 1] > nums[i + j]\` if \`pattern[j] == 1\`.
- \`nums[i + j + 1] == nums[i + j]\` if \`pattern[j] == 0\`.
- \`nums[i + j + 1] < nums[i + j]\` if \`pattern[j] == -1\`.

Return the **count** of subarrays of \`nums\` that match the pattern.`,
  constraints: [
    '2 <= n <= 10^6',
    '1 <= nums[i] <= 10^9',
    '1 <= m < n',
    'pattern[j] is -1, 0, or 1',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5,6], pattern = [1,1]',
      output: '4',
      explanation:
        'The subarrays starting at indices 0,1,2,3 all have two consecutive increases, matching pattern [1,1].',
    },
    {
      input: 'nums = [1,4,4,1,3,5,5,3], pattern = [1,0,-1]',
      output: '2',
      explanation:
        'Subarray [1,4,4] at index 0 matches (4>1, 4==4 is wrong). Actually [1,4,4]: 4>1 (match 1), 4==4 (match 0)... the third element 1<4 matches -1. Subarray [3,5,5,3] also matches.',
    },
  ],
  hints: [
    'Transform nums into a sign array s where s[i] = sign(nums[i+1] - nums[i]) ∈ {-1, 0, 1}.',
    'The problem reduces to counting occurrences of pattern as a contiguous subarray in s.',
    'Use KMP (Knuth-Morris-Pratt) string matching on the sign array for O(n+m) time.',
  ],
  functionName: 'countMatchingSubarrays',
  params: ['nums', 'pattern'],
  starterCode: {
    javascript: `function countMatchingSubarrays(nums, pattern) {

}`,
    typescript: `function countMatchingSubarrays(nums: number[], pattern: number[]): number {

}`,
    python: `def countMatchingSubarrays(nums, pattern):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6], [1, 1]], expected: 4 },
    { args: [[1, 4, 4, 1, 3, 5, 5, 3], [1, 0, -1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1], [0, 0]], expected: 2 },
    { args: [[3, 2, 1], [- 1, -1]], expected: 1 },
    { args: [[1, 2, 1, 2, 1], [1, -1]], expected: 2 },
    { args: [[5, 5, 5], [0]], expected: 2 },
    { args: [[1, 3, 2, 3, 1], [1, -1, 1]], expected: 1 },
    { args: [[1, 2, 3, 2, 1], [-1]], expected: 2 },
    { args: [[1, 2, 2, 3], [0, 1]], expected: 1 },
  ],
};
