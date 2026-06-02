import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-score-after-splitting-string',
  title: 'Maximum Score After Splitting a String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\` of zeros and ones, return the maximum score after splitting the string into two **non-empty** substrings (i.e. **left** substring and **right** substring).

The score after splitting a string is the number of **zeros** in the **left** substring plus the number of **ones** in the **right** substring.`,
  constraints: [
    '2 <= s.length <= 500',
    'The string s consists of characters \'0\' and \'1\' only.',
  ],
  examples: [
    {
      input: 's = "011101"',
      output: '5',
      explanation: 'Split at index 1: "0" | "11101" → 1 zero + 4 ones = 5.',
    },
    {
      input: 's = "00111"',
      output: '5',
      explanation: 'Split at index 2: "00" | "111" → 2 zeros + 3 ones = 5.',
    },
    {
      input: 's = "1111"',
      output: '3',
      explanation: 'Split at index 1: "1" | "111" → 0 zeros + 3 ones = 3.',
    },
  ],
  hints: [
    'Try every possible split point from index 1 to s.length-1.',
    'For each split, count zeros in the left part and ones in the right part.',
    'Return the maximum score across all splits.',
  ],
  functionName: 'maxScore',
  params: ['s'],
  starterCode: {
    javascript: `function maxScore(s) {
  let ones = 0;
  for (const c of s) if (c === '1') ones++;
  let zeros = 0, best = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '0') zeros++;
    else ones--;
    const score = zeros + ones;
    if (score > best) best = score;
  }
  return best;
}`,
    typescript: `function maxScore(s: string): number {
  let ones = 0;
  for (const c of s) if (c === '1') ones++;
  let zeros = 0, best = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '0') zeros++;
    else ones--;
    const score = zeros + ones;
    if (score > best) best = score;
  }
  return best;
}`,
    python: `def maxScore(s):
    ones = s.count('1')
    zeros = best = 0
    for i in range(len(s) - 1):
        if s[i] == '0': zeros += 1
        else: ones -= 1
        score = zeros + ones
        if score > best: best = score
    return best`,
  },
  visibleTests: [
    { args: ['011101'], expected: 5 },
    { args: ['00111'], expected: 5 },
    { args: ['1111'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['00'], expected: 1 },
    { args: ['01'], expected: 2 },
    { args: ['10'], expected: 0 },
    { args: ['11'], expected: 1 },
    { args: ['0000'], expected: 3 },
    { args: ['000111'], expected: 6 },
  ],
};
