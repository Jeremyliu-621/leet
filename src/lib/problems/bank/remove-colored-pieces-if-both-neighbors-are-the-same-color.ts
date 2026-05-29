import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-colored-pieces-if-both-neighbors-are-the-same-color',
  title: 'Remove Colored Pieces if Both Neighbors are the Same Color',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `There are \`n\` pieces arranged in a line, and each piece is colored either by \`'A'\` or by \`'B'\`. You are given a string \`colors\` of length \`n\` where \`colors[i]\` is the color of the \`i\`th piece.

Alice and Bob are playing a game where they take **alternating turns** removing pieces from the line. **Alice** moves **first**.

- Alice is only allowed to remove a piece colored \`'A'\` if **both its neighbors** are also colored \`'A'\`. She is **not allowed** to remove pieces that are at either end of the line.
- Bob is only allowed to remove a piece colored \`'B'\` if **both its neighbors** are also colored \`'B'\`. He is **not allowed** to remove pieces that are at either end of the line.

Alice and Bob **cannot** remove pieces from the ends of the line.

Return \`true\` if Alice wins, or \`false\` if Bob wins. The player who **cannot** make a move loses.`,
  constraints: [
    '1 <= colors.length <= 100000',
    'colors consists of only the letters \'A\' and \'B\'',
  ],
  examples: [
    {
      input: 'colors = "AAABABB"',
      output: 'true',
      explanation: 'Alice has 1 valid move (index 1, sandwiched by A\'s). Bob has 0 valid moves. Alice wins.',
    },
    {
      input: 'colors = "AA"',
      output: 'false',
      explanation: 'Neither player can make any move. Alice goes first but has no moves, so she loses.',
    },
    {
      input: 'colors = "ABBBBBBBAAA"',
      output: 'false',
      explanation: 'Alice has 1 valid move (index 9). Bob has 5 valid moves (indices 2,3,4,5,6). Bob wins.',
    },
  ],
  hints: [
    'The moves available to Alice and Bob are independent — removing one player\'s pieces cannot affect the other\'s available moves.',
    'Count Alice\'s available moves: any \'A\' at index i (1 ≤ i < n-1) where both neighbors are \'A\'.',
    'Similarly count Bob\'s available moves with \'B\'.',
    'Alice wins if and only if her move count is strictly greater than Bob\'s.',
  ],
  functionName: 'winnerOfGame',
  params: ['colors'],
  starterCode: {
    javascript: `function winnerOfGame(colors) {

}`,
    typescript: `function winnerOfGame(colors: string): boolean {

}`,
    python: `def winnerOfGame(colors: str) -> bool:
    pass`,
  },
  visibleTests: [
    { args: ['AAABABB'], expected: true },
    { args: ['AA'], expected: false },
    { args: ['ABBBBBBBAAA'], expected: false },
  ],
  hiddenTests: [
    { args: ['A'], expected: false },
    { args: ['AAA'], expected: true },
    { args: ['BBB'], expected: false },
    { args: ['AAAA'], expected: true },
    { args: ['AAAABBBB'], expected: false },
    { args: ['AAAAABBB'], expected: true },
    { args: ['AAABB'], expected: true },
    { args: ['AABABABABAB'], expected: false },
  ],
};
