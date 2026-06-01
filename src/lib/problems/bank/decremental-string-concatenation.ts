import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decremental-string-concatenation',
  title: 'Decremental String Concatenation',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a **0-indexed** array \`words\` containing \`n\` strings.

Let's define a **join** operation \`join(x, y)\` between two strings \`x\` and \`y\` as concatenating them into \`xy\`. However, if the last character of \`x\` is equal to the first character of \`y\`, one of them is **deleted**.

For example, \`join("ab", "ba") = "aba"\` and \`join("ab", "cde") = "abcde"\`.

You are to perform \`n - 1\` join operations. Let \`str_0 = words[0]\`. For each index \`i\` in the range \`[1, n - 1]\`, you can choose **either**:

- \`str_i = join(str_{i-1}, words[i])\` (append)
- \`str_i = join(words[i], str_{i-1})\` (prepend)

Return *the **minimum** possible length of* \`str_{n-1}\`.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length <= 1000',
    'words[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["aa","ab","bc"]',
      output: '4',
      explanation:
        'join("aa","ab")="aab" (last a == first a, drop one) → length 3. join("aab","bc")="aabc" (b==b) → length 4.',
    },
    {
      input: 'words = ["ab","b"]',
      output: '2',
      explanation: 'join("ab","b")="ab" (last b == first b, drop one) → length 2.',
    },
    {
      input: 'words = ["aaa","c"]',
      output: '4',
      explanation: 'join("aaa","c")="aaac" (a != c, no drop) → length 4.',
    },
  ],
  hints: [
    'The only choices are whether each join saves a character or not — the saved character depends on the last char of the running string.',
    'DP state: dp[i][c] = minimum length of str_i where c is its last character.',
    'Transition: for each next word, the last char of str_i is either words[i][last] or the last char inherited from before. Try both and take the minimum.',
  ],
  functionName: 'minimizeConcatenatedLength',
  params: ['words'],
  starterCode: {
    javascript: 'function minimizeConcatenatedLength(words) {\n\n}\n',
    typescript: 'function minimizeConcatenatedLength(words: string[]): number {\n\n}\n',
    python: 'def minimizeConcatenatedLength(words):\n    pass\n',
  },
  visibleTests: [
    { args: [['aa','ab','bc']], expected: 4 },
    { args: [['ab','b']], expected: 2 },
    { args: [['aaa','c']], expected: 4 },
  ],
  hiddenTests: [
    { args: [['a']], expected: 1 },
    { args: [['abc']], expected: 3 },
    { args: [['a','a']], expected: 1 },
    { args: [['a','b']], expected: 2 },
    { args: [['ab','ba']], expected: 3 },
    { args: [['abc','cde','efg']], expected: 7 },
    { args: [['ab','bc','cd']], expected: 4 },
  ],
};
