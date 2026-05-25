import type { Problem } from '../types';

export const problem: Problem = {
  id: 'capitalize-the-title',
  title: 'Capitalize the Title',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`title\` consisting of one or more words separated by a single space, where each word consists of English letters. **Capitalize** the string by changing the capitalization of each word such that:

- If the length of the word is **1 or 2** letters, change all letters to lowercase.
- Otherwise, change the first letter to uppercase and the remaining letters to lowercase.

Return the **capitalized** \`title\`.`,
  constraints: [
    '1 <= title.length <= 100',
    'title consists of words separated by a single space without any leading or trailing spaces.',
    'Each word consists of uppercase and lowercase English letters and is non-empty.',
  ],
  examples: [
    {
      input: 'title = "capiTalIze tHe titLe"',
      output: '"Capitalize The Title"',
      explanation: 'All words have length >= 3, so capitalize first letter.',
    },
    {
      input: 'title = "First leTTeR of EACH Word"',
      output: '"First Letter of Each Word"',
      explanation: '"of" has length 2 so it is lowercased.',
    },
    {
      input: 'title = "i lOve leetcode"',
      output: '"i Love Leetcode"',
      explanation: '"i" has length 1 so it is lowercased.',
    },
  ],
  hints: [
    'Split title into words, process each based on its length, and rejoin.',
  ],
  functionName: 'capitalizeTitle',
  params: ['title'],
  starterCode: {
    javascript: 'function capitalizeTitle(title) {\n  \n}\n',
    python: 'def capitalizeTitle(title):\n    pass\n',
  },
  visibleTests: [
    { args: ['capiTalIze tHe titLe'], expected: 'Capitalize The Title' },
    { args: ['First leTTeR of EACH Word'], expected: 'First Letter of Each Word' },
    { args: ['i lOve leetcode'], expected: 'i Love Leetcode' },
  ],
  hiddenTests: [
    { args: ['hello'], expected: 'Hello' },
    { args: ['hi'], expected: 'hi' },
    { args: ['a'], expected: 'a' },
    { args: ['a big TITLE'], expected: 'a Big Title' },
    { args: ['TO BE OR NOT TO BE'], expected: 'to be or Not to be' },
  ],
};
