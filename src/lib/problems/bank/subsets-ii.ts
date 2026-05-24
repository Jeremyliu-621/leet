import type { Problem } from '../types';

const JS_PREAMBLE = `
function subsetsIIRunner(arr) {
  const r = subsetsII(arr);
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
def subsetsIIRunner(arr):
    arr = list(arr) if hasattr(arr, 'to_py') else list(arr)
    r = subsetsII(arr)
    normalized = [sorted(list(s)) for s in r]
    return sorted(normalized)
`.trim();

export const problem: Problem = {
  id: 'subsets-ii',
  title: 'Subsets II',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `Given an integer array \`nums\` that may contain **duplicates**, return *all possible subsets* (the power set).

The solution set **must not** contain duplicate subsets. Return the subsets in any order.

> **Note:** The \`subsetsIIRunner\` wrapper is pre-defined. Implement \`subsetsII(nums)\`.`,
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
    {
      input: 'nums = [1,1,2]',
      output: '[[],[1],[1,1],[1,1,2],[1,2],[2]]',
    },
  ],
  hints: [
    'Sort `nums` first. This groups duplicates together, making it easy to detect and skip them.',
    'Use backtracking starting from index `start`. At the start of each call, push a copy of the current path. Then iterate from `start`, skipping `i` when `i > start && nums[i] === nums[i-1]`.',
    'The skip condition `i > start` (not `i > 0`) is the key difference from the basic Subsets problem — it only skips a duplicate if a sibling at the same depth already used the same value.',
  ],
  functionName: 'subsetsIIRunner',
  params: ['nums'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: 'function subsetsII(nums) {\n  \n}\n',
    python: 'def subsetsII(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 2]], expected: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]] },
    { args: [[0]], expected: [[], [0]] },
    { args: [[1, 1, 2]], expected: [[], [1], [1, 1], [1, 1, 2], [1, 2], [2]] },
  ],
  hiddenTests: [
    { args: [[4, 4, 4]], expected: [[], [4], [4, 4], [4, 4, 4]] },
    { args: [[1, 2, 3]], expected: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]] },
  ],
};
