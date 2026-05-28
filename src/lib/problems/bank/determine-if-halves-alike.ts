import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-if-halves-alike',
  title: 'Determine if String Halves Are Alike',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`s\` of even length. Split this string into two halves of equal lengths, and let \`a\` be the first half and \`b\` be the second half.

Two strings are **alike** if they have the same number of vowels (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`, \`'A'\`, \`'E'\`, \`'I'\`, \`'O'\`, \`'U'\`). Notice that \`s\` contains uppercase and lowercase letters.

Return \`true\` if \`a\` and \`b\` are **alike**. Otherwise, return \`false\`.`,
  constraints: [
    '2 <= s.length <= 1000',
    's.length is even',
    's consists of uppercase and lowercase letters',
  ],
  examples: [
    { input: 's = "book"', output: 'true', explanation: 'a = "bo" and b = "ok". a has 1 vowel (o) and b has 1 vowel (o). So they are alike.' },
    { input: 's = "textbook"', output: 'false', explanation: 'a = "text" and b = "book". a has 1 vowel (e) and b has 2 vowels (o, o). So they are not alike.' },
  ],
  hints: [
    'Count vowels in the first half and second half separately. Compare the counts.',
    "Define a vowel set ('aeiouAEIOU'). Slice s into two halves, then filter-count characters in the vowel set for each half.",
    "const v='aeiouAEIOU',h=s.length/2;const c=(t:string)=>[...t].filter(c=>v.includes(c)).length;return c(s.slice(0,h))===c(s.slice(h));",
  ],
  functionName: 'halvesAreAlike',
  params: ['s'],
  starterCode: {
    javascript: 'function halvesAreAlike(s) {\n  \n}\n',
    python: 'def halvesAreAlike(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['book'], expected: true },
    { args: ['textbook'], expected: false },
    { args: ['AbCdEfGh'], expected: true },
  ],
  hiddenTests: [
    { args: ['aa'], expected: true },
    { args: ['ab'], expected: false },
    { args: ['aeiouAEIOU'], expected: true },
    { args: ['bcdfghjklm'], expected: true },
    { args: ['aAbB'], expected: false },
  ],
};
