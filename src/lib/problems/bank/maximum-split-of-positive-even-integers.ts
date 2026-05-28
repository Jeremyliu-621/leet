import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-split-of-positive-even-integers',
  title: 'Maximum Split of Positive Even Integers',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given an integer \`finalSum\`. Split it into a **maximum** number of **unique** positive even integers.

- For example, given \`finalSum = 12\`, the following splits are **valid** (unique positive even integers summing to 12): \`{12}\`, \`{2,4,6}\`, \`{2,10}\`, \`{4,8}\`. Among them, \`{2,4,6}\` contains the most integers. Note that \`{2,6,4}\`, \`{3,5,4}\` are **not** valid splits.

Return a list of integers that represent a **valid** split containing a **maximum** number of integers. If no valid split exists for \`finalSum\`, return an **empty** list.`,
  constraints: [
    '1 <= finalSum <= 10^10',
  ],
  examples: [
    {
      input: 'finalSum = 28',
      output: '[2,4,6,16]',
      explanation: 'Greedy: take 2, 4, 6, and add remaining 16. Sum=28, all distinct even.',
    },
    {
      input: 'finalSum = 7',
      output: '[]',
      explanation: '7 is odd. No valid split.',
    },
    {
      input: 'finalSum = 12',
      output: '[2,4,6]',
      explanation: '2+4+6=12 with 3 distinct even integers.',
    },
  ],
  hints: [
    'If finalSum is odd, return [].',
    'Greedily take 2, 4, 6, ... as long as the remainder will be > current value.',
    'Add the remaining sum as the last element.',
  ],
  functionName: 'maximumEvenSplit',
  params: ['finalSum'],
  starterCode: {
    javascript: `function maximumEvenSplit(finalSum) {

}`,
    python: `def maximumEvenSplit(finalSum):
    pass`,
  },
  visibleTests: [
    { args: [28], expected: [2, 4, 6, 16] },
    { args: [7], expected: [] },
    { args: [12], expected: [2, 4, 6] },
  ],
  hiddenTests: [
    { args: [2], expected: [2] },
    { args: [4], expected: [4] },
    { args: [6], expected: [2, 4] },
    { args: [8], expected: [2, 6] },
  ],
};
