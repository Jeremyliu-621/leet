import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-form-target-given-dictionary',
  title: 'Number of Ways to Form a Target String Given a Dictionary',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `You are given a list of strings of the **same length** \`words\` and a string \`target\`.

Your task is to form \`target\` using the given \`words\` under the following rules:

- \`target\` should be formed from **left to right**.
- To form the \`i\`th character (**0-indexed**) of \`target\`, you can choose the \`k\`th character of the \`j\`th string in \`words\` if \`target[i] = words[j][k]\`.
- Once you use the \`k\`th character of \`words[j]\`, you can no longer use the \`x\`th character of any string in \`words\` where \`x <= k\`.
- Repeat the process until you form the string \`target\`.

Return the number of ways to form \`target\` from \`words\`. Return the answer **modulo 10^9 + 7**.

**DP:** Count character frequencies per column. Then \`dp[i]\` = ways to form first \`i\` chars of target after processing some columns.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length <= 1000',
    'All strings in words have the same length.',
    '1 <= target.length <= 1000',
    'words[i] and target contain only lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["acca","bbbb","caca"], target = "aba"',
      output: '6',
    },
    {
      input: 'words = ["abba","baab"], target = "bab"',
      output: '4',
    },
  ],
  hints: [
    'Precompute count[j][c] = number of words having character c at column j.',
    'dp[i] = number of ways to form target[0..i-1]. Process columns left to right.',
    'For each column j and each target position i (reverse order): dp[i] += dp[i-1] * count[j][target[i-1]].',
  ],
  functionName: 'numWays',
  params: ['words', 'target'],
  starterCode: {
    javascript: 'function numWays(words, target) {\n\n}\n',
    python: 'def numWays(words: list, target: str) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [['acca','bbbb','caca'], 'aba'], expected: 6 },
    { args: [['abba','baab'], 'bab'], expected: 4 },
  ],
  hiddenTests: [
    { args: [['a'], 'a'], expected: 1 },
    { args: [['aa','ab'], 'a'], expected: 3 },
    { args: [['abc','bcd'], 'bc'], expected: 3 },
    { args: [['aaa','bbb','ccc'], 'abc'], expected: 1 },
  ],
};
