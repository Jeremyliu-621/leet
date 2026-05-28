import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-special-characters-ii',
  title: 'Count the Number of Special Characters II',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`word\`. A letter \`c\` is called **special** if it appears **both** in lowercase and uppercase in \`word\`, and **every** lowercase occurrence of \`c\` appears **before** every uppercase occurrence of \`c\` in \`word\`.

Return the number of **special** letters in \`word\`.`,
  constraints: [
    '`1 <= word.length <= 10^5`',
    '`word` consists only of lowercase and uppercase English letters.',
  ],
  examples: [
    {
      input: 'word = "aaAbcBC"',
      output: '3',
      explanation: 'a (last lowercase at 1, first uppercase at 2 ✓), b (last at 3, first B at 4 ✓), c (last at 4, first C at 5 ✓).',
    },
    {
      input: 'word = "abc"',
      output: '0',
      explanation: 'No uppercase letters exist.',
    },
    {
      input: 'word = "abBCab"',
      output: '0',
      explanation: 'b has last lowercase at index 4, but first uppercase B is at index 2 — violates ordering. a never appears uppercase.',
    },
  ],
  hints: [
    'Record the last index of each lowercase character and the first index of each uppercase character.',
    'A character c is special iff both exist and `lastLower[c] < firstUpper[c]`.',
    `\`\`\`js
function numberOfSpecialChars(word) {
  const lastLower = new Map(), firstUpper = new Map();
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    if (c === c.toLowerCase()) lastLower.set(c, i);
    else if (!firstUpper.has(c.toLowerCase())) firstUpper.set(c.toLowerCase(), i);
  }
  let count = 0;
  for (const [c, lIdx] of lastLower) {
    const uIdx = firstUpper.get(c);
    if (uIdx !== undefined && lIdx < uIdx) count++;
  }
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
    { args: ['abBCab'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['aAbBcC'], expected: 3 },
    { args: ['AaBbCc'], expected: 0 },
    { args: ['aA'], expected: 1 },
    { args: ['Aa'], expected: 0 },
    { args: ['aAbB'], expected: 2 },
    { args: ['abAB'], expected: 2 },
  ],
};
