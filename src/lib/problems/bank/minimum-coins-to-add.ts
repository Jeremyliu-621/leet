import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-coins-to-add',
  title: 'Minimum Number of Coins to Be Added',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`coins\`, representing coin denominations, and an integer \`target\`.

An integer \`x\` is **obtainable** if there exists a subset of \`coins\` whose sum equals \`x\`.

Return the **minimum number of coins** of **any value** that need to be added to the array so that every integer in the range \`[1, target]\` is obtainable.

**Note:** You can add coins of any denomination (not necessarily in \`coins\`).`,
  constraints: [
    '1 <= target <= 10^5',
    '0 <= coins.length <= 10^5',
    '1 <= coins[i] <= target',
  ],
  examples: [
    {
      input: 'coins = [1,4,10], target = 19',
      output: '2',
      explanation: 'Sort: [1,4,10]. Greedy: reach=0 → process 1 → reach=1. Next coin 4 > reach+1=2: add 2, reach=3, ops=1 → process 4 → reach=7. Next coin 10 > reach+1=8: add 8, reach=15, ops=2 → process 10 → reach=25 ≥ 19. Answer: 2.',
    },
    {
      input: 'coins = [1,4,10,5,7,19], target = 19',
      output: '1',
      explanation: 'Sort: [1,4,5,7,10,19]. reach=1 after 1. Gap at 4 > 2: add 2, reach=3, ops=1 → 4 ≤ 4: reach=7 → 5 ≤ 8: reach=12 → 7 ≤ 13: reach=19 ≥ 19. Answer: 1.',
    },
    {
      input: 'coins = [1,1,1], target = 20',
      output: '3',
      explanation: 'Process all three 1s: reach=3. Then add 4 (reach=7), add 8 (reach=15), add 16 (reach=31 ≥ 20). 3 additions.',
    },
  ],
  hints: [
    'Sort `coins`. Maintain a variable `reach` = the maximum value currently obtainable. Initially `reach = 0`.',
    'Iterate through sorted coins. If the next coin value is > `reach + 1`, there is a gap: add a new coin of value `reach + 1`. Update `reach += reach + 1`. Repeat until `reach >= target` or the gap is closed.',
    'After processing all coins, if `reach < target`, keep doubling: add coin `reach + 1`, update `reach = 2*reach + 1`.',
  ],
  functionName: 'minimumAddedCoins',
  params: ['coins', 'target'],
  starterCode: {
    javascript: 'function minimumAddedCoins(coins, target) {\n  // your code here\n}\n',
    typescript: "function minimumAddedCoins(coins: number[], target: number): number {\n  // your code here\n}",

    python: 'def minimumAddedCoins(coins, target):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 4, 10], 19], expected: 2 },
    { args: [[1, 4, 10, 5, 7, 19], 19], expected: 1 },
    { args: [[1, 1, 1], 20], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[], 5], expected: 3 },
    { args: [[1, 2, 3], 10], expected: 1 },
    { args: [[5, 10], 20], expected: 3 },
    { args: [[1, 2, 4, 8], 15], expected: 0 },
  ],
};
