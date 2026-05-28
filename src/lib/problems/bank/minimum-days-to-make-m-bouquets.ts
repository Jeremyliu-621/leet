import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-days-to-make-m-bouquets',
  title: 'Minimum Number of Days to Make m Bouquets',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `You are given an integer array \`bloomDay\`, an integer \`m\` and an integer \`k\`.

You want to make \`m\` bouquets. To make a bouquet, you need to use \`k\` **adjacent** flowers from the garden.

The garden consists of \`n\` flowers, the \`i\`th flower will bloom in the \`bloomDay[i]\` and then it can be used in exactly **one** bouquet.

Return the minimum number of days you need to wait to be able to make \`m\` bouquets from the garden. If it is impossible to make \`m\` bouquets, return \`-1\`.`,
  constraints: [
    '`bloomDay.length == n`',
    '`1 <= n <= 10^5`',
    '`1 <= bloomDay[i] <= 10^9`',
    '`1 <= m <= 10^6`',
    '`1 <= k <= n`',
  ],
  examples: [
    {
      input: 'bloomDay = [1,10,3,10,2], m = 3, k = 1',
      output: '3',
      explanation: 'After day 1: bloomed = [x,_,_,_,_]. After day 2: [x,_,_,_,x]. After day 3: [x,_,x,_,x]. 3 bouquets of size 1 can be made.',
    },
    {
      input: 'bloomDay = [1,10,3,10,2], m = 3, k = 2',
      output: '-1',
      explanation: 'n=5, m*k=6 > n. Impossible.',
    },
    {
      input: 'bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3',
      output: '12',
      explanation: 'After day 7: [x,x,x,x,_,x,x]. Positions 0-2 make one bouquet; positions 5-6 need 3 adjacent but only 2. After day 12: all bloom. Positions 0-2 (day 7) and 4-6 (using day 12 for pos 4) form 2 bouquets.',
    },
  ],
  hints: [
    'Binary search on the answer (number of days). The search space is [1, max(bloomDay)].',
    'For a given day d, greedily count how many bouquets can be formed: scan the array, count consecutive bloomed flowers (bloomDay[i] <= d), form a bouquet every k consecutive flowers.',
    'If the count of bouquets >= m, day d is feasible; search for smaller d.',
  ],
  functionName: 'minDays',
  params: ['bloomDay', 'm', 'k'],
  starterCode: {
    javascript: 'function minDays(bloomDay, m, k) {\n  \n}\n',
    python: 'def minDays(bloomDay, m, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 10, 3, 10, 2], 3, 1], expected: 3 },
    { args: [[1, 10, 3, 10, 2], 3, 2], expected: -1 },
    { args: [[7, 7, 7, 7, 12, 7, 7], 2, 3], expected: 12 },
  ],
  hiddenTests: [
    { args: [[1000000000, 1000000000], 1, 1], expected: 1000000000 },
    { args: [[1, 2, 3, 4, 5], 1, 5], expected: 5 },
    { args: [[1, 2, 3, 4, 5], 5, 1], expected: 5 },
    { args: [[2, 3, 1, 1], 2, 2], expected: 3 },
  ],
};
