import type { Problem } from '../types';

export const problem: Problem = {
  id: 'combination-sum',
  title: 'Combination Sum',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an array of **distinct** integers \`candidates\` and a target integer \`target\`, return a list of all **unique combinations** of \`candidates\` where the chosen numbers sum to \`target\`. You may return the combinations in any order.

The same number may be chosen from \`candidates\` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.`,
  constraints: [
    '`1 <= candidates.length <= 30`',
    '`2 <= candidates[i] <= 40`',
    'All elements of `candidates` are **distinct**',
    '`1 <= target <= 40`',
  ],
  examples: [
    {
      input: 'candidates = [2,3,6,7], target = 7',
      output: '[[2,2,3],[7]]',
      explanation: '2+2+3 = 7 and 7 = 7.',
    },
    {
      input: 'candidates = [2,3,5], target = 8',
      output: '[[2,2,2,2],[2,3,3],[3,5]]',
    },
    {
      input: 'candidates = [2], target = 1',
      output: '[]',
    },
  ],
  hints: [
    'Use backtracking with a `start` index to avoid duplicates: at each step, only pick candidates at index ≥ start.',
    'Since the same candidate can be reused, pass the same `start` index when recursing (not start+1).',
    'Prune early: if `remaining < 0`, stop. If `remaining === 0`, record the current combination.',
  ],
  functionName: 'combinationSum',
  params: ['candidates', 'target'],
  starterCode: {
    javascript: `function combinationSum(candidates, target) {

}`,
    python: `def combinationSum(candidates, target):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 6, 7], 7], expected: [[2, 2, 3], [7]] },
    { args: [[2, 3, 5], 8], expected: [[2, 2, 2, 2], [2, 3, 3], [3, 5]] },
    { args: [[2], 1], expected: [] },
  ],
  hiddenTests: [
    { args: [[2], 4], expected: [[2, 2]] },
    { args: [[3, 5, 6, 7], 7], expected: [[7]] },
    { args: [[2, 3], 5], expected: [[2, 3]] },
  ],
};
