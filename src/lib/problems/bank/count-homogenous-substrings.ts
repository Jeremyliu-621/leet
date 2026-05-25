import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-homogenous-substrings',
  title: 'Count Number of Homogenous Substrings',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given a string \`s\`, return the number of **homogenous** substrings of \`s\`. Since the answer may be too large, return it **modulo** \`10^9 + 7\`.

A string is **homogenous** if all the characters of the string are the same.

A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase letters.',
  ],
  examples: [
    {
      input: 's = "abbcccaa"',
      output: '13',
      explanation: 'Runs: a(1)→1, b(2)→3, c(3)→6, a(2)→3. Total: 1+3+6+3=13.',
    },
    {
      input: 's = "xy"',
      output: '2',
    },
    {
      input: 's = "zzzzz"',
      output: '15',
    },
  ],
  hints: [
    'Level 1: Group consecutive identical characters into runs.',
    'Level 2: A run of length k contributes k*(k+1)/2 homogeneous substrings.',
    'Level 3: const MOD=1e9+7;let ans=0,cnt=1;for(let i=1;i<=s.length;i++){if(i<s.length&&s[i]===s[i-1])cnt++;else{ans=(ans+cnt*(cnt+1)/2)%MOD;cnt=1;}}return ans;',
  ],
  functionName: 'countHomogenous',
  params: ['s'],
  starterCode: {
    javascript: 'function countHomogenous(s) {\n  // your code here\n}\n',
    python: 'def countHomogenous(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['abbcccaa'], expected: 13 },
    { args: ['xy'], expected: 2 },
    { args: ['zzzzz'], expected: 15 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aa'], expected: 3 },
    { args: ['aaa'], expected: 6 },
    { args: ['abc'], expected: 3 },
    { args: ['aabbc'], expected: 7 },
  ],
};
