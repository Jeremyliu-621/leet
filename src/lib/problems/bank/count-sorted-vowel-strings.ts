import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-sorted-vowel-strings',
  title: 'Count Sorted Vowel Strings',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Given an integer \`n\`, return the **number of strings of length \`n\`** that consist only of vowels (\`a\`, \`e\`, \`i\`, \`o\`, \`u\`) and are **lexicographically sorted**.\n\nA string is lexicographically sorted if for all valid \`i\`, \`s[i] <= s[i+1]\`.`,
  constraints: [
    '1 <= n <= 50',
  ],
  examples: [
    {
      input: 'n = 1',
      output: '5',
      explanation: 'The 5 sorted strings of length 1 are: "a", "e", "i", "o", "u".',
    },
    {
      input: 'n = 2',
      output: '15',
      explanation: 'The 15 sorted strings of length 2 are: "aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu".',
    },
  ],
  hints: [
    "Think of distributing `n` vowels as a 'stars and bars' problem. You have 5 vowels and need to count ordered sorted sequences.",
    "Let `dp[v]` = number of sorted strings of length `i` ending with vowel index `v` (0='a'...4='u'). Update: `dp[v] += dp[v-1]` for each v.",
    "Math shortcut: the answer is C(n+4, 4) — combinations with repetition. For example, n=2: C(6,4)=15.",
  ],
  functionName: 'countVowelStrings',
  params: ['n'],
  starterCode: {
    javascript: `function countVowelStrings(n) {
  return (n + 1) * (n + 2) * (n + 3) * (n + 4) / 24;
}`,
    typescript: `function countVowelStrings(n: number): number {
  return (n + 1) * (n + 2) * (n + 3) * (n + 4) / 24;
}`,
    python: `def countVowelStrings(n):
    return (n + 1) * (n + 2) * (n + 3) * (n + 4) // 24`,
  },
  visibleTests: [
    { args: [1], expected: 5 },
    { args: [2], expected: 15 },
    { args: [33], expected: 66045 },
  ],
  hiddenTests: [
    { args: [3], expected: 35 },
    { args: [4], expected: 70 },
    { args: [5], expected: 126 },
    { args: [10], expected: 1001 },
    { args: [50], expected: 316251 },
  ],
};
