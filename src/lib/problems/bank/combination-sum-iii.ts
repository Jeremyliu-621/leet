import type { Problem } from '../types';

const JS_PREAMBLE = `
function combinationSumIIIRunner(k, n) {
  const r = combinationSumIII(Number(k), Number(n));
  return r.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++)
      if (a[i] !== b[i]) return a[i] - b[i];
    return a.length - b.length;
  });
}
`.trim();

const PY_PREAMBLE = `
def combinationSumIIIRunner(k, n):
    r = combinationSumIII(int(k), int(n))
    return sorted([sorted(c) for c in r])
`.trim();

export const problem: Problem = {
  id: 'combination-sum-iii',
  title: 'Combination Sum III',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `Find all valid combinations of \`k\` numbers that sum up to \`n\` such that the following conditions are true:

- Only numbers **1** through **9** are used.
- Each number is used **at most once**.

Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

> **Note:** The \`combinationSumIIIRunner\` wrapper is pre-defined. Implement \`combinationSumIII(k, n)\`.`,
  constraints: [
    '2 <= k <= 9',
    '1 <= n <= 60',
  ],
  examples: [
    {
      input: 'k = 3, n = 7',
      output: '[[1,2,4]]',
    },
    {
      input: 'k = 3, n = 9',
      output: '[[1,2,6],[1,3,5],[2,3,4]]',
    },
    {
      input: 'k = 4, n = 1',
      output: '[]',
    },
  ],
  hints: [
    'Use backtracking starting from digit \`start = 1\`. At each step, pick the next unused digit (from \`start\` to 9) and recurse.',
    'Track the current combination length and remaining sum. When length equals \`k\` and remaining equals 0, add a copy of the current path to results.',
    'Prune early: if the remaining sum becomes negative or we have too many numbers but not yet at the target, return immediately.',
  ],
  functionName: 'combinationSumIIIRunner',
  params: ['k', 'n'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: 'function combinationSumIII(k, n) {\n  const result = [];\n  function backtrack(start, remaining, current) {\n    if (current.length === k && remaining === 0) { result.push([...current]); return; }\n    if (current.length === k || remaining <= 0) return;\n    for (let i = start; i <= 9; i++) {\n      current.push(i);\n      backtrack(i + 1, remaining - i, current);\n      current.pop();\n    }\n  }\n  backtrack(1, n, []);\n  return result;\n}\n',
    typescript: "function combinationSumIIIRunner(k: number, n: number): number[][] {\n  const result: number[][] = [];\n  function backtrack(start: number, remaining: number, current: number[]): void {\n    if (current.length === k && remaining === 0) { result.push([...current]); return; }\n    if (current.length === k || remaining <= 0) return;\n    for (let i = start; i <= 9; i++) {\n      current.push(i);\n      backtrack(i + 1, remaining - i, current);\n      current.pop();\n    }\n  }\n  backtrack(1, n, []);\n  return result;\n}",

    python: 'def combinationSumIII(k, n):\n    result = []\n    def backtrack(start, remaining, current):\n        if len(current) == k and remaining == 0:\n            result.append(list(current))\n            return\n        if len(current) == k or remaining <= 0:\n            return\n        for i in range(start, 10):\n            current.append(i)\n            backtrack(i + 1, remaining - i, current)\n            current.pop()\n    backtrack(1, n, [])\n    return result\n',
  },
  visibleTests: [
    { args: [3, 7], expected: [[1, 2, 4]] },
    { args: [3, 9], expected: [[1, 2, 6], [1, 3, 5], [2, 3, 4]] },
    { args: [4, 1], expected: [] },
  ],
  hiddenTests: [
    { args: [2, 18], expected: [] },
    { args: [3, 15], expected: [[1, 5, 9], [1, 6, 8], [2, 4, 9], [2, 5, 8], [2, 6, 7], [3, 4, 8], [3, 5, 7], [4, 5, 6]] },
    { args: [2, 10], expected: [[1, 9], [2, 8], [3, 7], [4, 6]] },
    { args: [1, 5], expected: [[5]] },
    { args: [9, 45], expected: [[1, 2, 3, 4, 5, 6, 7, 8, 9]] },
  ],
};
