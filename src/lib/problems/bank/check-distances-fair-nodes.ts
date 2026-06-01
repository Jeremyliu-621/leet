import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-distances-fair-nodes',
  title: 'Check Distances Between Same Letters',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a **0-indexed** string \`s\` consisting of only lowercase English letters, where each letter in \`s\` appears **exactly twice**. You are also given a **0-indexed** integer array \`distance\` of length 26.

Each letter in the alphabet is numbered from 0 to 25 (i.e. \`'a' -> 0\`, \`'b' -> 1\`, \`'z' -> 25\`).

In a **well-spaced** string, the number of letters between the two occurrences of the \`i\`-th letter is \`distance[i]\`. If the \`i\`-th letter does not appear in \`s\`, then \`distance[i]\` can be **ignored**.

Return \`true\` if \`s\` is a well-spaced string, otherwise return \`false\`.`,
  constraints: [
    '`2 <= s.length <= 52`',
    '`s` consists only of lowercase English letters.',
    'Each letter appears in \`s\` exactly twice.',
    '`distance.length == 26`',
    '`0 <= distance[i] <= 50`',
  ],
  examples: [
    {
      input: 's = "abaccb", distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]',
      output: 'true',
      explanation: 'a: positions 0,2 → 1 between. b: positions 1,5 → 3 between. c: positions 3,4 → 0 between.',
    },
    {
      input: 's = "aa", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]',
      output: 'false',
    },
  ],
  hints: [
    'Record the first occurrence index of each character.',
    'On the second occurrence, check if the gap matches distance[c - \'a\'].',
    `\`\`\`js
function checkDistances(s, distance) {
  const first={};
  for(let i=0;i<s.length;i++){
    const c=s.charCodeAt(i)-97;
    if(c in first){if(i-first[c]-1!==distance[c])return false;}
    else first[c]=i;
  }
  return true;
}\`\`\``,
  ],
  functionName: 'checkDistances',
  params: ['s', 'distance'],
  starterCode: {
    javascript: 'function checkDistances(s, distance) {\n  const first = {};\n  for (let i = 0; i < s.length; i++) {\n    const c = s.charCodeAt(i) - 97;\n    if (c in first) {\n      if (i - first[c] - 1 !== distance[c]) return false;\n    } else {\n      first[c] = i;\n    }\n  }\n  return true;\n}\n',
    typescript: "function checkDistances(s: string, distance: number[]): boolean {\n  const first: Record<number, number> = {};\n  for (let i = 0; i < s.length; i++) {\n    const c = s.charCodeAt(i) - 97;\n    if (c in first) {\n      if (i - first[c]! - 1 !== distance[c]) return false;\n    } else {\n      first[c] = i;\n    }\n  }\n  return true;\n}",

    python: 'def checkDistances(s, distance):\n    first = {}\n    for i, ch in enumerate(s):\n        c = ord(ch) - ord(\'a\')\n        if c in first:\n            if i - first[c] - 1 != distance[c]:\n                return False\n        else:\n            first[c] = i\n    return True\n',
  },
  visibleTests: [
    { args: ['abaccb', [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]], expected: true },
    { args: ['aa', [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]], expected: false },
  ],
  hiddenTests: [
    { args: ['aa', [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]], expected: true },
    { args: ['abba', [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]], expected: true },
    { args: ['abba', [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]], expected: false },
    { args: ['aabb', [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]], expected: true },
    { args: ['aabb', [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]], expected: false },
  ],
};
