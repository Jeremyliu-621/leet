import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-happy-prefix',
  title: 'Longest Happy Prefix',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `A string is called a **happy prefix** if it is a non-empty prefix of a string that is also a suffix (but not the whole string itself).

Given a string \`s\`, return the **longest happy prefix** of \`s\`. Return an empty string \`""\` if no such prefix exists.

**Approach:** Use the **KMP failure function**. Build the longest proper prefix-suffix (LPS) array. \`lps[n-1]\` gives the length of the longest happy prefix.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 's = "level"',
      output: '"l"',
      explanation: '"l" is both a prefix and suffix of "level".',
    },
    {
      input: 's = "ababab"',
      output: '"abab"',
      explanation: '"abab" is both a prefix and a suffix of "ababab".',
    },
    {
      input: 's = "a"',
      output: '""',
      explanation: 'Single character — no proper prefix-suffix exists.',
    },
  ],
  hints: [
    'Compute the KMP LPS (longest proper prefix-suffix) array for `s`. The last value `lps[n-1]` is the length of the longest happy prefix.',
    '```js\nconst n = s.length;\nconst lps = Array(n).fill(0);\nlet len = 0, i = 1;\nwhile (i < n) {\n  if (s[i] === s[len]) { lps[i++] = ++len; }\n  else if (len) { len = lps[len-1]; }\n  else { lps[i++] = 0; }\n}\nreturn s.slice(0, lps[n-1]);\n```',
  ],
  functionName: 'longestPrefix',
  params: ['s'],
  starterCode: {
    javascript: `function longestPrefix(s) {
  // return the longest happy prefix (also a suffix) of s

}`,
    python: `def longestPrefix(s: str) -> str:
    # return the longest happy prefix (also a suffix) of s
    pass
`,
  },
  visibleTests: [
    { args: ['level'], expected: 'l' },
    { args: ['ababab'], expected: 'abab' },
    { args: ['a'], expected: '' },
  ],
  hiddenTests: [
    { args: ['aabaa'], expected: 'aa' },
    { args: ['ab'], expected: '' },
    { args: ['aaaa'], expected: 'aaa' },
    { args: ['abcabc'], expected: 'abc' },
    { args: ['abcab'], expected: 'ab' },
  ],
};
