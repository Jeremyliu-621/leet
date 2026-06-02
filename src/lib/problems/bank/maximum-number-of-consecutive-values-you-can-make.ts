import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-consecutive-values-you-can-make',
  title: 'Maximum Number of Consecutive Values You Can Make',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`coins\` of length \`n\` which represents the \`n\` coins that you own. The value of the \`i\`th coin is \`coins[i]\`. You can **make** some value \`x\` if you can choose some of your \`n\` coins such that their values sum to \`x\`.

Return the **maximum number of consecutive integer values** that you **can** make with your coins starting from and including \`0\`.

Note that you may use each coin at most once.

**Examples:**
- \`coins = [1, 3]\` → **2** (can make 0 and 1, but not 2)
- \`coins = [1, 1, 1, 4]\` → **8** (can make 0–7)
- \`coins = [1, 4, 10, 3, 1]\` → **20** (can make 0–19)

**Constraints:**
- \`1 ≤ coins.length ≤ 4 × 10⁴\`
- \`1 ≤ coins[i] ≤ 4 × 10⁴\``,
  constraints: [
    '1 ≤ coins.length ≤ 4 × 10⁴',
    '1 ≤ coins[i] ≤ 4 × 10⁴',
  ],
  examples: [
    {
      input: 'coins = [1,3]',
      output: '2',
      explanation: 'You can make 0 (empty) and 1, but not 2 since 3 > 1+1.',
    },
    {
      input: 'coins = [1,1,1,4]',
      output: '8',
      explanation: 'Sort: [1,1,1,4]. After coin 1: reach=1, coin 2: reach=2, coin 3: reach=3, coin 4: reach=7. Can make 0–7.',
    },
    {
      input: 'coins = [1,4,10,3,1]',
      output: '20',
    },
  ],
  hints: [
    'Sort the coins. Maintain a variable `reach` = maximum consecutive value currently reachable (starting at 0, meaning you can make 0..reach).',
    'For each coin in sorted order: if `coins[i] > reach + 1`, there is a gap — you cannot make `reach + 1`. Stop. Otherwise, add `coins[i]` to `reach` (new reach = reach + coins[i]).',
    'The answer is `reach + 1` (the count of integers 0..reach).',
  ],
  functionName: 'getMaximumConsecutive',
  params: ['coins'],
  starterCode: {
    javascript: `function getMaximumConsecutive(coins) {
  coins.sort((a, b) => a - b);
  let reach = 0;
  for (const c of coins) {
    if (c > reach + 1) break;
    reach += c;
  }
  return reach + 1;
}`,
    typescript: `function getMaximumConsecutive(coins: number[]): number {
  coins.sort((a, b) => a - b);
  let reach = 0;
  for (const c of coins) {
    if (c > reach + 1) break;
    reach += c;
  }
  return reach + 1;
}`,
    python: `def getMaximumConsecutive(coins):
    if hasattr(coins, 'to_py'): coins = list(coins.to_py())
    coins = sorted(int(c) for c in coins)
    reach = 0
    for c in coins:
        if c > reach + 1: break
        reach += c
    return reach + 1`,
  },
  visibleTests: [
    { args: [[1, 3]], expected: 2 },
    { args: [[1, 1, 1, 4]], expected: 8 },
    { args: [[1, 4, 10, 3, 1]], expected: 20 },
    { args: [[1, 2, 3]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 2 },
    { args: [[2]], expected: 1 },
    { args: [[1, 1]], expected: 3 },
    { args: [[1, 2, 4, 8]], expected: 16 },
    { args: [[1, 1, 2, 4]], expected: 9 },
    { args: [[5, 7, 1, 1, 2, 3, 22]], expected: 20 },
    { args: [[1, 2, 3, 4, 5]], expected: 16 },
  ],
};
