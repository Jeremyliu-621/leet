import type { Problem } from '../types';

export const problem: Problem = {
  id: 'relocate-marbles',
  title: 'Relocate Marbles',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** integer array \`nums\` representing the initial positions of some marbles. You are also given two **0-indexed** integer arrays \`moveFrom\` and \`moveTo\` of **equal** length.

Throughout \`moveFrom.length\` steps, you will move **all** marbles at position \`moveFrom[i]\` to position \`moveTo[i]\` at step \`i\`.

After completing all the steps, return *the sorted list of **occupied** positions*.

**Notes:**
- We call a position **occupied** if there is at least one marble in that position.
- There may be multiple marbles in a single position.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= moveFrom.length <= 10^5',
    'moveFrom.length == moveTo.length',
    '1 <= nums[i], moveFrom[i], moveTo[i] <= 10^9',
    'The test cases are generated such that there is at least one marble in moveFrom[i] at the moment we want to apply the i^th move.',
  ],
  examples: [
    {
      input: 'nums = [1,6,7,8], moveFrom = [1,7,2], moveTo = [2,9,5]',
      output: '[5,6,8,9]',
      explanation:
        'Step 1: move from 1→2: {2,6,7,8}. Step 2: 7→9: {2,6,8,9}. Step 3: 2→5: {5,6,8,9}.',
    },
    {
      input: 'nums = [1,2,3], moveFrom = [1,3], moveTo = [5,7]',
      output: '[2,5,7]',
      explanation:
        'Step 1: 1→5: {2,3,5}. Step 2: 3→7: {2,5,7}.',
    },
  ],
  hints: [
    'Use a Set to track occupied positions.',
    'For each move (from, to): if from != to, remove from the set and add to.',
    'If moveTo[i] is already occupied, the marbles merge — still just one position in the set.',
  ],
  functionName: 'relocateMarbles',
  params: ['nums', 'moveFrom', 'moveTo'],
  starterCode: {
    javascript: 'function relocateMarbles(nums, moveFrom, moveTo) {\n\n}\n',
    typescript: 'function relocateMarbles(nums: number[], moveFrom: number[], moveTo: number[]): number[] {\n\n}\n',
    python: 'def relocateMarbles(nums, moveFrom, moveTo):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,6,7,8], [1,7,2], [2,9,5]], expected: [5,6,8,9] },
    { args: [[1,2,3], [1,3], [5,7]], expected: [2,5,7] },
  ],
  hiddenTests: [
    { args: [[1], [1], [2]], expected: [2] },
    { args: [[1,2,3], [1,3], [5,7]], expected: [2,5,7] },
    { args: [[1,2], [1], [2]], expected: [2] },
    { args: [[5], [5], [5]], expected: [5] },
    { args: [[1,3,5], [1,3,5], [3,5,7]], expected: [7] },
    { args: [[10,20,30], [10,20,30], [11,21,31]], expected: [11,21,31] },
  ],
};
