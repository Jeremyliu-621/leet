import type { Problem } from '../types';

export const problem: Problem = {
  id: 'keyboard-row',
  title: 'Keyboard Row',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given an array of strings \`words\`, return the words that can be typed using letters of the alphabet on only one row of the American keyboard.

The keyboard rows are:
- Row 1: \`"qwertyuiop"\`
- Row 2: \`"asdfghjkl"\`
- Row 3: \`"zxcvbnm"\``,
  constraints: [
    '`1 <= words.length <= 20`',
    '`1 <= words[i].length <= 100`',
    '`words[i]` consists of English letters (both lowercase and uppercase).',
  ],
  examples: [
    { input: 'words = ["Hello","Alaska","Dad","Peace"]', output: '["Alaska","Dad"]' },
    { input: 'words = ["omk"]', output: '[]' },
    { input: 'words = ["adsdf","sfd"]', output: '["adsdf","sfd"]' },
  ],
  hints: [
    'Build a map from each character to its row number.',
    'A word qualifies if all its characters map to the same row.',
  ],
  functionName: 'findWords',
  params: ['words'],
  starterCode: {
    javascript: 'function findWords(words) {\n  \n}\n',
    python: 'def findWords(words):\n    pass\n',
  },
  visibleTests: [
    { args: [['Hello', 'Alaska', 'Dad', 'Peace']], expected: ['Alaska', 'Dad'] },
    { args: [['omk']], expected: [] },
    { args: [['adsdf', 'sfd']], expected: ['adsdf', 'sfd'] },
  ],
  hiddenTests: [
    { args: [['a']], expected: ['a'] },
    { args: [['qwerty']], expected: ['qwerty'] },
    { args: [['Aston']], expected: [] },
    { args: [['flag', 'Lag', 'dash']], expected: ['flag', 'Lag', 'dash'] },
  ],
};
