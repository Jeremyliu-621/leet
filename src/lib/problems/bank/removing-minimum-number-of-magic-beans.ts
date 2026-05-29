import type { Problem } from '../types';

export const problem: Problem = {
  id: 'removing-minimum-number-of-magic-beans',
  title: 'Removing Minimum Number of Magic Beans',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an array of positive integers \`beans\`, where each integer represents the number of magic beans found in a particular magic bag.

Remove any number of beans (possibly none) from each bag such that the number of beans in each remaining **non-empty** bag (still containing at least one bean) is equal. Once a bean has been removed, it is destroyed.

Return the **minimum** number of magic beans that you have to remove.`,
  constraints: [
    '1 <= beans.length <= 10^5',
    '1 <= beans[i] <= 10^5',
  ],
  examples: [
    {
      input: 'beans = [4,1,6,5]',
      output: '4',
      explanation: 'Sort: [1,4,5,6]. Choose target = 4: remove the bag of 1 entirely (1 bean removed) + trim 5→4 (1 bean) + trim 6→4 (2 beans) = 1+1+2 = 4.',
    },
    {
      input: 'beans = [2,10,3,2]',
      output: '7',
      explanation: 'Sort: [2,2,3,10]. Try each target: target=2 → 0+0+1+8=9; target=3 → 2+2+0+7=11; target=10 → 2+2+3+0=7. Minimum is 7.',
    },
    {
      input: 'beans = [1]',
      output: '0',
      explanation: 'Only one bag; it is already uniform. No removals needed.',
    },
  ],
  hints: [
    'Sort the beans array. The optimal target value is always one of the existing values in the array.',
    'If we choose sorted[i] as the target, all bags with index < i must be fully emptied, and bags with index >= i are trimmed to sorted[i]. Cost = prefix_sum[i] + sorted[i] * (n - i - 1)... equivalently total_sum - sorted[i] * (n - i).',
    'Minimize total_sum - sorted[i] * (n - i) over all i, which is equivalent to maximizing sorted[i] * (n - i).',
  ],
  functionName: 'minimumRemoval',
  params: ['beans'],
  starterCode: {
    javascript: 'function minimumRemoval(beans) {\n\n}\n',
    typescript: 'function minimumRemoval(beans: number[]): number {\n\n}',
    python: 'def minimumRemoval(beans):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 1, 6, 5]], expected: 4 },
    { args: [[2, 10, 3, 2]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[5, 5, 5]], expected: 0 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[100, 1, 100]], expected: 1 },
    { args: [[2, 2]], expected: 0 },
  ],
};
