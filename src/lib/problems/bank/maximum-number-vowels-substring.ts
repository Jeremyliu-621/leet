import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-vowels-substring',
  title: 'Maximum Number of Vowels in a Substring of Given Length',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `Given a string \`s\` and an integer \`k\`, return the **maximum number of vowel letters** in any substring of \`s\` with length \`k\`.

**Vowel letters** in English are \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s` consists of lowercase English letters.',
    '`1 <= k <= s.length`',
  ],
  examples: [
    {
      input: 's = "abciiidef", k = 3',
      output: '3',
      explanation: 'The substring "iii" contains 3 vowel letters.',
    },
    {
      input: 's = "aeiou", k = 2',
      output: '2',
      explanation: 'Any substring of length 2 contains 2 vowels.',
    },
    {
      input: 's = "leetcode", k = 3',
      output: '2',
      explanation: '"lee", "eet", "etc" contain at most 2 vowels.',
    },
  ],
  hints: [
    'Sliding window of size k. Track vowel count; on each slide add the right char and subtract the left char.',
    'Sliding window of size `k`. Count vowels in the initial window, then slide: add new character\'s vowel status, subtract leftmost character\'s. Track the maximum.',
    `\`\`\`js
const v = new Set('aeiou');
let cur = 0, max = 0;
for (let i = 0; i < s.length; i++) {
  if (v.has(s[i])) cur++;
  if (i >= k && v.has(s[i-k])) cur--;
  max = Math.max(max, cur);
}
return max;\`\`\``
  ],
  functionName: 'maxVowels',
  params: ['s', 'k'],
  starterCode: {
    javascript: 'function maxVowels(s, k) {\n  \n}\n',
    python: 'def maxVowels(s, k):\n    pass\n',
  },
  visibleTests: [
    { args: ['abciiidef', 3], expected: 3 },
    { args: ['aeiou', 2], expected: 2 },
    { args: ['leetcode', 3], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 1 },
    { args: ['b', 1], expected: 0 },
    { args: ['rhythms', 2], expected: 0 },
    { args: ['tryhard', 4], expected: 1 },
  ],
};
