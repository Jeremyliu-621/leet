import type { Problem } from '../types';

const JS_PREAMBLE = `
function subsetsRunner(arr) {
  const r = subsets(arr);
  const norm = r.map(s => [...s].sort((a, b) => a - b));
  return norm.sort((a, b) => {
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if (i >= a.length) return -1;
      if (i >= b.length) return 1;
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return 0;
  });
}
`.trim();

const PY_PREAMBLE = `
def subsetsRunner(arr):
    arr = list(arr) if hasattr(arr, 'to_py') else list(arr)
    r = subsets(arr)
    normalized = [sorted(list(s)) for s in r]
    return sorted(normalized)
`.trim();

export const problem: Problem = {
  id: 'subsets',
  title: 'Subsets',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `Given an integer array \`nums\` of **unique** elements, return *all possible subsets* (the power set).

The solution set **must not** contain duplicate subsets. Return the subsets in any order.

> **Note:** The \`subsetsRunner\` wrapper is pre-defined. Implement \`subsets(nums)\`.`,
  constraints: [
    '1 <= nums.length <= 10',
    '-10 <= nums[i] <= 10',
    'All integers in nums are unique',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]',
    },
    {
      input: 'nums = [0]',
      output: '[[],[0]]',
    },
    {
      input: 'nums = [1,2]',
      output: '[[],[1],[2],[1,2]]',
    },
  ],
  hints: [
    'Start with an empty subset. For each element, decide to include it or not — this gives 2^n subsets.',
    'Use backtracking: iterate through remaining elements starting at index `i`, add the element, recurse with `i+1`, then remove the element.',
    'At the start of each recursive call (before the loop), push a copy of the current path to results — every partial path is a valid subset.',
  ],
  functionName: 'subsetsRunner',
  params: ['nums'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: 'function subsets(nums) {\n  \n}\n',
    python: 'def subsets(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]] },
    { args: [[0]], expected: [[],[0]] },
    { args: [[1, 2]], expected: [[],[1],[1,2],[2]] },
  ],
  hiddenTests: [
    { args: [[4, 1, 0]], expected: [[],[0],[0,1],[0,1,4],[0,4],[1],[1,4],[4]] },
    { args: [[-1, 0, 1]], expected: [[],[-1],[-1,0],[-1,0,1],[-1,1],[0],[0,1],[1]] },
  ],
};
