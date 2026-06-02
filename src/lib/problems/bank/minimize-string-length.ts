import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-string-length',
  title: 'Minimize String Length',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\`, you can perform operations: pick any character \`c\` in \`s\` and remove the **closest** occurrence of \`c\` to its **left** (if any), and the **closest** occurrence of \`c\` to its **right** (if any).

Return the **minimum** possible length of \`s\` after any number of operations.

**Key insight:** The optimal strategy reduces the string to have at most one of each character, so the answer equals the number of **distinct characters** in \`s\`.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aaabc"',
      output: '3',
      explanation: 'Remove the extra \'a\'s. The minimum string has one \'a\', one \'b\', one \'c\'.',
    },
    {
      input: 's = "cbbd"',
      output: '3',
      explanation: 'Remove one \'b\'. 3 distinct characters remain.',
    },
    {
      input: 's = "dddaaa"',
      output: '2',
      explanation: '2 distinct characters: \'d\' and \'a\'.',
    },
  ],
  hints: [
    'What is the minimum number of characters we can leave? At least one of each distinct character.',
    'We can always reduce to exactly the number of distinct characters — the answer is just `new Set(s).size`.',
    `\`\`\`js
function minimizedStringLength(s) {
  return new Set(s).size;
}\`\`\``,
  ],
  starterCode: {
    javascript: `function minimizedStringLength(s) {
  return new Set(s).size;
}`,
    typescript: `function minimizedStringLength(s: string): number {
  return new Set(s).size;
}`,
    python: `def minimizedStringLength(s: str) -> int:
    return len(set(s))`,
  },
  functionName: 'minimizedStringLength',
  params: ['s'],
  visibleTests: [
    { args: ['aaabc'], expected: 3 },
    { args: ['cbbd'], expected: 3 },
    { args: ['dddaaa'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['abcdef'], expected: 6 },
    { args: ['aaaaaa'], expected: 1 },
    { args: ['aabbcc'], expected: 3 },
    { args: ['abacaba'], expected: 3 },
    { args: ['z'], expected: 1 },
  ],
};
