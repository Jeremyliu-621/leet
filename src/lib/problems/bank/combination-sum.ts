import type { Problem } from '../types';

const JS_PREAMBLE = `
function combinationSumRunner(candidates, target) {
  const r = combinationSum(candidates, Number(target));
  const norm = r.map(c => [...c].sort((a, b) => a - b));
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
def combinationSumRunner(candidates, target):
    candidates = list(candidates) if hasattr(candidates, 'to_py') else list(candidates)
    r = combinationSum(candidates, int(target))
    normalized = [sorted(list(c)) for c in r]
    return sorted(normalized)
`.trim();

export const problem: Problem = {
  id: 'combination-sum',
  title: 'Combination Sum',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `Given an array of **distinct** positive integers \`candidates\` and a positive integer \`target\`, return a list of **all unique combinations** of \`candidates\` where the chosen numbers sum to \`target\`. The **same** number may be chosen from \`candidates\` an unlimited number of times.

The combination must be in **non-decreasing order** and the result set must not contain duplicate combinations.

> **Note:** The \`combinationSumRunner\` wrapper is pre-defined. Implement \`combinationSum(candidates, target)\`.`,
  constraints: [
    '1 <= candidates.length <= 30',
    '2 <= candidates[i] <= 40',
    'All elements of candidates are distinct',
    '1 <= target <= 40',
  ],
  examples: [
    {
      input: 'candidates = [2,3,6,7], target = 7',
      output: '[[2,2,3],[7]]',
      explanation: '2+2+3=7 and 7=7',
    },
    {
      input: 'candidates = [2,3,5], target = 8',
      output: '[[2,2,2,2],[2,3,3],[3,5]]',
    },
    {
      input: 'candidates = [2], target = 1',
      output: '[]',
      explanation: '2 > 1 so no valid combination exists',
    },
  ],
  hints: [
    'Sort the candidates first. Then use backtracking: try including each candidate (starting from index `i` to avoid duplicates) and subtract it from the remaining target.',
    'Pass the current index `i` into the recursive call — you can reuse the same element, so recurse with the same `i`.',
    'Prune early: if `candidates[i] > remaining`, break (since candidates are sorted, all further elements are also too large).',
  ],
  functionName: 'combinationSumRunner',
  params: ['candidates', 'target'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: 'function combinationSum(candidates, target) {\n  \n}\n',
    python: 'def combinationSum(candidates, target):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, 6, 7], 7], expected: [[2,2,3],[7]] },
    { args: [[2, 3, 5], 8], expected: [[2,2,2,2],[2,3,3],[3,5]] },
    { args: [[2], 1], expected: [] },
  ],
  hiddenTests: [
    { args: [[2, 4, 6, 8], 8], expected: [[2,2,2,2],[2,2,4],[2,6],[4,4],[8]] },
    { args: [[3, 5, 7], 8], expected: [[3,5]] },
  ],
};
