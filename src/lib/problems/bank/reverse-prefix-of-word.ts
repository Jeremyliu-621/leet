import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-prefix-of-word',
  title: 'Reverse Prefix of Word',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `Given a **0-indexed** string \`word\` and a character \`ch\`, reverse the segment of \`word\` that starts at index \`0\` and ends at the index of the **first occurrence** of \`ch\` (inclusive). If the character \`ch\` does not exist in \`word\`, do nothing.

Return the resulting string.`,
  constraints: [
    '1 <= word.length <= 250',
    'word consists of lowercase English letters.',
    'ch is a lowercase English letter.',
  ],
  examples: [
    { input: 'word = "abcdefd", ch = "d"', output: '"dcbaefd"', explanation: 'First "d" is at index 3. Reverse word[0..3] = "abcd" → "dcba", append "efd".' },
    { input: 'word = "xyxzxe", ch = "z"', output: '"zxyxxe"', explanation: 'First "z" is at index 3. Reverse word[0..3] = "xyxz" → "zxyx", append "xe".' },
  ],
  hints: [
    'Find the first index of ch. Reverse the substring from 0 to that index, then concatenate the rest.',
    'Find the first occurrence of `ch` in `word`. Reverse the substring from index 0 to that index (inclusive).',
    `\`\`\`js
const i = word.indexOf(ch);
if (i === -1) return word;
return word.slice(0, i+1).split('').reverse().join('') + word.slice(i+1);\`\`\``
  ],
  functionName: 'reversePrefix',
  params: ['word', 'ch'],
  starterCode: {
    javascript: 'function reversePrefix(word, ch) {\n  \n}\n',
    typescript: "function reversePrefix(word: string, ch: string): string {\n  \n}",

    python: 'def reversePrefix(word, ch):\n    pass\n',
  },
  visibleTests: [
    { args: ['abcdefd', 'd'], expected: 'dcbaefd' },
    { args: ['xyxzxe', 'z'], expected: 'zxyxxe' },
    { args: ['abcd', 'z'], expected: 'abcd' },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 'a' },
    { args: ['hello', 'e'], expected: 'ehllo' },
    { args: ['hello', 'l'], expected: 'lehlo' },
    { args: ['abcabc', 'c'], expected: 'cbaabc' },
  ],
};
