import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-valid-strings-to-form-target-i',
  title: 'Minimum Number of Valid Strings to Form Target I',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given an array of strings \`words\` and a string \`target\`.

A string \`x\` is called **valid** if \`x\` is a **prefix** of **any** string in \`words\`.

Return the **minimum** number of valid strings that can be **concatenated** to form \`target\`. If it is not possible to form \`target\`, return \`-1\`.`,
  constraints: [
    '`1 <= words.length <= 100`',
    '`1 <= words[i].length <= 5`',
    '`1 <= target.length <= 100`',
    '`words[i]` and `target` consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["abc","aaaaa","bcdef"], target = "aabcdabc"',
      output: '3',
      explanation: '"aa" (prefix of "aaaaa") + "bcd" (prefix of "bcdef") + "abc" = "aabcdabc". 3 pieces.',
    },
    {
      input: 'words = ["abababab","ab"], target = "ababaababa"',
      output: '2',
      explanation: '"ababa" (prefix of "abababab") + "ababa" = "ababaababa". 2 pieces.',
    },
    {
      input: 'words = ["a","b"], target = "ab"',
      output: '2',
      explanation: '"a" + "b" = "ab". 2 pieces.',
    },
  ],
  hints: [
    'Build the set of all valid strings once: for each word in words, add every non-empty prefix to a Set.',
    'Use DP: dp[i] = minimum valid strings to form target[0..i-1]. dp[0] = 0; dp[i] = Infinity initially.',
    'For each position i (left end of next piece) and each length j (1 to target.length − i), if target.slice(i, i+j) is in the prefix Set, update dp[i+j] = min(dp[i+j], dp[i]+1). Return dp[target.length] (or -1 if still Infinity).',
  ],
  functionName: 'minValidStrings',
  params: ['words', 'target'],
  starterCode: {
    javascript: `function minValidStrings(words, target) {

}`,
    typescript: 'function minValidStrings(words: string[], target: string): number {\n\n}',
    python: `def minValidStrings(words, target):
    pass`,
  },
  visibleTests: [
    { args: [['abc', 'aaaaa', 'bcdef'], 'aabcdabc'], expected: 3 },
    { args: [['abababab', 'ab'], 'ababaababa'], expected: 2 },
    { args: [['a', 'b'], 'ab'], expected: 2 },
  ],
  hiddenTests: [
    { args: [['a'], 'aa'], expected: 2 },
    { args: [['abc'], 'ababc'], expected: 2 },
    { args: [['hello', 'world'], 'helloworld'], expected: 2 },
    { args: [['x'], 'y'], expected: -1 },
    { args: [['ab', 'cd'], 'abcd'], expected: 2 },
    { args: [['abc'], 'abcabc'], expected: 2 },
    { args: [['a'], 'b'], expected: -1 },
    { args: [['abc', 'def'], 'abcdef'], expected: 2 },
    { args: [['ab'], 'ababab'], expected: 3 },
  ],
};
