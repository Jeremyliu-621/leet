import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-coins-for-fruits-ii',
  title: 'Minimum Number of Coins for Fruits II',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are at a fruit market with **different** fruits for sale. You are given a **1-indexed** integer array \`prices\`, where \`prices[i]\` is the number of coins that the \`i\`th fruit costs.

The fruit market has a special offer: if you purchase the \`i\`th fruit at \`prices[i]\` coins, you can get **the next** \`i\` **fruits for free**.

Note that even if you can take fruit \`j\` for free, you can still purchase it for \`prices[j]\` coins to get a new "earn free" offer.

Return *the **minimum** number of coins needed to acquire all \`n\` fruits*.

**Note:** This is the harder version of the problem where \`n\` can be up to \`10^5\`, requiring an efficient O(n) solution.`,
  constraints: [
    '1 <= prices.length <= 10^5',
    '1 <= prices[i] <= 10^5',
  ],
  examples: [
    {
      input: 'prices = [3,1,2]',
      output: '4',
      explanation: 'Buy fruit 1 (cost 3) → fruit 2 is free. Buy fruit 2 (cost 1) → fruits 3 and 4 are free. Total = 3+1 = 4.',
    },
    {
      input: 'prices = [1,10,1,1]',
      output: '2',
      explanation: 'Buy fruit 1 (cost 1) → fruit 2 free. Buy fruit 3 (cost 1) → fruits 4..6 free. Total = 1+1 = 2.',
    },
    {
      input: 'prices = [5]',
      output: '5',
      explanation: 'Only one fruit, must buy it.',
    },
  ],
  hints: [
    'Level 1: Define f[i] = minimum cost to collect all fruits 1..i such that the last purchased fruit covers position i. f[i] = min over l in [ceil(i/2), i] of (f[l-1] + prices[l-1]).',
    'Level 2: Let g[l] = f[l-1] + prices[l-1]. Then f[i] = min(g[l]) for l in [ceil(i/2), i]. As i increases, the window [ceil(i/2), i] slides right: new element g[i] is added each step, and elements with index < ceil(i/2) expire.',
    'Level 3: Maintain a monotone min-deque (indices increasing, values non-decreasing front-to-back). Add g[i] to back (pop while back value ≥ g[i]). Pop front while front index < ceil(i/2). f[i] = deque front value. O(n) total.',
  ],
  functionName: 'minimumCoins',
  params: ['prices'],
  starterCode: {
    javascript: `function minimumCoins(prices) {
  const n = prices.length;
  const f = new Array(n + 1).fill(0);
  const deq = []; // [{idx, val}] — monotone min-deque
  for (let i = 1; i <= n; i++) {
    const gi = f[i - 1] + prices[i - 1];
    while (deq.length && deq[deq.length - 1].val >= gi) deq.pop();
    deq.push({ idx: i, val: gi });
    const left = Math.ceil(i / 2);
    while (deq[0].idx < left) deq.shift();
    f[i] = deq[0].val;
  }
  return f[n];
}`,
    typescript: `function minimumCoins(prices: number[]): number {
  const n = prices.length;
  const f = new Array<number>(n + 1).fill(0);
  const deq: { idx: number; val: number }[] = [];
  for (let i = 1; i <= n; i++) {
    const gi = f[i - 1]! + prices[i - 1]!;
    while (deq.length && deq[deq.length - 1]!.val >= gi) deq.pop();
    deq.push({ idx: i, val: gi });
    const left = Math.ceil(i / 2);
    while (deq[0]!.idx < left) deq.shift();
    f[i] = deq[0]!.val;
  }
  return f[n]!;
}`,
    python: `def minimumCoins(prices):
    from collections import deque
    n = len(prices)
    f = [0] * (n + 1)
    dq = deque()  # (idx, val) monotone min-deque
    for i in range(1, n + 1):
        gi = f[i - 1] + prices[i - 1]
        while dq and dq[-1][1] >= gi:
            dq.pop()
        dq.append((i, gi))
        left = (i + 1) // 2  # ceil(i/2)
        while dq[0][0] < left:
            dq.popleft()
        f[i] = dq[0][1]
    return f[n]`,
  },
  visibleTests: [
    { args: [[3, 1, 2]], expected: 4 },
    { args: [[1, 10, 1, 1]], expected: 2 },
    { args: [[5]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 4 },
    { args: [[5, 1, 1, 1, 1]], expected: 6 },
    { args: [[1, 1, 1, 1, 1]], expected: 2 },
    { args: [[10, 1, 1, 1, 1, 1]], expected: 11 },
  ],
};
