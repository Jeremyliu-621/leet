import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-alloys',
  title: 'Maximum Number of Alloys',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are the owner of a company that creates alloys using various types of metals. There are \`n\` different types of metals and \`k\` machines.

The \`i\`-th machine uses \`composition[i][j]\` units of the \`j\`-th metal to create **one** alloy. You currently have \`stock[j]\` units of the \`j\`-th metal and a \`budget\` to buy additional units. You can buy any number of units of the \`j\`-th metal at \`cost[j]\` per unit.

You can only use **one machine** at a time. Return the **maximum number of alloys** you can create using any single machine.`,
  constraints: [
    '`1 <= k, n <= 100`',
    '`0 <= budget <= 10^8`',
    '`composition.length == k`',
    '`composition[i].length == n`',
    '`1 <= composition[i][j] <= 100`',
    '`stock.length == cost.length == n`',
    '`0 <= stock[i] <= 10^8`',
    '`1 <= cost[i] <= 100`',
  ],
  examples: [
    {
      input: 'n = 2, k = 3, budget = 15, composition = [[1,1],[1,2],[1,3]], stock = [0,0], cost = [1,2]',
      output: '5',
      explanation: 'Use machine 0 to create 5 alloys. Need 5 of metal 0 (cost 5) and 5 of metal 1 (cost 10). Total 15 ≤ budget.',
    },
    {
      input: 'n = 2, k = 1, budget = 10, composition = [[1,1]], stock = [0,0], cost = [1,2]',
      output: '3',
      explanation: 'Machine 0 needs 1 of each metal. For 3 alloys: buy 3 of metal 0 (cost 3) and 3 of metal 1 (cost 6). Total 9 ≤ 10. For 4 alloys: cost 4+8=12 > 10.',
    },
    {
      input: 'n = 2, k = 2, budget = 10, composition = [[1,1],[3,1]], stock = [0,0], cost = [1,2]',
      output: '3',
      explanation: 'Machine 0 gives 3 alloys (cost 9 ≤ 10). Machine 1 gives 2 alloys (cost 6+2=8 ≤ 10, but 4 alloys cost 12+2=14 > 10 wait, 3 alloys cost 9+6=15>10... actually machine 1 for 2: 3×2+1×2=6+2=8≤10). Max=3 from machine 0.',
    },
  ],
  hints: [
    'Binary search on the answer: can we make `mid` alloys using any machine within budget?',
    'For a given machine i and target `mid`, compute the total purchase cost: for each metal j, buy max(0, composition[i][j]*mid - stock[j]) units.',
    'If the total cost ≤ budget for any machine, then `mid` alloys is achievable.',
  ],
  functionName: 'maxNumberOfAlloys',
  params: ['n', 'k', 'budget', 'composition', 'stock', 'cost'],
  starterCode: {
    javascript: `function maxNumberOfAlloys(n, k, budget, composition, stock, cost) {
  const canMake = (mid) => {
    for (let i = 0; i < k; i++) {
      let spend = 0;
      for (let j = 0; j < n; j++) {
        const need = Math.max(0, composition[i][j] * mid - stock[j]);
        spend += need * cost[j];
        if (spend > budget) break;
      }
      if (spend <= budget) return true;
    }
    return false;
  };
  let lo = 0, hi = 2e8;
  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2);
    if (canMake(mid)) lo = mid; else hi = mid - 1;
  }
  return lo;
}`,
    typescript: `function maxNumberOfAlloys(n: number, k: number, budget: number, composition: number[][], stock: number[], cost: number[]): number {
  const canMake = (mid: number): boolean => {
    for (let i = 0; i < k; i++) {
      let spend = 0;
      for (let j = 0; j < n; j++) {
        const need = Math.max(0, composition[i]![j]! * mid - stock[j]!);
        spend += need * cost[j]!;
        if (spend > budget) break;
      }
      if (spend <= budget) return true;
    }
    return false;
  };
  let lo = 0, hi = 2e8;
  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2);
    if (canMake(mid)) lo = mid; else hi = mid - 1;
  }
  return lo;
}`,
    python: `def maxNumberOfAlloys(n, k, budget, composition, stock, cost):
    if hasattr(composition, 'to_py'): composition = composition.to_py()
    composition = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in composition]
    if hasattr(stock, 'to_py'): stock = [int(x) for x in stock.to_py()]
    if hasattr(cost, 'to_py'): cost = [int(x) for x in cost.to_py()]
    def can_make(mid):
        for i in range(k):
            spend = sum(max(0, composition[i][j]*mid - stock[j])*cost[j] for j in range(n))
            if spend <= budget: return True
        return False
    lo, hi = 0, 2*10**8
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if can_make(mid): lo = mid
        else: hi = mid - 1
    return lo`,
  },
  visibleTests: [
    { args: [2, 3, 15, [[1, 1], [1, 2], [1, 3]], [0, 0], [1, 2]], expected: 5 },
    { args: [2, 1, 10, [[1, 1]], [0, 0], [1, 2]], expected: 3 },
    { args: [2, 2, 10, [[1, 1], [3, 1]], [0, 0], [1, 2]], expected: 3 },
  ],
  hiddenTests: [
    { args: [1, 1, 0, [[1]], [0], [1]], expected: 0 },
    { args: [1, 1, 100, [[1]], [0], [1]], expected: 100 },
    { args: [1, 1, 0, [[1]], [5], [1]], expected: 5 },
    { args: [2, 2, 10, [[1, 1], [2, 2]], [0, 0], [1, 1]], expected: 5 },
    { args: [2, 1, 100, [[1, 2]], [10, 10], [3, 5]], expected: 13 },
  ],
};
