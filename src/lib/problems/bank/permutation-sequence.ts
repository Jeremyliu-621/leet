import type { Problem } from '../types';

export const problem: Problem = {
  id: 'permutation-sequence',
  title: 'Permutation Sequence',
  difficulty: 'hard',
  tags: ['math', 'backtracking'],
  description: `The set \`[1, 2, 3, ..., n]\` contains a total of \`n!\` unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for \`n = 3\`:

1. \`"123"\`
2. \`"132"\`
3. \`"213"\`
4. \`"231"\`
5. \`"312"\`
6. \`"321"\`

Given \`n\` and \`k\`, return the \`k\`th permutation sequence.`,
  constraints: [
    '1 <= n <= 9',
    '1 <= k <= n!',
  ],
  examples: [
    {
      input: 'n = 3, k = 3',
      output: '"213"',
      explanation: 'The permutations in order are: "123", "132", "213", "231", "312", "321". The 3rd is "213".',
    },
    {
      input: 'n = 4, k = 9',
      output: '"2314"',
      explanation: 'The 9th permutation of [1,2,3,4] is "2314".',
    },
    {
      input: 'n = 3, k = 1',
      output: '"123"',
    },
  ],
  hints: [
    'Level 1: There are (n-1)! permutations starting with each digit. Divide k by (n-1)! to determine which digit comes first, then recurse on the remaining digits.',
    'Level 2: Use 0-indexed k: subtract 1 before dividing. The first digit index is floor(k / (n-1)!). Update k = k % (n-1)! and remove the chosen digit from the available set.',
    'Level 3: Precompute factorials. Maintain a list of available digits [1..n]. For each position, pick index = floor(k / fact[remaining-1]), append digits[index], remove it, and update k %= fact[remaining-1].',
  ],
  functionName: 'getPermutation',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function getPermutation(n, k) {

}`,
    typescript: `function getPermutation(n: number, k: number): string {

}`,
    python: `def getPermutation(n: int, k: int) -> str:
    pass`,
  },
  visibleTests: [
    { args: [3, 3], expected: '213' },
    { args: [4, 9], expected: '2314' },
    { args: [3, 1], expected: '123' },
  ],
  hiddenTests: [
    { args: [1, 1], expected: '1' },
    { args: [2, 2], expected: '21' },
    { args: [4, 24], expected: '4321' },
    { args: [3, 6], expected: '321' },
    { args: [4, 1], expected: '1234' },
    { args: [4, 16], expected: '3241' },
  ],
};
