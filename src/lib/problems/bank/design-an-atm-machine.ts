import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-an-atm-machine',
  title: 'Design an ATM Machine',
  difficulty: 'medium',
  tags: ['design', 'simulation'],
  description: `There is an ATM machine that stores banknotes of 5 denominations: **20, 50, 100, 200, and 500** dollars. Initially the ATM is empty. The machine only accepts deposits in one transaction and the machine always tries to use as many of the **largest** denomination possible when withdrawing.

Implement the \`ATM\` class:

- \`ATM()\` Initializes the ATM object.
- \`void deposit(int[] banknotesCount)\` Deposits new banknotes. \`banknotesCount[i]\` is the number of banknotes of denomination \`[20, 50, 100, 200, 500][i]\`.
- \`int[] withdraw(int amount)\` Returns an array of length 5 representing the number of banknotes of each denomination used to withdraw \`amount\`. Tries the largest denomination first. If it is not possible to withdraw, returns \`[-1]\`. **A failed withdrawal does not change the ATM state.**

Simulate the class operations: first argument is a list of method names, second is a list of argument lists. Return a list of results (null for constructor/deposit calls).`,
  constraints: [
    '`banknotesCount.length == 5`',
    '`0 <= banknotesCount[i] <= 10^9`',
    '`1 <= amount <= 10^9`',
    'At most `5000` calls in total to `deposit` and `withdraw`.',
    'At most `5000` calls to `withdraw` will be made.',
  ],
  examples: [
    {
      input: 'ops = ["ATM","deposit","withdraw","deposit","withdraw","withdraw"], args = [[],[[0,0,1,2,1]],[600],[[0,1,0,1,1]],[600],[550]]',
      output: '[null,null,[0,0,1,0,1],null,[0,1,0,0,1],[-1]]',
      explanation: 'After depositing [0,0,1,2,1]: 100×1, 200×2, 500×1. Withdraw 600: use 500×1+100×1 → [0,0,1,0,1]. ATM now has 200×2. After deposit [0,1,0,1,1]: have 50×1,200×3,500×1. Withdraw 600: try 500×1=500, rem=100; 200>100 skip; 100×0 skip; 50×1=50, rem=50; 20×0 skip → fails, return [-1]. ATM unchanged. Withdraw 550: 500×1=500, rem=50; 50×1=50, rem=0 → [0,1,0,0,1].',
    },
  ],
  hints: [
    'Store the count of each denomination. Denominations in order: [20, 50, 100, 200, 500].',
    'For withdrawal, try from largest to smallest. For each denomination, take as many as possible without exceeding the remaining amount.',
    'If the remaining amount after trying all denominations is not 0, return [-1] without changing the stored counts.',
    'If successful, subtract the used counts from the stored counts.',
  ],
  functionName: 'atm',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function atm(ops, args) {
  // ops[0] === "ATM", then "deposit" or "withdraw"
  // args[i] is [] for ATM, [banknotesCount] for deposit, [amount] for withdraw
  // Return array of results (null for ATM/deposit, int[] or [-1] for withdraw)
}`,
    typescript: `function atm(ops: string[], args: (number[] | number[][] | number[])[]): (null | number[])[] {
  // ops[0] === "ATM", then "deposit" or "withdraw"
  // args[i] is [] for ATM, [banknotesCount] for deposit, [amount] for withdraw
  // Return array of results (null for ATM/deposit, int[] or [-1] for withdraw)
}`,
    python: `def atm(ops, args):
    # ops[0] == "ATM", then "deposit" or "withdraw"
    # args[i] is [] for ATM, [banknotesCount] for deposit, [amount] for withdraw
    # Return list of results (None for ATM/deposit, list or [-1] for withdraw)
    pass`,
  },
  visibleTests: [
    {
      args: [
        ['ATM', 'deposit', 'withdraw', 'deposit', 'withdraw', 'withdraw'],
        [[], [[0, 0, 1, 2, 1]], [600], [[0, 1, 0, 1, 1]], [600], [550]],
      ],
      expected: [null, null, [0, 0, 1, 0, 1], null, [-1], [0, 1, 0, 0, 1]],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['ATM', 'withdraw'],
        [[], [100]],
      ],
      expected: [null, [-1]],
    },
    {
      args: [
        ['ATM', 'deposit', 'withdraw'],
        [[], [[1, 0, 0, 0, 0]], [20]],
      ],
      expected: [null, null, [1, 0, 0, 0, 0]],
    },
    {
      args: [
        ['ATM', 'deposit', 'withdraw'],
        [[], [[0, 0, 0, 0, 1]], [500]],
      ],
      expected: [null, null, [0, 0, 0, 0, 1]],
    },
    {
      args: [
        ['ATM', 'deposit', 'withdraw', 'withdraw'],
        [[], [[2, 0, 1, 0, 0]], [120], [50]],
      ],
      expected: [null, null, [1, 0, 1, 0, 0], [-1]],
    },
    {
      args: [
        ['ATM', 'deposit', 'withdraw', 'deposit', 'withdraw'],
        [[], [[0, 0, 0, 0, 2]], [1000], [[0, 0, 0, 0, 1]], [500]],
      ],
      expected: [null, null, [0, 0, 0, 0, 2], null, [0, 0, 0, 0, 1]],
    },
    {
      args: [
        ['ATM', 'deposit', 'withdraw'],
        [[], [[5, 2, 3, 1, 1]], [1000]],
      ],
      expected: [null, null, [0, 0, 3, 1, 1]],
    },
  ],
};
