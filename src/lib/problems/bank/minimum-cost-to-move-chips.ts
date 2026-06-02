import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-move-chips',
  title: 'Minimum Cost to Move Chips to The Same Position',
  difficulty: 'easy',
  tags: ['math'],
  description: `You have \`n\` chips placed at various positions. \`position[i]\` is the position of the \`i\`-th chip.

In one step, you can move a chip:
- **2 positions** in any direction — **costs 0**.
- **1 position** in any direction — **costs 1**.

Return the **minimum cost** to move all chips to the same position.

**Key Insight:** Moving a chip an even number of steps is free. So chips at even positions can all be gathered to one even position for free, and chips at odd positions can all be gathered to one odd position for free. The only cost is moving one group to overlap with the other, which costs \`min(odd_count, even_count)\`.`,
  constraints: [
    '1 ≤ position.length ≤ 100',
    '1 ≤ position[i] ≤ 10^9',
  ],
  examples: [
    {
      input: 'position = [1, 2, 3]',
      output: '1',
      explanation: 'Positions 1 and 3 are both odd (free to merge); position 2 is even. Moving even group to odd costs 1.',
    },
    {
      input: 'position = [2, 2, 2, 3, 3]',
      output: '2',
      explanation: '3 chips at even positions, 2 at odd. Move 2 odd chips to an even position at cost 2.',
    },
    {
      input: 'position = [1, 1000000000]',
      output: '1',
      explanation: '1 odd chip and 1 even chip. Moving either to the other costs 1.',
    },
  ],
  hints: [
    'Any chip can move to any even position for free (even steps). Likewise any chip can reach any odd position for free.',
    'Count how many chips are at odd positions and how many are at even positions.',
    'The answer is the minimum of those two counts — you move the smaller group across the parity boundary.',
  ],
  functionName: 'minCostToMoveChips',
  params: ['position'],
  starterCode: {
    javascript: `function minCostToMoveChips(position) {
  const odd = position.filter(p => p % 2 !== 0).length;
  return Math.min(odd, position.length - odd);
}`,
    typescript: `function minCostToMoveChips(position: number[]): number {
  const odd = position.filter(p => p % 2 !== 0).length;
  return Math.min(odd, position.length - odd);
}`,
    python: `def minCostToMoveChips(position) -> int:
    if hasattr(position, 'to_py'): position = list(position.to_py())
    odd = sum(1 for p in position if p % 2 != 0)
    return min(odd, len(position) - odd)`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[2, 2, 2, 3, 3]], expected: 2 },
    { args: [[1, 1000000000]], expected: 1 },
    { args: [[1, 3, 5, 7]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2]], expected: 0 },
    { args: [[2, 4]], expected: 0 },
    { args: [[1, 3]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 3, 4]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 2 },
    { args: [[1, 1, 1, 2, 2]], expected: 2 },
    { args: [[1000000000, 999999999]], expected: 1 },
  ],
};
