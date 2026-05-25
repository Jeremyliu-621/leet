import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-words-containing-character',
  title: 'Find Words Containing a Character',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `You are given a **0-indexed** string array \`words\` and a character \`x\`.

Return a **0-indexed** integer array containing the indices of words that contain \`x\` as a character.

**Note:** The returned array may be in **any order**.`,
  constraints: [
    '1 <= words.length <= 50',
    '1 <= words[i].length <= 50',
    'x is a lowercase English letter.',
    'words[i] consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["leet","code"], x = "e"',
      output: '[0,1]',
      explanation: '"leet" contains "e" (index 0). "code" contains "e" (index 1).',
    },
    {
      input: 'words = ["abc","bcd","aaaa","cbc"], x = "a"',
      output: '[0,2]',
      explanation: '"abc" contains "a" (index 0). "aaaa" contains "a" (index 2).',
    },
    {
      input: 'words = ["abc","bcd","aaaa","cbc"], x = "z"',
      output: '[]',
      explanation: 'No word contains "z".',
    },
  ],
  hints: [
    'Iterate over each word with its index. Check if the word includes the character.',
    'Use `word.includes(x)` in JS or `x in word` in Python.',
    'Collect the indices where the check passes.',
  ],
  functionName: 'findWordsContaining',
  params: ['words', 'x'],
  starterCode: {
    javascript: 'function findWordsContaining(words, x) {\n  \n}\n',
    python: 'def findWordsContaining(words, x):\n    pass\n',
  },
  visibleTests: [
    { args: [['leet', 'code'], 'e'], expected: [0, 1] },
    { args: [['abc', 'bcd', 'aaaa', 'cbc'], 'a'], expected: [0, 2] },
    { args: [['abc', 'bcd', 'aaaa', 'cbc'], 'z'], expected: [] },
  ],
  hiddenTests: [
    { args: [['a'], 'a'], expected: [0] },
    { args: [['xyz', 'pqr'], 'a'], expected: [] },
    { args: [['hello', 'world', 'help'], 'l'], expected: [0, 1, 2] },
    { args: [['mn', 'op'], 'n'], expected: [0] },
    { args: [['aaa', 'bbb', 'ccc'], 'b'], expected: [1] },
  ],
};
