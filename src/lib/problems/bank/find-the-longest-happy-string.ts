import type { Problem } from '../types';

const TS_PREAMBLE = `
function longestDiverseStringChecker(a: number, b: number, c: number): number {
  const s = longestDiverseString(a, b, c);
  if (typeof s !== 'string') return -1;
  for (let i = 0; i + 2 < s.length; i++) {
    if (s[i] === s[i + 1] && s[i + 1] === s[i + 2]) return -1;
  }
  let ca = 0, cb = 0, cc = 0;
  for (const ch of s) {
    if (ch === 'a') ca++;
    else if (ch === 'b') cb++;
    else if (ch === 'c') cc++;
    else return -1;
  }
  if (ca > a || cb > b || cc > c) return -1;
  return s.length;
}
`.trim();

const JS_PREAMBLE = `
function longestDiverseStringChecker(a, b, c) {
  const s = longestDiverseString(a, b, c);
  if (typeof s !== 'string') return -1;
  for (let i = 0; i + 2 < s.length; i++) {
    if (s[i] === s[i + 1] && s[i + 1] === s[i + 2]) return -1;
  }
  let ca = 0, cb = 0, cc = 0;
  for (const ch of s) {
    if (ch === 'a') ca++;
    else if (ch === 'b') cb++;
    else if (ch === 'c') cc++;
    else return -1;
  }
  if (ca > a || cb > b || cc > c) return -1;
  return s.length;
}
`.trim();

const PY_PREAMBLE = `
def longestDiverseStringChecker(a, b, c):
    s = longestDiverseString(a, b, c)
    if not isinstance(s, str):
        return -1
    for i in range(len(s) - 2):
        if s[i] == s[i + 1] == s[i + 2]:
            return -1
    ca, cb, cc = s.count('a'), s.count('b'), s.count('c')
    if ca > a or cb > b or cc > c:
        return -1
    if ca + cb + cc != len(s):
        return -1
    return len(s)
`.trim();

export const problem: Problem = {
  id: 'find-the-longest-happy-string',
  title: 'Find the Longest Happy String',
  difficulty: 'medium',
  tags: ['heap', 'arrays'],
  description: `A string \`s\` is called **happy** if it satisfies the following conditions:

- \`s\` only contains the letters \`'a'\`, \`'b'\`, and \`'c'\`.
- \`s\` does not contain \`"aaa"\`, \`"bbb"\`, or \`"ccc"\` as a substring.
- \`s\` contains **at most** \`a\` occurrences of the letter \`'a'\`.
- \`s\` contains **at most** \`b\` occurrences of the letter \`'b'\`.
- \`s\` contains **at most** \`c\` occurrences of the letter \`'c'\`.

Given three integers \`a\`, \`b\`, and \`c\`, return *the longest possible happy string*. If there are multiple longest happy strings, return *any of them*. If there is no such string, return the empty string \`""\`.

> **Note:** A \`longestDiverseStringChecker\` wrapper is pre-defined. Implement \`longestDiverseString(a, b, c)\`.
> The checker returns the **length** of your string if it is valid, or **-1** if it violates the constraints. Tests pass the expected **maximum possible length**.`,
  constraints: ['0 <= a, b, c <= 100', 'a + b + c > 0'],
  examples: [
    {
      input: 'a = 1, b = 1, c = 7',
      output: '"ccaccbcc"',
      explanation:
        'One of several valid answers. Any valid happy string of length 9 is accepted.',
    },
    {
      input: 'a = 7, b = 1, c = 0',
      output: '"aabaa"',
      explanation: 'Only 4 "a"s can be used, giving max length 5.',
    },
    {
      input: 'a = 7, b = 1, c = 1',
      output: '"aabaaaca" or similar',
      explanation: 'Max length is 8.',
    },
  ],
  hints: [
    'Greedily pick the character with the highest remaining count that would not create three consecutive same characters.',
    'Keep counts sorted — maintain a list of [count, char] pairs and always pick the largest. If the largest would create "aaa"/"bbb"/"ccc", try the second largest instead.',
    'If even the second largest cannot be placed (because the most frequent needs to go next but would violate the rule and there is no alternative), stop.',
  ],
  functionName: 'longestDiverseStringChecker',
  params: ['a', 'b', 'c'],
  preamble: { javascript: JS_PREAMBLE, typescript: TS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: 'function longestDiverseString(a, b, c) {\n\n}\n',
    typescript: 'function longestDiverseString(a: number, b: number, c: number): string {\n\n}\n',
    python: 'def longestDiverseString(a, b, c):\n    pass\n',
  },
  visibleTests: [
    { args: [1, 1, 0], expected: 2 },
    { args: [7, 1, 0], expected: 5 },
    { args: [7, 1, 1], expected: 8 },
  ],
  hiddenTests: [
    { args: [1, 0, 0], expected: 1 },
    { args: [3, 0, 0], expected: 2 },
    { args: [1, 1, 1], expected: 3 },
    { args: [7, 7, 0], expected: 14 },
    { args: [7, 7, 7], expected: 21 },
    { args: [0, 0, 1], expected: 1 },
    { args: [1, 1, 7], expected: 8 },
  ],
};
