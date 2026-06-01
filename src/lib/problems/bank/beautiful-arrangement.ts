import type { Problem } from '../types';

export const problem: Problem = {
  id: 'beautiful-arrangement',
  title: 'Beautiful Arrangement',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `Suppose you have \`n\` integers labeled **1** through **n**. A permutation of those \`n\` integers \`perm\` is called a **beautiful arrangement** if for every \`i\` (1-indexed), **at least one** of the following is true:

- \`perm[i]\` is divisible by \`i\`, or
- \`i\` is divisible by \`perm[i]\`.

Return the **number of beautiful arrangements** you can construct.

**Example for n = 2:** valid arrangements are \`[1, 2]\` (1%1=0 ✓; 2%2=0 ✓) and \`[2, 1]\` (2%1=0 ✓; 1 divides 2 ✓), so the answer is **2**.`,
  constraints: [
    '1 <= n <= 15',
  ],
  examples: [
    {
      input: 'n = 2',
      output: '2',
      explanation: 'Beautiful arrangements: [1,2] and [2,1]. Both satisfy the divisibility condition at each position.',
    },
    {
      input: 'n = 1',
      output: '1',
      explanation: 'The only arrangement is [1]. 1 % 1 = 0, so it is beautiful.',
    },
  ],
  hints: [
    'Use backtracking. At each position `i` (starting from 1), try placing each unused number `k`. The placement is valid if `k % i === 0` or `i % k === 0`.',
    'Track which numbers have been used with a boolean `visited` array (or a Set). Recurse to fill position `i + 1`. When `i > n`, increment a counter.',
    'Backtrack by marking a number unused after the recursive call returns. The recursion tree is small because the divisibility condition prunes most branches early.',
  ],
  functionName: 'countArrangement',
  params: ['n'],
  starterCode: {
    javascript: 'function countArrangement(n) {\n  const visited = new Array(n + 1).fill(false);\n  let count = 0;\n  function bt(pos) {\n    if (pos > n) { count++; return; }\n    for (let k = 1; k <= n; k++) {\n      if (!visited[k] && (k % pos === 0 || pos % k === 0)) {\n        visited[k] = true;\n        bt(pos + 1);\n        visited[k] = false;\n      }\n    }\n  }\n  bt(1);\n  return count;\n}\n',
    typescript: "function countArrangement(n: number): number {\n  const visited = new Array<boolean>(n + 1).fill(false);\n  let count = 0;\n  function bt(pos: number): void {\n    if (pos > n) { count++; return; }\n    for (let k = 1; k <= n; k++) {\n      if (!visited[k] && (k % pos === 0 || pos % k === 0)) {\n        visited[k] = true;\n        bt(pos + 1);\n        visited[k] = false;\n      }\n    }\n  }\n  bt(1);\n  return count;\n}",

    python: 'def countArrangement(n):\n    visited = [False] * (n + 1)\n    count = [0]\n    def bt(pos):\n        if pos > n:\n            count[0] += 1\n            return\n        for k in range(1, n + 1):\n            if not visited[k] and (k % pos == 0 or pos % k == 0):\n                visited[k] = True\n                bt(pos + 1)\n                visited[k] = False\n    bt(1)\n    return count[0]\n',
  },
  visibleTests: [
    { args: [2], expected: 2 },
    { args: [1], expected: 1 },
  ],
  hiddenTests: [
    { args: [3], expected: 3 },
    { args: [4], expected: 8 },
    { args: [5], expected: 10 },
    { args: [6], expected: 36 },
  ],
};
