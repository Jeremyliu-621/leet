import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-move-chips',
  title: 'Minimum Cost to Move Chips to The Same Position',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `We have \`n\` chips, where the position of the \`i\`th chip is \`position[i]\`.

We need to move all the chips to **the same position**. In one step, we can change the position of the \`i\`th chip from \`position[i]\` to:

- \`position[i] + 2\` or \`position[i] - 2\` with \`cost = 0\`
- \`position[i] + 1\` or \`position[i] - 1\` with \`cost = 1\`

Return the **minimum cost** needed to move all the chips to the same position.`,
  constraints: [
    '`1 <= position.length <= 100`',
    '`1 <= position[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'position = [1,2,3]',
      output: '1',
      explanation: 'Move chip at position 2 to position 1 at cost 1. Move chip at position 3 to position 1 at cost 0. Total: 1.',
    },
    {
      input: 'position = [2,2,2,3,3]',
      output: '2',
      explanation: 'Move the 2 chips at odd position 3 to even position 2, cost 2. Total: 2.',
    },
  ],
  hints: [
    'Moving by 2 is free. So all even-indexed chips are "free" to move to any even position, and all odd to any odd position. Cost is min(count_even, count_odd).',
  ],
  functionName: 'minCostToMoveChips',
  params: ['position'],
  starterCode: {
    javascript: 'function minCostToMoveChips(position) {\n  \n}\n',
    python: 'def minCostToMoveChips(position):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[2, 2, 2, 3, 3]], expected: 2 },
    { args: [[1, 1000000000]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
    { args: [[1, 1, 2, 2]], expected: 2 },
  ],
};
