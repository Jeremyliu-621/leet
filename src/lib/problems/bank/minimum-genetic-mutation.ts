import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-genetic-mutation',
  title: 'Shortest Gene Mutation Path',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path'],
  description: `A gene string is exactly 8 characters long, where each character is one of \`'A'\`, \`'C'\`, \`'G'\`, or \`'T'\`. A **mutation** changes exactly one character.

Given a \`startGene\`, an \`endGene\`, and a \`bank\` of valid intermediate gene strings, return the **minimum number of mutations** needed to transform \`startGene\` into \`endGene\`, where every intermediate gene (including \`endGene\`) must appear in \`bank\`. If no such path exists, return \`-1\`.

The starting gene is assumed to be valid and need not be in the bank.`,
  constraints: [
    '`0 <= bank.length <= 10`',
    '`startGene.length == endGene.length == bank[i].length == 8`',
    "startGene, endGene, and bank[i] consist only of `'A'`, `'C'`, `'G'`, `'T'`.",
  ],
  examples: [
    {
      input: 'startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]',
      output: '1',
      explanation: 'One mutation: position 7 T→A.',
    },
    {
      input: 'startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AAACGGTA"]',
      output: '2',
      explanation: 'AACCGGTT → AACCGGTA (pos 7) → AAACGGTA (pos 2).',
    },
    {
      input: 'startGene = "AACCGGTT", endGene = "AACCGGTA", bank = []',
      output: '-1',
      explanation: 'endGene not in bank; impossible.',
    },
  ],
  hints: [
    'Model the problem as a BFS on an implicit graph: each node is a gene string and each edge connects strings that differ by exactly one character.',
    'At each BFS step, iterate over every gene in the bank and check if it differs from the current gene by exactly one character. If so, it is a valid next mutation. Use a visited set to avoid revisiting.',
    'Return the BFS level (step count) when you first reach `endGene`. If the queue empties without reaching it, return `-1`.',
  ],
  functionName: 'minMutation',
  params: ['startGene', 'endGene', 'bank'],
  starterCode: {
    javascript: `function minMutation(startGene, endGene, bank) {
  // Return minimum mutations to reach endGene, or -1 if impossible
  const bankSet = new Set(Array.from(bank));
}
`,
    python: `def minMutation(startGene, endGene, bank):
    bank = list(bank.to_py() if hasattr(bank, 'to_py') else bank)
    # Return minimum mutations to reach endGene, or -1 if impossible
`,
  },
  visibleTests: [
    { args: ['AACCGGTT', 'AACCGGTA', ['AACCGGTA']], expected: 1 },
    { args: ['AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AAACGGTA']], expected: 2 },
    { args: ['AACCGGTT', 'AACCGGTA', []], expected: -1 },
  ],
  hiddenTests: [
    { args: ['AACCGGTT', 'AACCGGTT', ['AACCGGTT']], expected: 0 },
    { args: ['AACCGGTT', 'AAACGGTT', []], expected: -1 },
    { args: ['AACCGGTT', 'AACCGGAA', ['AACCGGTA', 'AACCGGAA']], expected: 2 },
    {
      args: [
        'AAAAACCC',
        'AACCCCCC',
        ['AAAACCCC', 'AAACCCCC', 'AACCCCCC'],
      ],
      expected: 3,
    },
    { args: ['AACCGGTT', 'AACCGCTA', ['AACCGGTA', 'AACCGCTA']], expected: 2 },
    {
      args: [
        'AAAAAAAA',
        'CCCCCCCC',
        ['AAAAAAAC', 'AAAAAACC', 'AAAAACCC', 'AAAACCCC', 'AACACCCC', 'ACCACCCC', 'ACCCCCCC', 'CCCCCCCA', 'CCCCCCCC'],
      ],
      expected: 8,
    },
    {
      args: [
        'AACCGGTT',
        'AAACGGTA',
        ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'],
      ],
      expected: 2,
    },
    { args: ['AACCGGTT', 'AACCGGTA', ['AACCGATT', 'AACCGGTA']], expected: 1 },
  ],
};
