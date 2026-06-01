import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-occurrence-of-first-almost-equal-substring',
  title: 'Find the Occurrence of First Almost Equal Substring',
  difficulty: 'hard',
  tags: ['strings'],
  description: `You are given two strings \`s\` and \`pattern\`, both consisting of lowercase English letters.

A substring of \`s\` is called **almost equal** to \`pattern\` if you can change **at most one** character in the substring (or make no change) to make it equal to \`pattern\`.

Return the **smallest starting index** of any substring of \`s\` that is almost equal to \`pattern\`, or **-1** if no such substring exists.`,
  constraints: [
    '1 <= pattern.length <= s.length <= 10^5',
    's and pattern consist of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "abcdefg", pattern = "bcd"',
      output: '1',
      explanation: 's[1..3] = "bcd" is exactly equal to pattern (0 mismatches).',
    },
    {
      input: 's = "abzde", pattern = "abcde"',
      output: '0',
      explanation:
        's[0..4] = "abzde" matches pattern "abcde" except at index 2 (\'z\' vs \'c\'). Exactly 1 mismatch — almost equal.',
    },
    {
      input: 's = "aaaa", pattern = "bbb"',
      output: '-1',
      explanation:
        'Every 3-character substring of "aaaa" is "aaa", which differs from "bbb" in all 3 positions.',
    },
  ],
  hints: [
    'Level 1: A substring is almost equal if the prefix-match length plus suffix-match length is at least m-1 (where m is pattern length). This ensures at most one unmatched middle character.',
    'Level 2: Compute prefix match lengths using the Z-array of pattern+"#"+s. Compute suffix match lengths using the Z-array of rev(pattern)+"#"+rev(s).',
    'Level 3: For each starting index i in s: prefix_len = Z1[m+1+i], suffix_len = Z2[m+1+(n-m-i)]. If prefix_len + suffix_len >= m-1, return i. Time: O(n+m).',
  ],
  functionName: 'minStartingIndex',
  params: ['s', 'pattern'],
  starterCode: {
    javascript: `function minStartingIndex(s, pattern) {
  const n = s.length, m = pattern.length;
  if (m > n) return -1;

  function zArray(t) {
    const z = new Array(t.length).fill(0);
    z[0] = t.length;
    let l = 0, r = 0;
    for (let i = 1; i < t.length; i++) {
      if (i < r) z[i] = Math.min(r - i, z[i - l]);
      while (i + z[i] < t.length && t[z[i]] === t[i + z[i]]) z[i]++;
      if (i + z[i] > r) { l = i; r = i + z[i]; }
    }
    return z;
  }

  const z1 = zArray(pattern + '#' + s);
  const revP = [...pattern].reverse().join('');
  const revS = [...s].reverse().join('');
  const z2 = zArray(revP + '#' + revS);

  for (let i = 0; i <= n - m; i++) {
    const prefix = Math.min(m, z1[m + 1 + i]);
    const suffix = Math.min(m, z2[m + 1 + (n - m - i)]);
    if (prefix + suffix >= m - 1) return i;
  }
  return -1;
}`,
    typescript: `function minStartingIndex(s: string, pattern: string): number {
  const n = s.length, m = pattern.length;
  if (m > n) return -1;

  function zArray(t: string): number[] {
    const len = t.length;
    const z: number[] = new Array(len).fill(0);
    z[0] = len;
    let l = 0, r = 0;
    for (let i = 1; i < len; i++) {
      if (i < r) z[i] = Math.min(r - i, z[i - l] ?? 0);
      let cur = z[i] ?? 0;
      while (i + cur < len && t[cur] === t[i + cur]) cur++;
      z[i] = cur;
      if (i + cur > r) { l = i; r = i + cur; }
    }
    return z;
  }

  const z1 = zArray(pattern + '#' + s);
  const revP = [...pattern].reverse().join('');
  const revS = [...s].reverse().join('');
  const z2 = zArray(revP + '#' + revS);

  for (let i = 0; i <= n - m; i++) {
    const prefix = Math.min(m, z1[m + 1 + i] ?? 0);
    const suffix = Math.min(m, z2[m + 1 + (n - m - i)] ?? 0);
    if (prefix + suffix >= m - 1) return i;
  }
  return -1;
}`,
    python: `def minStartingIndex(s, pattern):
    n, m = len(s), len(pattern)
    if m > n:
        return -1

    def z_array(t):
        z = [0] * len(t)
        z[0] = len(t)
        l = r = 0
        for i in range(1, len(t)):
            if i < r:
                z[i] = min(r - i, z[i - l])
            while i + z[i] < len(t) and t[z[i]] == t[i + z[i]]:
                z[i] += 1
            if i + z[i] > r:
                l, r = i, i + z[i]
        return z

    z1 = z_array(pattern + '#' + s)
    rev_p = pattern[::-1]
    rev_s = s[::-1]
    z2 = z_array(rev_p + '#' + rev_s)

    for i in range(n - m + 1):
        prefix = min(m, z1[m + 1 + i])
        suffix = min(m, z2[m + 1 + (n - m - i)])
        if prefix + suffix >= m - 1:
            return i
    return -1`,
  },
  visibleTests: [
    { args: ['abcdefg', 'bcd'], expected: 1 },
    { args: ['abzde', 'abcde'], expected: 0 },
    { args: ['aaaa', 'bbb'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['abc', 'abc'], expected: 0 },
    { args: ['abc', 'abd'], expected: 0 },
    { args: ['abc', 'xyz'], expected: -1 },
    { args: ['abcde', 'abcze'], expected: 0 },
    { args: ['zbcde', 'abcde'], expected: 0 },
    { args: ['abcdz', 'abcde'], expected: 0 },
    { args: ['aabbcc', 'abc'], expected: 1 },
    { args: ['aabbcc', 'xbc'], expected: 2 },
  ],
};
