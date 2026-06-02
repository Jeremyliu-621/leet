import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-all-characters-appear-twice',
  title: 'Check if All Characters Have Equal Number of Occurrences',
  difficulty: 'easy',
  tags: ['hash-map', 'strings'],
  description: `Given a string \`s\`, return \`true\` if all characters in \`s\` appear the **same** number of times, \`false\` otherwise.`,
  constraints: [
    '`1 <= s.length <= 1000`',
    '`s` consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abacbc"',
      output: 'true',
      explanation: '"a", "b", and "c" each appear 2 times.',
    },
    {
      input: 's = "aaabb"',
      output: 'false',
      explanation: '"a" appears 3 times, "b" appears 2 times — not equal.',
    },
  ],
  hints: [
    'Count the frequency of each character using a hash map.',
    'Check that all frequency values are equal (e.g., convert to a Set and verify its size is 1).',
    `\`\`\`js
function areOccurrencesEqual(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c]||0) + 1;
  const vals = Object.values(freq);
  return vals.every(v => v === vals[0]);
}\`\`\``,
  ],
  functionName: 'areOccurrencesEqual',
  params: ['s'],
  starterCode: {
    javascript: `function areOccurrencesEqual(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  const vals = Object.values(freq);
  return vals.every(v => v === vals[0]);
}`,
    typescript: `function areOccurrencesEqual(s: string): boolean {
  const freq: Record<string, number> = {};
  for (const c of s) freq[c] = (freq[c] ?? 0) + 1;
  const vals = Object.values(freq);
  return vals.every(v => v === vals[0]);
}`,
    python: `def areOccurrencesEqual(s):
    from collections import Counter
    counts = list(Counter(s).values())
    return len(set(counts)) == 1`,
  },
  visibleTests: [
    { args: ['abacbc'], expected: true },
    { args: ['aaabb'], expected: false },
    { args: ['aabb'], expected: true },
  ],
  hiddenTests: [
    { args: ['a'], expected: true },
    { args: ['aaa'], expected: true },
    { args: ['abc'], expected: true },
    { args: ['aabbc'], expected: false },
    { args: ['zz'], expected: true },
  ],
};
