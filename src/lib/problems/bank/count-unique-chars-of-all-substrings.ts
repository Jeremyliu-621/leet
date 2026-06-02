import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-unique-chars-of-all-substrings',
  title: 'Count Unique Characters of All Substrings of a Given String',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `Let's define a function \`countUniqueChars(s)\` that returns the number of unique characters in \`s\`.

For example, \`countUniqueChars("LEETCODE") = 3\` because \`"L"\`, \`"T"\`, and \`"C"\` are the only characters that appear exactly once in \`"LEETCODE"\` (Note: \`"E"\`, \`"O"\`, and \`"D"\` each appear more than once, so they don't count).

Given a string \`s\`, return the sum of \`countUniqueChars(t)\` where \`t\` ranges over every non-empty substring of \`s\`. The answer may be very large, so return the answer \`modulo 10^9 + 7\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of uppercase English letters only.',
  ],
  examples: [
    {
      input: 's = "ABC"',
      output: '10',
      explanation: 'All letters appear once in each substring they are in. Sum = 1+1+1+2+2+3 = 10.',
    },
    {
      input: 's = "ABA"',
      output: '8',
      explanation: '"A"(0):1, "B":1, "A"(2):1, "AB":2, "BA":2, "ABA":1(only B unique). Sum=8.',
    },
    {
      input: 's = "LEETCODE"',
      output: '92',
      explanation: 'Compute contributions of each character based on gaps between same-character occurrences.',
    },
  ],
  hints: [
    'For each character at position i, count how many substrings contain it exactly once.',
    'If the previous same character is at prev and next is at nxt, the contribution is (i - prev) * (nxt - i).',
    'Use -1 and n as sentinels for no previous/next occurrence.',
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
    { args: ['AABA'], expected: 11 },
    { args: ['ABCABC'], expected: 36 },
  ],
};
