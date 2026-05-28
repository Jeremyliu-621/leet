import type { Problem } from '../types';

const JS_PREAMBLE = `
function getFactorsRunner(n) {
  const r = getFactors(Number(n));
  const norm = (r || []).map(c => [...c].sort((a, b) => a - b));
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
def getFactorsRunner(n):
    r = getFactors(int(n))
    normalized = [sorted(list(c)) for c in (r or [])]
    return sorted(normalized)
`.trim();

export const problem: Problem = {
  id: 'factor-combinations',
  title: 'Factor Combinations',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `Given a positive integer \`n\`, return **all possible ways** to write \`n\` as a product of its factors. Each factor must be an integer in the range \`[2, n-1]\` (inclusive), and every combination must have at least two factors.

Return the result as a list of lists, where each list represents one factorization. The same factorization should not appear more than once.

For example, \`12\` can be written as \`2 × 6\`, \`3 × 4\`, or \`2 × 2 × 3\`.

> **Note:** The \`getFactorsRunner\` wrapper sorts and normalizes results. Implement \`getFactors(n)\`.`,
  constraints: [
    '1 <= n <= 10^7',
  ],
  examples: [
    {
      input: 'n = 12',
      output: '[[2,6],[2,2,3],[3,4]]',
      explanation: '12 = 2×6 = 2×2×3 = 3×4. (Note: n itself is not a valid factor, so [12] and [1,12] are excluded.)',
    },
    {
      input: 'n = 1',
      output: '[]',
      explanation: 'No factorization exists for 1.',
    },
    {
      input: 'n = 37',
      output: '[]',
      explanation: '37 is prime — no valid factorization into factors in [2, 36].',
    },
    {
      input: 'n = 32',
      output: '[[2,16],[2,2,8],[2,2,2,4],[2,2,2,2,2],[2,4,4],[4,8]]',
      explanation: '6 distinct factorizations of 32.',
    },
  ],
  hints: [
    'Use backtracking: iterate divisors `d` from 2 up to `sqrt(n)`. If `d` divides `n`, include `d` in the current combination and recurse with `n / d` (starting from `d` to avoid duplicates).',
    'At each recursive call, also consider adding `n/d` remaining as a single factor directly — but only if it is >= the last chosen factor (to avoid duplicates).',
    'After the loop, if the remaining `n` is >= the start value and we already have at least one factor in the path, emit the combination `[...path, n]`.',
  ],
  functionName: 'getFactorsRunner',
  params: ['n'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// getFactorsRunner wrapper is pre-defined.\n// Implement the function below:\nfunction getFactors(n) {\n  \n}\n',
    typescript: "function getFactorsRunner(n: number): number[][] {\n  \n}",

    python: '# getFactorsRunner wrapper is pre-defined.\n# Implement the function below:\ndef getFactors(n):\n    pass\n',
  },
  visibleTests: [
    { args: [12], expected: [[2,2,3],[2,6],[3,4]] },
    { args: [1], expected: [] },
    { args: [37], expected: [] },
    { args: [32], expected: [[2,2,2,2,2],[2,2,2,4],[2,2,8],[2,4,4],[2,16],[4,8]] },
  ],
  hiddenTests: [
    { args: [8], expected: [[2,2,2],[2,4]] },
    { args: [4], expected: [[2,2]] },
    { args: [6], expected: [[2,3]] },
    { args: [24], expected: [[2,2,2,3],[2,2,6],[2,3,4],[2,12],[3,8],[4,6]] },
    { args: [16], expected: [[2,2,2,2],[2,2,4],[2,8],[4,4]] },
  ],
};
