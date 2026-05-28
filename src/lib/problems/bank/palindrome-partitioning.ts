import type { Problem } from '../types';

export const problem: Problem = {
  id: 'palindrome-partitioning',
  title: 'Palindrome Partitioning',
  difficulty: 'medium',
  tags: ['strings', 'backtracking'],
  description: `Given a string \`s\`, partition \`s\` such that every substring of the partition is a **palindrome**. Return all possible palindrome partitioning of \`s\`.`,
  constraints: [
    '`1 <= s.length <= 16`',
    '`s` contains only lowercase English letters',
  ],
  examples: [
    {
      input: 's = "aab"',
      output: '[["a","a","b"],["aa","b"]]',
    },
    {
      input: 's = "a"',
      output: '[["a"]]',
    },
  ],
  hints: [
    'Use backtracking. At each step, try all substrings starting at the current index.',
    'Only recurse deeper if the chosen substring is a palindrome.',
    'When you reach the end of the string, you have a valid partitioning — add it to results.',
  ],
  functionName: 'partition',
  params: ['s'],
  starterCode: {
    javascript: `function partition(s) {

}`,
    typescript: "function partition(s: string): string[][] {\n\n}",

    python: `def partition(s):
    pass`,
  },
  visibleTests: [
    { args: ['aab'], expected: [['a','a','b'],['aa','b']] },
    { args: ['a'], expected: [['a']] },
    { args: ['aba'], expected: [['a','b','a'],['aba']] },
  ],
  hiddenTests: [
    { args: ['aa'], expected: [['a','a'],['aa']] },
    { args: ['ab'], expected: [['a','b']] },
    { args: ['abba'], expected: [['a','b','b','a'],['a','bb','a'],['abba']] },
    { args: ['aaa'], expected: [['a','a','a'],['a','aa'],['aa','a'],['aaa']] },
  ],
};
