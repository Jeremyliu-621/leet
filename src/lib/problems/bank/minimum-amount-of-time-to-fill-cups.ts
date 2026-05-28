import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-amount-of-time-to-fill-cups',
  title: 'Minimum Amount of Time to Fill Cups',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up **2 cups** with **different** types of water, or **1 cup** of any type of water.

You are given a **0-indexed** integer array \`amount\` of length 3 where \`amount[0]\`, \`amount[1]\`, and \`amount[2]\` denote the number of cold, warm, and hot water cups you need to fill respectively.

Return the **minimum** number of seconds needed to fill up all the cups.`,
  constraints: [
    'amount.length == 3',
    '0 <= amount[i] <= 100',
  ],
  examples: [
    {
      input: 'amount = [1,4,2]',
      output: '4',
      explanation: 'One approach: fill warm+hot, warm+cold, warm+hot, warm. 4 seconds.',
    },
    {
      input: 'amount = [5,0,0]',
      output: '5',
      explanation: 'Only cold needed. Fill 1 cold per second. 5 seconds.',
    },
    {
      input: 'amount = [0,0,0]',
      output: '0',
      explanation: 'No cups needed.',
    },
  ],
  hints: [
    'The answer is max(max(amount), ceil(sum(amount) / 2)). The dominant cup type sets a lower bound; pairing optimally gives another lower bound.',
    'If one type has more cups needed than all others combined, you\'ll have to fill it alone some of the time: lower bound is max(amount).',
    'Otherwise, pair the two most-needed types each second. Total time = ceil(total / 2) since each second fills 2 cups.',
  ],
  functionName: 'fillCups',
  params: ['amount'],
  starterCode: {
    javascript: `function fillCups(amount) {

}`,
    typescript: "function fillCups(amount: number[]): number {\n\n}",

    python: `def fillCups(amount):
    pass`,
  },
  visibleTests: [
    { args: [[1, 4, 2]], expected: 4 },
    { args: [[5, 0, 0]], expected: 5 },
    { args: [[0, 0, 0]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0, 0, 1]], expected: 1 },
    { args: [[3, 3, 3]], expected: 5 },
    { args: [[2, 2, 2]], expected: 3 },
    { args: [[1, 0, 0]], expected: 1 },
  ],
};
