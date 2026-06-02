import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-vowel-strings-in-range',
  title: 'Count Vowel Strings in Range',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `You are given a **0-indexed** array of string \`words\` and two integers \`left\` and \`right\`.

A string is called a **vowel string** if it starts with a vowel character and ends with a vowel character where vowel characters are \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`.

Return the number of vowel strings \`words[i]\` where \`i\` belongs to the inclusive range \`[left, right]\`.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length <= 10',
    'words[i] consists only of lowercase English letters.',
    '0 <= left <= right < words.length',
  ],
  examples: [
    { input: 'words = ["are","amy","u"], left = 0, right = 2', output: '2', explanation: '"are" starts/ends with vowel; "u" starts/ends with vowel; "amy" ends with \'y\' (not vowel). Result: 2.' },
    { input: 'words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4', output: '3', explanation: '"aeo", "ooo", "artro" are vowel strings in range [1,4].' },
  ],
  hints: [
    'Iterate from left to right (inclusive). Check if words[i][0] and words[i][last] are both vowels.',
    'A word qualifies if its first AND last character are vowels. Check the words in the `[l, r]` range for each query.',
    `\`\`\`js
const v = new Set('aeiou');
const check = w => v.has(w[0]) && v.has(w[w.length-1]);
return queries.map(([l, r]) => words.slice(l, r+1).filter(check).length);\`\`\``
  ],
  functionName: 'vowelStringsInRange',
  params: ['words', 'left', 'right'],
  starterCode: {
    javascript: `function vowelStringsInRange(words, left, right) {
  const v = new Set('aeiou');
  let count = 0;
  for (let i = left; i <= right; i++) {
    const w = words[i];
    if (v.has(w[0]) && v.has(w[w.length - 1])) count++;
  }
  return count;
}`,
    typescript: `function vowelStringsInRange(words: string[], left: number, right: number): number {
  const v = new Set('aeiou');
  let count = 0;
  for (let i = left; i <= right; i++) {
    const w = words[i]!;
    if (v.has(w[0]!) && v.has(w[w.length - 1]!)) count++;
  }
  return count;
}`,
    python: `def vowelStringsInRange(words, left, right):
    v = set('aeiou')
    return sum(1 for w in words[left:right+1] if w[0] in v and w[-1] in v)`,
  },
  visibleTests: [
    { args: [['are','amy','u'], 0, 2], expected: 2 },
    { args: [['hey','aeo','mu','ooo','artro'], 1, 4], expected: 3 },
    { args: [['a','e','i','o','u'], 0, 4], expected: 5 },
  ],
  hiddenTests: [
    { args: [['abc','def'], 0, 1], expected: 0 },
    { args: [['aba','ebe','ixi'], 0, 2], expected: 3 },
    { args: [['are','amy','u'], 1, 2], expected: 1 },
    { args: [['a','b','c'], 0, 0], expected: 1 },
    { args: [['end','own','ask'], 0, 2], expected: 0 },
  ],
};
