import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-colored-pieces-if-both-neighbors-are-same-color',
  title: 'Remove Colored Pieces if Both Neighbors are the Same Color',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `There are \`n\` pieces arranged in a line, and each piece is colored either by \`'A'\` or by \`'B'\`. You are given a string \`colors\` of length \`n\` where \`colors[i]\` is the color of the \`i-th\` piece.

Alice and Bob are playing a game where they take **alternating turns** removing pieces from the line. Alice moves **first**.

- Alice is only allowed to remove a piece colored \`'A'\` if **both** its neighbors are also colored \`'A'\`. She is **not allowed** to remove pieces at the edge.
- Bob is only allowed to remove a piece colored \`'B'\` if **both** its neighbors are also colored \`'B'\`. He is **not allowed** to remove pieces at the edge.
- Alice and Bob **cannot** remove the same piece.

If a player cannot make a move, that player **loses** and the other player wins.

Return \`true\` if Alice wins, or \`false\` if Bob wins.`,
  constraints: [
    '1 <= colors.length <= 10^5',
    "colors consists of only the letters 'A' and 'B'",
  ],
  examples: [
    {
      input: 'colors = "AAABABB"',
      output: 'true',
      explanation: 'Alice can remove 1 A (from the AAA run). Bob has no moves (no BBB). Alice wins.',
    },
    {
      input: 'colors = "AA"',
      output: 'false',
      explanation: 'Alice cannot remove any piece (no A with both A neighbors). Bob also cannot. Alice loses by having no move.',
    },
  ],
  hints: [
    "Count Alice's available moves: for each run of A's of length k, she gets k-2 moves (if k >= 3).",
    "Similarly count Bob's moves from runs of B's.",
    "Alice wins if and only if her move count is strictly greater than Bob's.",
  ],
  functionName: 'winnerOfGame',
  params: ['colors'],
  starterCode: {
    javascript: `function winnerOfGame(colors) {

}`,
    python: `def winnerOfGame(colors):
    pass`,
  },
  visibleTests: [
    { args: ['AAABABB'], expected: true },
    { args: ['AA'], expected: false },
  ],
  hiddenTests: [
    { args: ['A'], expected: false },
    { args: ['AAAA'], expected: true },
    { args: ['BBBBA'], expected: false },
    { args: ['AAABBB'], expected: false },
    { args: ['AAAABBBBB'], expected: false },
  ],
};
