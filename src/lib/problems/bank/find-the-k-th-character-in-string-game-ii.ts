import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-k-th-character-in-string-game-ii',
  title: 'Find the K-th Character in String Game II',
  difficulty: 'hard',
  tags: ['strings', 'math'],
  description: `Alice and Bob are playing a game. Initially, Alice has a string \`word = "a"\`.

You are given a **positive** integer \`k\` and an integer array \`operations\`, where \`operations[i]\` represents the **type** of the \`i\`-th operation.

Now Bob will ask Alice to perform **all** operations in sequence:

- If \`operations[i] === 0\`, **append** a copy of \`word\` to \`word\`.
- If \`operations[i] === 1\`, **append** a copy of \`word\` to \`word\`, but this new copy is the **next** character version (each character \`c\` becomes \`(c - 'a' + 1) % 26 + 'a'\`).

Return the value of the **k**-th character in \`word\` after all operations, **1-indexed**.

**Note:** The characters in \`word\` are restricted to lowercase English letters.`,
  constraints: [
    '1 <= k <= 2^55',
    '1 <= operations.length <= 55',
    '0 <= operations[i] <= 1',
    'The input is generated such that k <= word.length after all operations.',
  ],
  examples: [
    {
      input: 'k = 5, operations = [0,0,0]',
      output: '"a"',
      explanation:
        'Three type-0 ops: "a"→"aa"→"aaaa"→"aaaaaaaa". All chars are \'a\', so k=5 → "a".',
    },
    {
      input: 'k = 10, operations = [0,1,0,1]',
      output: '"b"',
      explanation:
        '"a"→"aa"→"aabb"→"aabbaabb"→"aabbaabbbbccbbcc". The 10th character is "b".',
    },
  ],
  hints: [
    'After all operations, the length is 2^(operations.length). Work backwards.',
    'For each operation from last to first: if k > 2^i (the half-length), subtract 2^i from k; if that operation was type 1, increment an offset counter.',
    'The answer is chr(\'a\' + offset % 26). In JavaScript, use BigInt to handle k up to 2^55.',
  ],
  functionName: 'kthCharacter',
  params: ['k', 'operations'],
  starterCode: {
    javascript: `function kthCharacter(k, operations) {

}`,
    python: `def kthCharacter(k, operations):
    pass`,
  },
  visibleTests: [
    { args: [5, [0, 0, 0]], expected: 'a' },
    { args: [10, [0, 1, 0, 1]], expected: 'b' },
  ],
  hiddenTests: [
    { args: [2, [1]], expected: 'b' },
    { args: [3, [0, 1]], expected: 'b' },
    { args: [4, [1, 1]], expected: 'c' },
    { args: [1, [0, 1, 0]], expected: 'a' },
    { args: [7, [0, 0, 1]], expected: 'b' },
    { args: [8, [0, 0, 1]], expected: 'b' },
  ],
};
