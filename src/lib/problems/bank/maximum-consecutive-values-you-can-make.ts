import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-consecutive-values-you-can-make',
  title: 'Maximum Number of Consecutive Values You Can Make',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`coins\` of length \`n\` which represents the \`n\` coins you have. The value of the \`i\`-th coin is \`coins[i]\`. You can **use each coin at most once**.

Return the **maximum number of consecutive integer values** that you can make **starting from and including** \`0\`.

For example, if you can make the values 0, 1, 2, and 3, but not 4, return 4.

**Constraints:**
- \`1 ≤ coins.length ≤ 4 × 10^4\`
- \`1 ≤ coins[i] ≤ 4 × 10^4\``,
  examples: [
    {
      input: 'coins = [1,3]',
      output: '2',
      explanation: 'You can make 0 (empty) and 1. You cannot make 2, since you would need a coin with value 1 or 2 but the next coin is 3.',
    },
    {
      input: 'coins = [1,1,1,4]',
      output: '8',
      explanation: 'Sorted: [1,1,1,4]. With three 1s you can reach 3, then +4 gives 7. Can make 0..7 = 8 values.',
    },
    {
      input: 'coins = [1,4,10,3,1]',
      output: '20',
      explanation: 'Sorted: [1,1,3,4,10]. Each coin extends the reachable range to 19. Can make 0..19 = 20 values.',
    },
  ],
  constraints: ['Sort coins. Greedily extend reachable range: if reach = r and coins[i] ≤ r + 1, set reach = r + coins[i]. Answer = reach + 1.'],
  hints: [
    'Sort coins in ascending order.',
    'Maintain a variable reach = 0 meaning you can currently make all values from 0 to reach.',
    'For each coin in sorted order: if coin ≤ reach + 1, you can extend reach to reach + coin. Otherwise you cannot bridge the gap, so stop.',
    'The answer is reach + 1 (counting 0 through reach inclusive).',
  ],
  params: ['coins'],
  starterCode: {
    javascript: `function getMaximumConsecutive(coins) {

}`,
    typescript: `function getMaximumConsecutive(coins: number[]): number {

}`,
    python: `def getMaximumConsecutive(coins: list[int]) -> int:
    pass`,
  },
  functionName: 'getMaximumConsecutive',
  visibleTests: [
    { args: [[1, 3]], expected: 2 },
    { args: [[1, 1, 1, 4]], expected: 8 },
    { args: [[1, 4, 10, 3, 1]], expected: 20 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 2 },
    { args: [[2]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: 11 },
    { args: [[1, 1, 1, 1]], expected: 5 },
    { args: [[3, 1, 5]], expected: 2 },
    { args: [[1, 1, 2, 4]], expected: 9 },
    { args: [[1, 2, 2, 4, 8]], expected: 18 },
  ],
};
