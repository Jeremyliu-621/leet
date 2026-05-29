import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-equivalent-domino-pairs',
  title: 'Number of Equivalent Domino Pairs',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given a list of \`dominoes\`, \`dominoes[i] = [a, b]\` is equivalent to \`dominoes[j] = [c, d]\` if and only if either (\`a == c\` and \`b == d\`), or (\`a == d\` and \`b == c\`) — that is, one domino can be rotated to be equal to another domino.

Return the number of pairs \`(i, j)\` for which \`0 <= i < j < dominoes.length\`, and \`dominoes[i]\` is equivalent to \`dominoes[j]\`.`,
  constraints: [
    '1 <= dominoes.length <= 4 * 10^4',
    '1 <= dominoes[i][j] <= 9',
    'dominoes[i].length == 2',
  ],
  examples: [
    {
      input: 'dominoes = [[1,2],[2,1],[3,4],[5,6]]',
      output: '1',
      explanation: '[1,2] and [2,1] are equivalent.',
    },
    {
      input: 'dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]',
      output: '3',
      explanation: 'Three pairs of [1,2] equivalent dominoes: (0,1), (0,3), (1,3).',
    },
  ],
  hints: [
    'Normalize each domino so that the smaller value comes first: key = min(a,b)*10 + max(a,b).',
    'Use a frequency map. When you see a key already in the map with count c, add c to the answer (it forms c new pairs with the current domino).',
    'Increment the count for the key after adding to the answer.',
  ],
  functionName: 'numEquivDominoPairs',
  params: ['dominoes'],
  starterCode: {
    javascript: `function numEquivDominoPairs(dominoes) {

}`,
    typescript: `function numEquivDominoPairs(dominoes: number[][]): number {

}`,
    python: `def numEquivDominoPairs(dominoes: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [2, 1], [3, 4], [5, 6]]], expected: 1 },
    { args: [[[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]]], expected: 3 },
    { args: [[[1, 1], [2, 2], [1, 1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 1]]], expected: 0 },
    { args: [[[1, 2], [2, 1]]], expected: 1 },
    { args: [[[1, 2], [2, 1], [1, 2]]], expected: 3 },
    { args: [[[1, 1], [1, 1], [1, 1]]], expected: 3 },
    { args: [[[3, 5], [5, 3], [5, 3]]], expected: 3 },
    { args: [[[1, 2], [3, 4], [5, 6]]], expected: 0 },
    { args: [[[1, 1], [1, 1], [1, 1], [1, 1]]], expected: 6 },
    { args: [[[1, 2], [2, 1], [1, 2], [2, 1]]], expected: 6 },
  ],
};
