import type { Problem } from '../types';

export const problem: Problem = {
  id: 'isomorphic-strings',
  title: 'Isomorphic Strings',
  difficulty: 'easy',
  tags: ['hash-map', 'strings'],
  description: `Given two strings \`s\` and \`t\`, determine if they are **isomorphic**.

Two strings are isomorphic if the characters in \`s\` can be replaced to get \`t\`. Each occurrence of a character must be replaced with the same character while preserving the order of characters. No two different characters may map to the same character, but a character may map to itself.`,
  constraints: [
    '1 <= s.length <= 50000',
    's.length == t.length',
    's and t consist of any valid ASCII character',
  ],
  examples: [
    { input: 's = "egg", t = "add"', output: 'true' },
    { input: 's = "foo", t = "bar"', output: 'false' },
    { input: 's = "paper", t = "title"', output: 'true' },
  ],
  hints: [
    'At each position, you need to check if the mapping from s[i] to t[i] is consistent with all previous mappings.',
    'Use two maps: one from s characters to t characters, and one from t characters to s characters. The reverse map ensures that two different s characters do not map to the same t character.',
    'For each index i, check: if sToT has s[i] mapped already, it must equal t[i]. If tToS has t[i] mapped already, it must equal s[i]. If either check fails, return false.',
  ],
  functionName: 'isIsomorphic',
  params: ['s', 't'],
  starterCode: {
    javascript: `function isIsomorphic(s, t) {
  const sToT = new Map(), tToS = new Map();
  for (let i = 0; i < s.length; i++) {
    const sc = s[i], tc = t[i];
    if (sToT.has(sc) && sToT.get(sc) !== tc) return false;
    if (tToS.has(tc) && tToS.get(tc) !== sc) return false;
    sToT.set(sc, tc);
    tToS.set(tc, sc);
  }
  return true;
}`,
    typescript: `function isIsomorphic(s: string, t: string): boolean {
  const sToT = new Map<string, string>(), tToS = new Map<string, string>();
  for (let i = 0; i < s.length; i++) {
    const sc = s[i]!, tc = t[i]!;
    if (sToT.has(sc) && sToT.get(sc) !== tc) return false;
    if (tToS.has(tc) && tToS.get(tc) !== sc) return false;
    sToT.set(sc, tc);
    tToS.set(tc, sc);
  }
  return true;
}`,
    python: `def isIsomorphic(s, t):
    if hasattr(s, 'to_py'): s = s.to_py()
    if hasattr(t, 'to_py'): t = t.to_py()
    s_to_t, t_to_s = {}, {}
    for sc, tc in zip(s, t):
        if sc in s_to_t and s_to_t[sc] != tc: return False
        if tc in t_to_s and t_to_s[tc] != sc: return False
        s_to_t[sc] = tc; t_to_s[tc] = sc
    return True`,
  },
  visibleTests: [
    { args: ['egg', 'add'], expected: true },
    { args: ['foo', 'bar'], expected: false },
    { args: ['paper', 'title'], expected: true },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: true },
    { args: ['ab', 'aa'], expected: false },
    { args: ['aa', 'ab'], expected: false },
    { args: ['badc', 'baba'], expected: false },
  ],
};
