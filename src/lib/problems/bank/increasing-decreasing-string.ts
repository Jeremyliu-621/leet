import type { Problem } from '../types';

export const problem: Problem = {
  id: 'increasing-decreasing-string',
  title: 'Increasing Decreasing String',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`s\`. Reorder the string using the following algorithm:

1. Pick the **smallest** character from \`s\` and **append** it to the result.
2. Pick the **smallest** character from \`s\` which is greater than the last appended character and append it.
3. Repeat step 2 until you cannot pick more characters.
4. Pick the **largest** character from \`s\` and **append** it.
5. Pick the **largest** character from \`s\` which is smaller than the last appended character and append it.
6. Repeat step 5 until you cannot pick more characters.
7. Repeat the steps from step 1 to 6 until you pick all the characters from \`s\`.

In each step, if the smallest or largest character appears more than once you can pick any occurrence and append it to the result.

Return the result string after sorting \`s\` with this algorithm.`,
  constraints: [
    '1 <= s.length <= 500',
    's consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aaaabbbbcccc"',
      output: '"abccbaabccba"',
      explanation:
        'Counts: a=4, b=4, c=4. Ascending pass: a,b,c. Descending pass: c,b,a. Repeated twice → "abccbaabccba".',
    },
    {
      input: 's = "rat"',
      output: '"art"',
      explanation:
        'Counts: r=1, a=1, t=1. One ascending pass picks a, r, t. No characters remain. Result = "art".',
    },
  ],
  hints: [
    'Level 1: Use a frequency array of size 26. In each round, sweep a–z picking available characters (ascending pass), then sweep z–a picking available characters (descending pass). Repeat until all characters are picked.',
    'Level 2: Keep a count array cnt[26]. Each pass: forward loop i=0..25, if cnt[i]>0 append char and decrement. Then backward loop i=25..0, if cnt[i]>0 append char and decrement. Stop when total characters exhausted.',
    "Level 3: const cnt=new Array(26).fill(0);for(const c of s)cnt[c.charCodeAt(0)-97]++;let res='';while(res.length<s.length){for(let i=0;i<26;i++)if(cnt[i]>0){res+=String.fromCharCode(97+i);cnt[i]--;}for(let i=25;i>=0;i--)if(cnt[i]>0){res+=String.fromCharCode(97+i);cnt[i]--;}}return res;",
  ],
  functionName: 'sortString',
  params: ['s'],
  starterCode: {
    javascript: `function sortString(s) {
  const cnt = new Array(26).fill(0);
  for (const c of s) cnt[c.charCodeAt(0) - 97]++;
  let res = '';
  while (res.length < s.length) {
    for (let i = 0; i < 26; i++) if (cnt[i] > 0) { res += String.fromCharCode(97 + i); cnt[i]--; }
    for (let i = 25; i >= 0; i--) if (cnt[i] > 0) { res += String.fromCharCode(97 + i); cnt[i]--; }
  }
  return res;
}`,
    typescript: `function sortString(s: string): string {
  const cnt = new Array(26).fill(0) as number[];
  for (const c of s) cnt[c.charCodeAt(0) - 97]!++;
  let res = '';
  while (res.length < s.length) {
    for (let i = 0; i < 26; i++) if (cnt[i]! > 0) { res += String.fromCharCode(97 + i); cnt[i]!--; }
    for (let i = 25; i >= 0; i--) if (cnt[i]! > 0) { res += String.fromCharCode(97 + i); cnt[i]!--; }
  }
  return res;
}`,
    python: `def sortString(s):
    if hasattr(s, 'to_py'): s = s.to_py()
    cnt = [0] * 26
    for c in s: cnt[ord(c) - 97] += 1
    res = []
    while len(res) < len(s):
        for i in range(26):
            if cnt[i] > 0: res.append(chr(97 + i)); cnt[i] -= 1
        for i in range(25, -1, -1):
            if cnt[i] > 0: res.append(chr(97 + i)); cnt[i] -= 1
    return ''.join(res)`,
  },
  visibleTests: [
    { args: ['aaaabbbbcccc'], expected: 'abccbaabccba' },
    { args: ['rat'], expected: 'art' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['aab'], expected: 'aba' },
    { args: ['abc'], expected: 'abc' },
    { args: ['aabbcc'], expected: 'abccba' },
    { args: ['zyx'], expected: 'xyz' },
  ],
};
