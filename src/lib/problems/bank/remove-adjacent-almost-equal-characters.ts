import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-adjacent-almost-equal-characters',
  title: 'Remove Adjacent Almost-Equal Characters',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a **0-indexed** string \`word\` of length \`n\`.

At each step, you can choose an index \`i\` and change \`word[i]\` to any lowercase English letter.

Two characters \`word[i]\` and \`word[j]\` are **almost equal** if they are the same, or the characters are adjacent in the alphabet (e.g., \`'a'\` and \`'b'\`, \`'x'\` and \`'y'\`). Formally, \`|word[i] - word[j]| <= 1\`.

Return the **minimum** number of steps needed to make \`word\` such that no two adjacent characters are almost equal.`,
  constraints: [
    '`1 <= word.length <= 100`',
    '`word` consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "aaaaa"',
      output: '2',
      explanation: 'Replace word[1] → \'c\' and word[3] → \'c\', giving "acaca". Now no two adjacent characters are almost equal.',
    },
    {
      input: 'word = "abddez"',
      output: '2',
      explanation: '\'a\' and \'b\' are almost equal (diff = 1), and \'d\' and \'d\' are almost equal (same). Replace word[1] → \'z\' and word[3] → \'z\' (or any valid choice) in 2 steps.',
    },
    {
      input: 'word = "zyxyxyz"',
      output: '3',
      explanation: 'Each adjacent pair (z,y), (y,x), (x,y), (y,x), (x,y), (y,z) is almost equal, so we need to replace every other character.',
    },
  ],
  hints: [
    'A greedy approach works: scan left to right. If word[i] and word[i+1] are almost equal, you must change one of them.',
    'The optimal greedy choice is to change word[i+1] (skip it) — this is equivalent to advancing 2 positions after each fix, since the changed character can be set to something far away from both neighbors.',
    'Count the number of fixes needed: whenever an almost-equal adjacent pair is found at index i, increment the counter and advance i by 2 instead of 1.',
  ],
  functionName: 'removeAlmostEqualCharacters',
  params: ['word'],
  starterCode: {
    javascript: `function removeAlmostEqualCharacters(word) {

}`,
    typescript: `function removeAlmostEqualCharacters(word: string): number {

}`,
    python: `def removeAlmostEqualCharacters(word: str) -> int:
    `,
  },
  visibleTests: [
    { args: ['aaaaa'], expected: 2 },
    { args: ['abddez'], expected: 2 },
    { args: ['zyxyxyz'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['ab'], expected: 1 },
    { args: ['ac'], expected: 0 },
    { args: ['az'], expected: 0 },
    { args: ['abc'], expected: 1 },
    { args: ['ace'], expected: 0 },
    { args: ['aabb'], expected: 2 },
    { args: ['azbz'], expected: 0 },
    { args: ['aaaa'], expected: 2 },
    { args: ['abab'], expected: 2 },
    { args: ['zzz'], expected: 1 },
    { args: ['abcdef'], expected: 3 },
    { args: ['aceg'], expected: 0 },
    { args: ['bac'], expected: 1 },
  ],
};
