import type { Problem } from '../types';

export const problem: Problem = {
  id: 'koko-eating-bananas',
  title: 'Koko Eating Bananas',
  difficulty: 'medium',
  tags: ['binary-search'],
  description: `Koko loves to eat bananas. There are \`n\` piles of bananas, the \`i\`-th pile has \`piles[i]\` bananas. The guards have gone and will come back in \`h\` hours.

Koko can decide her bananas-per-hour eating speed of \`k\`. Each hour, she chooses some pile of bananas and eats \`k\` bananas from that pile. If the pile has less than \`k\` bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the **minimum integer** \`k\` such that she can eat all the bananas within \`h\` hours.`,
  examples: [
    { input: 'piles = [3,6,7,11], h = 8', output: '4' },
    { input: 'piles = [30,11,23,4,20], h = 5', output: '30' },
    { input: 'piles = [30,11,23,4,20], h = 6', output: '23' },
  ],
  constraints: [
    '1 <= piles.length <= 10^4',
    'piles.length <= h <= 10^9',
    '1 <= piles[i] <= 10^9',
  ],
  functionName: 'minEatingSpeed',
  params: ['piles', 'h'],
  starterCode: {
    javascript: 'function minEatingSpeed(piles, h) {\n  // your code here\n}\n',
    python: 'def minEatingSpeed(piles, h):\n    # your code here\n    pass\n',
  },
  hints: [
    'Binary search on the eating speed k, in range [1, max(piles)].',
    'For a given k, compute total hours = sum of ceil(pile/k) for each pile. ceil(pile/k) = floor((pile+k-1)/k) = Math.ceil(pile/k).',
    'If total hours <= h, then k is feasible; try smaller. Otherwise try larger.',
  ],
  visibleTests: [
    { args: [[3, 6, 7, 11], 8], expected: 4 },
    { args: [[30, 11, 23, 4, 20], 5], expected: 30 },
    { args: [[30, 11, 23, 4, 20], 6], expected: 23 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1], 4], expected: 1 },
    { args: [[312884470], 312884469], expected: 2 },
    { args: [[1000000000], 1], expected: 1000000000 },
    { args: [[3, 6, 7, 11], 4], expected: 11 },
  ],
};
