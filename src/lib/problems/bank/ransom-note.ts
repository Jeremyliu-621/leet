import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ransom-note',
  title: 'Ransom Note',
  difficulty: 'easy',
  tags: ['hash-map', 'strings'],
  description: `Given two strings \`ransomNote\` and \`magazine\`, return \`true\` if \`ransomNote\` can be constructed using the letters from \`magazine\`, and \`false\` otherwise.

Each letter in \`magazine\` can only be used once in \`ransomNote\`.`,
  constraints: [
    '1 <= ransomNote.length, magazine.length <= 100000',
    'ransomNote and magazine consist of lowercase English letters',
  ],
  examples: [
    { input: 'ransomNote = "a", magazine = "b"', output: 'false' },
    { input: 'ransomNote = "aa", magazine = "ab"', output: 'false' },
    { input: 'ransomNote = "aa", magazine = "aab"', output: 'true' },
  ],
  hints: [
    'Think about what information you need about the magazine — specifically, how many times each character appears.',
    'Build a frequency map of characters in the magazine. Then, for each character in the ransom note, check if that character is available (count > 0) and decrement the count.',
    'If at any point you need a character that has count 0 in the magazine map, return false immediately. If you exhaust all characters in the ransom note without issue, return true.',
  ],
  functionName: 'canConstruct',
  params: ['ransomNote', 'magazine'],
  starterCode: {
    javascript: 'function canConstruct(ransomNote, magazine) {\n  // your code here\n}\n',
    typescript: "function canConstruct(ransomNote: string, magazine: string): boolean {\n  // your code here\n}",

    python: 'def canConstruct(ransomNote: str, magazine: str) -> bool:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['a', 'b'], expected: false },
    { args: ['aa', 'ab'], expected: false },
    { args: ['aa', 'aab'], expected: true },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: true },
    { args: ['bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'], expected: true },
    { args: ['z', 'z'], expected: true },
    { args: ['aab', 'baa'], expected: true },
  ],
};
