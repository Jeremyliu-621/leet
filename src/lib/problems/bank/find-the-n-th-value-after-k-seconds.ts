import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-n-th-value-after-k-seconds',
  title: 'Find the N-th Value After K Seconds',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given two integers \`n\` and \`k\`.

Initially, you have an array \`a\` of \`n\` integers where \`a[i] = i + 1\` for all \`0 <= i <= n-1\`.

After each **second**, simultaneously update: \`a[i] = sum(a[0], a[1], ..., a[i])\` (replace with prefix sum).

Return the **value of \`a[n-1]\`** after \`k\` seconds modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= n, k <= 1000',
  ],
  examples: [
    {
      input: 'n = 4, k = 5',
      output: '84',
      explanation: 'After 1s: [1,3,6,10]. After 2s: [1,4,10,20]. After 3s: [1,5,15,35]. After 4s: [1,6,21,56]. After 5s: [1,7,28,84]. Answer: 84.',
    },
    {
      input: 'n = 2, k = 3',
      output: '5',
      explanation: 'After 1s: [1,3]. After 2s: [1,4]. After 3s: [1,5]. Answer: 5.',
    },
  ],
  hints: [
    'After k operations, a[n-1] = C(n+k, k+1) mod (10^9 + 7), a binomial coefficient.',
    'This can be seen by observing: a[i][k] = C(i+k+1, k+1) where a[i][0] = i+1.',
    'Compute C(n+k, k+1) using modular inverses: C = (n+k)! / (k+1)! / (n-1)! mod p.',
  ],
  functionName: 'valueAfterKSeconds',
  params: ['n', 'k'],
  starterCode: {
    javascript: 'function valueAfterKSeconds(n, k) {\n  \n}\n',
    typescript: 'function valueAfterKSeconds(n: number, k: number): number {\n  \n}',
    python: 'def valueAfterKSeconds(n, k):\n    pass\n',
  },
  visibleTests: [
    { args: [4, 5], expected: 84 },
    { args: [2, 3], expected: 5 },
  ],
  hiddenTests: [
    { args: [1, 0], expected: 1 },
    { args: [1, 5], expected: 1 },
    { args: [3, 3], expected: 15 },
    { args: [10, 0], expected: 10 },
  ],
};
