import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-happiness-of-selected-children',
  title: 'Maximize Happiness of Selected Children',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given an array \`happiness\` of length \`n\` and a positive integer \`k\`.

There are \`n\` children standing in a queue. The \`i\`-th child has happiness value \`happiness[i]\`. You want to select exactly \`k\` children in \`k\` turns:

- In each turn, you select a child and add their **current** happiness value to the total score. Then the happiness of every **unselected** child decreases by \`1\` (but cannot go below \`0\`).

Return the **maximum sum of happiness values** of the selected children.`,
  constraints: [
    '1 <= n <= 2 * 10^5',
    '0 <= happiness[i] <= 10^8',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'happiness = [1,2,3], k = 2',
      output: '4',
      explanation: 'Select child 2 (value 3) in turn 1, score = 3. Child 0 and 1 each drop by 1. Select child 1 (now max(0, 2-1)=1) in turn 2, score += 1. Total = 4.',
    },
    {
      input: 'happiness = [1,1,1,1], k = 2',
      output: '1',
      explanation: 'Select any child (value 1) in turn 1, score = 1. All others drop to 0. Turn 2 adds max(0, 1-1) = 0. Total = 1.',
    },
  ],
  hints: [
    'Sort happiness in descending order.',
    'For the i-th selection (0-indexed), the effective happiness of the chosen child is max(0, happiness[i] - i).',
    'Sum the first k values using this adjusted formula.',
  ],
  functionName: 'maximumHappinessSum',
  params: ['happiness', 'k'],
  starterCode: {
    javascript: `function maximumHappinessSum(happiness, k) {

}`,
    typescript: "function maximumHappinessSum(happiness: number[], k: number): number {\n\n}",

    python: `def maximumHappinessSum(happiness, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3], 2], expected: 4 },
    { args: [[1, 1, 1, 1], 2], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, 3, 4, 5], 1], expected: 5 },
    { args: [[5, 5, 5, 5], 4], expected: 14 },
    { args: [[1], 1], expected: 1 },
    { args: [[100, 200, 300], 3], expected: 597 },
  ],
};
