import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-nodes-in-the-largest-group',
  title: 'Count Number of Nodes in the Largest Group',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given an integer \`n\`.

Group the integers from \`1\` to \`n\` such that integers with the same **digit sum** belong to the same group.

Return the **number of groups** that have the **maximum number of nodes**.`,
  constraints: [
    '`1 <= n <= 10^4`',
  ],
  examples: [
    {
      input: 'n = 13',
      output: '4',
      explanation: 'Groups by digit sum: sum=1:{1,10}, sum=2:{2,11}, sum=3:{3,12}, sum=4:{4,13}, sum=5:{5}, ..., sum=9:{9}. Four groups of size 2 (the maximum).',
    },
    {
      input: 'n = 2',
      output: '2',
      explanation: 'Groups: sum=1:{1}, sum=2:{2}. Both have size 1 (the max), so return 2.',
    },
    {
      input: 'n = 24',
      output: '5',
      explanation: 'Groups of maximum size (3): sums 2,3,4,5,6. For example, sum=2:{2,11,20}.',
    },
  ],
  hints: [
    'Build a frequency map from digit-sum to count of integers with that sum.',
    'Compute the maximum frequency across all groups.',
    'Count how many groups achieve that maximum frequency.',
  ],
  functionName: 'countLargestGroup',
  params: ['n'],
  starterCode: {
    javascript: `function countLargestGroup(n) {

}`,
    typescript: `function countLargestGroup(n: number): number {

}`,
    python: `def countLargestGroup(n):
    pass`,
  },
  visibleTests: [
    { args: [13], expected: 4 },
    { args: [2], expected: 2 },
    { args: [24], expected: 5 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [9], expected: 9 },
    { args: [10], expected: 1 },
    { args: [15], expected: 6 },
    { args: [100], expected: 1 },
  ],
};
