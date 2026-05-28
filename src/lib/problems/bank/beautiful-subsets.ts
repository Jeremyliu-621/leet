import type { Problem } from '../types';

export const problem: Problem = {
  id: 'beautiful-subsets',
  title: 'The Number of Beautiful Subsets',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `You are given an array \`nums\` of positive integers and a **positive** integer \`k\`.

A subset of \`nums\` is **beautiful** if it does not contain two integers with an absolute difference equal to \`k\`.

Return the number of **non-empty beautiful** subsets of the array \`nums\`.

Note that two subsets that contain the same elements but are chosen from different indices are considered the same subset.

**Approach:** Sort the array. Use backtracking with a frequency map: for each element, include it only if the element minus \`k\` is not already in the current subset. Count all reached leaves as valid subsets (subtract 1 for empty).`,
  constraints: [
    '1 <= nums.length <= 20',
    '1 <= nums[i], k <= 1000',
  ],
  examples: [
    {
      input: 'nums = [2,4,6], k = 2',
      output: '4',
      explanation: 'Beautiful subsets: {2}, {4}, {6}, {2,6}. Subsets {2,4} and {4,6} are not beautiful.',
    },
    {
      input: 'nums = [1], k = 1',
      output: '1',
      explanation: 'Only {1}, which is beautiful.',
    },
  ],
  hints: [
    'Sort nums. Use backtracking: at each index, either skip or include it (if element - k is not in current subset).',
    'Use a frequency map to track which values are currently in the subset.',
    '```js\nfunction beautifulSubsets(nums, k) {\n  nums = [...nums].sort((a, b) => a - b);\n  k = Number(k);\n  const freq = new Map();\n  let count = 0;\n  function bt(idx) {\n    if (idx === nums.length) { count++; return; }\n    bt(idx + 1);\n    if (!freq.get(nums[idx] - k)) {\n      freq.set(nums[idx], (freq.get(nums[idx]) ?? 0) + 1);\n      bt(idx + 1);\n      const v = freq.get(nums[idx]) - 1;\n      if (v === 0) freq.delete(nums[idx]); else freq.set(nums[idx], v);\n    }\n  }\n  bt(0);\n  return count - 1;\n}\n```',
  ],
  functionName: 'beautifulSubsets',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function beautifulSubsets(nums, k) {
  // return number of non-empty beautiful subsets

}`,
    typescript: "function beautifulSubsets(nums: number[], k: number): number {\n  // return number of non-empty beautiful subsets\n\n}",

    python: `def beautifulSubsets(nums: list, k: int) -> int:
    # return number of non-empty beautiful subsets
    pass
`,
  },
  visibleTests: [
    { args: [[2, 4, 6], 2], expected: 4 },
    { args: [[1], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, 3], 1], expected: 2 },
    { args: [[1, 1], 2], expected: 3 },
    { args: [[1, 2, 3], 1], expected: 4 },
    { args: [[1, 2, 4, 6], 2], expected: 9 },
    { args: [[2, 4, 6, 8], 2], expected: 7 },
    { args: [[1, 2, 3, 4], 2], expected: 8 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 12 },
  ],
};
