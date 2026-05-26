import type { Problem } from '../types';

export const problem: Problem = {
  id: 'detect-capital',
  title: 'Detect Capital',
  difficulty: 'easy',
  tags: ['strings'],
  description: `We define the usage of capitals in a word to be right when one of the following cases holds:

- All letters in this word are capitals, like \`"USA"\`.
- All letters in this word are not capitals, like \`"leetcode"\`.
- Only the first letter in this word is capital, like \`"Google"\`.

Given a string \`word\`, return \`true\` if the usage of capitals in it is right.`,
  constraints: [
    '1 <= word.length <= 100',
    'word consists of lowercase and uppercase English letters',
  ],
  examples: [
    { input: 'word = "USA"', output: 'true' },
    { input: 'word = "FlaG"', output: 'false' },
    { input: 'word = "leetcode"', output: 'true' },
  ],
  hints: [
    'Check if all characters are uppercase, all are lowercase, or only the first is uppercase.',
    'Count the number of uppercase letters. Valid if count == word.length (all caps), count == 0 (no caps), or count == 1 and the first letter is uppercase.',
    `\`\`\`js
function detectCapitalUse(word) {
  return word === word.toUpperCase() ||
         word === word.toLowerCase() ||
         word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase();
}\`\`\``,
  ],
  functionName: 'detectCapitalUse',
  params: ['word'],
  starterCode: {
    javascript: 'function detectCapitalUse(word) {\n  \n}\n',
    python: 'def detectCapitalUse(word):\n    pass\n',
  },
  visibleTests: [
    { args: ['USA'], expected: true },
    { args: ['FlaG'], expected: false },
    { args: ['leetcode'], expected: true },
  ],
  hiddenTests: [
    { args: ['Google'], expected: true },
    { args: ['A'], expected: true },
    { args: ['mL'], expected: false },
    { args: ['ALL'], expected: true },
  ],
};
