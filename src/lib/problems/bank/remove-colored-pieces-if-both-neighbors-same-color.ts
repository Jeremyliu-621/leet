import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-colored-pieces-if-both-neighbors-same-color',
  title: 'Remove Colored Pieces if Both Neighbors are the Same Color',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `There are \`n\` pieces arranged in a line, each colored either \`'A'\` or \`'B'\`, given by string \`colors\`. Alice and Bob take alternating turns (Alice first).

- **Alice** can remove a piece of color \`'A'\` at index \`i\` if **both** \`colors[i-1]\` and \`colors[i+1]\` are also \`'A'\`.
- **Bob** can remove a piece of color \`'B'\` at index \`i\` if **both** \`colors[i-1]\` and \`colors[i+1]\` are also \`'B'\`.

The player who **cannot** make a move loses. Return \`true\` if Alice wins, \`false\` if Bob wins.`,
  constraints: [
    '`1 <= colors.length <= 10^5`',
    '`colors\` consists of only `\'A\'` and `\'B\'`.',
  ],
  examples: [
    {
      input: 'colors = "AAABABB"',
      output: 'true',
      explanation: 'Alice has 1 valid move (the middle A in "AAA"). Bob has 0 valid moves. Alice wins.',
    },
    {
      input: 'colors = "AA"',
      output: 'false',
      explanation: 'Neither player can make a move. Bob wins (Alice goes first and cannot move).',
    },
    {
      input: 'colors = "ABBBBBBBAAA"',
      output: 'false',
      explanation: 'Alice has 1 move; Bob has 6 moves. Bob always has more moves remaining.',
    },
  ],
  hints: [
    'Observe that Alice\'s moves only affect "A" pieces and Bob\'s moves only affect "B" pieces — they are completely independent of each other.',
    'Count the number of valid moves for Alice (\'A\' pieces with both neighbors also \'A\') and the number of valid moves for Bob (\'B\' pieces with both neighbors also \'B\').',
    'Alice wins if and only if she has strictly more valid moves than Bob (since she goes first, having equal moves means Bob makes the last move).',
  ],
  functionName: 'winnerOfGame',
  params: ['colors'],
  starterCode: {
    javascript: `function winnerOfGame(colors) {

}`,
    typescript: `function winnerOfGame(colors: string): boolean {

}`,
    python: `def winnerOfGame(colors):
    pass`,
  },
  visibleTests: [
    { args: ['AAABABB'], expected: true },
    { args: ['AA'], expected: false },
    { args: ['ABBBBBBBAAA'], expected: false },
  ],
  hiddenTests: [
    { args: ['A'], expected: false },
    { args: ['AAAA'], expected: true },
    { args: ['BBBB'], expected: false },
    { args: ['AABB'], expected: false },
    { args: ['AAABBB'], expected: false },
    { args: ['AAAABBB'], expected: true },
    { args: ['AABBAABB'], expected: false },
  ],
};
