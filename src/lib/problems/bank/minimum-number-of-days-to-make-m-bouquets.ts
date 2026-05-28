import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-days-to-make-m-bouquets',
  title: 'Minimum Number of Days to Make m Bouquets',
  difficulty: 'medium',
  tags: ['binary-search'],
  description: `You have a garden with \`n\` flowers and an integer array \`bloomDay\`, where \`bloomDay[i]\` is the day the \`i\`th flower blooms.

To make a bouquet, you need to use \`k\` **adjacent** bloomed flowers from the garden. Return the **minimum** number of days you need to wait to make \`m\` bouquets from the garden. If it is impossible to make \`m\` bouquets, return \`-1\`.`,
  constraints: [
    'bloomDay.length == n',
    '1 <= n <= 10^5',
    '1 <= bloomDay[i] <= 10^9',
    '1 <= m <= 10^6',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'bloomDay = [1,10,3,10,2], m = 3, k = 1',
      output: '3',
      explanation: 'On day 3: flowers 0,2,4 have bloomed. 3 bouquets of size 1 possible.',
    },
    {
      input: 'bloomDay = [1,10,3,10,2], m = 3, k = 2',
      output: '-1',
      explanation: 'n=5 < m*k=6, impossible.',
    },
    {
      input: 'bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3',
      output: '12',
    },
  ],
  hints: [
    'Binary search on the answer (day). The feasibility check is monotone.',
    'For a given day d, count consecutive bloomed flowers; each run of ≥k gives floor(run/k) bouquets.',
    `\`\`\`js
function minDays(bloomDay, m, k) {
  if (m*k > bloomDay.length) return -1;
  function feasible(day) {
    let bouquets=0, flowers=0;
    for (const d of bloomDay) {
      if (d<=day) { flowers++; if(flowers===k){bouquets++;flowers=0;} }
      else flowers=0;
    }
    return bouquets>=m;
  }
  let lo=1,hi=Math.max(...bloomDay);
  while(lo<hi){const mid=(lo+hi)>>1;feasible(mid)?hi=mid:lo=mid+1;}
  return lo;
}\`\`\``,
  ],
  functionName: 'minDays',
  params: ['bloomDay', 'm', 'k'],
  starterCode: {
    javascript: 'function minDays(bloomDay, m, k) {\n\n}\n',
    typescript: "function minDays(bloomDay: number[], m: number, k: number): number {\n\n}",

    python: 'def minDays(bloomDay, m, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 10, 3, 10, 2], 3, 1], expected: 3 },
    { args: [[1, 10, 3, 10, 2], 3, 2], expected: -1 },
    { args: [[7, 7, 7, 7, 12, 7, 7], 2, 3], expected: 12 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1, 1], expected: 1 },
    { args: [[1000000000, 1000000000], 1, 2], expected: 1000000000 },
    { args: [[1, 2, 4, 9, 3, 4, 1], 2, 2], expected: 4 },
    { args: [[1, 1, 1, 1], 4, 1], expected: 1 },
  ],
};
