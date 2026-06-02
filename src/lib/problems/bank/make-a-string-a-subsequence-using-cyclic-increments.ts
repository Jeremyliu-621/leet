import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-a-string-a-subsequence-using-cyclic-increments',
  title: 'Make a String a Subsequence Using Cyclic Increments',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `You are given two **0-indexed** strings \`str1\` and \`str2\`.

In one operation, you can choose any **index set** \`S\` from \`str1\`, and for each index \`i ∈ S\`, increment \`str1[i]\` to the **next** character cyclically (\`'a' → 'b'\`, ..., \`'z' → 'a'\`). The operation is applied **at most once** (on all indices in \`S\` simultaneously).

Return \`true\` if it is possible to make \`str2\` a **subsequence** of the resulting \`str1\` by performing the operation at most once, or \`false\` otherwise.

A string \`t\` is a **subsequence** of a string \`s\` if \`t\` can be obtained from \`s\` by deleting some (possibly zero) characters without rearranging the remaining characters.`,
  constraints: [
    '1 <= str1.length <= 10^5',
    '1 <= str2.length <= 10^5',
    'str1 and str2 consist of only lowercase English letters',
  ],
  examples: [
    {
      input: 'str1 = "abc", str2 = "ad"',
      output: 'true',
      explanation: '"a" matches "a" directly. Increment str1[2] from "c" to "d" and match "d". So "ad" is a subsequence of "abd". Answer: true.',
    },
    {
      input: 'str1 = "zc", str2 = "ad"',
      output: 'true',
      explanation: 'Increment str1[0] from "z" to "a" and str1[1] from "c" to "d". "ad" is a subsequence of "ad". Answer: true.',
    },
    {
      input: 'str1 = "ab", str2 = "d"',
      output: 'false',
      explanation: '"a" increments to "b" and "b" increments to "c". Neither can become "d". Answer: false.',
    },
  ],
  hints: [
    'Level 1: Since you can increment any subset of characters simultaneously, you can independently choose to increment or not increment each character in str1. The operation does not impose a "budget" — any combination is allowed.',
    'Level 2: Use a greedy two-pointer approach: advance through str1 trying to match str2. At position i in str1 and j in str2, it\'s a match if str1[i] == str2[j] (direct) or cyclic(str1[i]) == str2[j] (incremented). Advance both on match, only i otherwise.',
    'Level 3: Two-pointer O(n+m): i=0, j=0. While i < str1.length and j < str2.length: if str1[i] == str2[j] or (str1[i].charCodeAt(0)-96)%26 == str2[j].charCodeAt(0)-97, increment j. Always increment i. Return j == str2.length.',
  ],
  functionName: 'canMakeSubsequence',
  params: ['str1', 'str2'],
  starterCode: {
    javascript: `function canMakeSubsequence(str1, str2) {
  let j = 0;
  for (let i = 0; i < str1.length && j < str2.length; i++) {
    const c1 = str1.charCodeAt(i) - 97, c2 = str2.charCodeAt(j) - 97;
    if (c1 === c2 || (c1 + 1) % 26 === c2) j++;
  }
  return j === str2.length;
}`,
    typescript: `function canMakeSubsequence(str1: string, str2: string): boolean {
  let j = 0;
  for (let i = 0; i < str1.length && j < str2.length; i++) {
    const c1 = str1.charCodeAt(i) - 97, c2 = str2.charCodeAt(j) - 97;
    if (c1 === c2 || (c1 + 1) % 26 === c2) j++;
  }
  return j === str2.length;
}`,
    python: `def canMakeSubsequence(str1, str2):
    j = 0
    for c1 in str1:
        if j < len(str2):
            c2 = str2[j]
            if c1 == c2 or (ord(c1) - 96) % 26 == ord(c2) - 97:
                j += 1
    return j == len(str2)`,
  },
  visibleTests: [
    { args: ['abc', 'ad'], expected: true },
    { args: ['zc', 'ad'], expected: true },
    { args: ['ab', 'd'], expected: false },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: true },
    { args: ['z', 'a'], expected: true },
    { args: ['z', 'b'], expected: false },
    { args: ['aab', 'bba'], expected: false },
    { args: ['abcd', 'abf'], expected: false },
    { args: ['xyz', 'yza'], expected: true },
    { args: ['abc', 'abc'], expected: true },
  ],
};
