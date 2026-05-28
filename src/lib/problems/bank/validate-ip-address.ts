import type { Problem } from '../types';

export const problem: Problem = {
  id: 'validate-ip-address',
  title: 'Validate IP Address',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Given a string \`queryIP\`, return:
- \`"IPv4"\` if it is a valid IPv4 address,
- \`"IPv6"\` if it is a valid IPv6 address, or
- \`"Neither"\` otherwise.

**IPv4** is four decimal groups separated by \`'.'\`, each group is an integer in [0, 255] with **no leading zeros**.

**IPv6** is eight hexadecimal groups separated by \`':'\`, each group has 1–4 hex digits (case-insensitive, no leading zeros concern).`,
  constraints: [
    'queryIP consists only of English letters, digits, and the characters \'.\' and \':\'',
  ],
  examples: [
    {
      input: 'queryIP = "172.16.254.1"',
      output: '"IPv4"',
      explanation: 'Four parts, each in [0, 255], no leading zeros.',
    },
    {
      input: 'queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334"',
      output: '"IPv6"',
      explanation: 'Eight groups, each 1–4 hexadecimal digits.',
    },
    {
      input: 'queryIP = "256.256.256.256"',
      output: '"Neither"',
      explanation: '256 > 255, so it is not a valid IPv4 address.',
    },
  ],
  hints: [
    'Split on \'.\' for potential IPv4; check exactly 4 parts, each is digits-only, no leading zeros, and value in [0, 255].',
    'Split on \':\' for potential IPv6; check exactly 8 parts, each 1–4 characters long and valid hex.',
    'Use a regex like /^[0-9a-fA-F]+$/ to validate hex digits in each IPv6 group.',
  ],
  functionName: 'validIPAddress',
  params: ['queryIP'],
  starterCode: {
    javascript: `function validIPAddress(queryIP) {

}`,
    typescript: "function validIPAddress(queryIP: string): string {\n\n}",

    python: `def validIPAddress(queryIP):
    pass`,
  },
  visibleTests: [
    { args: ['172.16.254.1'], expected: 'IPv4' },
    { args: ['2001:0db8:85a3:0:0:8A2E:0370:7334'], expected: 'IPv6' },
    { args: ['256.256.256.256'], expected: 'Neither' },
  ],
  hiddenTests: [
    { args: ['2001:0db8:85a3:0:0:8A2E:0370:7334:'], expected: 'Neither' },
    { args: ['1e1.4.5.6'], expected: 'Neither' },
    { args: ['01.01.01.01'], expected: 'Neither' },
    { args: ['::1'], expected: 'Neither' },
    { args: ['192.168.1.1'], expected: 'IPv4' },
    { args: ['2001:db8:85a3:0:0:8A2E:0370:7334'], expected: 'IPv6' },
  ],
};
