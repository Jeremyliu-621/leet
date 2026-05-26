import type { Problem } from '../types';

export const problem: Problem = {
  id: 'di-string-match',
  title: 'DI String Match',
  difficulty: 'easy',
  tags: ['arrays', 'math', 'two-pointers'],
  description: `A permutation \`perm\` of \`n + 1\` integers of all the integers in the range \`[0, n]\` can be represented as a string \`s\` of length \`n\` where:

- \`s[i] == 'I'\` if \`perm[i] < perm[i + 1]\`, and
- \`s[i] == 'D'\` if \`perm[i] > perm[i + 1]\`.

Given a string \`s\`, reconstruct the permutation \`perm\` and return it. If there are multiple valid permutations, return **any of them**.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s[i]` is either `\'I\'` or `\'D\'`.',
  ],
  examples: [
    {
      input: 's = "IDID"',
      output: '[0,4,1,3,2]',
      explanation:
        'lo=0, hi=4. I→push 0 (lo→1). D→push 4 (hi→3). I→push 1 (lo→2). D→push 3 (hi→2). End→push 2.',
    },
    {
      input: 's = "III"',
      output: '[0,1,2,3]',
      explanation: 'All increases: push lo and increment each time.',
    },
    {
      input: 's = "DDI"',
      output: '[3,2,0,1]',
      explanation:
        'lo=0, hi=3. D→push 3 (hi→2). D→push 2 (hi→1). I→push 0 (lo→1). End→push 1.',
    },
  ],
  hints: [
    'Use two pointers: lo starting at 0 and hi starting at n (the length of s).',
    "For each character: if 'I', append lo and increment lo; if 'D', append hi and decrement hi. After processing all characters, lo equals hi — append that value.",
    'This works because assigning the smallest available number for I guarantees the next number is larger, and assigning the largest available number for D guarantees the next number is smaller.',
  ],
  functionName: 'diStringMatch',
  params: ['s'],
  starterCode: {
    javascript: `function diStringMatch(s) {

}`,
    python: `def diStringMatch(s):
    pass`,
  },
  visibleTests: [
    { args: ['IDID'], expected: [0, 4, 1, 3, 2] },
    { args: ['III'], expected: [0, 1, 2, 3] },
    { args: ['DDI'], expected: [3, 2, 0, 1] },
    { args: ['D'], expected: [1, 0] },
  ],
  hiddenTests: [
    { args: ['I'], expected: [0, 1] },
    { args: ['DD'], expected: [2, 1, 0] },
    { args: ['DID'], expected: [3, 0, 2, 1] },
    { args: ['DIDI'], expected: [4, 0, 3, 1, 2] },
    { args: ['II'], expected: [0, 1, 2] },
    { args: ['IID'], expected: [0, 1, 3, 2] },
  ],
};
