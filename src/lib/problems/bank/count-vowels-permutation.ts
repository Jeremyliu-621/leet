import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-vowels-permutation',
  title: 'Count Vowels Permutation',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Given an integer \`n\`, return the number of strings of length \`n\` that consist only of vowels (\`a\`, \`e\`, \`i\`, \`o\`, \`u\`) and are **valid** by these transition rules:

- Each \`a\` may only be followed by an \`e\`.
- Each \`e\` may only be followed by an \`a\` or \`i\`.
- Each \`i\` may **not** be followed by another \`i\`.
- Each \`o\` may only be followed by an \`i\` or \`u\`.
- Each \`u\` may only be followed by an \`a\`.

Return the count modulo \`10^9 + 7\`.`,
  constraints: ['1 <= n <= 2 × 10^4'],
  examples: [
    {
      input: 'n = 1',
      output: '5',
      explanation: 'Any single vowel (a, e, i, o, u) is valid.',
    },
    {
      input: 'n = 2',
      output: '10',
      explanation:
        'Valid 2-letter strings: ae, ea, ei, ia, ie, io, iu, oi, ou, ua.',
    },
  ],
  hints: [
    'Think about which vowels can PRECEDE each vowel, based on the rules. For example, `a` can be preceded by `e`, `i`, or `u` (since e→a, i→a, u→a).',
    'Let dp[c] = number of valid strings of the current length ending in vowel c. At each step, compute new counts: dp_new[a] = dp[e] + dp[i] + dp[u], dp_new[e] = dp[a] + dp[i], etc.',
    'You only need O(1) space — just track five counts and update them each step. Iterate n-1 times starting from all-ones (length 1).',
  ],
  functionName: 'countVowelPermutation',
  params: ['n'],
  starterCode: {
    javascript: `function countVowelPermutation(n) {\n\n}`,
    python: `def countVowelPermutation(n):\n    pass`,
  },
  visibleTests: [
    { args: [1], expected: 5 },
    { args: [2], expected: 10 },
  ],
  hiddenTests: [
    { args: [3], expected: 19 },
    { args: [5], expected: 68 },
    { args: [144], expected: 18208803 },
  ],
};
