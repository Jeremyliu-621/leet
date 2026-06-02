import type { Problem } from '../types';

export const problem: Problem = {
  id: 'verbal-arithmetic-puzzle',
  title: 'Verbal Arithmetic Puzzle',
  difficulty: 'hard',
  tags: ['backtracking', 'math'],
  description: `Given an equation, represented by \`words\` on the left side and the \`result\` on the right side, check whether the equation is solvable under the following rules:

- Each character is decoded as one digit (0–9).
- Every pair of different characters must map to different digits.
- Each \`words[i]\` and \`result\` are decoded as one number **without** leading zeros.
- The sum of numbers on the left side (\`words\`) equals the number on the right side (\`result\`).

Return \`true\` if the equation is solvable, otherwise return \`false\`.`,
  constraints: [
    '2 <= words.length <= 5',
    '1 <= words[i].length, result.length <= 7',
    'words[i], result contain only uppercase English letters',
    'The number of different characters used in the expression is at most 10',
  ],
  examples: [
    {
      input: 'words = ["SEND","MORE"], result = "MONEY"',
      output: 'true',
      explanation: 'S=9, E=5, N=6, D=7, M=1, O=0, R=8, Y=2. 9567+1085=10652.',
    },
    {
      input: 'words = ["SIX","SEVEN","SEVEN"], result = "TWENTY"',
      output: 'true',
      explanation: 'S=6, I=5, X=0, E=8, V=7, N=2, T=1, W=3, Y=4. 650+6872+6872=14394.',
    },
    {
      input: 'words = ["LEET","CODE"], result = "POINT"',
      output: 'false',
      explanation: 'There is no valid assignment of digits to letters.',
    },
  ],
  hints: [
    'Level 1: Collect all unique characters and identify leading characters (first character of each word/result with length > 1, which cannot map to 0). Try all digit permutations for each character.',
    'Level 2: Use backtracking to assign digits to characters one by one. To prune early, process column by column from least-significant to most-significant digit with carry checking.',
    'Level 3: Column-by-column backtracking: assign digits to unassigned chars in each column; check column sum mod 10 matches result digit; propagate carry. This prunes the search space dramatically vs. full-permutation enumeration.',
  ],
  functionName: 'isSolvable',
  params: ['words', 'result'],
  starterCode: {
    javascript: `function isSolvable(words, result) {

}`,
    typescript: `function isSolvable(words: string[], result: string): boolean {

}`,
    python: `def isSolvable(words, result):
    pass`,
  },
  visibleTests: [
    { args: [['SEND', 'MORE'], 'MONEY'], expected: true },
    { args: [['SIX', 'SEVEN', 'SEVEN'], 'TWENTY'], expected: true },
    { args: [['LEET', 'CODE'], 'POINT'], expected: false },
  ],
  hiddenTests: [
    { args: [['A'], 'A'], expected: true },
    { args: [['A', 'B'], 'C'], expected: true },
    { args: [['AB', 'B'], 'BA'], expected: true },
    { args: [['AA', 'B'], 'A'], expected: false },
    { args: [['A', 'B'], 'AA'], expected: false },
  ],
};
