import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-domino-rotations',
  title: 'Minimum Domino Rotations For Equal Row',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `In a row of dominoes, \`tops[i]\` and \`bottoms[i]\` represent the top and bottom halves of the \`i\`th domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the \`i\`th domino, so that \`tops[i]\` and \`bottoms[i]\` swap values.

Return the minimum number of rotations so that all the values in \`tops\` are the same, or all the values in \`bottoms\` are the same.

If it cannot be done, return \`-1\`.`,
  constraints: [
    '`2 <= tops.length <= 2 * 10^4`',
    '`bottoms.length == tops.length`',
    '`1 <= tops[i], bottoms[i] <= 6`',
  ],
  examples: [
    {
      input: 'tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]',
      output: '2',
      explanation: 'Rotate the 1st and 4th dominoes to make all tops equal to 2: 2 rotations.',
    },
    {
      input: 'tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]',
      output: '-1',
    },
  ],
  hints: [
    'The target value must be tops[0] or bottoms[0]. For each candidate, count how many rotations it takes to align tops, then bottoms. Take the min across valid candidates.',
    'The target value can only be `tops[0]` or `bottoms[0]` (any other value would fail on the first domino). Try each candidate and compute minimum swaps; return the minimum or `-1`.',
    `\`\`\`js
function check(x) {
  let ts=0, bs=0;
  for (let i=0; i<tops.length; i++) {
    if (tops[i]!==x && bottoms[i]!==x) return Infinity;
    if (tops[i]!==x) ts++;
    if (bottoms[i]!==x) bs++;
  }
  return Math.min(ts, bs);
}
const r = Math.min(check(tops[0]), check(bottoms[0]));
return r===Infinity ? -1 : r;\`\`\``
  ],
  functionName: 'minDominoRotations',
  params: ['tops', 'bottoms'],
  starterCode: {
    javascript: 'function minDominoRotations(tops, bottoms) {\n  \n}\n',
    typescript: "function minDominoRotations(tops: number[], bottoms: number[]): number {\n  \n}",

    python: 'def minDominoRotations(tops, bottoms):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]], expected: 2 },
    { args: [[3, 5, 1, 2, 3], [3, 6, 3, 3, 4]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], [2, 2, 2]], expected: 0 },
    { args: [[2, 2], [2, 2]], expected: 0 },
    { args: [[1, 2], [2, 1]], expected: 1 },
    { args: [[1, 2, 3], [3, 2, 1]], expected: -1 },
  ],
};
