import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-distances-between-same-letters',
  title: 'Check Distances Between Same Letters',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map', 'strings'],
  description: `You are given a **0-indexed** string \`s\` consisting of only lowercase English letters, where each letter in \`s\` appears **exactly twice**. You are also given a **0-indexed** integer array \`distance\` of length 26.

Each letter \`c\` in the alphabet is numbered from \`0\` to \`25\` (i.e., \`'a' → 0\`, \`'b' → 1\`, ..., \`'z' → 25\`).

In a **well-spaced** string, the number of letters between the two occurrences of the \`i\`th letter equals \`distance[i]\`. Return \`true\` if \`s\` is a well-spaced string, otherwise \`false\`.`,
  constraints: [
    '2 <= s.length <= 52',
    's consists only of lowercase English letters',
    'Each letter appears in s exactly twice',
    'distance.length == 26',
    '0 <= distance[i] <= 50',
  ],
  examples: [
    {
      input: 's = "abaccb", distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]',
      output: 'true',
      explanation: '"a" appears at indices 0 and 2 — 1 letter between them. "b" appears at indices 1 and 5 — 3 letters between. "c" appears at indices 3 and 4 — 0 letters between.',
    },
    {
      input: 's = "aa", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]',
      output: 'false',
      explanation: '"a" appears at indices 0 and 1 — 0 letters between them, but distance[0] = 1.',
    },
  ],
  hints: [
    'Level 1: For each character in s, record its first occurrence index.',
    'Level 2: When you see the second occurrence at index j and first at index i, check j - i - 1 === distance[charCode].',
    'Level 3: const first=new Array(26).fill(-1);for(let i=0;i<s.length;i++){const c=s.charCodeAt(i)-97;if(first[c]===-1){first[c]=i;}else if(i-first[c]-1!==distance[c])return false;}return true;',
  ],
  functionName: 'checkDistances',
  params: ['s', 'distance'],
  starterCode: {
    javascript: 'function checkDistances(s, distance) {\n  // your code here\n}\n',
    typescript: "function checkDistances(s: string, distance: number[]): boolean {\n  // your code here\n}",

    python: 'def checkDistances(s, distance):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['abaccb', [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], expected: true },
    { args: ['aa', [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], expected: false },
  ],
  hiddenTests: [
    { args: ['aa', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], expected: true },
    { args: ['bb', [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], expected: false },
    { args: ['aabb', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], expected: true },
    { args: ['aabb', [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], expected: false },
  ],
};
