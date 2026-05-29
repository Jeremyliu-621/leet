import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-make-word-k-periodic',
  title: 'Minimum Number of Operations to Make Word K-Periodic',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`word\` of size \`n\` and a positive integer \`k\`, where \`n\` is divisible by \`k\`.

In one operation you can choose any two indices \`i\` and \`j\` where both \`i\` and \`j\` are divisible by \`k\`, and replace the substring \`word[i..i+k-1]\` with the substring \`word[j..j+k-1]\`.

Return the **minimum** number of operations required to make \`word\` **k-periodic**, meaning \`word[i] == word[i % k]\` for every index \`i\`.`,
  constraints: [
    '1 <= n == word.length <= 10^5',
    '1 <= k <= n',
    'n is divisible by k',
    'word consists only of lowercase English letters',
  ],
  examples: [
    {
      input: 'word = "leetcodeleet", k = 4',
      output: '1',
      explanation:
        'Split into "leet", "code", "leet". "leet" appears twice, "code" once. Replace "code" with "leet" in one operation → "leetleetleet".',
    },
    {
      input: 'word = "leetcode", k = 4',
      output: '1',
      explanation:
        'Split into "leet", "code". Each appears once. Replace either block with the other in one operation.',
    },
  ],
  hints: [
    'Split word into n/k chunks of length k.',
    'Count the frequency of each distinct k-length chunk using a hash map.',
    'The answer is (n/k) - maxFrequency, since you keep the most common chunk and replace all others.',
  ],
  functionName: 'minimumOperationsToMakeWordKPeriodic',
  params: ['word', 'k'],
  starterCode: {
    javascript: `function minimumOperationsToMakeWordKPeriodic(word, k) {\n  \n}`,
    typescript: `function minimumOperationsToMakeWordKPeriodic(word: string, k: number): number {\n  \n}`,
    python: `def minimumOperationsToMakeWordKPeriodic(word, k):\n    `,
  },
  visibleTests: [
    { args: ['leetcodeleet', 4], expected: 1 },
    { args: ['leetcode', 4], expected: 1 },
    { args: ['abcabc', 3], expected: 0 },
  ],
  hiddenTests: [
    { args: ['leetcodeleet', 4], expected: 1 },
    { args: ['leetcode', 4], expected: 1 },
    { args: ['abcabc', 3], expected: 0 },
    { args: ['abababab', 4], expected: 0 },
    { args: ['aaaaaa', 2], expected: 0 },
    { args: ['xyzxyzxyz', 3], expected: 0 },
    { args: ['abcdef', 3], expected: 1 },
    { args: ['aabb', 2], expected: 1 },
  ],
};
