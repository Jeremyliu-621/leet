import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sell-diminishing-valued-colored-balls',
  title: 'Sell Diminishing-Valued Colored Balls',
  difficulty: 'medium',
  tags: ['arrays', 'math', 'binary-search'],
  description: `You have an \`inventory\` of differently colored balls, where \`inventory[i]\` represents the number of balls of the \`i\`th color. You are given an integer \`orders\`, the total number of balls you must sell.

On each turn, you can sell the **ball with the highest value** to a customer. The value of a ball decreases by 1 after every sale of that color — the first ball of color \`i\` is worth \`inventory[i]\`, the second is worth \`inventory[i] - 1\`, and so on.

Return the **maximum total value** you can attain from selling \`orders\` balls. Since the answer may be too large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= inventory.length <= 10^5',
    '1 <= inventory[i] <= 10^9',
    '1 <= orders <= min(sum(inventory[i]), 10^9)',
  ],
  examples: [
    {
      input: 'inventory = [2,5], orders = 4',
      output: '14',
      explanation: 'Sell the balls: 5, 4, 3, 2. Total = 5+4+3+2 = 14.',
    },
    {
      input: 'inventory = [3,5], orders = 6',
      output: '19',
      explanation: 'Sell two color-2 balls at 5 and 4 (total 9), then both colors at 3 each (6+4=10 total 19).',
    },
    {
      input: 'inventory = [2,8,4,10,6], orders = 20',
      output: '110',
      explanation: 'Sell from each color greedily from highest value down.',
    },
  ],
  hints: [
    'Level 1: Sort inventory descending. At each step, "drain" the gap between the current top and the next distinct level.',
    'Level 2: At each step, there are `cnt` colors sharing the top level. The available balls in this gap = cnt × gap. If that fits in orders, take them all using the arithmetic sum formula; else take partial.',
    'Level 3: Use BigInt to avoid overflow. Total time O(n log n) for sort plus O(n) for the greedy sweep — at most n distinct levels.',
  ],
  functionName: 'maxProfit',
  params: ['inventory', 'orders'],
  starterCode: {
    javascript: `function maxProfit(inventory, orders) {
  const MOD = 1000000007n;
  inventory.sort((a, b) => b - a);
  inventory.push(0); // sentinel
  let ans = 0n;
  let cnt = 1n;
  let i = 0;
  while (orders > 0) {
    const gap = inventory[i] - inventory[i + 1];
    const available = cnt * BigInt(gap);
    if (available <= BigInt(orders)) {
      const lo = BigInt(inventory[i + 1] + 1);
      const hi = BigInt(inventory[i]);
      ans = (ans + cnt * (lo + hi) * BigInt(gap) / 2n) % MOD;
      orders -= Number(available);
    } else {
      const full = BigInt(Math.floor(orders / Number(cnt)));
      const rem = BigInt(orders % Number(cnt));
      const base = BigInt(inventory[i]) - full;
      ans = (ans + cnt * (base + 1n + BigInt(inventory[i])) * full / 2n) % MOD;
      ans = (ans + rem * base) % MOD;
      orders = 0;
    }
    cnt++;
    i++;
  }
  return Number(ans);
}`,
    typescript: `function maxProfit(inventory: number[], orders: number): number {
  const MOD = 1000000007n;
  inventory.sort((a, b) => b - a);
  inventory.push(0);
  let ans = 0n;
  let cnt = 1n;
  let i = 0;
  while (orders > 0) {
    const gap = inventory[i]! - inventory[i + 1]!;
    const available = cnt * BigInt(gap);
    if (available <= BigInt(orders)) {
      const lo = BigInt(inventory[i + 1]! + 1);
      const hi = BigInt(inventory[i]!);
      ans = (ans + cnt * (lo + hi) * BigInt(gap) / 2n) % MOD;
      orders -= Number(available);
    } else {
      const full = BigInt(Math.floor(orders / Number(cnt)));
      const rem = BigInt(orders % Number(cnt));
      const base = BigInt(inventory[i]!) - full;
      ans = (ans + cnt * (base + 1n + BigInt(inventory[i]!)) * full / 2n) % MOD;
      ans = (ans + rem * base) % MOD;
      orders = 0;
    }
    cnt++;
    i++;
  }
  return Number(ans);
}`,
    python: `def maxProfit(inventory, orders):
    MOD = 10**9 + 7
    inventory.sort(reverse=True)
    inventory.append(0)
    ans = 0
    cnt = 1
    i = 0
    while orders > 0:
        gap = inventory[i] - inventory[i + 1]
        available = cnt * gap
        if available <= orders:
            lo, hi = inventory[i + 1] + 1, inventory[i]
            ans = (ans + cnt * (lo + hi) * gap // 2) % MOD
            orders -= available
        else:
            full, rem = divmod(orders, cnt)
            base = inventory[i] - full
            ans = (ans + cnt * (base + 1 + inventory[i]) * full // 2) % MOD
            ans = (ans + rem * base) % MOD
            orders = 0
        cnt += 1
        i += 1
    return ans`,
  },
  visibleTests: [
    { args: [[2, 5], 4], expected: 14 },
    { args: [[3, 5], 6], expected: 19 },
    { args: [[2, 8, 4, 10, 6], 20], expected: 110 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[5], 3], expected: 12 },
    { args: [[1000000000], 1000000000], expected: 21 },
    { args: [[1, 1, 1], 3], expected: 3 },
    { args: [[3, 3, 3], 9], expected: 18 },
    { args: [[10, 10], 8], expected: 68 },
  ],
};
