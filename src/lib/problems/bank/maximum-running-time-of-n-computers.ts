import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-running-time-of-n-computers',
  title: 'Maximum Running Time of N Computers',
  difficulty: 'hard',
  tags: ['binary-search', 'arrays'],
  description: `You have \`n\` computers and an array \`batteries\` where \`batteries[i]\` is the capacity of the \`i\`-th battery. You want to run **all \`n\` computers simultaneously** for as long as possible.

A battery can power one computer at a time, but you can **swap** a depleted battery for another at any point. A computer can be powered by the combined charge from different batteries over time.

Return the **maximum number of minutes** you can run all \`n\` computers simultaneously.`,
  constraints: [
    '1 <= n <= batteries.length <= 10^5',
    '1 <= batteries[i] <= 10^9',
  ],
  examples: [
    {
      input: 'n = 2, batteries = [3,3,3]',
      output: '4',
      explanation: 'Batteries provide 9 total. Two computers need 2t minutes. t=4: sum(min(3,4))=3+3+3=9 ≥ 8 ✓. t=5: 3+3+3=9 < 10 ✗.',
    },
    {
      input: 'n = 2, batteries = [1,1,1,1]',
      output: '2',
      explanation: 'Four batteries of 1. Total = 4. Two computers need 2t. t=2: 4 ≥ 4 ✓.',
    },
    {
      input: 'n = 3, batteries = [10,10,3,5]',
      output: '8',
      explanation: 'Total = 28. t=8: sum(min(bat,8)) = 8+8+3+5=24 = 3×8 ✓. t=9: 9+9+3+5=26 < 27 ✗.',
    },
  ],
  hints: [
    'Binary search on the answer (time t). The feasibility check: can all n computers run for t minutes simultaneously?',
    'Each battery can contribute at most `min(batteries[i], t)` minutes to the pool. If the total pool ≥ n × t, it is feasible.',
    'Use BigInt for large sums (batteries up to 10^9, n up to 10^5). Binary search range: lo=0, hi=sum(batteries)/n.',
  ],
  functionName: 'maxRunTime',
  params: ['n', 'batteries'],
  starterCode: {
    javascript: `function maxRunTime(n, batteries) {

}`,
    typescript: "function maxRunTime(n: number, batteries: number[]): number {\n\n}",

    python: `def maxRunTime(n, batteries):
    pass
`,
  },
  visibleTests: [
    { args: [2, [3,3,3]], expected: 4 },
    { args: [2, [1,1,1,1]], expected: 2 },
    { args: [3, [10,10,3,5]], expected: 8 },
  ],
  hiddenTests: [
    { args: [1, [5]], expected: 5 },
    { args: [3, [2,2]], expected: 0 },
    { args: [2, [10,10]], expected: 10 },
    { args: [1, [1,1,1]], expected: 3 },
    { args: [2, [1,2,3]], expected: 3 },
    { args: [4, [1,1,1,1,1,1,1,1]], expected: 2 },
  ],
};
