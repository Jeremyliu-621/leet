import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-vowel-strings-in-range',
  title: 'Count the Number of Vowel Strings in Range',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `You are given a **0-indexed** array of string \`words\` and two integers \`left\` and \`right\`.

A string is called a **vowel string** if it starts with a vowel character and ends with a vowel character where vowel characters are \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`.

Return the number of vowel strings \`words[i]\` where \`i\` belongs to the inclusive range \`[left, right]\`.`,
  constraints: [
    '`1 <= words.length <= 1000`',
    '`1 <= words[i].length <= 10`',
    '`words[i]\` consists only of lowercase English letters.',
    '`0 <= left <= right < words.length`',
  ],
  examples: [
    {
      input: 'words = ["are","amy","u"], left = 0, right = 2',
      output: '2',
      explanation: '"are" starts with \'a\' and ends with \'e\'. "u" starts and ends with \'u\'. "amy" ends with \'y\' which is not a vowel.',
    },
    {
      input: 'words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4',
      output: '3',
      explanation: '"aeo", "ooo", and "artro" are vowel strings in the range [1, 4].',
    },
  ],
  hints: [
    'Iterate from `left` to `right` and check each word\'s first and last character.',
    'A single character word like "a" is a vowel string because it both starts and ends with a vowel.',
    '```js\nfunction vowelStrings(words, left, right) {\n  const vowels = new Set([\'a\',\'e\',\'i\',\'o\',\'u\']);\n  let count = 0;\n  for (let i = left; i <= right; i++) {\n    const w = words[i];\n    if (vowels.has(w[0]) && vowels.has(w[w.length - 1])) count++;\n  }\n  return count;\n}\n```',
  ],
  functionName: 'vowelStrings',
  params: ['words', 'left', 'right'],
  starterCode: {
    javascript: `function vowelStrings(words, left, right) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;
  for (let i = left; i <= right; i++) {
    const w = words[i];
    if (vowels.has(w[0]) && vowels.has(w[w.length - 1])) count++;
  }
  return count;
}`,
    typescript: `function vowelStrings(words: string[], left: number, right: number): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;
  for (let i = left; i <= right; i++) {
    const w = words[i]!;
    if (vowels.has(w[0]!) && vowels.has(w[w.length - 1]!)) count++;
  }
  return count;
}`,
    python: `def vowelStrings(words, left, right):
    vowels = set('aeiou')
    return sum(1 for i in range(left, right + 1) if words[i][0] in vowels and words[i][-1] in vowels)`,
  },
  visibleTests: [
    { args: [['are', 'amy', 'u'], 0, 2], expected: 2 },
    { args: [['hey', 'aeo', 'mu', 'ooo', 'artro'], 1, 4], expected: 3 },
  ],
  hiddenTests: [
    { args: [['e'], 0, 0], expected: 1 },
    { args: [['apple', 'cat', 'idea'], 0, 2], expected: 2 },
    { args: [['a', 'b', 'c', 'e'], 0, 3], expected: 2 },
    { args: [['area', 'eye', 'emu'], 0, 2], expected: 3 },
  ],
};
