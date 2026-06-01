import type { Problem } from '../types';

export const problem: Problem = {
  id: 'moving-stones-until-consecutive',
  title: 'Moving Stones Until Consecutive',
  difficulty: 'medium',
  tags: ['math', 'arrays'],
  description: `There are three stones at positions \`a\`, \`b\`, and \`c\` on a number line (not necessarily sorted). Each move, you pick a stone that is not in the middle position and move it to an **integer** position strictly between the other two stones.

Return an array \`answer\` of length 2 where:
- \`answer[0]\` is the **minimum** number of moves to make the stones consecutive.
- \`answer[1]\` is the **maximum** number of moves.`,
  constraints: [
    '1 <= a <= 100',
    '1 <= b <= 100',
    '1 <= c <= 100',
    'a, b, and c have different values',
  ],
  examples: [
    {
      input: 'a = 1, b = 2, c = 5',
      output: '[1, 2]',
      explanation: 'Sorted: [1,2,5]. Max: move 1 to 3 then 5 to 4 = 2 moves. Min: move 5 to 3 = 1 move.',
    },
    {
      input: 'a = 4, b = 3, c = 2',
      output: '[0, 0]',
      explanation: 'Sorted [2,3,4] are already consecutive.',
    },
    {
      input: 'a = 3, b = 5, c = 1',
      output: '[1, 2]',
      explanation: 'Sorted [1,3,5]. Max: 2 moves. Min: 1 move (move 1 to 4 giving [3,4,5]).',
    },
  ],
  hints: [
    'Level 1: Sort the three positions: let x < y < z. Maximum is always (y - x - 1) + (z - y - 1) — each gap contributes moves equal to (gap size - 1).',
    'Level 2: For the minimum: if already consecutive (z - x == 2) return 0. If there is a gap of 1 somewhere (y - x == 1 or z - y == 1), we can fill it in 1 move. Otherwise, 2 moves.',
    'Level 3: Min formula: 0 if z-x==2; 1 if min(y-x, z-y) <= 2 (one stone can jump over the gap into the middle in one move); 2 otherwise.',
  ],
  functionName: 'numMovesStones',
  params: ['a', 'b', 'c'],
  starterCode: {
    javascript: `function numMovesStones(a, b, c) {
  const stones = [a, b, c].sort((x, y) => x - y);
  const [x, y, z] = stones;
  if (z - x === 2) return [0, 0];
  const minMoves = Math.min(y - x, z - y) <= 2 ? 1 : 2;
  const maxMoves = (y - x - 1) + (z - y - 1);
  return [minMoves, maxMoves];
}`,
    typescript: `function numMovesStones(a: number, b: number, c: number): number[] {
  const stones = [a, b, c].sort((x, y) => x - y);
  const [x, y, z] = stones as [number, number, number];
  if (z - x === 2) return [0, 0];
  const minMoves = Math.min(y - x, z - y) <= 2 ? 1 : 2;
  const maxMoves = (y - x - 1) + (z - y - 1);
  return [minMoves, maxMoves];
}`,
    python: `def numMovesStones(a, b, c):
    x, y, z = sorted([a, b, c])
    if z - x == 2:
        return [0, 0]
    min_moves = 1 if min(y - x, z - y) <= 2 else 2
    max_moves = (y - x - 1) + (z - y - 1)
    return [min_moves, max_moves]`,
  },
  visibleTests: [
    { args: [1, 2, 5], expected: [1, 2] },
    { args: [4, 3, 2], expected: [0, 0] },
    { args: [3, 5, 1], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [1, 3, 5], expected: [1, 2] },
    { args: [1, 4, 9], expected: [2, 6] },
    { args: [2, 3, 4], expected: [0, 0] },
    { args: [1, 2, 3], expected: [0, 0] },
    { args: [1, 100, 50], expected: [2, 97] },
  ],
};
