import type { Problem } from '../types';

export const problem: Problem = {
  id: 'optimal-account-balancing',
  title: 'Optimal Account Balancing',
  difficulty: 'hard',
  tags: ['backtracking', 'bit-manipulation', 'hash-map'],
  description: `You are given an array of transactions where \`transactions[i] = [from_i, to_i, amount_i]\` indicating that person \`from_i\` gave \`amount_i\` dollars to person \`to_i\`.

Return the **minimum number of transactions** required to settle all debts.`,
  constraints: [
    '1 <= transactions.length <= 8',
    '0 <= from_i, to_i <= 20',
    'from_i != to_i',
    '1 <= amount_i <= 100',
  ],
  examples: [
    {
      input: 'transactions = [[0,1,10],[2,0,5]]',
      output: '2',
      explanation: 'Net balances: 0 = -10+5 = -5, 1 = +10, 2 = -5. Settle: 0→1 $5, 2→1 $5. 2 transactions.',
    },
    {
      input: 'transactions = [[0,1,10],[1,0,1],[1,2,5],[2,0,5]]',
      output: '1',
      explanation: 'Net: 0 = -10+1+5=-4, 1 = +10-1-5=4, 2 = +5-5=0. Person 0 owes person 1 $4. 1 transaction.',
    },
    {
      input: 'transactions = [[0,1,5],[1,2,5],[2,3,5],[3,0,5]]',
      output: '0',
      explanation: 'All net balances are 0 (circular debts cancel out). No transactions needed.',
    },
  ],
  hints: [
    'Compute the net balance for each person: add received amounts, subtract paid amounts. Zero-balance people need no settlement.',
    'The problem reduces to: given a list of non-zero debts, find the minimum number of bilateral transactions to zero them all. This is NP-hard in general but feasible for ≤ 12 non-zero balances.',
    'Backtracking: for the first non-zero debt (say debt[i]), try settling it with each other debt debt[j] of opposite sign. Merge them (debt[j] += debt[i]), recurse, then backtrack. The minimum over all tries is the answer.',
  ],
  functionName: 'minTransfers',
  params: ['transactions'],
  starterCode: {
    javascript: `function minTransfers(transactions) {
  const balance = new Map();
  for (const [from, to, amount] of transactions) {
    balance.set(from, (balance.get(from) ?? 0) - amount);
    balance.set(to, (balance.get(to) ?? 0) + amount);
  }

  const debts = [...balance.values()].filter(v => v !== 0);

  function backtrack(start) {
    while (start < debts.length && debts[start] === 0) start++;
    if (start === debts.length) return 0;
    let min = Infinity;
    for (let j = start + 1; j < debts.length; j++) {
      if (debts[start] * debts[j] < 0) {
        debts[j] += debts[start];
        min = Math.min(min, 1 + backtrack(start + 1));
        debts[j] -= debts[start];
      }
    }
    return min;
  }

  return backtrack(0);
}`,
    typescript: `function minTransfers(transactions: number[][]): number {
  const balance = new Map<number, number>();
  for (const [from, to, amount] of transactions) {
    balance.set(from, (balance.get(from) ?? 0) - amount);
    balance.set(to, (balance.get(to) ?? 0) + amount);
  }

  const debts = [...balance.values()].filter(v => v !== 0);

  function backtrack(start: number): number {
    while (start < debts.length && debts[start] === 0) start++;
    if (start === debts.length) return 0;
    let min = Infinity;
    for (let j = start + 1; j < debts.length; j++) {
      if (debts[start]! * debts[j]! < 0) {
        debts[j] = debts[j]! + debts[start]!;
        min = Math.min(min, 1 + backtrack(start + 1));
        debts[j] = debts[j]! - debts[start]!;
      }
    }
    return min;
  }

  return backtrack(0);
}`,
    python: `def minTransfers(transactions):
    from collections import defaultdict
    balance = defaultdict(int)
    for frm, to, amount in transactions:
        balance[frm] -= amount
        balance[to] += amount

    debts = [v for v in balance.values() if v != 0]

    def backtrack(start):
        while start < len(debts) and debts[start] == 0:
            start += 1
        if start == len(debts):
            return 0
        best = float('inf')
        for j in range(start + 1, len(debts)):
            if debts[start] * debts[j] < 0:
                debts[j] += debts[start]
                best = min(best, 1 + backtrack(start + 1))
                debts[j] -= debts[start]
        return best

    return backtrack(0)`,
  },
  visibleTests: [
    { args: [[[0, 1, 10], [2, 0, 5]]], expected: 2 },
    { args: [[[0, 1, 10], [1, 0, 1], [1, 2, 5], [2, 0, 5]]], expected: 1 },
    { args: [[[0, 1, 5], [1, 2, 5], [2, 3, 5], [3, 0, 5]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[0, 1, 10], [1, 2, 5], [2, 0, 5]]], expected: 1 },
    { args: [[[0, 1, 10]]], expected: 1 },
    { args: [[[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]]], expected: 4 },
    { args: [[[0, 1, 3], [1, 2, 3], [2, 3, 3], [3, 0, 3]]], expected: 0 },
  ],
};
