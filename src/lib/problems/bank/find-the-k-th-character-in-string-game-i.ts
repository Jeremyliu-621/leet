import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-k-th-character-in-string-game-i',
  title: 'Find the K-th Character in String Game I',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `Alice and Bob are playing a game. Initially, Alice has a string \`word = "a"\`.

You are given a **positive** integer \`k\`.

Now Bob will ask Alice to perform the following operation **forever**:

- Generate a new string by changing each character in \`word\` to its **next** character in the English alphabet, and append it to the original \`word\`.

For example, performing the operation on \`"c"\` generates \`"cd"\` and performing the operation on \`"zb"\` generates \`"zbac"\`.

Return the value of the **k**-th character in \`word\`, after enough operations have been done so that \`word\` has **at least** \`k\` characters. (**1-indexed**)`,
  constraints: [
    '1 <= k <= 500',
  ],
  examples: [
    {
      input: 'k = 5',
      output: '"b"',
      explanation: 'Starting: "a" → "ab" → "abbc" → "abbcbccd". The 5th character is "b".',
    },
    {
      input: 'k = 10',
      output: '"c"',
      explanation: 'After enough operations, the 10th character is "c".',
    },
    {
      input: 'k = 1',
      output: '"a"',
      explanation: 'The first character is always "a".',
    },
  ],
  hints: [
    'Simulate the string-building process: start with "a", repeatedly append the next-character version until length >= k.',
    'The string grows as powers of 2 (1, 2, 4, 8 ...), so you only need O(log k) iterations to reach length k.',
    'Return the (k-1)-th character of the resulting string.',
  ],
  functionName: 'kthCharacter',
  params: ['k'],
  starterCode: {
    javascript: `function kthCharacter(k) {
  const bits = (k - 1).toString(2).split('').filter(b => b === '1').length;
  return String.fromCharCode(97 + bits);
}`,
    typescript: `function kthCharacter(k: number): string {
  const bits = (k - 1).toString(2).split('').filter(b => b === '1').length;
  return String.fromCharCode(97 + bits);
}`,
    python: `def kthCharacter(k):
    return chr(97 + bin(k - 1).count('1'))`,
  },
  visibleTests: [
    { args: [5], expected: 'b' },
    { args: [10], expected: 'c' },
    { args: [1], expected: 'a' },
  ],
  hiddenTests: [
    { args: [2], expected: 'b' },
    { args: [3], expected: 'b' },
    { args: [4], expected: 'c' },
    { args: [8], expected: 'd' },
    { args: [14], expected: 'd' },
    { args: [500], expected: 'h' },
  ],
};
