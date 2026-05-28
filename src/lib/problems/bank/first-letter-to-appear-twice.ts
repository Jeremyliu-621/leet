import type { Problem } from '../types';

export const problem: Problem = {
  id: 'first-letter-to-appear-twice',
  title: 'First Letter to Appear Twice',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\` consisting of lowercase English letters, return the first letter to appear **twice**.

**Note:** A letter \`a\` appears twice before a letter \`b\` appears twice if the **second** occurrence of \`a\` has a smaller index than the second occurrence of \`b\`.

It is guaranteed that at least one letter appears twice.`,
  constraints: [
    '2 <= s.length <= 100',
    's consists of lowercase English letters.',
    's has at least one repeated letter.',
  ],
  examples: [
    {
      input: 's = "abccbaacz"',
      output: '"c"',
      explanation: 'c appears at indices 2 and 3. Its second occurrence (index 3) is the earliest second occurrence of any letter.',
    },
    {
      input: 's = "abcdd"',
      output: '"d"',
      explanation: 'd appears at indices 3 and 4.',
    },
  ],
  hints: [
    'Use a Set to track letters you have already seen.',
    'Iterate through the string. If the current character is already in the Set, return it immediately.',
    'Otherwise, add the character to the Set and continue.',
  ],
  functionName: 'repeatedCharacter',
  params: ['s'],
  starterCode: {
    javascript: `function repeatedCharacter(s) {

}`,
    typescript: "function repeatedCharacter(s: string): string {\n\n}",

    python: `def repeatedCharacter(s):
    pass`,
  },
  visibleTests: [
    { args: ['abccbaacz'], expected: 'c' },
    { args: ['abcdd'], expected: 'd' },
    { args: ['aa'], expected: 'a' },
  ],
  hiddenTests: [
    { args: ['aabbcc'], expected: 'a' },
    { args: ['zz'], expected: 'z' },
    { args: ['abcabc'], expected: 'a' },
    { args: ['mnopqrstruvwxy'], expected: 'r' },
    { args: ['abcbde'], expected: 'b' },
  ],
};
