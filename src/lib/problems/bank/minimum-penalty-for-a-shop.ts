import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-penalty-for-a-shop',
  title: 'Minimum Penalty for a Shop',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `You are given the customer visit log of a shop represented by a **0-indexed** string \`customers\` consisting only of characters \`'N'\` and \`'Y'\`:
- if the \`i\`th character is \`'Y'\`, it means that customers come at the \`i\`th hour
- otherwise, it means that no customers come at the \`i\`th hour

If the shop closes at the \`j\`th hour (\`0 <= j <= n\`), the **penalty** is calculated as follows:
- For every hour when the shop is open and no customers come, the penalty increases by \`1\`.
- For every hour when the shop is closed and customers come, the penalty increases by \`1\`.

Return the **earliest** hour at which the shop must be closed to incur a **minimum** penalty.`,
  constraints: [
    '1 <= customers.length <= 10^5',
    'customers consists only of \'Y\' and \'N\'.',
  ],
  examples: [
    {
      input: 'customers = "YYNY"',
      output: '2',
      explanation: 'Closing at h=2 gives penalty=1 (one Y missed). Earliest minimum.',
    },
    {
      input: 'customers = "NNNNN"',
      output: '0',
      explanation: 'Closing immediately incurs penalty 0.',
    },
    {
      input: 'customers = "YYYY"',
      output: '4',
      explanation: 'Stay open all day; closing at h=4 gives penalty 0.',
    },
  ],
  hints: [
    'Start with closing time h=0: penalty = count(Y in entire string).',
    'Slide h from 0 to n: if customers[h]=\'Y\', penalty decreases; if \'N\', penalty increases.',
    'Track the minimum penalty and the earliest h achieving it.',
  ],
  functionName: 'bestClosingTime',
  params: ['customers'],
  starterCode: {
    javascript: `function bestClosingTime(customers) {

}`,
    python: `def bestClosingTime(customers):
    pass`,
  },
  visibleTests: [
    { args: ['YYNY'], expected: 2 },
    { args: ['NNNNN'], expected: 0 },
    { args: ['YYYY'], expected: 4 },
  ],
  hiddenTests: [
    { args: ['N'], expected: 0 },
    { args: ['Y'], expected: 1 },
    { args: ['YNYNY'], expected: 1 },
    { args: ['NNYYNN'], expected: 0 },
  ],
};
