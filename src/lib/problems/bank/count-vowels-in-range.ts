import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-vowels-in-range',
  title: 'Count Vowel Strings in a Range',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `You are given a **0-indexed** array of string \`words\` and two integers \`left\` and \`right\`.

A string is called a **vowel string** if it starts with a vowel character and ends with a vowel character where vowel characters are \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`.

Return the number of vowel strings \`words[i]\` where \`i\` belongs to the inclusive range \`[left, right]\`.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length <= 10',
    'words[i] consists only of lowercase English letters.',
    '0 <= left <= right < words.length',
  ],
  examples: [
    {
      input: 'words = ["are","amy","u"], left = 0, right = 2',
      output: '2',
      explanation: '"are" starts with \'a\' and ends with \'e\' — vowel string. "amy" starts with \'a\' but ends with \'y\' — not. "u" starts and ends with \'u\' — vowel string.',
    },
    {
      input: 'words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4',
      output: '3',
      explanation: '"aeo", "ooo", and "artro" are vowel strings in the range [1,4].',
    },
  ],
  hints: [
    'Only consider words at indices left through right (inclusive).',
    'A vowel string must start AND end with a vowel: a, e, i, o, u.',
    'Check words[i][0] and words[i][words[i].length - 1] for each i in [left, right].',
  ],
  functionName: 'vowelStrings',
  params: ['words', 'left', 'right'],
  starterCode: {
    javascript: `function vowelStrings(words, left, right) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;
  for (let i = left; i <= right; i++) {
    const w = words[i];
    if (vowels.has(w[0]) && vowels.has(w[w.length - 1])) count++;
  }
  return count;
}`,
    typescript: `function vowelStrings(words: string[], left: number, right: number): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;
  for (let i = left; i <= right; i++) {
    const w = words[i]!;
    if (vowels.has(w[0]!) && vowels.has(w[w.length - 1]!)) count++;
  }
  return count;
}`,
    python: `def vowelStrings(words: list[str], left: int, right: int) -> int:
    vowels = set('aeiou')
    return sum(1 for i in range(left, right + 1) if words[i][0] in vowels and words[i][-1] in vowels)`,
  },
  visibleTests: [
    { args: [['are', 'amy', 'u'], 0, 2], expected: 2 },
    { args: [['hey', 'aeo', 'mu', 'ooo', 'artro'], 1, 4], expected: 3 },
    { args: [['apple', 'ban', 'ice'], 0, 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [['a'], 0, 0], expected: 1 },
    { args: [['b'], 0, 0], expected: 0 },
    { args: [['ae', 'io', 'uu', 'bc'], 0, 3], expected: 3 },
    { args: [['orange', 'apple', 'echo'], 0, 0], expected: 1 },
    { args: [['orange', 'apple', 'echo'], 1, 2], expected: 2 },
    { args: [['abc', 'def'], 0, 1], expected: 0 },
    { args: [['aba', 'eye', 'ode', 'use'], 0, 3], expected: 4 },
    { args: [['xyz', 'aba', 'hi'], 1, 2], expected: 1 },
  ],
};
