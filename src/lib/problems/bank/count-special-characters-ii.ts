import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-special-characters-ii',
  title: 'Count the Number of Special Characters II',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`word\`. A letter \`c\` is called **special** if it appears **only** in either lowercase or uppercase in \`word\`, and appears in **both** lowercase and uppercase.

Wait — more precisely: a letter \`c\` is special if:
- there is **no** position where lowercase \`c\` is immediately followed by uppercase \`C\` in \`word\` (i.e., substring \`"cC"\` does not appear)
- both lowercase \`c\` and uppercase \`C\` appear in \`word\`

Actually the correct definition for this variant: letter \`c\` is special if it appears in \`word\` in **both** lowercase and uppercase, AND every lowercase \`c\` comes **before** every uppercase \`C\` in \`word\`.

Return the number of **special** letters in \`word\`.`,
  constraints: [
    '1 <= word.length <= 2 * 10^5',
    'word consists of only lowercase and uppercase English letters.',
  ],
  examples: [
    {
      input: 'word = "aaAbcBC"',
      output: '3',
      explanation: 'a: lowercase a at 0,1 — uppercase A at 2 — all lowercase before uppercase ✓. b: lowercase b at 3 — uppercase B at 5 ✓. c: lowercase c at 4 — uppercase C at 6 ✓. Count = 3.',
    },
    {
      input: 'word = "abc"',
      output: '0',
      explanation: 'No uppercase letters appear in word.',
    },
    {
      input: 'word = "AbBCab"',
      output: '0',
      explanation: 'For b: uppercase B at index 2, lowercase b at index 4 — uppercase appears before lowercase, so not special.',
    },
  ],
  hints: [
    'For each letter a-z, find the last index where the lowercase form appears and the first index where the uppercase form appears.',
    'A letter is special if both forms appear AND last(lowercase) < first(uppercase).',
    'Build a map from each letter to all its indices. For each of the 26 letters, check if max(lowercase indices) < min(uppercase indices).',
  ],
  functionName: 'numberOfSpecialCharsII',
  params: ['word'],
  starterCode: {
    javascript: 'function numberOfSpecialCharsII(word) {\n  // your code here\n}\n',
    python: 'def numberOfSpecialCharsII(word):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['aaAbcBC'], expected: 3 },
    { args: ['abc'], expected: 0 },
    { args: ['AbBCab'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['aA'], expected: 1 },
    { args: ['Aa'], expected: 0 },
    { args: ['aAbB'], expected: 2 },
    { args: ['aAbBaA'], expected: 1 },
    { args: ['abAB'], expected: 2 },
    { args: ['AaBb'], expected: 0 },
  ],
};
