import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-unique-characters-of-all-substrings',
  title: 'Count Unique Characters of All Substrings of a Given String',
  difficulty: 'hard',
  tags: ['strings', 'math'],
  description: `Let \`countUniqueChars(s)\` be the function that returns the number of unique characters in \`s\`. For example, \`countUniqueChars("LEETCODE") = 6\` because \`"L"\`, \`"T"\`, \`"C"\`, \`"O"\`, \`"D"\`, \`"E"\` appear exactly once.

Given a string \`s\`, return the sum of \`countUniqueChars(t)\` where \`t\` is a substring of \`s\`. The answer may be very large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s` consists of uppercase English letters only',
  ],
  examples: [
    {
      input: 's = "ABC"',
      output: '10',
      explanation: 'All substrings: "A"(1),"B"(1),"C"(1),"AB"(2),"BC"(2),"ABC"(3). Total=10.',
    },
    {
      input: 's = "ABA"',
      output: '8',
      explanation: '"A"(1),"B"(1),"A"(1),"AB"(2),"BA"(2),"ABA"(1). Total=8.',
    },
    {
      input: 's = "LEETCODE"',
      output: '92',
    },
  ],
  hints: [
    'Instead of iterating over all substrings, count each character\'s contribution independently.',
    'For character c at index i (with previous occurrence at j and next occurrence at k): it contributes 1 to every substring [l,r] where l ∈ (j, i] and r ∈ [i, k). Contribution = (i-j)*(k-i).',
    'For each distinct character, collect its positions, pad with -1 at the front and len(s) at the back, then sum (positions[i]-positions[i-1])*(positions[i+1]-positions[i]) for each occurrence.',
  ],
  functionName: 'uniqueLetterString',
  params: ['s'],
  starterCode: {
    javascript: `function uniqueLetterString(s) {
  const MOD = 1000000007;
  const positions = new Map();
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!positions.has(c)) positions.set(c, [-1]);
    positions.get(c).push(i);
  }
  let total = 0;
  for (const pos of positions.values()) {
    pos.push(s.length);
    for (let i = 1; i < pos.length - 1; i++) {
      total = (total + (pos[i] - pos[i-1]) * (pos[i+1] - pos[i])) % MOD;
    }
  }
  return total;
}`,
    typescript: `function uniqueLetterString(s: string): number {
  const MOD = 1000000007;
  const positions = new Map<string, number[]>();
  for (let i = 0; i < s.length; i++) {
    const c = s[i]!;
    if (!positions.has(c)) positions.set(c, [-1]);
    positions.get(c)!.push(i);
  }
  let total = 0;
  for (const pos of positions.values()) {
    pos.push(s.length);
    for (let i = 1; i < pos.length - 1; i++) {
      total = (total + (pos[i]! - pos[i-1]!) * (pos[i+1]! - pos[i]!)) % MOD;
    }
  }
  return total;
}`,
    python: `def uniqueLetterString(s):
    MOD = 10**9 + 7
    from collections import defaultdict
    positions = defaultdict(lambda: [-1])
    for i, c in enumerate(s):
        positions[c].append(i)
    total = 0
    n = len(s)
    for pos in positions.values():
        pos.append(n)
        for i in range(1, len(pos) - 1):
            total = (total + (pos[i] - pos[i-1]) * (pos[i+1] - pos[i])) % MOD
    return total`,
  },
  visibleTests: [
    { args: ['ABC'], expected: 10 },
    { args: ['ABA'], expected: 8 },
    { args: ['LEETCODE'], expected: 92 },
  ],
  hiddenTests: [
    { args: ['A'], expected: 1 },
    { args: ['AA'], expected: 2 },
    { args: ['AB'], expected: 4 },
    { args: ['AABBA'], expected: 12 },
  ],
};
