import type { Problem } from '../types';

export const problem: Problem = {
  id: 'total-appeal-of-a-string',
  title: 'Total Appeal of A String',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `The **appeal** of a string is the number of **distinct** characters found in the string.

- For example, the appeal of \`"abbca"\` is \`3\` because it has \`3\` distinct characters: \`'a'\`, \`'b'\`, and \`'c'\`.

Given a string \`s\`, return the **total appeal of all of its substrings**.

A substring is a contiguous sequence of characters within a string.`,
  constraints: ['`1 <= s.length <= 10^5`', '`s` consists of lowercase English letters.'],
  examples: [
    {
      input: 's = "abbca"',
      output: '28',
      explanation:
        'The following are the substrings of "abbca" and their appeals:\n- "a" has appeal 1. "b" 1. "b" 1. "c" 1. "a" 1.\n- "ab" 2. "bb" 1. "bc" 2. "ca" 2.\n- "abb" 2. "bbc" 2. "bca" 3.\n- "abbc" 3. "bbca" 3.\n- "abbca" 3.\nTotal = 28.',
    },
    {
      input: 's = "code"',
      output: '20',
      explanation:
        'All characters are distinct. For length k, each substring contributes min(k, distinct chars). Every substring of "code" has all distinct chars. Total = 4+3+2+1 + 3+2+1 + 2+1 + 1 = 20.',
    },
  ],
  hints: [
    'Instead of summing appeal of each substring directly, count the **contribution** of each character at position `i`. Character `s[i]` contributes 1 to the appeal of a substring `s[l..r]` if and only if it is the **last** (rightmost) occurrence of `s[i]` in that substring.',
    'For index `i`, let `p = last[s[i]]` be the index of the previous occurrence of `s[i]` (or -1 if none). Character `s[i]` contributes to substrings whose left endpoint is in `(p, i]` and right endpoint is in `[i, n-1]`. That is `(i - p) * (n - i)` substrings.',
    '```js\nfunction appealSum(s) {\n  const n = s.length;\n  const last = {};\n  let total = 0, cur = 0;\n  for (let i = 0; i < n; i++) {\n    const c = s[i];\n    // cur = total appeal of all substrings ending at i\n    cur += i - (last[c] ?? -1);\n    last[c] = i;\n    total += cur;\n  }\n  return total;\n}\n```',
  ],
  functionName: 'appealSum',
  params: ['s'],
  starterCode: {
    javascript: `function appealSum(s) {

}`,
    typescript: "function appealSum(s: string): number {\n\n}",

    python: `def appealSum(s: str) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['abbca'], expected: 28 },
    { args: ['code'], expected: 20 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['ab'], expected: 4 },
    { args: ['aaa'], expected: 6 },
    { args: ['abcde'], expected: 35 },
    { args: ['zz'], expected: 3 },
  ],
};
