import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-words-in-string-iii',
  title: 'Reverse Words in a String III',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\`, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Words in \`s\` are separated by a single space. The string does not contain any leading or trailing spaces.`,
  constraints: [
    '1 <= s.length <= 5 * 10^4',
    's contains printable ASCII characters.',
    's does not contain any leading or trailing spaces.',
    'There is at least one word in s.',
    'All the words in s are separated by a single space.',
  ],
  examples: [
    {
      input: 's = "Let\'s take LeetCode contest"',
      output: '"s\'teL ekat edoCteeL tsetnoc"',
      explanation: 'Each word is reversed in place; the order of words is preserved.',
    },
    {
      input: 's = "Mr Ding"',
      output: '"rM gniD"',
    },
  ],
  hints: [
    'Level 1: Split the string into words, reverse each word individually, then join them back.',
    'Level 2: `s.split(" ")` gives the array of words. Reverse each word with `.split("").reverse().join("")`. Then join with `" "`.',
    'Level 3: `return s.split(" ").map(w => w.split("").reverse().join("")).join(" ");`',
  ],
  functionName: 'reverseWords',
  params: ['s'],
  starterCode: {
    javascript: 'function reverseWords(s) {\n  // your code here\n}\n',
    python: 'def reverseWords(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: ["Let's take LeetCode contest"],
      expected: "s'teL ekat edoCteeL tsetnoc",
    },
    {
      args: ['Mr Ding'],
      expected: 'rM gniD',
    },
    {
      args: ['hello world'],
      expected: 'olleh dlrow',
    },
  ],
  hiddenTests: [
    {
      args: ['a'],
      expected: 'a',
    },
    {
      args: ['abc def ghi'],
      expected: 'cba fed ihg',
    },
    {
      args: ['racecar'],
      expected: 'racecar',
    },
    {
      args: ['one two three four five'],
      expected: 'eno owt eerht ruof evif',
    },
  ],
};
