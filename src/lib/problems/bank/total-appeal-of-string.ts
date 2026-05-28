import type { Problem } from '../types';

export const problem: Problem = {
  id: 'total-appeal-of-string',
  title: 'Total Appeal of A String',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `The **appeal** of a string is the number of **distinct** characters found in the string.

- For example, the appeal of \`"abbca"\` is \`3\` because it has \`3\` distinct characters: \`'a'\`, \`'b'\`, and \`'c'\`.

Given a string \`s\`, return the **total appeal of all of its substrings**.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abbca"',
      output: '28',
      explanation: 'The following are the substrings of "abbca" and their appeals: "a"→1, "ab"→2, "abb"→2, "abbc"→3, "abbca"→3, "b"→1, "bb"→1, "bbc"→2, "bbca"→3, "b"→1, "bc"→2, "bca"→3, "c"→1, "ca"→2, "a"→1. Total = 28.',
    },
    {
      input: 's = "code"',
      output: '20',
      explanation: '"c"(1)+"o"(1)+"d"(1)+"e"(1)+"co"(2)+"od"(2)+"de"(2)+"cod"(3)+"ode"(3)+"code"(4)=20.',
    },
  ],
  hints: [
    'Level 1: Let dp[i] = total appeal of all substrings ending at index i. The key insight: when character s[i] appears, it contributes to all substrings ending at i where it was not seen before.',
    'Level 2: Track last[c] = last index where character c appeared (-1 if not seen). For each position i: dp[i] = dp[i-1] + (i - last[s[i]]). This adds 1 for each new subarray ending at i where s[i] is novel.',
    'Level 3: const last=new Map();let dp=0,ans=0;for(let i=0;i<s.length;i++){dp+=(i-(last.get(s[i])??-1));ans+=dp;last.set(s[i],i);}return ans;',
  ],
  functionName: 'appealSum',
  params: ['s'],
  starterCode: {
    javascript: 'function appealSum(s) {\n  // your code here\n}\n',
    typescript: "function appealSum(s: string): number {\n  // your code here\n}",

    python: 'def appealSum(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['abbca'], expected: 28 },
    { args: ['code'], expected: 20 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['ab'], expected: 4 },
    { args: ['aab'], expected: 8 },
    { args: ['abc'], expected: 10 },
    { args: ['aaa'], expected: 6 },
  ],
};
