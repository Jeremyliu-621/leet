import type { Problem } from '../types';

export const problem: Problem = {
  id: 'hash-divided-string',
  title: 'Hash Divided String',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string \`s\` of length \`n\` (where \`n\` is divisible by \`k\`) and two integers \`k\` and \`p\`.

Divide \`s\` into consecutive groups of exactly \`k\` characters each.

For each group, compute its **hash value**: the sum of the positions of each character in the alphabet (a=1, b=2, …, z=26), taken modulo \`p\`.

Return the **result string** formed by concatenating the character at alphabet position \`(hash value)\` — i.e., \`'a' + hash\` — for each group in order (0 → 'a', 1 → 'b', etc.).

**Note:** The length of the result string is \`n / k\`.`,
  constraints: [
    '1 <= k <= 100',
    'k <= s.length <= 1000',
    's.length is divisible by k',
    's consists of lowercase English letters',
    '1 <= p <= 100',
  ],
  examples: [
    {
      input: 's = "abcdefghijklmnop", k = 4, p = 26',
      output: '"kaqg"',
      explanation:
        '"abcd" → 1+2+3+4=10, 10%26=10 → \'k\'. "efgh" → 26%26=0 → \'a\'. "ijkl" → 42%26=16 → \'q\'. "mnop" → 58%26=6 → \'g\'.',
    },
    {
      input: 's = "aaaa", k = 2, p = 5',
      output: '"cc"',
      explanation: '"aa" → 1+1=2, 2%5=2 → \'c\'. "aa" → 2 → \'c\'.',
    },
    {
      input: 's = "xyzxyz", k = 3, p = 26',
      output: '"xx"',
      explanation:
        '"xyz" → 24+25+26=75, 75%26=23 → \'x\'. Second group same → \'x\'.',
    },
  ],
  hints: [
    'Level 1: Iterate over s in steps of k. For each chunk of k characters, compute the sum of (char - \'a\' + 1) values.',
    'Level 2: Take sum modulo p to get the hash. Map the hash to a character: String.fromCharCode(\'a\'.charCodeAt(0) + hash).',
    'Level 3: Build the result string by appending each group\'s character. The result has length n/k.',
  ],
  functionName: 'stringHash',
  params: ['s', 'k', 'p'],
  starterCode: {
    javascript: `function stringHash(s, k, p) {
  let result = '';
  for (let i = 0; i < s.length; i += k) {
    let sum = 0;
    for (let j = i; j < i + k; j++) sum += s.charCodeAt(j) - 96;
    result += String.fromCharCode(97 + (sum % p));
  }
  return result;
}`,
    typescript: `function stringHash(s: string, k: number, p: number): string {
  let result = '';
  for (let i = 0; i < s.length; i += k) {
    let sum = 0;
    for (let j = i; j < i + k; j++) sum += s.charCodeAt(j) - 96;
    result += String.fromCharCode(97 + (sum % p));
  }
  return result;
}`,
    python: `def stringHash(s, k, p):
    result = []
    for i in range(0, len(s), k):
        total = sum(ord(c) - 96 for c in s[i:i+k])
        result.append(chr(97 + total % p))
    return ''.join(result)`,
  },
  visibleTests: [
    { args: ['abcdefghijklmnop', 4, 26], expected: 'kaqg' },
    { args: ['aaaa', 2, 5], expected: 'cc' },
    { args: ['xyzxyz', 3, 26], expected: 'xx' },
  ],
  hiddenTests: [
    { args: ['a', 1, 1], expected: 'a' },
    { args: ['z', 1, 26], expected: 'a' },
    { args: ['zz', 1, 26], expected: 'aa' },
    { args: ['aa', 2, 3], expected: 'c' },
    { args: ['abcde', 5, 7], expected: 'b' },
    { args: ['abcdefgh', 2, 10], expected: 'dhbf' },
    { args: ['m', 1, 13], expected: 'a' },
    { args: ['abcabc', 3, 26], expected: 'gg' },
  ],
};
