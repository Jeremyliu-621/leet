import type { Problem } from '../types';

const JS_PREAMBLE = `
function permuteRunner(arr) {
  const r = permute(arr);
  return r.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++)
      if (a[i] !== b[i]) return a[i] - b[i];
    return a.length - b.length;
  });
}
`.trim();

const PY_PREAMBLE = `
def permuteRunner(arr):
    arr = list(arr) if hasattr(arr, 'to_py') else list(arr)
    r = permute(arr)
    return sorted([list(p) for p in r])
`.trim();

export const problem: Problem = {
  id: 'permutations',
  title: 'Permutations',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `Given an array \`nums\` of **distinct** integers, return *all possible permutations*. You may return the answer in **any order**.

> **Note:** The \`permuteRunner\` wrapper is pre-defined. Implement \`permute(nums)\`.`,
  constraints: [
    '1 <= nums.length <= 6',
    '-10 <= nums[i] <= 10',
    'All integers in nums are unique',
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
    'Use backtracking: at each step, pick one unused number, add it to the current path, recurse, then remove it (backtrack).',
    'Track which elements have been "used" with a boolean array or by swapping in-place.',
    'Base case: when your current path length equals nums.length, push a copy of it to results and return.',
  ],
  functionName: 'permuteRunner',
  params: ['nums'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: 'function permute(nums) {\n  \n}\n',
    python: 'def permute(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] },
    { args: [[0, 1]], expected: [[0,1],[1,0]] },
    { args: [[1]], expected: [[1]] },
  ],
  hiddenTests: [
    { args: [[-1, 2]], expected: [[-1,2],[2,-1]] },
    {
      args: [[1, 2, 3, 4]],
      expected: [
        [1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,2,3],[1,4,3,2],
        [2,1,3,4],[2,1,4,3],[2,3,1,4],[2,3,4,1],[2,4,1,3],[2,4,3,1],
        [3,1,2,4],[3,1,4,2],[3,2,1,4],[3,2,4,1],[3,4,1,2],[3,4,2,1],
        [4,1,2,3],[4,1,3,2],[4,2,1,3],[4,2,3,1],[4,3,1,2],[4,3,2,1],
      ],
    },
  ],
};
