import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reorder-log-files',
  title: 'Reorder Log Files',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given an array of \`logs\`. Each log is a space-delimited string of words, where the first word is the **identifier**.

There are two types of logs:

- **Letter-logs**: All words (except the identifier) consist of lowercase English letters.
- **Digit-logs**: All words (except the identifier) consist of digits.

Reorder these logs so that:

1. The **letter-logs** come before all **digit-logs**.
2. The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
3. The digit-logs maintain their **relative ordering**.

Return the final order of the logs.`,
  constraints: [
    '`1 <= logs.length <= 100`',
    '`3 <= logs[i].length <= 100`',
    'All the tokens of `logs[i]` are separated by a **single** space.',
    '`logs[i]` is guaranteed to have an identifier and at least one word after the identifier.',
  ],
  examples: [
    {
      input: 'logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]',
      output: '["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]',
      explanation: 'Letter-logs sorted by content first (art can < art zero < own kit dig), digit-logs keep order.',
    },
    {
      input: 'logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]',
      output: '["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]',
      explanation: 'act car < act zoo < off key dog. Digit-logs a1, zo4 stay in original order.',
    },
  ],
  hints: [
    'Check the second token of each log to determine if it is a letter-log or digit-log.',
    'For letter-logs, the sort key is (content, identifier), where content = everything after the first space.',
    'Use a stable sort: letter-logs sorted by the custom key, digit-logs appended in original order.',
  ],
  functionName: 'reorderLogFiles',
  params: ['logs'],
  starterCode: {
    javascript: `function reorderLogFiles(logs) {

}`,
    typescript: `function reorderLogFiles(logs: string[]): string[] {

}`,
    python: `def reorderLogFiles(logs):
    pass`,
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
    { args: [['j m z']], expected: ['j m z'] },
    { args: [['x 1 2', 'y a b', 'z c d']], expected: ['y a b', 'z c d', 'x 1 2'] },
    { args: [['id1 a a', 'id2 a a']], expected: ['id1 a a', 'id2 a a'] },
    { args: [['d1 5 6', 'd2 4 3', 'l1 a b']], expected: ['l1 a b', 'd1 5 6', 'd2 4 3'] },
  ],
};
