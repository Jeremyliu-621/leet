import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-length-of-string-after-deleting-similar-ends',
  title: 'Minimum Length of String After Deleting Similar Ends',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Given a string \`s\` consisting only of characters \`'a'\`, \`'b'\`, and \`'c'\`. You are asked to apply the following algorithm on the string any number of times:

1. Pick a **non-empty** prefix from the string \`s\` where all the characters in the prefix are equal.
2. Pick a **non-empty** suffix from the string \`s\` where all the characters in the suffix are equal.
3. The prefix and the suffix should not intersect at any index.
4. The characters from the prefix and suffix must be the same.
5. Delete both the prefix and the suffix.

Return the **minimum length** of \`s\` after performing the above operation any number of times (possibly zero times).`,
  constraints: [
    '1 <= s.length <= 10^5',
    's only consists of characters \'a\', \'b\', and \'c\'.',
  ],
  examples: [
    {
      input: 's = "ca"',
      output: '2',
      explanation: 's = "ca" — no operation can be performed, length remains 2.',
    },
    {
      input: 's = "cabaabac"',
      output: '0',
      explanation: 'Remove "c" prefix & "c" suffix → "abaaba". Remove "a" prefix & "a" suffix → "baab". Remove "b" prefix & "b" suffix → "aa". Remove "a" prefix & "a" suffix → "". Length = 0.',
    },
    {
      input: 's = "aabccabba"',
      output: '3',
      explanation: 'Remove "a" prefix & "a" suffix → "abccabb". Remove "b" (wait, prefix "a" suffix "b" don\'t match). Length = 3 after removing "aa" prefix and "a" suffix does not match "a"..."b". Actually final answer 3.',
    },
  ],
  hints: [
    'Use two pointers left and right. While s[left] == s[right] and they don\'t cross, advance past all same characters on both ends.',
    'When s[left] == s[right]: save the character c = s[left]. Advance left while s[left] == c (include runs). Advance right while s[right] == c (include runs).',
    'The remaining string is s[left..right] (inclusive). Its length is `max(0, right - left + 1)`. Stop when s[left] ≠ s[right] or left ≥ right.',
  ],
  functionName: 'minimumLength',
  params: ['s'],
  starterCode: {
    javascript: `function minimumLength(s) {

}`,
    typescript: "function minimumLength(s: string): number {\n\n}",

    python: `def minimumLength(s):
    pass`,
  },
  visibleTests: [
    { args: ['ca'], expected: 2 },
    { args: ['cabaabac'], expected: 0 },
    { args: ['aabccabba'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aa'], expected: 0 },
    { args: ['abc'], expected: 3 },
    { args: ['aaaa'], expected: 0 },
  ],
};
