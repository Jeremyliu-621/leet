import type { Problem } from '../types';

export const problem: Problem = {
  id: 'report-spam-message',
  title: 'Report Spam Message',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array of strings \`message\` and an array of strings \`bannedWords\`.

An array of words is considered **spam** if there are **at least two** words in \`message\` that exactly match any word in \`bannedWords\`.

Return \`true\` if the array \`message\` is spam, and \`false\` otherwise.`,
  constraints: [
    '`1 <= message.length <= 10^3`',
    '`1 <= bannedWords.length <= 10^3`',
    '`1 <= message[i].length <= 10`',
    '`1 <= bannedWords[i].length <= 10`',
    '`message[i]` and `bannedWords[i]` consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'message = ["hello","world","leetcode"], bannedWords = ["world","hello"]',
      output: 'true',
      explanation: '"hello" and "world" both appear in bannedWords, so the message is spam.',
    },
    {
      input: 'message = ["hello","programming","fun"], bannedWords = ["world","programming"]',
      output: 'false',
      explanation: 'Only "programming" matches a banned word — only one match, not spam.',
    },
    {
      input: 'message = ["go","coding","now","today","leetcode"], bannedWords = ["coding","leetcode"]',
      output: 'true',
      explanation: '"coding" and "leetcode" both appear in bannedWords — two matches, so spam.',
    },
  ],
  hints: [
    'Store all banned words in a Set for O(1) lookup.',
    'Iterate over the message words and count how many appear in the banned set.',
    'Return true as soon as you reach a count of 2 (or check at the end).',
  ],
  functionName: 'reportSpam',
  params: ['message', 'bannedWords'],
  starterCode: {
    javascript: `function reportSpam(message, bannedWords) {

}`,
    python: `def reportSpam(message, bannedWords):
    pass`,
  },
  visibleTests: [
    { args: [['hello', 'world', 'leetcode'], ['world', 'hello']], expected: true },
    { args: [['hello', 'programming', 'fun'], ['world', 'programming']], expected: false },
    { args: [['go', 'coding', 'now', 'today', 'leetcode'], ['coding', 'leetcode']], expected: true },
  ],
  hiddenTests: [
    { args: [['a'], ['a', 'b']], expected: false },
    { args: [['a', 'a'], ['a']], expected: true },
    { args: [['spam', 'spam', 'spam'], ['spam']], expected: true },
    { args: [['ok'], []], expected: false },
  ],
};
