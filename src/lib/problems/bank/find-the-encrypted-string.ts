import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-encrypted-string',
  title: 'Find the Encrypted String',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string \`word\` and a non-negative integer \`k\`.

Return the **encrypted string** by replacing each character \`word[i]\` with the character at position \`(i + k) % word.length\` in \`word\`.`,
  constraints: [
    '1 <= word.length <= 100',
    '0 <= k <= word.length',
  ],
  examples: [
    {
      input: 'word = "dart", k = 3',
      output: '"tdar"',
      explanation: 'encrypted[0]=word[3]="t", encrypted[1]=word[0]="d", encrypted[2]=word[1]="a", encrypted[3]=word[2]="r" → "tdar".',
    },
    {
      input: 'word = "aa", k = 2',
      output: '"aa"',
      explanation: '(0+2)%2=0, (1+2)%2=1 — same indices → "aa".',
    },
  ],
  hints: [
    'Build a new string of the same length. For each index i, the output character is word[(i + k) % word.length].',
    'When k equals word.length, (i+k)%n = i — you get the original string back.',
    'This is essentially rotating the string left by k positions and reading from the shifted indices.',
  ],
  functionName: 'getEncryptedString',
  params: ['word', 'k'],
  starterCode: {
    javascript: `function getEncryptedString(word, k) {
  const n = word.length;
  return word.split('').map((_, i) => word[(i + k) % n]).join('');
}`,
    typescript: `function getEncryptedString(word: string, k: number): string {
  const n = word.length;
  return word.split('').map((_, i) => word[(i + k) % n]!).join('');
}`,
    python: `def getEncryptedString(word, k):
    n = len(word)
    return ''.join(word[(i + k) % n] for i in range(n))`,
  },
  visibleTests: [
    { args: ['dart', 3], expected: 'tdar' },
    { args: ['aa', 2], expected: 'aa' },
    { args: ['a', 1], expected: 'a' },
  ],
  hiddenTests: [
    { args: ['abcde', 2], expected: 'cdeab' },
    { args: ['hello', 5], expected: 'hello' },
    { args: ['xyz', 1], expected: 'yzx' },
    { args: ['leetcode', 4], expected: 'codeleet' },
    { args: ['z', 0], expected: 'z' },
  ],
};
