import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reorganize-string',
  title: 'Reorganize String',
  difficulty: 'medium',
  tags: ['heap', 'strings'],
  description: `Given a string \`s\`, rearrange the characters of \`s\` so that any two adjacent characters are **not the same**.

Return any possible rearrangement of \`s\`, or return \`""\` if it is not possible.`,
  constraints: [
    '1 <= s.length <= 500',
    's consists of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "aab"',
      output: '"aba"',
      explanation: 'Place the two "a"s in alternating positions with "b" in between.',
    },
    {
      input: 's = "aaab"',
      output: '""',
      explanation: 'No valid rearrangement exists since "a" appears 3 times but there are only 4 characters total.',
    },
  ],
  hints: [
    'If any character appears more than ⌈n/2⌉ times, it is impossible. Otherwise a valid arrangement always exists.',
    'Use a max-heap ordered by character frequency. Greedily pick the most frequent character at each position, then push it back with a decremented count.',
    'To avoid placing the same character twice in a row: after picking the most frequent character, pick the second-most frequent for the next slot, then reassemble. Alternatively, keep a "cooldown" of the last placed character.',
  ],
  functionName: 'reorganizeString',
  params: ['s'],
  starterCode: {
    javascript: `function reorganizeString(s) {

}`,
    typescript: "function reorganizeString(s: string): string {\n\n}",

    python: `def reorganizeString(s):
    pass`,
  },
  visibleTests: [
    { args: ['aab'], expected: 'aba' },
    { args: ['aaab'], expected: '' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['aa'], expected: '' },
    { args: ['aaabb'], expected: 'ababa' },
    { args: ['bbbaa'], expected: 'babab' },
    { args: ['zzzyz'], expected: '' },
  ],
};
