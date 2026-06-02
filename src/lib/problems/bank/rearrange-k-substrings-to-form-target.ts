import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rearrange-k-substrings-to-form-target',
  title: 'Rearrange K Substrings to Form Target String',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given two strings \`s\` and \`t\`, both of length \`n\`, and a positive integer \`k\`.

Divide the string \`s\` into \`k\` equal-length substrings: \`s\` is divided into substrings \`s[0..n/k-1], s[n/k..2n/k-1], …, s[(k-1)n/k..n-1]\`.

Similarly divide the string \`t\` into \`k\` equal-length substrings.

Return \`true\` if it is possible to rearrange the substrings of \`s\` such that their concatenation equals \`t\`, or \`false\` otherwise.`,
  constraints: [
    '1 <= k <= n <= 2000',
    'n is divisible by k',
    's.length == n',
    't.length == n',
    's and t consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abcd", t = "cdab", k = 2',
      output: 'true',
      explanation: 'Divide s into ["ab","cd"]. Divide t into ["cd","ab"]. Sort both: ["ab","cd"] and ["ab","cd"]. They are equal, so we can rearrange s\'s chunks to form t.',
    },
    {
      input: 's = "aababab", t = "abababa", k = 1',
      output: 'false',
      explanation: 'With k=1, s itself must equal t. "aababab" ≠ "abababa", so false.',
    },
    {
      input: 's = "abcdef", t = "defabc", k = 2',
      output: 'true',
      explanation: 'Divide s into ["abc","def"]. Divide t into ["def","abc"]. Sort both: ["abc","def"]. Equal — rearrange s\'s chunks to get t.',
    },
  ],
  hints: [
    'Divide both `s` and `t` into `k` substrings of equal length `n/k` each.',
    'If the multiset of substrings from `s` equals the multiset of substrings from `t`, return true.',
    'Sort both arrays of substrings and compare element by element — two sorted arrays are equal iff the multisets they represent are equal.',
  ],
  functionName: 'isPossibleToRearrange',
  params: ['s', 't', 'k'],
  starterCode: {
    javascript: `function isPossibleToRearrange(s, t, k) {
  const len = s.length / k;
  const sC = [], tC = [];
  for (let i = 0; i < k; i++) { sC.push(s.slice(i*len,(i+1)*len)); tC.push(t.slice(i*len,(i+1)*len)); }
  sC.sort(); tC.sort();
  return sC.join('') === tC.join('');
}`,
    typescript: `function isPossibleToRearrange(s: string, t: string, k: number): boolean {
  const len = s.length / k;
  const sC: string[] = [], tC: string[] = [];
  for (let i = 0; i < k; i++) { sC.push(s.slice(i*len,(i+1)*len)); tC.push(t.slice(i*len,(i+1)*len)); }
  sC.sort(); tC.sort();
  return sC.join('') === tC.join('');
}`,
    python: `def isPossibleToRearrange(s, t, k):
    if hasattr(s, 'to_py'): s = s.to_py()
    if hasattr(t, 'to_py'): t = t.to_py()
    if hasattr(k, 'to_py'): k = k.to_py()
    s = str(s); t = str(t); k = int(k)
    n = len(s); chunk = n // k
    sc = sorted(s[i*chunk:(i+1)*chunk] for i in range(k))
    tc = sorted(t[i*chunk:(i+1)*chunk] for i in range(k))
    return sc == tc`,
  },
  visibleTests: [
    { args: ['abcd', 'cdab', 2], expected: true },
    { args: ['aababab', 'abababa', 1], expected: false },
    { args: ['abc', 'cab', 1], expected: false },
  ],
  hiddenTests: [
    { args: ['abcabc', 'abcabc', 2], expected: true },
    { args: ['abcdef', 'defabc', 2], expected: true },
    { args: ['aabb', 'bbaa', 2], expected: true },
    { args: ['aabb', 'abab', 2], expected: false },
    { args: ['abcabc', 'cbaabc', 2], expected: false },
    { args: ['ab', 'ab', 1], expected: true },
    { args: ['ab', 'ba', 1], expected: false },
    { args: ['abcdabcd', 'abcdabcd', 4], expected: true },
    { args: ['abcdabcd', 'cdababcd', 4], expected: true },
  ],
};
