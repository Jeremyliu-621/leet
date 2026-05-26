import type { Problem } from '../types';

export const problem: Problem = {
  id: 'removing-minimum-number-of-magic-beans',
  title: 'Removing Minimum Number of Magic Beans',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an array of **positive** integers \`beans\`, where each integer represents the number of magic beans in a particular magic bag.

Remove any number of beans (**possibly none**) from each bag such that the number of beans in each remaining **non-empty** bag (excluding empty bags) is **equal**. Once a bag is empty, it is not considered.

Return the **minimum** total number of magic beans you have to remove.`,
  constraints: [
    '1 <= beans.length <= 10^5',
    '1 <= beans[i] <= 10^5',
  ],
  examples: [
    {
      input: 'beans = [4,1,6,5]',
      output: '4',
      explanation: 'Sort: [1,4,5,6]. Choose target = 4: remove 1 entirely (1 bean) + remove 0 from 4 + 1 from 5 + 2 from 6 = 1+0+1+2 = 4.',
    },
    {
      input: 'beans = [2,10,3,2]',
      output: '7',
      explanation: 'Sort: [2,2,3,10]. Choose target = 2: 0+0+1+8 = 9; target = 3: 2+2+0+7 = 11; target = 10: 2+2+3+0 = 7. Min = 7.',
    },
  ],
  hints: [
    'Sort the array. The optimal target value is always one of the existing values in the array.',
    'If we choose sorted[i] as the target, all bags with index < i must be fully removed (sum = prefix[i]), and bags with index >= i must be trimmed down to sorted[i].',
    'Cost for choosing sorted[i] as target = prefix[i] + sorted[i] * (n - i - 1) ... simplified to total - sorted[i] * (n - i).',
  ],
  functionName: 'minimumRemoval',
  params: ['beans'],
  starterCode: {
    javascript: 'function minimumRemoval(beans) {\n  \n}\n',
    python: 'def minimumRemoval(beans):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 1, 6, 5]], expected: 4 },
    { args: [[2, 10, 3, 2]], expected: 7 },
    { args: [[1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 0 },
    { args: [[5, 5, 5]], expected: 0 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[100, 1, 1, 1]], expected: 3 },
    { args: [[3, 1, 4, 1, 5]], expected: 5 },
  ],
};
