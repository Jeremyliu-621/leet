import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reorder-data-in-log-files',
  title: 'Reorder Data in Log Files',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `You are given an array of \`logs\`. Each log is a space-delimited string of words, where the first word is the **identifier**.

There are two types of logs:
- **Letter-logs**: All words (except the identifier) consist of lowercase English letters.
- **Digit-logs**: All words (except the identifier) consist of digits.

Reorder these logs so that:
1. The **letter-logs** come before all **digit-logs**.
2. The letter-logs are sorted **lexicographically** by their contents. If their contents are the same, then sort them **lexicographically** by their identifiers.
3. The **digit-logs** maintain their **relative ordering**.

Return the final order of the logs.`,
  constraints: [
    '1 <= logs.length <= 100',
    '3 <= logs[i].length <= 100',
    'All the tokens of logs[i] are separated by a single space.',
    'logs[i] is guaranteed to have an identifier and at least one word after the identifier.',
  ],
  examples: [
    {
      input: 'logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]',
      output: '["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]',
    },
    {
      input: 'logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]',
      output: '["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]',
    },
  ],
  hints: [
    'Separate letter-logs and digit-logs. Digit-logs stay in original order.',
    'Sort letter-logs by (content, identifier) lexicographically. Use the part after the first space as the content.',
    'Concatenate sorted letter-logs with digit-logs.',
  ],
  functionName: 'reorderLogFiles',
  params: ['logs'],
  starterCode: {
    javascript: 'function reorderLogFiles(logs) {\n  \n}\n',
    python: 'def reorderLogFiles(logs):\n    pass\n',
  },
  visibleTests: [
    {
      args: [['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero']],
      expected: ['let1 art can', 'let3 art zero', 'let2 own kit dig', 'dig1 8 1 5 1', 'dig2 3 6'],
    },
    {
      args: [['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo']],
      expected: ['g1 act car', 'a8 act zoo', 'ab1 off key dog', 'a1 9 2 3 1', 'zo4 4 7'],
    },
  ],
  hiddenTests: [
    { args: [['a1 1', 'b1 abc']], expected: ['b1 abc', 'a1 1'] },
    { args: [['id2 x', 'id1 x']], expected: ['id1 x', 'id2 x'] },
    { args: [['id1 1 2', 'id2 a b', 'id3 3 4']], expected: ['id2 a b', 'id1 1 2', 'id3 3 4'] },
  ],
};
