import type { Problem } from '../types';

export const problem: Problem = {
  id: 'koko-eating-bananas',
  title: 'Koko Eating Bananas',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `Koko loves to eat bananas. There are \`n\` piles of bananas, the \`i\`th pile has \`piles[i]\` bananas. The guards have gone and will come back in \`h\` hours.

Koko can decide her bananas-per-hour eating speed of \`k\`. Each hour, she chooses a pile and eats \`k\` bananas from it. If the pile has fewer than \`k\` bananas, she eats all of them and won't eat any more bananas during that hour.

Return the **minimum integer** \`k\` such that she can eat all the bananas within \`h\` hours.

**Approach:** Binary search on \`k\` in range \`[1, max(piles)]\`. For a given \`k\`, the hours needed = \`sum(ceil(pile / k))\` for each pile.`,
  constraints: [
    '1 <= piles.length <= 10000',
    'piles.length <= h <= 1000000000',
    '1 <= piles[i] <= 1000000000',
  ],
  examples: [
    {
      input: 'piles = [3,6,7,11], h = 8',
      output: '4',
      explanation: 'With k=4: piles take 1,2,2,3 hours = 8 hours total.',
    },
    {
      input: 'piles = [30,11,23,4,20], h = 5',
      output: '30',
      explanation: 'With k=30 she eats each pile in exactly 1 hour.',
    },
    {
      input: 'piles = [30,11,23,4,20], h = 6',
      output: '23',
    },
  ],
  hints: [
    'The answer lies in [1, max(piles)]. For a fixed speed k, you can compute the total hours needed. Binary search on k: if current k allows finishing in time, try smaller; otherwise try larger.',
    'Define `canFinish(k) = sum(ceil(pile/k) for pile in piles) <= h`. Binary search for the smallest k where this is true.',
    '`let lo=1,hi=Math.max(...piles); while(lo<hi){const mid=(lo+hi)>>1; const h2=piles.reduce((s,p)=>s+Math.ceil(p/mid),0); if(h2<=h)hi=mid; else lo=mid+1;} return lo;`',
  ],
  functionName: 'minEatingSpeed',
  params: ['piles', 'h'],
  starterCode: {
    javascript: 'function minEatingSpeed(piles, h) {\n  // your code here\n}\n',
    python: 'def minEatingSpeed(piles: list, h: int) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 6, 7, 11], 8], expected: 4 },
    { args: [[30, 11, 23, 4, 20], 5], expected: 30 },
    { args: [[30, 11, 23, 4, 20], 6], expected: 23 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1], 4], expected: 1 },
    { args: [[312884470], 312884469], expected: 2 },
    { args: [[3, 6, 7, 11], 4], expected: 11 },
    { args: [[1000000000], 1], expected: 1000000000 },
  ],
};
