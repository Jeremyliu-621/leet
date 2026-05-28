import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lexicographically-smallest-string-after-a-swap',
  title: 'Lexicographically Smallest String After a Swap',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `Given a string \`s\` containing only **digits**, return the **lexicographically smallest** string that can be obtained after swapping **adjacent** digits in \`s\` that have the **same parity** at most **once**.

Digits have the same parity if both are odd or both are even. For example, \`5\` and \`9\`, as well as \`2\` and \`4\`, have the same parity, but \`6\` and \`9\` do not.`,
  constraints: [
    '`1 <= s.length <= 100`',
    '`s` consists only of digits.',
  ],
  examples: [
    {
      input: 's = "45"',
      output: '"45"',
      explanation: '4 and 5 have different parity, so no beneficial swap can be made.',
    },
    {
      input: 's = "001"',
      output: '"001"',
      explanation: '0 and 0 have the same parity but swapping gives "001" which is not smaller. 0 and 1 have different parity.',
    },
    {
      input: 's = "3159"',
      output: '"1359"',
      explanation: 'Swapping s[0]=3 and s[1]=1 (both odd, 1 < 3) gives the smallest result "1359".',
    },
  ],
  hints: [
    'Scan left to right. For the first index i where s[i] and s[i+1] have the same parity and s[i+1] < s[i], swap them.',
    'If no such swap exists, the string is already optimal.',
    `\`\`\`js
function getSmallestString(s) {
  const arr = s.split('');
  for (let i = 0; i < arr.length - 1; i++) {
    const a = parseInt(arr[i]), b = parseInt(arr[i + 1]);
    if (a % 2 === b % 2 && b < a) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      return arr.join('');
    }
  }
  return s;
}\`\`\``,
  ],
  functionName: 'getSmallestString',
  params: ['s'],
  starterCode: {
    javascript: `function getSmallestString(s) {

}`,
    typescript: 'function getSmallestString(s: string): string {\n\n}',
    python: `def getSmallestString(s):
    pass`,
  },
  visibleTests: [
    { args: ['45'], expected: '45' },
    { args: ['001'], expected: '001' },
    { args: ['3159'], expected: '1359' },
  ],
  hiddenTests: [
    { args: ['91'], expected: '19' },
    { args: ['300'], expected: '300' },
    { args: ['51'], expected: '15' },
    { args: ['42'], expected: '24' },
    { args: ['531'], expected: '351' },
    { args: ['864'], expected: '684' },
  ],
};
