import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lexicographically-smallest-string-after-operations-with-constraint',
  title: 'Lexicographically Smallest String After Operations With Constraint',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `You are given a string \`s\` of lowercase English letters and an integer \`k\`.

You can apply the following operation **at most once per character**: rotate a character by at most **k total steps** in the alphabet ring (where the ring wraps: 'a' → 'b' → ... → 'z' → 'a'). The rotation can go **either direction** (forward or backward), and the total number of steps across all rotations cannot exceed \`k\`.

Return the **lexicographically smallest** string that can be obtained.`,
  constraints: [
    '`1 <= s.length <= 100`',
    '`0 <= k <= 100`',
  ],
  examples: [
    {
      input: 's = "zbbz", k = 3',
      output: '"aaaz"',
      explanation: '"z" costs 1 step to reach "a" (going forward). "b" costs 1 step to reach "a". After using 3 of 3 budget: z→a (1), b→a (1), b→a (1), z stays. Result: "aaaz".',
    },
    {
      input: 's = "xaxcd", k = 4',
      output: '"aawcd"',
      explanation: 'x→a costs min(23,3)=3; use 3, budget=1 left. a→a costs 0. x with budget 1: x(23) can reach w(22) at cost 1 (going backward). Stop spending after this. Result: "aawcd".',
    },
  ],
  hints: [
    'Process characters left to right (greedy: earlier characters affect lexicographic order more).',
    'For each character, compute the minimum cost to reach \'a\': `min(dist_forward, dist_backward)` where distance wraps around 26. If cost ≤ remaining budget, set the character to \'a\' and deduct the cost.',
    'Once the budget is insufficient to reach \'a\', find the smallest character reachable within the remaining budget (check all 26 letters), apply it, and stop — remaining characters stay unchanged.',
  ],
  functionName: 'getSmallestString',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function getSmallestString(s, k) {
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    const d = arr[i].charCodeAt(0) - 97;
    const costToA = Math.min(d, 26 - d);
    if (k >= costToA) { arr[i] = 'a'; k -= costToA; }
    else {
      const bwd = ((d - k) % 26 + 26) % 26, fwd = (d + k) % 26;
      arr[i] = String.fromCharCode(97 + Math.min(bwd, fwd));
      break;
    }
  }
  return arr.join('');
}`,
    typescript: `function getSmallestString(s: string, k: number): string {
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    const d = arr[i].charCodeAt(0) - 97;
    const costToA = Math.min(d, 26 - d);
    if (k >= costToA) { arr[i] = 'a'; k -= costToA; }
    else {
      const bwd = ((d - k) % 26 + 26) % 26, fwd = (d + k) % 26;
      arr[i] = String.fromCharCode(97 + Math.min(bwd, fwd));
      break;
    }
  }
  return arr.join('');
}`,
    python: `def getSmallestString(s, k):
    arr = list(s)
    for i, c in enumerate(arr):
        d = ord(c) - ord('a')
        cost = min(d, 26 - d)
        if k >= cost:
            arr[i] = 'a'; k -= cost
        else:
            bwd = (d - k) % 26; fwd = (d + k) % 26
            arr[i] = chr(ord('a') + min(bwd, fwd))
            break
    return ''.join(arr)`,
  },
  visibleTests: [
    { args: ['zbbz', 3], expected: 'aaaz' },
    { args: ['xaxcd', 4], expected: 'aawcd' },
  ],
  hiddenTests: [
    { args: ['a', 0], expected: 'a' },
    { args: ['z', 1], expected: 'a' },
    { args: ['z', 0], expected: 'z' },
    { args: ['abc', 10], expected: 'aaa' },
    { args: ['m', 3], expected: 'j' },
    { args: ['leetcode', 8], expected: 'deetcode' },
    { args: ['zz', 2], expected: 'aa' },
    { args: ['nz', 5], expected: 'iz' },
  ],
};
