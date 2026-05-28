import type { Problem } from '../types';

export const problem: Problem = {
  id: 'atm-machine-simulation',
  title: 'ATM Machine Simulation',
  difficulty: 'medium',
  tags: ['simulation', 'arrays'],
  description: `Design an ATM machine that holds banknotes of five denominations: **\$20**, **\$50**, **\$100**, **\$200**, and **\$500**. The machine initially has 0 banknotes.

Process a list of operations:
- \`["deposit", [cnt20, cnt50, cnt100, cnt200, cnt500]]\` — add the given counts of each denomination.
- \`["withdraw", amount]\` — try to withdraw exactly \`amount\`. The machine always tries to use the **largest denominations first** (greedy). Return the counts used as \`[cnt20, cnt50, cnt100, cnt200, cnt500]\`, or \`[-1]\` if the amount cannot be made exactly.

**Important:** A withdrawal that returns \`[-1]\` does **not** change the machine's state.

Return an array of results — \`null\` for deposits, the counts array or \`[-1]\` for withdrawals.`,
  constraints: [
    '1 <= operations.length <= 500',
    'Each banknote count is between 0 and 10^9',
    '1 <= withdraw amount <= 10^9',
  ],
  examples: [
    {
      input: 'operations = [["deposit",[0,0,1,2,1]],["withdraw",600],["withdraw",100]]',
      output: '[null,[0,0,1,0,1],[-1]]',
      explanation: 'Deposit: {100:1,200:2,500:1}. Withdraw 600: greedily use 1×500 (rem=100), 0×200, 1×100 (rem=0) → [0,0,1,0,1]. State now: {200:2}. Withdraw 100: no denomination ≤100 in stock → [-1].',
    },
    {
      input: 'operations = [["deposit",[10,5,2,0,1]],["withdraw",700],["withdraw",200]]',
      output: '[null,[0,0,2,0,1],[0,4,0,0,0]]',
      explanation: 'Deposit: {20:10,50:5,100:2,500:1}. Withdraw 700: 1×500 (rem=200), 0×200, 2×100 (rem=0) → [0,0,2,0,1]. State: {20:10,50:5}. Withdraw 200: 4×50 (rem=0) → [0,4,0,0,0].',
    },
  ],
  hints: [
    'Denominations in descending order: [500,200,100,50,20]. For a withdrawal, greedily use as many of the largest denomination as possible: take min(needed/denom, available_count).',
    'After the greedy pass, if the remaining amount is not 0, the withdrawal fails — return [-1] without modifying the machine\'s state.',
    'Only commit the withdrawal changes to the machine\'s state if the exact amount can be made. Store tentative counts in a temporary array.',
  ],
  functionName: 'atmOperations',
  params: ['operations'],
  starterCode: {
    javascript: `function atmOperations(operations) {
  // Bank note counts: [cnt20, cnt50, cnt100, cnt200, cnt500]
  // Denominations: [20, 50, 100, 200, 500]
  // Greedy: largest first. Only commit if exact change possible.
  // Return results array (null for deposit, count array or [-1] for withdraw).
}`,
    typescript: "function atmOperations(operations: ((string | number[])[] | (string | number)[])[]): (null | number[])[] {\n  // Bank note counts: [cnt20, cnt50, cnt100, cnt200, cnt500]\n  // Denominations: [20, 50, 100, 200, 500]\n  // Greedy: largest first. Only commit if exact change possible.\n  // Return results array (null for deposit, count array or [-1] for withdraw).\n}",

    python: `def atmOperations(operations):
    # Bank note counts: [cnt20, cnt50, cnt100, cnt200, cnt500]
    # Denominations: [20, 50, 100, 200, 500]
    # Greedy: largest first. Only commit if exact change possible.
    # Return results list (None for deposit, count list or [-1] for withdraw).
    pass`,
  },
  visibleTests: [
    {
      args: [[['deposit', [0, 0, 1, 2, 1]], ['withdraw', 600], ['withdraw', 100]]],
      expected: [null, [0, 0, 1, 0, 1], [-1]],
    },
    {
      args: [[['deposit', [10, 5, 2, 0, 1]], ['withdraw', 700], ['withdraw', 200]]],
      expected: [null, [0, 0, 2, 0, 1], [0, 4, 0, 0, 0]],
    },
  ],
  hiddenTests: [
    {
      args: [[['deposit', [1, 0, 0, 0, 0]], ['withdraw', 20]]],
      expected: [null, [1, 0, 0, 0, 0]],
    },
    {
      args: [[['deposit', [0, 0, 0, 0, 1]], ['withdraw', 100]]],
      expected: [null, [-1]],
    },
    {
      args: [[['deposit', [5, 4, 3, 2, 1]], ['withdraw', 500], ['withdraw', 500]]],
      expected: [null, [0, 0, 0, 0, 1], [0, 0, 1, 2, 0]],
    },
    {
      args: [[['deposit', [1, 0, 0, 0, 0]], ['withdraw', 100], ['deposit', [5, 0, 0, 0, 0]], ['withdraw', 100]]],
      expected: [null, [-1], null, [5, 0, 0, 0, 0]],
    },
  ],
};
