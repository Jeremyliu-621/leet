import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-domino-rotations-for-equal-row',
  title: 'Minimum Domino Rotations For Equal Row',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `In a row of dominoes, \`tops[i]\` and \`bottoms[i]\` represent the top and bottom halves of the \`i\`th domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the \`i\`th domino, so that \`tops[i]\` and \`bottoms[i]\` swap values.

Return the minimum number of rotations so that all the values in \`tops\` are the same, or all the values in \`bottoms\` are the same.

If it cannot be done, return \`-1\`.`,
  constraints: [
    '2 <= tops.length <= 2 * 10^4',
    'bottoms.length == tops.length',
    '1 <= tops[i], bottoms[i] <= 6',
  ],
  examples: [
    {
      input: 'tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]',
      output: '2',
      explanation: 'The first rotation: bottoms[1] and tops[1] swap → tops = [2,2,2,4,2,2]. The second rotation: tops[3] and bottoms[3] swap → tops = [2,2,2,2,2,2]. Total = 2 rotations.',
    },
    {
      input: 'tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]',
      output: '-1',
      explanation: 'In this case, it is not possible to rotate the dominoes to make one row of equal values.',
    },
  ],
  hints: [
    'The target value must be either tops[0] or bottoms[0] (it must appear on every domino).',
    'For each candidate target, count how many rotations are needed to put it all on tops, and all on bottoms.',
    'If a domino has neither tops[i] nor bottoms[i] equal to the target, it\'s impossible.',
  ],
  functionName: 'minDominoRotations',
  params: ['tops', 'bottoms'],
  starterCode: {
    javascript: `function minDominoRotations(tops, bottoms) {\n\n}`,
    python: `def minDominoRotations(tops, bottoms) -> int:\n    pass`,
    typescript: `function minDominoRotations(tops: number[], bottoms: number[]): number {\n\n}`,
  },
  visibleTests: [
    { args: [[2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]], expected: 2 },
    { args: [[3, 5, 1, 2, 3], [3, 6, 3, 3, 4]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], [2, 3, 4]], expected: 0 },
    { args: [[2, 1], [1, 2]], expected: 1 },
    { args: [[1, 2, 1, 1], [2, 1, 2, 2]], expected: 1 },
    { args: [[1, 2, 3], [4, 5, 6]], expected: -1 },
    { args: [[1, 1], [1, 1]], expected: 0 },
    { args: [[2, 2, 2, 2], [1, 2, 2, 2]], expected: 0 },
  ],
};
