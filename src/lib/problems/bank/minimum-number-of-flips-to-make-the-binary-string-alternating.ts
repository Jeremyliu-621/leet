import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-flips-to-make-the-binary-string-alternating',
  title: 'Minimum Number of Flips to Make the Binary String Alternating',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `You are given a binary string \`s\`. You can perform two types of operations any number of times in **any order**:

- **Type-1:** Remove the character \`s[0]\` from the front and append it to the end of the string.
- **Type-2:** Pick any index \`i\` and flip \`s[i]\` (i.e., if it is \`'0'\` change it to \`'1'\`, and vice versa).

A binary string \`t\` is **alternating** if no two adjacent characters are equal.

Return the **minimum number of type-2 flips** needed to make \`s\` alternating.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's[i] is either \'0\' or \'1\'.',
  ],
  examples: [
    {
      input: 's = "111000"',
      output: '2',
      explanation: 'Rotate once to get "110001", then flip indices 0 and 3 → "010101". Cost: 2 flips.',
    },
    {
      input: 's = "010"',
      output: '0',
      explanation: '"010" is already alternating.',
    },
    {
      input: 's = "1110"',
      output: '1',
      explanation: 'Rotate three times to get "0111", then flip index 1 → "0101". Cost: 1 flip.',
    },
  ],
  hints: [
    'Level 1: Type-1 operations are cyclic rotations and are effectively "free" — you can rotate as many times as you like before applying flips. So the problem reduces to: find the rotation of s that needs the fewest flips to become alternating.',
    'Level 2: There are exactly two alternating patterns for a string of length n: "010101..." and "101010...". For each rotation, count how many characters differ from each pattern. Take the minimum.',
    'Level 3: Concatenate s with itself (s2 = s+s, length 2n). Use a prefix-sum array over s2 to count how many characters match the global "010101..." pattern. For each window of size n, mismatches against "0101..." = n-matches; mismatches against "1010..." = matches. Answer = min over all windows of min(n-matches, matches).',
  ],
  functionName: 'minFlips',
  params: ['s'],
  starterCode: {
    javascript: `function minFlips(s) {

}`,
    typescript: `function minFlips(s: string): number {

}`,
    python: `def minFlips(s):
    pass`,
  },
  visibleTests: [
    { args: ['111000'], expected: 2 },
    { args: ['010'], expected: 0 },
    { args: ['1110'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['0'], expected: 0 },
    { args: ['1'], expected: 0 },
    { args: ['01'], expected: 0 },
    { args: ['00'], expected: 1 },
    { args: ['11'], expected: 1 },
    { args: ['010101'], expected: 0 },
    { args: ['001011'], expected: 2 },
    { args: ['000111'], expected: 2 },
    { args: ['110100'], expected: 2 },
  ],
};
