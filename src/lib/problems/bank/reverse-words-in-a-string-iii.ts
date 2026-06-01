import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-words-in-a-string-iii',
  title: 'Reverse Words in a String III',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `Given a string \`s\`, reverse the order of characters in **each word** within a sentence while still preserving whitespace and initial word order.`,
  constraints: [
    '1 <= s.length <= 5 * 10^4',
    's contains printable ASCII characters.',
    's does not contain any leading or trailing spaces.',
    'There is at least one word in s.',
    'All the words in s are separated by a single space.',
  ],
  examples: [
    {
      input: "s = \"Let's take LeetCode contest\"",
      output: "\"s'teL ekat edoCteeL tsetnoc\"",
    },
    {
      input: 's = "Mr Ding"',
      output: '"rM gniD"',
    },
  ],
  hints: [
    'Level 1: Split the string on spaces, reverse each word individually, then rejoin with spaces.',
    'Level 2: To reverse a word in-place without splitting, use two pointers from both ends swapping characters until they meet.',
    'Level 3: Either approach is O(n). The split+map+join version is concise; in-place is efficient for large inputs.',
  ],
  functionName: 'reverseWords',
  params: ['s'],
  starterCode: {
    javascript: `function reverseWords(s) {

}`,
    typescript: `function reverseWords(s: string): string {

}`,
    python: `def reverseWords(s):
    pass`,
  },
  visibleTests: [
    { args: ["Let's take LeetCode contest"], expected: "s'teL ekat edoCteeL tsetnoc" },
    { args: ['Mr Ding'], expected: 'rM gniD' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['hello world'], expected: 'olleh dlrow' },
    { args: ['I love you'], expected: 'I evol uoy' },
    { args: ['abc'], expected: 'cba' },
    { args: ['the sky is blue'], expected: 'eht yks si eulb' },
    { args: ['a b c'], expected: 'a b c' },
    { args: ['Alice Likes Books'], expected: 'ecilA sekiL skooB' },
  ],
};
