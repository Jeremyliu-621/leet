import type { Problem } from '../types';

export const problem: Problem = {
  id: 'subsets-ii',
  title: 'Subsets II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` that may contain duplicates, return *all possible subsets (the power set)*.

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.`,
  constraints: [
    '1 <= nums.length <= 10',
    '-10 <= nums[i] <= 10',
  ],
  examples: [
    {
      input: 'nums = [1,2,2]',
      output: '[[],[1],[1,2],[1,2,2],[2],[2,2]]',
    },
    {
      input: 'nums = [0]',
      output: '[[],[0]]',
    },
  ],
  hints: [
    'Sort the input first so duplicates are adjacent.',
    'Use backtracking. When building subsets at the same recursion level (same start index), skip duplicate values to avoid duplicate subsets.',
    'Skip nums[i] === nums[i-1] when i > start at the current level.',
  ],
  functionName: 'subsetsWithDupRunner',
  params: ['nums'],
  preamble: {
    javascript: `function subsetsWithDupRunner(nums) {
  return subsetsWithDup(nums)
    .map(s => s.slice().sort((a, b) => a - b))
    .sort((a, b) => {
      const len = Math.min(a.length, b.length);
      for (let i = 0; i < len; i++) { if (a[i] !== b[i]) return a[i] - b[i]; }
      return a.length - b.length;
    });
}`,
    python: `def subsetsWithDupRunner(nums):
    result = subsetsWithDup(nums)
    return sorted([sorted(s) for s in result])
`,
  },
  starterCode: {
    javascript: `function subsetsWithDup(nums) {
  // Return all unique subsets
}`,
    python: `def subsetsWithDup(nums):
    # Return all unique subsets
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2]], expected: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]] },
    { args: [[0]], expected: [[], [0]] },
    { args: [[1, 2, 3]], expected: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]] },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: [[], [1], [1, 1]] },
    { args: [[1, 2, 2, 3]], expected: [[], [1], [1, 2], [1, 2, 2], [1, 2, 2, 3], [1, 2, 3], [1, 3], [2], [2, 2], [2, 2, 3], [2, 3], [3]] },
    { args: [[-1, 0, 1]], expected: [[], [-1], [-1, 0], [-1, 0, 1], [-1, 1], [0], [0, 1], [1]] },
    { args: [[4, 4, 4]], expected: [[], [4], [4, 4], [4, 4, 4]] },
  ],
};
