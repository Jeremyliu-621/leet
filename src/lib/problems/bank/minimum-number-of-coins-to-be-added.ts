import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-coins-to-be-added',
  title: 'Minimum Number of Coins to Be Added',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`coins\`, representing the values of the coins available, and an integer \`target\`.

An integer \`x\` is **obtainable** if there exists a subsequence of \`coins\` that sums to \`x\`.

Return the **minimum** number of coins **of any value** that need to be added to make every integer in the range \`[1, target]\` obtainable.`,
  constraints: [
    '`0 <= coins.length <= 10^5`',
    '`1 <= coins[i] <= 10^4`',
    '`1 <= target <= 10^5`',
  ],
  examples: [
    {
      input: 'coins = [1,4,10], target = 19',
      output: '2',
      explanation: 'We need to add coins 2 and 8. The resulting coins [1,2,4,8,10] can make every value from 1 to 19.',
    },
    {
      input: 'coins = [1,4,10,5,7,19,10], target = 19',
      output: '1',
      explanation: 'We add coin 2. The resulting array can make every value from 1 to 19.',
    },
    {
      input: 'coins = [1,2,3], target = 6',
      output: '0',
      explanation: 'All values from 1 to 6 are already obtainable.',
    },
  ],
  functionName: 'minimumAddedCoins',
  params: ['coins', 'target'],
  starterCode: {
    javascript: `/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
function minimumAddedCoins(coins, target) {

}`,
    python: `def minimumAddedCoins(coins: list[int], target: int) -> int:
    pass`,
  },
  hints: [
    'Sort the coins. Track the furthest value you can currently reach with your existing coins.',
    'If your current reach is `reach` (meaning you can make any value 1..reach), the next coin must be <= reach + 1 to avoid a gap. If the next sorted coin is too large, you must add the coin `reach + 1` to fill the gap.',
    'Greedy algorithm:\n```javascript\nconst sorted = [...coins].sort((a, b) => a - b);\nlet reach = 0, count = 0, i = 0;\nwhile (reach < target) {\n  if (i < sorted.length && sorted[i] <= reach + 1) {\n    reach += sorted[i++];\n  } else {\n    reach += reach + 1; // add coin reach+1\n    count++;\n  }\n}\nreturn count;\n```',
  ],
  visibleTests: [
    { args: [[1, 4, 10], 19], expected: 2 },
    { args: [[1, 4, 10, 5, 7, 19, 10], 19], expected: 1 },
    { args: [[1, 2, 3], 6], expected: 0 },
  ],
  hiddenTests: [
    { args: [[], 5], expected: 3 },
    { args: [[5], 10], expected: 3 },
    { args: [[1, 1], 4], expected: 1 },
    { args: [[1, 2, 31], 30], expected: 3 },
    { args: [[1, 2, 4, 8, 16], 31], expected: 0 },
  ],
};
