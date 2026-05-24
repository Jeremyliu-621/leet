import type { Problem } from '../types';

export const problem: Problem = {
  id: 'permutations',
  title: 'Permutations',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an array \`nums\` of distinct integers, return all the possible permutations. You can return the answer in **any order**.`,
  constraints: [
    '`1 <= nums.length <= 6`',
    '`-10 <= nums[i] <= 10`',
    'All the integers of `nums` are **unique**',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]',
    },
    {
      input: 'nums = [0,1]',
      output: '[[0,1],[1,0]]',
    },
    {
      input: 'nums = [1]',
      output: '[[1]]',
    },
  ],
  hints: [
    'Use backtracking. Maintain a `current` list and a set of remaining elements.',
    'At each step, try each remaining element as the next element in the permutation.',
    'When `current.length == nums.length`, you have a complete permutation — add it to results.',
  ],
  functionName: 'permuteRunner',
  params: ['nums'],
  preamble: {
    javascript: `function permuteRunner(nums) {
  return permute(nums).slice().sort((a, b) => {
    for (let i = 0; i < a.length; i++) { if (a[i] !== b[i]) return a[i] - b[i]; }
    return 0;
  });
}`,
    python: `def permuteRunner(nums):
    return sorted([list(p) for p in permute(nums)])
`,
  },
  starterCode: {
    javascript: `function permute(nums) {

}`,
    python: `def permute(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] },
    { args: [[0, 1]], expected: [[0,1],[1,0]] },
    { args: [[1]], expected: [[1]] },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: [[1,2],[2,1]] },
    { args: [[-1, 0, 1]], expected: [[-1,0,1],[-1,1,0],[0,-1,1],[0,1,-1],[1,-1,0],[1,0,-1]] },
    { args: [[3, 1, 2]], expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] },
  ],
};
