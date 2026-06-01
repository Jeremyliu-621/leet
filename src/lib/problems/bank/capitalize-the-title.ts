import type { Problem } from '../types';

export const problem: Problem = {
  id: 'capitalize-the-title',
  title: 'Capitalize the Title',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`title\` consisting of one or more words separated by a single space, where each word consists of English letters. **Capitalize** the string by changing the capitalization of each word such that:

- If the length of the word is \`1\` or \`2\` letters, change all letters to **lowercase**.
- Otherwise, change the first letter to **uppercase** and the remaining letters to **lowercase**.

Return the **capitalized** \`title\`.`,
  constraints: [
    '1 <= title.length <= 100',
    'title consists of words separated by a single space without any leading or trailing spaces.',
    'Each word consists of uppercase and lowercase English letters and is non-empty.',
  ],
  examples: [
    {
      input: 'title = "capiTalIze tHe titLe"',
      output: '"Capitalize The Title"',
      explanation: 'Each word has length >= 3, so capitalize the first letter and lowercase the rest.',
    },
    {
      input: 'title = "First lEttEr of EACH Word"',
      output: '"First Letter of Each Word"',
      explanation: '"of" has 2 letters → "of". Others have length >= 3.',
    },
    {
      input: 'title = "i lOve leetcode"',
      output: '"i Love Leetcode"',
      explanation: '"i" has 1 letter → "i". "lOve" → "Love". "leetcode" → "Leetcode".',
    },
  ],
  hints: [
    'Split by spaces, then process each word based on its length.',
    'Join back with spaces.',
    `\`\`\`js
function capitalizeTitle(title) {
  return title.split(" ").map(w =>
    w.length <= 2 ? w.toLowerCase()
                  : w[0].toUpperCase() + w.slice(1).toLowerCase()
  ).join(" ");
}\`\`\``,
  ],
  functionName: 'capitalizeTitle',
  params: ['title'],
  starterCode: {
    javascript: `function capitalizeTitle(title) {
  return title.split(' ').map(w =>
    w.length <= 2 ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1).toLowerCase()
  ).join(' ');
}`,
    typescript: `function capitalizeTitle(title: string): string {
  return title.split(' ').map(w =>
    w.length <= 2 ? w.toLowerCase() : w[0]!.toUpperCase() + w.slice(1).toLowerCase()
  ).join(' ');
}`,
    python: `def capitalizeTitle(title):
    return ' '.join(w.lower() if len(w) <= 2 else w.capitalize() for w in title.split())`,
  },
  visibleTests: [
    { args: ['capiTalIze tHe titLe'], expected: 'Capitalize The Title' },
    { args: ['First lEttEr of EACH Word'], expected: 'First Letter of Each Word' },
    { args: ['i lOve leetcode'], expected: 'i Love Leetcode' },
  ],
  hiddenTests: [
    { args: ['to be or not to be'], expected: 'to be or Not to be' },
    { args: ['HELLO WORLD'], expected: 'Hello World' },
    { args: ['a bb ccc dddd'], expected: 'a bb Ccc Dddd' },
    { args: ['leetcode'], expected: 'Leetcode' },
  ],
};
