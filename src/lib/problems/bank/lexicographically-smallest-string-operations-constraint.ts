import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lexicographically-smallest-string-operations-constraint',
  title: 'Lexicographically Smallest String After Operations With Constraint',
  difficulty: 'medium',
  tags: ['strings'],
  description: `You are given a string \`s\` and an integer \`k\`.

Define a function \`distance(s1, s2)\` between two lowercase letters \`s1\` and \`s2\` as the **minimum** of the clockwise and counter-clockwise distances in the alphabet (so \`distance('a', 'z') = 1\`).

In one operation, you can choose any index \`i\` of string \`s\` and change \`s[i]\` to the next or previous letter in the alphabet (cyclically). You have a **total budget** of \`k\` operations — you may spend them across any indices.

Return the **lexicographically smallest** string that can be obtained.`,
  constraints: [
    '1 <= s.length <= 100',
    '0 <= k <= 100',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "zbbz", k = 3',
      output: '"aaaz"',
      explanation:
        'Change s[0] from z to a: distance(z,a)=1, cost 1. Change s[1] from b to a: cost 1. Change s[2] from b to a: cost 1. Total cost 3. Result: "aaaz".',
    },
    {
      input: 's = "xaxcd", k = 4',
      output: '"aawcd"',
      explanation:
        'Change s[0] from x to a: distance(x,a)=min(23,3)=3, cost 3. Change s[1] is already a: cost 0. Change s[2] from x toward a: 1 remaining op, x→w (distance decreases by 1). Result: "aawcd".',
    },
    {
      input: 's = "lol", k = 0',
      output: '"lol"',
      explanation: 'No budget, string unchanged.',
    },
  ],
  hints: [
    'Process characters left to right. For each character, compute the minimum distance (in either direction) to reach "a".',
    'If the budget covers that cost, set the character to "a" and subtract the cost. Otherwise, move toward "a" by as much of the budget as possible, then stop.',
    `function getSmallestString(s, k) {
  const arr = s.split('');
  for (let i = 0; i < arr.length && k > 0; i++) {
    const d = arr[i].charCodeAt(0) - 97;
    const cost = Math.min(d, 26 - d);
    if (k >= cost) { arr[i] = 'a'; k -= cost; }
    else { arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - k); k = 0; }
  }
  return arr.join('');
}`,
  ],
  functionName: 'getSmallestString',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function getSmallestString(s, k) {
  const arr = s.split('');
  for (let i = 0; i < arr.length && k > 0; i++) {
    const d = arr[i].charCodeAt(0) - 97;
    const cost = Math.min(d, 26 - d);
    if (k >= cost) { arr[i] = 'a'; k -= cost; }
    else { arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - k); k = 0; }
  }
  return arr.join('');
}`,
    typescript: `function getSmallestString(s: string, k: number): string {
  const arr = s.split('');
  for (let i = 0; i < arr.length && k > 0; i++) {
    const d = arr[i]!.charCodeAt(0) - 97;
    const cost = Math.min(d, 26 - d);
    if (k >= cost) { arr[i] = 'a'; k -= cost; }
    else { arr[i] = String.fromCharCode(arr[i]!.charCodeAt(0) - k); k = 0; }
  }
  return arr.join('');
}`,
    python: `def getSmallestString(s, k):
    if hasattr(s, 'to_py'): s = s.to_py()
    if hasattr(k, 'to_py'): k = k.to_py()
    s = str(s); k = int(k)
    arr = list(s)
    for i in range(len(arr)):
        if k <= 0: break
        d = ord(arr[i]) - 97
        cost = min(d, 26 - d)
        if k >= cost: arr[i] = 'a'; k -= cost
        else: arr[i] = chr(ord(arr[i]) - k); k = 0
    return ''.join(arr)`,
  },
  visibleTests: [
    { args: ['zbbz', 3], expected: 'aaaz' },
    { args: ['xaxcd', 4], expected: 'aawcd' },
    { args: ['lol', 0], expected: 'lol' },
  ],
  hiddenTests: [
    { args: ['a', 0], expected: 'a' },
    { args: ['z', 1], expected: 'a' },
    { args: ['z', 0], expected: 'z' },
    { args: ['m', 13], expected: 'a' },
    { args: ['m', 6], expected: 'g' },
    { args: ['abc', 5], expected: 'aaa' },
    { args: ['dcba', 3], expected: 'acba' },
    { args: ['zzz', 3], expected: 'aaa' },
    { args: ['ba', 1], expected: 'aa' },
  ],
};
