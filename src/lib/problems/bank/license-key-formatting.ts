import type { Problem } from '../types';

export const problem: Problem = {
  id: 'license-key-formatting',
  title: 'License Key Formatting',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a license key represented as a string \`s\` that consists of only alphanumeric characters and dashes. The string is separated into \`n + 1\` groups by \`n\` dashes. You are also given an integer \`k\`.

We want to reformat the string \`s\` such that each group contains exactly \`k\` characters, except for the first group, which could be shorter than \`k\` but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

Return the reformatted license key.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of alphanumeric characters and dashes \'-\'.',
    '1 <= k <= 10^4',
  ],
  examples: [
    {
      input: 's = "5F3Z-2e-9-w", k = 4',
      output: '"5F3Z-2E9W"',
      explanation: 'Remove dashes, uppercase all → "5F3Z2E9W" (8 chars). Groups of 4 from right: "5F3Z" and "2E9W".',
    },
    {
      input: 's = "2-5g-3-J", k = 2',
      output: '"2-5G-3J"',
      explanation: 'Remove dashes, uppercase → "25G3J" (5 chars). First group has 5%2=1 char: "2". Remaining: "5G", "3J".',
    },
  ],
  hints: [
    'Remove dashes and convert to uppercase.',
    'Compute the size of the first group as len % k (or k if len % k == 0).',
  ],
  functionName: 'licenseKeyFormatting',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function licenseKeyFormatting(s, k) {

}`,
    python: `def licenseKeyFormatting(s, k):
    pass`,
  },
  visibleTests: [
    { args: ['5F3Z-2e-9-w', 4], expected: '5F3Z-2E9W' },
    { args: ['2-5g-3-J', 2], expected: '2-5G-3J' },
  ],
  hiddenTests: [
    { args: ['a-a-a-a-', 1], expected: 'A-A-A-A' },
    { args: ['---', 3], expected: '' },
    { args: ['ABC', 2], expected: 'A-BC' },
    { args: ['ABCD', 2], expected: 'AB-CD' },
  ],
};
