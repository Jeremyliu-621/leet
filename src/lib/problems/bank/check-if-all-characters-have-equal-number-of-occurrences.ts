import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-all-characters-have-equal-number-of-occurrences',
  title: 'Check if All Characters Have Equal Number of Occurrences',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\`, return \`true\` if all the characters of \`s\` appear the **same** number of times, or \`false\` otherwise.`,
  constraints: [
    '1 <= s.length <= 1000',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abacbc"',
      output: 'true',
      explanation: 'a, b, and c each appear exactly 2 times.',
    },
    {
      input: 's = "aaabb"',
      output: 'false',
      explanation: 'a appears 3 times, b appears 2 times — not equal.',
    },
    {
      input: 's = "zz"',
      output: 'true',
      explanation: 'Only one distinct character; trivially equal.',
    },
  ],
  hints: [
    'Level 1: Count the frequency of each character using a hash map.',
    'Level 2: Extract the list of frequency values. Check that every value equals the first one.',
    'Level 3: Build a freq Map, then const vals = [...freq.values()]; return vals.every(v => v === vals[0]);',
  ],
  functionName: 'areOccurrencesEqual',
  params: ['s'],
  starterCode: {
    javascript: `function areOccurrencesEqual(s) {
  const freq = new Map();
  for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);
  const vals = [...freq.values()];
  return vals.every(v => v === vals[0]);
}`,
    typescript: `function areOccurrencesEqual(s: string): boolean {
  const freq = new Map<string, number>();
  for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);
  const vals = [...freq.values()];
  return vals.every(v => v === vals[0]);
}`,
    python: `def areOccurrencesEqual(s: str) -> bool:
    if hasattr(s, 'to_py'): s = s.to_py()
    from collections import Counter
    cnt = Counter(s)
    return len(set(cnt.values())) <= 1`,
  },
  visibleTests: [
    { args: ['abacbc'], expected: true },
    { args: ['aaabb'], expected: false },
    { args: ['zz'], expected: true },
    { args: ['aabb'], expected: true },
  ],
  hiddenTests: [
    { args: ['a'], expected: true },
    { args: ['aaabbb'], expected: true },
    { args: ['aaaabc'], expected: false },
    { args: ['z'], expected: true },
    { args: ['abcabc'], expected: true },
    { args: ['aab'], expected: false },
  ],
};
