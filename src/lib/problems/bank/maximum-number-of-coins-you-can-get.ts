import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-coins-you-can-get',
  title: 'Maximum Number of Coins You Can Get',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `There are \`3n\` piles of coins, where the sizes are given by the integer array \`piles\`. You and your friends take turns choosing piles. On each turn:

- Your friend **Bob** picks the pile with the **most** coins.
- **You** pick the pile with the **second most** coins.
- Your friend **Alice** picks the pile with the **fewest** coins.

Repeat this process until all piles are chosen. Return the **maximum** number of coins you can get.`,
  constraints: [
    '3 <= piles.length <= 10^5',
    'piles.length % 3 == 0',
    '1 <= piles[i] <= 10^4',
  ],
  examples: [
    {
      input: 'piles = [2,4,1,2,7,8]',
      output: '9',
      explanation: 'Sort: [1,2,2,4,7,8]. Round 1: Bob=8, You=7, Alice=1. Round 2: Bob=4, You=2, Alice=2. You get 7+2=9.',
    },
    {
      input: 'piles = [2,4,5]',
      output: '4',
      explanation: 'Bob=5, You=4, Alice=2. You get 4.',
    },
    {
      input: 'piles = [9,8,7,6,5,1,2,3,4]',
      output: '18',
      explanation: 'Sort: [1,2,3,4,5,6,7,8,9]. You take the 2nd in each group of 3 from the top: 8+6+4=18.',
    },
  ],
  hints: [
    'Sort piles in ascending order. Alice always gets the smallest, Bob gets the largest, and you get the second largest.',
    'After sorting, you can always take piles at indices n/3, n/3+2, n/3+4, ... (every other element from n/3 to n-2).',
    'In the sorted array of length 3n, you pick elements at positions n, n+2, n+4, ..., 3n-2 (0-indexed: n, n+2, ... up to 3n-2).',
  ],
  functionName: 'maxCoins',
  params: ['piles'],
  starterCode: {
    javascript: `function maxCoins(piles) {
  piles.sort((a, b) => a - b);
  const n = piles.length;
  let ans = 0;
  for (let i = n / 3; i < n; i += 2) ans += piles[i];
  return ans;
}`,
    typescript: `function maxCoins(piles: number[]): number {
  piles.sort((a, b) => a - b);
  const n = piles.length;
  let ans = 0;
  for (let i = n / 3; i < n; i += 2) ans += piles[i]!;
  return ans;
}`,
    python: `def maxCoins(piles):
    if hasattr(piles, 'to_py'): piles = list(piles.to_py())
    piles = sorted(int(x) for x in piles)
    n = len(piles)
    return sum(piles[i] for i in range(n // 3, n, 2))`,
  },
  visibleTests: [
    { args: [[2, 4, 1, 2, 7, 8]], expected: 9 },
    { args: [[2, 4, 5]], expected: 4 },
    { args: [[9, 8, 7, 6, 5, 1, 2, 3, 4]], expected: 18 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[1, 1, 1, 1, 1, 1]], expected: 2 },
    { args: [[10, 10, 10]], expected: 10 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 8 },
    { args: [[3, 3, 3, 3, 3, 3]], expected: 6 },
    { args: [[1, 1, 1, 10, 10, 10]], expected: 11 },
  ],
};
