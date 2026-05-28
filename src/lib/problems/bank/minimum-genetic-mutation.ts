import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-genetic-mutation',
  title: 'Minimum Genetic Mutation',
  difficulty: 'medium',
  tags: ['graph'],
  description: `A gene string can be represented by an 8-character long string, with choices from \`'A'\`, \`'C'\`, \`'G'\`, and \`'T'\`.

Suppose we need to investigate a mutation from a gene string \`startGene\` to a gene string \`endGene\` where one mutation is defined as one single character change in the gene string.

There is also a gene bank \`bank\` that records all the valid gene mutations. A gene must be in \`bank\` to make it a valid gene string.

Given the two gene strings \`startGene\` and \`endGene\`, and the gene bank \`bank\`, return *the minimum number of mutations needed to mutate from* \`startGene\` *to* \`endGene\`. If there is no such a mutation, return \`-1\`.

Note that the starting point is assumed to be valid, so it might not be included in the bank.`,
  constraints: [
    '0 <= bank.length <= 10',
    'startGene.length == endGene.length == bank[i].length == 8',
    "startGene, endGene, and bank[i] consist of only the characters ['A', 'C', 'G', 'T'].",
  ],
  examples: [
    {
      input: 'startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]',
      output: '1',
    },
    {
      input: 'startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]',
      output: '2',
    },
    {
      input: 'startGene = "AAAAACCC", endGene = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"]',
      output: '3',
    },
  ],
  hints: [
    'BFS from startGene, treating each valid mutation as an edge.',
    'A mutation is valid if the resulting gene differs by exactly one character from the current gene and is in the bank.',
    'Use a Set for the bank for O(1) lookups. Track visited genes to avoid cycles.',
  ],
  functionName: 'minMutation',
  params: ['startGene', 'endGene', 'bank'],
  starterCode: {
    javascript: `function minMutation(startGene, endGene, bank) {
  // Return minimum mutations to reach endGene, or -1 if impossible
}`,
    typescript: "function minMutation(startGene: string, endGene: string, bank: string[]): number {\n  // Return minimum mutations to reach endGene, or -1 if impossible\n}",

    python: `def minMutation(startGene, endGene, bank):
    # Return minimum mutations to reach endGene, or -1 if impossible
    pass`,
  },
  visibleTests: [
    { args: ['AACCGGTT', 'AACCGGTA', ['AACCGGTA']], expected: 1 },
    { args: ['AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA']], expected: 2 },
    { args: ['AAAAACCC', 'AACCCCCC', ['AAAACCCC', 'AAACCCCC', 'AACCCCCC']], expected: 3 },
  ],
  hiddenTests: [
    { args: ['AACCGGTT', 'AACCGGTT', ['AACCGGTT']], expected: 0 },
    { args: ['AACCGGTT', 'AAACGGTT', []], expected: -1 },
    { args: ['AACCGGTT', 'AACCGGAA', ['AACCGGTA', 'AACCGGAA']], expected: 2 },
    { args: ['AAAAAAAA', 'CCCCCCCC', ['AAAAAAAC', 'AAAAAACC', 'AAAAACCC', 'AAAACCCC', 'AACACCCC', 'ACCACCCC', 'ACCCCCCC', 'CCCCCCCA', 'CCCCCCCC']], expected: 8 },
  ],
};
