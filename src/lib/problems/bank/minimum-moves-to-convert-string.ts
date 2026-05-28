import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-moves-to-convert-string',
  title: 'Minimum Moves to Convert String',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string \`s\` consisting of \`'X'\` and \`'O'\` characters.

A **move** converts **any three consecutive characters** to \`'O'\`. Return the **minimum number of moves** required to convert all \`'X'\` characters in \`s\` to \`'O'\`.`,
  constraints: [
    '3 <= s.length <= 1000',
    's[i] is either \'X\' or \'O\'.',
  ],
  examples: [
    {
      input: 's = "XXX"',
      output: '1',
      explanation: 'Convert indices 0-2 from "XXX" to "OOO". 1 move.',
    },
    {
      input: 's = "XXOX"',
      output: '2',
      explanation: 'Move 1: convert indices 0-2 → "OOOX". Move 2: convert indices 1-3 → "OOOO". 2 moves.',
    },
    {
      input: 's = "OOOO"',
      output: '0',
      explanation: 'No \'X\' characters. 0 moves needed.',
    },
  ],
  hints: [
    'Greedily: scan left to right. When you find an \'X\', perform a move starting at that index (covering the next 3 positions) and skip ahead 3.',
    'Don\'t simulate the conversions — just count. Whenever index i has \'X\', increment count and advance i by 3.',
    'The greedy is optimal: converting the leftmost X first is never worse than any other choice.',
  ],
  functionName: 'minimumMoves',
  params: ['s'],
  starterCode: {
    javascript: `function minimumMoves(s) {

}`,
    typescript: "function minimumMoves(s: string): number {\n\n}",

    python: `def minimumMoves(s):
    pass`,
  },
  visibleTests: [
    { args: ['XXX'], expected: 1 },
    { args: ['XXOX'], expected: 2 },
    { args: ['OOOO'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['OXO'], expected: 1 },
    { args: ['XOXOX'], expected: 2 },
    { args: ['XXXXXX'], expected: 2 },
    { args: ['OOOOO'], expected: 0 },
  ],
};
