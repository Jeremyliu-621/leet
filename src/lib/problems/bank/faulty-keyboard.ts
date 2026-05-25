import type { Problem } from '../types';

export const problem: Problem = {
  id: 'faulty-keyboard',
  title: 'Faulty Keyboard',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Your laptop keyboard is faulty, and whenever you type a character \`'i'\` on it, it reverses the string that you have written. Typing other characters works as expected.

You are given a **0-indexed** string \`s\`, and you type each character of \`s\` using your faulty keyboard.

Return the final string that will be present on your laptop screen.`,
  constraints: [
    '1 <= s.length <= 100',
    "s consists of lowercase English letters",
    "s[0] != 'i'",
  ],
  examples: [
    {
      input: 's = "string"',
      output: '"rtsng"',
      explanation: 'Type "s" → "s". "t" → "st". "r" → "str". "i" → reverse → "rts". "n" → "rtsn". "g" → "rtsng".',
    },
    {
      input: 's = "poiinter"',
      output: '"ponter"',
      explanation: 'Type "p" → "p". "o" → "po". "i" → "op". "i" → "po". "n" → "pon". "t" → "pont". "e" → "ponte". "r" → "ponter".',
    },
  ],
  hints: [
    'Simulate the process: maintain the current string and reverse it whenever you encounter \'i\'.',
    'Append each non-\'i\' character to the current string.',
    'Track whether the string is currently "reversed" using a boolean flag to avoid repeatedly reversing.',
  ],
  functionName: 'finalString',
  params: ['s'],
  starterCode: {
    javascript: `function finalString(s) {

}`,
    python: `def finalString(s):
    pass`,
  },
  visibleTests: [
    { args: ['string'], expected: 'rtsng' },
    { args: ['poiinter'], expected: 'ponter' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['ab'], expected: 'ab' },
    { args: ['abi'], expected: 'ba' },
    { args: ['abii'], expected: 'ab' },
  ],
};
