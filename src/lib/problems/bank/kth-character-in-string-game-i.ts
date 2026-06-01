import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kth-character-in-string-game-i',
  title: 'Kth Character in String Game I',
  difficulty: 'easy',
  tags: ['simulation', 'bit-manipulation'],
  description: `Alice and Bob are playing a game. Initially, Alice has a string \`word = "a"\`.

You are given a **positive** integer \`k\`.

In each operation, Alice generates a new string by **appending** a new string to \`word\`. The new string is obtained by replacing every character in \`word\` with the **next character** in the English alphabet (wrapping \`'z'\` back to \`'a'\`).

Return the value of the **k-th character** (1-indexed) of \`word\` after **enough operations** so that \`word\` has at least \`k\` characters.`,
  constraints: [
    '1 <= k <= 500',
  ],
  examples: [
    {
      input: 'k = 5',
      output: '"b"',
      explanation:
        'After op 1: "ab". After op 2: "abbc". After op 3: "abbcbccd". The 5th character is "b".',
    },
    {
      input: 'k = 10',
      output: '"c"',
      explanation: 'After enough operations the 10th character (0-indexed: 9 = 0b1001, 2 set bits) is "c".',
    },
  ],
  hints: [
    'The string doubles after each operation; think of each position by its binary representation.',
    'Position p (0-indexed) in the final string has a character that was incremented once for each 1-bit in p.',
    'The k-th character (1-indexed) is at 0-indexed position k-1; count its 1-bits to get the offset from "a".',
  ],
  functionName: 'kthCharacter',
  params: ['k'],
  starterCode: {
    javascript: `function kthCharacter(k) {
  let bits = 0, n = k - 1;
  while (n > 0) { bits += n & 1; n >>= 1; }
  return String.fromCharCode(97 + bits % 26);
}`,
    typescript: `function kthCharacter(k: number): string {
  let bits = 0, n = k - 1;
  while (n > 0) { bits += n & 1; n >>= 1; }
  return String.fromCharCode(97 + bits % 26);
}`,
    python: `def kthCharacter(k):
    bits = bin(k - 1).count('1')
    return chr(ord('a') + bits % 26)`,
  },
  visibleTests: [
    { args: [5], expected: 'b' },
    { args: [10], expected: 'c' },
    { args: [1], expected: 'a' },
    { args: [4], expected: 'c' },
    { args: [8], expected: 'd' },
  ],
  hiddenTests: [
    { args: [2], expected: 'b' },
    { args: [3], expected: 'b' },
    { args: [7], expected: 'c' },
    { args: [16], expected: 'e' },
    { args: [100], expected: 'e' },
  ],
};
