import type { Problem } from '../types';

export const problem: Problem = {
  id: 'pyramid-transition-numbers',
  title: 'Pyramid Transition Numbers',
  difficulty: 'medium',
  tags: ['backtracking'],
  description: `You are given a string \`bottom\` representing the base row of a pyramid and an array of strings \`allowed\` where each entry is a three-character string \`"xyz"\` meaning character \`'z'\` may be placed on top of adjacent characters \`'x'\` and \`'y'\`.

Starting from the bottom row, build upward row by row — each new row is one character shorter than the row below it, derived by placing a character above each consecutive pair. Continue until a single apex character remains.

Return \`true\` if it is possible to build the pyramid all the way to the apex, or \`false\` otherwise.`,
  constraints: [
    '`2 <= bottom.length <= 8`',
    '`0 <= allowed.length <= 200`',
    '`allowed[i].length == 3`',
    '`bottom` and all characters in `allowed` are uppercase English letters',
    'All strings in `allowed` are unique',
  ],
  examples: [
    {
      input: 'bottom = "BCD", allowed = ["BCG","CDE","GEA","FFF"]',
      output: 'true',
      explanation: '"BCD" → "GE" → "A". The pyramid can be built to the apex.',
    },
    {
      input: 'bottom = "AABA", allowed = ["AAA","AAB","ABA","ABB","BAC"]',
      output: 'false',
      explanation: 'No sequence of valid transitions leads to a single apex character.',
    },
    {
      input: 'bottom = "AB", allowed = ["ABX","ABY"]',
      output: 'true',
      explanation: '"AB" can produce "X" or "Y" as the apex.',
    },
  ],
  hints: [
    'Build a map from each base pair (two-character key) to the set of characters that may appear above it.',
    'Use DFS/backtracking to construct each new row character by character from left to right, trying every allowed character for each adjacent pair.',
    'Prune immediately when no allowed characters exist for the current pair — there is no need to continue that branch.',
    'The base case is when the current row has length 1, meaning the apex has been reached and the pyramid is complete.',
  ],
  functionName: 'pyramidTransition',
  params: ['bottom', 'allowed'],
  starterCode: {
    javascript: `function pyramidTransition(bottom, allowed) {

}`,
    python: `def pyramidTransition(bottom: str, allowed: list[str]) -> bool:
    pass`,
  },
  visibleTests: [
    { args: ['BCD', ['BCG', 'CDE', 'GEA', 'FFF']], expected: true },
    { args: ['AABA', ['AAA', 'AAB', 'ABA', 'ABB', 'BAC']], expected: false },
    { args: ['AB', ['ABX', 'ABY']], expected: true },
  ],
  hiddenTests: [
    { args: ['A', []], expected: true },
    { args: ['XY', []], expected: false },
    { args: ['AAAA', ['AAB', 'ABB', 'BBB']], expected: true },
    { args: ['AAB', ['AAX', 'ABY']], expected: false },
  ],
};
