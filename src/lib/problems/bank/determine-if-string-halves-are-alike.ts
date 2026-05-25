import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-if-string-halves-are-alike',
  title: 'Determine if String Halves Are Alike',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`s\` of **even** length. Split this string into two halves of equal lengths, and let \`a\` be the first half and \`b\` be the second half.

Two strings are **alike** if they have the same number of vowels (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`, \`'A'\`, \`'E'\`, \`'I'\`, \`'O'\`, \`'U'\`). Notice that \`s\` contains uppercase and lowercase letters.

Return \`true\` *if* \`a\` *and* \`b\` *are **alike***. Otherwise, return \`false\`.

**Approach:** Count vowels in the first half and second half; return true if equal.`,
  constraints: [
    '2 <= s.length <= 1000',
    's.length is even.',
    's consists of uppercase and lowercase letters.',
  ],
  examples: [
    {
      input: 's = "book"',
      output: 'true',
      explanation: 'a = "bo", b = "ok". Both have 1 vowel.',
    },
    {
      input: 's = "textbook"',
      output: 'false',
      explanation: 'a = "text" (1 vowel), b = "book" (2 vowels). Not alike.',
    },
  ],
  hints: [
    'Count vowels in s[0..n/2-1] and s[n/2..n-1]. Return whether counts are equal.',
    '```js\nfunction halvesAreAlike(s) {\n  const v = new Set("aeiouAEIOU");\n  const count = c => [...c].filter(x => v.has(x)).length;\n  const h = s.length >> 1;\n  return count(s.slice(0, h)) === count(s.slice(h));\n}\n```',
  ],
  functionName: 'halvesAreAlike',
  params: ['s'],
  starterCode: {
    javascript: `function halvesAreAlike(s) {
  // return true if both halves have equal vowel counts

}`,
    python: `def halvesAreAlike(s: str) -> bool:
    # return true if both halves have equal vowel counts
    pass
`,
  },
  visibleTests: [
    { args: ['book'], expected: true },
    { args: ['textbook'], expected: false },
  ],
  hiddenTests: [
    { args: ['aa'], expected: true },
    { args: ['ab'], expected: false },
    { args: ['AbCd'], expected: false },
    { args: ['AbCbAa'], expected: false },
    { args: ['MerryChristmas'], expected: false },
    { args: ['AbBa'], expected: true },
  ],
};
