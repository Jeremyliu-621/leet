import type { Problem } from '../types';

export const problem: Problem = {
  id: 'letter-tile-possibilities',
  title: 'Letter Tile Possibilities',
  difficulty: 'medium',
  tags: ['strings', 'backtracking'],
  description: `You have \`n\` \`tiles\`, where each tile has one letter \`tiles[i]\` printed on it.

Return *the number of possible non-empty sequences of letters* you can make using the letters printed on those tiles.`,
  constraints: [
    '`1 <= tiles.length <= 7`',
    '`tiles` consists of uppercase English letters.',
  ],
  examples: [
    {
      input: 'tiles = "AAB"',
      output: '8',
      explanation: 'Sequences: A, B, AA, AB, BA, AAB, ABA, BAA.',
    },
    {
      input: 'tiles = "AAABBC"',
      output: '188',
    },
    {
      input: 'tiles = "V"',
      output: '1',
    },
  ],
  hints: [
    'Count character frequencies. At each step, pick any available character (that hasn\'t been fully used), use it, recurse, then restore. Count all valid placements.',
  ],
  functionName: 'numTilePossibilities',
  params: ['tiles'],
  starterCode: {
    javascript: 'function numTilePossibilities(tiles) {\n  \n}\n',
    python: 'def numTilePossibilities(tiles):\n    pass\n',
  },
  visibleTests: [
    { args: ['AAB'], expected: 8 },
    { args: ['AAABBC'], expected: 188 },
    { args: ['V'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['AB'], expected: 4 },
    { args: ['AA'], expected: 2 },
    { args: ['ABC'], expected: 15 },
    { args: ['AAAA'], expected: 4 },
  ],
};
