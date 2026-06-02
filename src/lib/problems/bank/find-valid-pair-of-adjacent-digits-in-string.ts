import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-valid-pair-of-adjacent-digits-in-string',
  title: 'Find Valid Pair of Adjacent Digits in String',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`s\` consisting only of digits \`'1'\` through \`'9'\`.

A pair of adjacent characters \`s[i]\` and \`s[i + 1]\` (0-indexed) is called **valid** if:

- The digit \`s[i]\` appears in the string **exactly** \`int(s[i])\` times.
- The digit \`s[i + 1]\` appears in the string **exactly** \`int(s[i + 1])\` times.

Return the **first** valid pair found (as a two-character string), or an **empty string** \`""\` if no valid pair exists.`,
  constraints: [
    '2 <= s.length <= 100',
    "s consists only of digits '1' through '9'.",
  ],
  examples: [
    {
      input: 's = "2211"',
      output: '"22"',
      explanation: 'Frequency: "2"→2, "1"→2. Pair (s[0],s[1])=("2","2"): freq("2")=2=int("2") ✓ and freq("2")=2=int("2") ✓. First valid pair is "22".',
    },
    {
      input: 's = "122"',
      output: '"12"',
      explanation: 'Frequency: "1"→1, "2"→2. Pair (s[0],s[1])=("1","2"): freq("1")=1=int("1") ✓ and freq("2")=2=int("2") ✓. First valid pair is "12".',
    },
  ],
  hints: [
    'Level 1: Count the frequency of each digit in s in a single pass. Then scan pairs (s[i], s[i+1]) left to right.',
    'Level 2: For each pair, check if freq[s[i]] == parseInt(s[i]) AND freq[s[i+1]] == parseInt(s[i+1]).',
    'Level 3: Return s[i]+s[i+1] for the first valid pair, or "" if none is found. Since s consists only of digits 1–9, parseInt of a single character is always 1–9.',
  ],
  functionName: 'findValidPair',
  params: ['s'],
  starterCode: {
    javascript: `function findValidPair(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] ?? 0) + 1;
  for (let i = 0; i + 1 < s.length; i++) {
    if (freq[s[i]] === +s[i] && freq[s[i + 1]] === +s[i + 1]) {
      return s[i] + s[i + 1];
    }
  }
  return '';
}`,
    typescript: `function findValidPair(s: string): string {
  const freq: Record<string, number> = {};
  for (const c of s) freq[c] = (freq[c] ?? 0) + 1;
  for (let i = 0; i + 1 < s.length; i++) {
    if (freq[s[i]!]! === +s[i]! && freq[s[i + 1]!]! === +s[i + 1]!) {
      return s[i]! + s[i + 1]!;
    }
  }
  return '';
}`,
    python: `def findValidPair(s):
    from collections import Counter
    freq = Counter(s)
    for i in range(len(s) - 1):
        if freq[s[i]] == int(s[i]) and freq[s[i+1]] == int(s[i+1]):
            return s[i] + s[i+1]
    return ""`,
  },
  visibleTests: [
    { args: ['2211'], expected: '22' },
    { args: ['122'], expected: '12' },
  ],
  hiddenTests: [
    { args: ['21'], expected: '' },
    { args: ['333'], expected: '33' },
    { args: ['4444'], expected: '44' },
    { args: ['221'], expected: '22' },
    { args: ['1121'], expected: '' },
    { args: ['55555'], expected: '55' },
    { args: ['12'], expected: '' },
    { args: ['99999999'], expected: '' },
  ],
};
