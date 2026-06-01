import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-beautiful-indices-in-the-given-array-ii',
  title: 'Find Beautiful Indices in the Given Array II',
  difficulty: 'hard',
  tags: ['strings', 'two-pointers'],
  description: `You are given a 0-indexed string \`s\`, a string \`a\`, a string \`b\`, and an integer \`k\`.

An index \`i\` is **beautiful** if:

- \`0 <= i <= s.length - a.length\`
- \`s[i..i+a.length-1] == a\`
- There exists an index \`j\` such that:
  - \`0 <= j <= s.length - b.length\`
  - \`s[j..j+b.length-1] == b\`
  - \`|i - j| <= k\`

Return the array that contains beautiful indices in **sorted order from smallest to largest**.`,
  constraints: [
    '1 <= k <= s.length <= 5 * 10^5',
    '1 <= a.length, b.length <= 5 * 10^5',
    's, a, and b consist only of lowercase English letters.',
    'a.length + b.length <= s.length',
  ],
  examples: [
    {
      input: 's = "isawsquirrelnearmysquirrelhouseohmy", a = "my", b = "squirrel", k = 15',
      output: '[16, 33]',
      explanation: 'Index 16: "my" starts at 16, "squirrel" starts at 4 (|16-4|=12<=15) or 18 (|16-18|=2<=15). Index 33: "my" starts at 33, "squirrel" starts at 18 (|33-18|=15<=15).',
    },
    {
      input: 's = "abcd", a = "a", b = "a", k = 4',
      output: '[0]',
      explanation: '"a" appears at index 0. For j, "a" also at 0, |0-0|=0<=4.',
    },
  ],
  hints: [
    'Use KMP (Knuth-Morris-Pratt) to find all starting positions of pattern a in s, and all starting positions of b in s.',
    'Sort both lists (they are already in order from left-to-right KMP scan).',
    'Use a two-pointer approach: for each index i in the a-matches list, find if any j in the b-matches list satisfies |i-j| <= k by maintaining a pointer into b-matches.',
  ],
  functionName: 'beautifulIndices',
  params: ['s', 'a', 'b', 'k'],
  starterCode: {
    javascript: `function beautifulIndices(s, a, b, k) {
  const occA = [], occB = [];
  for (let i = 0; i <= s.length - a.length; i++)
    if (s.startsWith(a, i)) occA.push(i);
  for (let j = 0; j <= s.length - b.length; j++)
    if (s.startsWith(b, j)) occB.push(j);
  const result = [];
  let p = 0;
  for (const i of occA) {
    while (p < occB.length && occB[p] < i - k) p++;
    if (p < occB.length && occB[p] <= i + k) result.push(i);
  }
  return result;
}`,
    typescript: `function beautifulIndices(s: string, a: string, b: string, k: number): number[] {
  const occA: number[] = [], occB: number[] = [];
  for (let i = 0; i <= s.length - a.length; i++)
    if (s.startsWith(a, i)) occA.push(i);
  for (let j = 0; j <= s.length - b.length; j++)
    if (s.startsWith(b, j)) occB.push(j);
  const result: number[] = [];
  let p = 0;
  for (const i of occA) {
    while (p < occB.length && occB[p]! < i - k) p++;
    if (p < occB.length && occB[p]! <= i + k) result.push(i);
  }
  return result;
}`,
    python: `def beautifulIndices(s, a, b, k):
    if hasattr(s, 'to_py'): s = s.to_py()
    if hasattr(a, 'to_py'): a = a.to_py()
    if hasattr(b, 'to_py'): b = b.to_py()
    occA = [i for i in range(len(s) - len(a) + 1) if s[i:i+len(a)] == a]
    occB = [j for j in range(len(s) - len(b) + 1) if s[j:j+len(b)] == b]
    result, p = [], 0
    for i in occA:
        while p < len(occB) and occB[p] < i - k: p += 1
        if p < len(occB) and occB[p] <= i + k: result.append(i)
    return result`,
  },
  visibleTests: [
    { args: ['isawsquirrelnearmysquirrelhouseohmy', 'my', 'squirrel', 15], expected: [16, 33] },
    { args: ['abcd', 'a', 'a', 4], expected: [0] },
    { args: ['aaaaaa', 'a', 'a', 1], expected: [0, 1, 2, 3, 4, 5] },
    { args: ['abcabc', 'abc', 'abc', 0], expected: [0, 3] },
    { args: ['abcdef', 'abc', 'xyz', 5], expected: [] },
  ],
  hiddenTests: [
    { args: ['abab', 'ab', 'ab', 1], expected: [0, 2] },
    { args: ['aaaa', 'aa', 'aa', 0], expected: [0, 1, 2] },
    { args: ['abcbca', 'bc', 'bc', 3], expected: [1, 3] },
    { args: ['zzzz', 'z', 'z', 2], expected: [0, 1, 2, 3] },
    { args: ['hello', 'hello', 'hello', 0], expected: [0] },
    { args: ['abcde', 'ab', 'de', 2], expected: [] },
    { args: ['abcde', 'ab', 'de', 3], expected: [0] },
    { args: ['aabaab', 'aa', 'ab', 2], expected: [0, 3] },
  ],
};
