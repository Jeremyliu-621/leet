import type { Problem } from '../types';

const JS_PREAMBLE = `
function findSubsequencesRunner(nums) {
  const r = findSubsequences(nums);
  const seen = new Set();
  const unique = r.filter(a => { const k = JSON.stringify(a); if (seen.has(k)) return false; seen.add(k); return true; });
  return unique.sort((a, b) => {
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
def findSubsequencesRunner(nums):
    nums = list(nums)
    r = findSubsequences(nums)
    seen = set()
    unique = []
    for seq in r:
        key = tuple(seq)
        if key not in seen:
            seen.add(key)
            unique.append(list(seq))
    return sorted(unique)
`.trim();

export const problem: Problem = {
  id: 'find-all-increasing-subsequences',
  title: 'Find All Non-Descending Subsequences',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `Given an integer array \`nums\`, return all **non-descending** (non-decreasing) subsequences of \`nums\` with **length at least 2**. No two subsequences in the result should be identical (even if they arise from different index selections).

A **non-descending subsequence** is a sequence of elements taken from \`nums\` (in order, without rearranging) where each element is greater than or equal to the previous one.

> **Note:** The runner wrapper deduplicates and sorts results. Implement \`findSubsequences(nums)\`.`,
  constraints: [
    '1 <= nums.length <= 15',
    '-100 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [4, 6, 7, 7]',
      output: '[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]',
      explanation: 'All non-descending subsequences of length >= 2, deduplicated.',
    },
    {
      input: 'nums = [4, 4, 3, 2, 1]',
      output: '[[4,4]]',
      explanation: 'The only non-descending subsequence of length >= 2 is [4,4].',
    },
  ],
  hints: [
    'Use backtracking starting at each index. At each position, extend the current subsequence only if `nums[i] >= last element`.',
    'To avoid duplicates without sorting (since we must preserve original order), use a local `Set` at each recursion level to track which values have already been chosen as the next element at this depth.',
    'When the current subsequence length is >= 2, add it to results. Continue extending to find longer subsequences.',
  ],
  functionName: 'findSubsequencesRunner',
  params: ['nums'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// findSubsequencesRunner wrapper is pre-defined.\n// Implement the function below:\nfunction findSubsequences(nums) {\n  \n}\n',
    typescript: "function findSubsequencesRunner(nums: number[]): number[][] {\n  \n}",

    python: '# findSubsequencesRunner wrapper is pre-defined.\n# Implement the function below:\ndef findSubsequences(nums):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[4, 6, 7, 7]],
      expected: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]],
    },
    {
      args: [[4, 4, 3, 2, 1]],
      expected: [[4,4]],
    },
    {
      args: [[1, 2, 3]],
      expected: [[1,2],[1,2,3],[1,3],[2,3]],
    },
  ],
  hiddenTests: [
    {
      args: [[3, 3, 3]],
      expected: [[3,3],[3,3,3]],
    },
    {
      args: [[1, 2]],
      expected: [[1,2]],
    },
    {
      args: [[5, 4, 3]],
      expected: [],
    },
    {
      args: [[1, 1, 2]],
      expected: [[1,1],[1,1,2],[1,2]],
    },
    {
      args: [[2, 3, 1, 3]],
      expected: [[1,3],[2,3],[2,3,3],[3,3]],
    },
  ],
};
