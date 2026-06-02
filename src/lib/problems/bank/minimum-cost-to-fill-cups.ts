import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-fill-cups',
  title: 'Minimum Amount of Time to Fill Cups',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You have a water dispenser that can dispense cold, warm, and hot water. Every second you can either fill up **2 cups** with **different** types of water, or **1 cup** of any type of water.

You are given a **0-indexed** integer array \`amount\` of length \`3\` where \`amount[0]\`, \`amount[1]\`, and \`amount[2]\` denote the number of cold, warm, and hot water cups you need to fill respectively. Return the **minimum** number of seconds needed to fill all the cups.`,
  constraints: [
    'amount.length == 3',
    '0 <= amount[i] <= 100',
  ],
  examples: [
    {
      input: 'amount = [1,4,2]',
      output: '4',
      explanation: 'Fill hot+warm, hot+warm, hot+warm, hot → 4 seconds.',
    },
    {
      input: 'amount = [0,0,0]',
      output: '0',
      explanation: 'No cups to fill.',
    },
    {
      input: 'amount = [2,2,2]',
      output: '3',
      explanation: 'Fill cold+warm, cold+hot, warm+hot → 3 seconds.',
    },
  ],
  hints: [
    'Level 1: In each second, you reduce the total by at most 2, giving a lower bound of ⌈sum/2⌉.',
    'Level 2: If one type dominates (max > sum - max), you must handle it alone. Lower bound is also max(amount).',
    'Level 3: `return Math.max(Math.max(...amount), Math.ceil(amount.reduce((a,b)=>a+b,0) / 2));`',
  ],
  functionName: 'fillCups',
  params: ['amount'],
  starterCode: {
    javascript: `function fillCups(amount) {
  const sum = amount.reduce((a, b) => a + b, 0);
  return Math.max(Math.max(...amount), Math.ceil(sum / 2));
}`,
    typescript: `function fillCups(amount: number[]): number {
  const sum = amount.reduce((a, b) => a + b, 0);
  return Math.max(Math.max(...amount), Math.ceil(sum / 2));
}`,
    python: `def fillCups(amount):
    total = sum(int(x) for x in amount)
    return max(max(int(x) for x in amount), -(-total // 2))`,
  },
  visibleTests: [
    { args: [[1, 4, 2]], expected: 4 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[2, 2, 2]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[5, 0, 0]], expected: 5 },
    { args: [[1, 1, 1]], expected: 2 },
    { args: [[0, 3, 3]], expected: 3 },
    { args: [[100, 100, 100]], expected: 150 },
    { args: [[0, 0, 1]], expected: 1 },
  ],
};
