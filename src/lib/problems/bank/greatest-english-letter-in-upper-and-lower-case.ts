import type { Problem } from '../types';

export const problem: Problem = {
  id: 'greatest-english-letter-in-upper-and-lower-case',
  title: 'Greatest English Letter in Upper and Lower Case',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\` of English letters, return *the **greatest** English letter which occurs as **both** a lowercase and uppercase letter in \`s\`*. The returned letter should be in **uppercase**. If no such letter exists, return an empty string.

An English letter \`b\` is **greater** than another letter \`a\` if \`b\` appears **after** \`a\` in the English alphabet.`,
  constraints: [
    '1 <= s.length <= 1000',
    's consists of lowercase and uppercase English letters.',
  ],
  examples: [
    {
      input: 's = "lEeTcOdE"',
      output: '"E"',
      explanation: 'E is the greatest letter that appears as both \'e\' and \'E\' in s.',
    },
    {
      input: 's = "arRAzFif"',
      output: '"R"',
      explanation: 'R is the greatest letter appearing in both cases.',
    },
    {
      input: 's = "aAbBcCdDeEfFgG"',
      output: '"G"',
      explanation: 'Letters a-g all appear in both cases; G is the greatest.',
    },
  ],
  hints: [
    'Build a set of all characters in s.',
    'Iterate from \'Z\' down to \'A\'; return the first letter whose uppercase and lowercase both appear in the set.',
    'Return "" if none found.',
  ],
  functionName: 'greatestLetter',
  params: ['s'],
  starterCode: {
    javascript: 'function greatestLetter(s) {\n\n}\n',
    typescript: "function greatestLetter(s: string): string {\n\n}",

    python: 'def greatestLetter(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['lEeTcOdE'], expected: 'E' },
    { args: ['arRAzFif'], expected: 'R' },
    { args: ['aAbBcCdDeEfFgG'], expected: 'G' },
  ],
  hiddenTests: [
    { args: ['abc'], expected: '' },
    { args: ['aAbBcC'], expected: 'C' },
    { args: ['z'], expected: '' },
    { args: ['AaBbZz'], expected: 'Z' },
  ],
};
