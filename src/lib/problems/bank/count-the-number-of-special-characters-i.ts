import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-special-characters-i',
  title: 'Count the Number of Special Characters I',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`word\`. A letter is called **special** if it appears **both** in lowercase and uppercase in \`word\`.

Return the number of **special** letters in \`word\`.`,
  constraints: [
    '`1 <= word.length <= 50`',
    '`word` consists of only lowercase and uppercase English letters.',
  ],
  examples: [
    {
      input: 'word = "aaAbcBC"',
      output: '3',
      explanation: 'The special letters are a, b, and c since each appears in both cases.',
    },
    {
      input: 'word = "abc"',
      output: '0',
      explanation: 'No letter appears in uppercase.',
    },
    {
      input: 'word = "abBCab"',
      output: '1',
      explanation: 'Only b is special (appears as b and B). a and c are not (c has no lowercase, a has no uppercase).',
    },
  ],
  hints: [
    'Collect all lowercase characters in one set and all uppercase (lowercased) in another.',
    'The count is the size of the intersection of the two sets.',
    `\`\`\`js
function numberOfSpecialChars(word) {
  const lower = new Set(), upper = new Set();
  for (const c of word) {
    if (c === c.toLowerCase()) lower.add(c);
    else upper.add(c.toLowerCase());
  }
  let count = 0;
  for (const c of lower) if (upper.has(c)) count++;
  return count;
}\`\`\``,
  ],
  functionName: 'numberOfSpecialChars',
  params: ['word'],
  starterCode: {
    javascript: `function numberOfSpecialChars(word) {

}`,
    typescript: 'function numberOfSpecialChars(word: string): number {\n\n}',
    python: `def numberOfSpecialChars(word):
    pass`,
  },
  visibleTests: [
    { args: ['aaAbcBC'], expected: 3 },
    { args: ['abc'], expected: 0 },
    { args: ['abBCab'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['aAbBcC'], expected: 3 },
    { args: ['z'], expected: 0 },
    { args: ['ZzYy'], expected: 2 },
    { args: ['aAbB'], expected: 2 },
    { args: ['AaBbCcDd'], expected: 4 },
    { args: ['abcdefghij'], expected: 0 },
  ],
};
