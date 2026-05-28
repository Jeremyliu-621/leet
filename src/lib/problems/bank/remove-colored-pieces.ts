import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-colored-pieces',
  title: 'Remove Colored Pieces',
  difficulty: 'medium',
  tags: ['strings'],
  description: `There are \`n\` pieces arranged in a line, each colored either \`'A'\` or \`'B'\`. Alice and Bob take turns removing pieces, with **Alice going first**.

- **Alice** can only remove a piece colored \`'A'\` if **both** its neighbors are also \`'A'\`.
- **Bob** can only remove a piece colored \`'B'\` if **both** its neighbors are also \`'B'\`.
- Neither player can remove a piece at the edge of the line.

A player who cannot make a move on their turn **loses**.

Return \`true\` if Alice wins, \`false\` if Bob wins.

**Key insight:** Alice's moves and Bob's moves are completely independent — removing an \`'A'\` never affects which \`'B'\` moves are available. So count each player's total available moves and compare.`,
  constraints: [
    '1 <= colors.length <= 10^5',
    "colors consists of only the letters 'A' and 'B'",
  ],
  examples: [
    {
      input: 'colors = "AAABABB"',
      output: 'true',
      explanation: 'The AAA run gives Alice 1 move. No BBB run exists for Bob. Alice has 1 > 0 moves — Alice wins.',
    },
    {
      input: 'colors = "AA"',
      output: 'false',
      explanation: 'No player can make any move. Alice goes first and cannot move — Alice loses.',
    },
    {
      input: 'colors = "ABBBBBBBAAA"',
      output: 'false',
      explanation: 'Alice: AAA run → 1 move. Bob: BBBBBBBB run (length 8) → 6 moves. Bob has more moves — Bob wins.',
    },
  ],
  hints: [
    "Alice's moves and Bob's moves are completely independent — removing an 'A' never affects which 'B' moves are available.",
    "Count Alice's moves: scan for consecutive 'A' runs. A run of length L gives max(0, L - 2) moves. Do the same for Bob with 'B' runs.",
    'Alice wins if and only if her total move count strictly exceeds Bob\'s.',
  ],
  functionName: 'winnerOfGame',
  params: ['colors'],
  starterCode: {
    javascript: `function winnerOfGame(colors) {

}`,
    typescript: "function winnerOfGame(colors: string): boolean {\n\n}",

    python: `def winnerOfGame(colors):
    pass`,
  },
  visibleTests: [
    { args: ['AAABABB'], expected: true },
    { args: ['AA'], expected: false },
    { args: ['ABBBBBBBAAA'], expected: false },
  ],
  hiddenTests: [
    { args: ['AAAAAA'], expected: true },
    { args: ['AAABBB'], expected: false },
    { args: ['A'], expected: false },
    { args: ['AAAA'], expected: true },
  ],
};
