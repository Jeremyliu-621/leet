import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-vowels-in-string',
  title: 'Count Vowels in a String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\`, return the number of **vowels** in the string. The vowels are \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`. The string may contain both uppercase and lowercase letters.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's consists of printable ASCII characters.',
  ],
  examples: [
    {
      input: 's = "hello"',
      output: '2',
      explanation: '"e" and "o" are vowels.',
    },
    {
      input: 's = "rhythm"',
      output: '0',
      explanation: 'No vowels present.',
    },
  ],
  hints: [
    'Iterate through each character and check if it is in the set {"a","e","i","o","u","A","E","I","O","U"}.',
    'A simple includes check or a Set lookup works well here.',
  ],
  functionName: 'countVowels',
  params: ['s'],
  starterCode: {
    javascript: 'function countVowels(s) {\n  \n}\n',
    python: 'def countVowels(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['hello'], expected: 2 },
    { args: ['rhythm'], expected: 0 },
    { args: ['AEIOU'], expected: 5 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['xyz'], expected: 0 },
    { args: ['OpenAI'], expected: 4 },
    { args: ['aeiouAEIOU'], expected: 10 },
    { args: ['The quick brown fox'], expected: 5 },
  ],
};
