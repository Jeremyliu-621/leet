import type { Problem } from '../types';

const JS_PREAMBLE = `
function permuteUniqueRunner(arr) {
  const r = permuteUnique(arr);
  return r.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++)
      if (a[i] !== b[i]) return a[i] - b[i];
    return a.length - b.length;
  });
}
`.trim();

const PY_PREAMBLE = `
def permuteUniqueRunner(arr):
    arr = list(arr) if hasattr(arr, 'to_py') else list(arr)
    r = permuteUnique(arr)
    return sorted([list(p) for p in r])
`.trim();

export const problem: Problem = {
  id: 'permutations-ii',
  title: 'Permutations II',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `Given a collection of numbers, \`nums\`, that **might contain duplicates**, return *all possible unique permutations* **in any order**.

> **Note:** The \`permuteUniqueRunner\` wrapper is pre-defined. Implement \`permuteUnique(nums)\`.`,
  constraints: [
    '`1 <= nums.length <= 8`',
    '`-10 <= nums[i] <= 10`',
  ],
  examples: [
    {
      input: 'nums = [1,1,2]',
      output: '[[1,1,2],[1,2,1],[2,1,1]]',
      explanation: 'Three unique permutations.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]',
    },
  ],
  hints: [
    'Sort nums first. During backtracking, skip a number if it equals the previous number and the previous was not used — this avoids duplicate permutations.',
  ],
  functionName: 'permuteUniqueRunner',
  params: ['nums'],
  starterCode: {
    javascript: `${JS_PREAMBLE}\nfunction permuteUnique(nums) {\n  \n}\n`,
    python: `${PY_PREAMBLE}\ndef permuteUnique(nums):\n    pass\n`,
  },
  visibleTests: [
    { args: [[1, 1, 2]], expected: [[1, 1, 2], [1, 2, 1], [2, 1, 1]] },
    { args: [[1, 2, 3]], expected: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] },
    { args: [[1]], expected: [[1]] },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: [[1, 1]] },
    { args: [[1, 2]], expected: [[1, 2], [2, 1]] },
    { args: [[1, 1, 1]], expected: [[1, 1, 1]] },
  ],
};
