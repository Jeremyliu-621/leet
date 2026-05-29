import type { Problem } from '../types';

export const problem: Problem = {
  id: 'repeated-dna-sequences',
  title: 'Repeated DNA Sequences',
  difficulty: 'medium',
  tags: ['strings', 'hash-map', 'sliding-window'],
  description: `The **DNA sequence** is composed of a series of nucleotides abbreviated as \`'A'\`, \`'C'\`, \`'G'\`, and \`'T'\`.

Given a string \`s\` that represents a DNA sequence, return all the **10-letter-long** sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in **any order**.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s[i]\` is either \`\'A\'\`, \`\'C\'\`, \`\'G\'\`, or \`\'T\'`.',
  ],
  examples: [
    {
      input: 's = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"',
      output: '["AAAAACCCCC","CCCCCAAAAA"]',
      explanation: '"AAAAACCCCC" appears at indices 0 and 10. "CCCCCAAAAA" appears at indices 5 and 15.',
    },
    {
      input: 's = "AAAAAAAAAAAAA"',
      output: '["AAAAAAAAAA"]',
      explanation: '"AAAAAAAAAA" (10 A\'s) appears starting at indices 0, 1, 2, and 3.',
    },
  ],
  hints: [
    'Slide a window of length 10 over the string and record each 10-char substring in a hash map.',
    'When a substring is seen for the second time, add it to the result.',
    '```js\nfunction findRepeatedDnaSequences(s) {\n  const seen = new Map();\n  const result = [];\n  for (let i = 0; i <= s.length - 10; i++) {\n    const sub = s.slice(i, i + 10);\n    seen.set(sub, (seen.get(sub) || 0) + 1);\n    if (seen.get(sub) === 2) result.push(sub);\n  }\n  return result;\n}\n```',
  ],
  functionName: 'findRepeatedDnaSequences',
  params: ['s'],
  starterCode: {
    javascript: `function findRepeatedDnaSequences(s) {

}`,
    typescript: `function findRepeatedDnaSequences(s: string): string[] {

}`,
    python: `def findRepeatedDnaSequences(s):
    pass`,
  },
  visibleTests: [
    { args: ['AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'], expected: ['AAAAACCCCC', 'CCCCCAAAAA'] },
    { args: ['AAAAAAAAAAAAA'], expected: ['AAAAAAAAAA'] },
  ],
  hiddenTests: [
    { args: ['ACGT'], expected: [] },
    { args: ['AAAAAAAAAAAA'], expected: ['AAAAAAAAAA'] },
    { args: ['GAGAGAGAGAGAGAGAGAGAGAGAG'], expected: ['AGAGAGAGAG', 'GAGAGAGAGA'] },
    { args: ['AAAAAAAAAAAAAAAAAAA'], expected: ['AAAAAAAAAA'] },
  ],
};
