import type { Problem } from '../types';

export const problem: Problem = {
  id: 'restore-ip-addresses',
  title: 'Restore IP Addresses',
  difficulty: 'medium',
  tags: ['strings', 'backtracking'],
  description: `A **valid IP address** consists of exactly four integers separated by single dots. Each integer is between \`0\` and \`255\` (inclusive) and cannot have leading zeros.

- For example, \`"0.1.2.201"\` and \`"192.168.1.1"\` are **valid** IP addresses, but \`"0.011.255.245"\`, \`"192.168.1.312"\`, and \`"192.168@1.1"\` are **invalid** IP addresses.

Given a string \`s\` containing only digits, return all possible valid IP addresses that can be formed by inserting dots into \`s\`. You are **not** allowed to reorder or remove any digits in \`s\`. You may return the valid IP addresses in **any** order.`,
  constraints: [
    '`1 <= s.length <= 20`',
    '`s` consists of digits only',
  ],
  examples: [
    {
      input: 's = "25525511135"',
      output: '["255.255.11.135","255.255.111.35"]',
    },
    {
      input: 's = "0000"',
      output: '["0.0.0.0"]',
    },
    {
      input: 's = "101023"',
      output: '["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]',
    },
  ],
  hints: [
    'Use backtracking: at each step choose 1, 2, or 3 digits for the current segment.',
    'A segment is valid if it has no leading zero (unless the segment itself is "0") and its numeric value is ≤ 255.',
    'Stop recursing when you have 4 segments — the remaining string must be empty for a valid IP.',
  ],
  functionName: 'restoreIpAddresses',
  params: ['s'],
  starterCode: {
    javascript: `function restoreIpAddresses(s) {

}`,
    python: `def restoreIpAddresses(s):
    pass`,
  },
  visibleTests: [
    { args: ['25525511135'], expected: ['255.255.11.135', '255.255.111.35'] },
    { args: ['0000'], expected: ['0.0.0.0'] },
    { args: ['101023'], expected: ['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3'] },
  ],
  hiddenTests: [
    { args: ['1111'], expected: ['1.1.1.1'] },
    { args: ['010010'], expected: ['0.10.0.10', '0.100.1.0'] },
    { args: ['11111111111111111111'], expected: [] },
    { args: ['192168'], expected: ['1.9.2.168', '1.9.21.68', '1.9.216.8', '1.92.1.68', '1.92.16.8', '19.2.1.68', '19.2.16.8', '19.21.6.8', '192.1.6.8'] },
  ],
};
