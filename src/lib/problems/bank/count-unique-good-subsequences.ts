import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-unique-good-subsequences',
  title: 'Count Unique Good Subsequences',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `A binary string is called **good** if it does not have leading zeros, OR it is equal to \`"0"\`.

Given a binary string \`binary\`, return the number of **unique** good subsequences of \`binary\` modulo \`10^9 + 7\`.

A **subsequence** is a sequence that can be derived from another sequence by deleting some (or no) characters without changing the order of the remaining characters. Two subsequences are considered **different** if they differ as strings, not by the positions from which they were derived.`,
  constraints: [
    '1 <= binary.length <= 10^5',
    'binary consists only of \'0\'s and \'1\'s',
  ],
  examples: [
    {
      input: 'binary = "001"',
      output: '2',
      explanation:
        'The unique good subsequences are "0" and "1". "01" and "001" are not good because they have leading zeros. "00" also has a leading zero.',
    },
    {
      input: 'binary = "11"',
      output: '2',
      explanation:
        'The unique good subsequences are "1" and "11".',
    },
    {
      input: 'binary = "101"',
      output: '5',
      explanation:
        'The unique good subsequences are "0", "1", "10", "11", "101". Note "0" is valid because it equals "0".',
    },
  ],
  hints: [
    'Level 1: Think about building good subsequences character by character. A good subsequence either starts with \'1\' or is exactly "0". Can you count subsequences ending in \'0\' and subsequences ending in \'1\' separately?',
    'Level 2: Let dp[0] = number of distinct good subsequences (excluding lone "0") ending with \'0\', and dp[1] = distinct good subsequences ending with \'1\'. When you see a \'1\': dp[1] = dp[0] + dp[1] + 1 (all existing subseqs extended, plus "1" alone). When you see a \'0\': dp[0] = dp[0] + dp[1] (extend all existing; you cannot start a new good subseq with \'0\').',
    'Level 3: The answer is dp[0] + dp[1] + (1 if binary contains any \'0\' else 0). The extra +1 accounts for the lone "0" subsequence. All arithmetic mod 10^9 + 7.',
  ],
  functionName: 'countGoodSubsequences',
  params: ['binary'],
  starterCode: {
    javascript: `function countGoodSubsequences(binary) {
  // return the count of unique good subsequences mod 10^9 + 7
}`,
    typescript: `function countGoodSubsequences(binary: string): number {
  // return the count of unique good subsequences mod 10^9 + 7
}`,
    python: `def countGoodSubsequences(binary: str) -> int:
    # return the count of unique good subsequences mod 10**9 + 7
    pass`,
  },
  visibleTests: [
    { args: ['001'], expected: 2 },
    { args: ['11'], expected: 2 },
    { args: ['101'], expected: 5 },
  ],
  hiddenTests: [
    { args: ['0'], expected: 1 },
    { args: ['1'], expected: 1 },
    { args: ['10'], expected: 3 },
    { args: ['110'], expected: 5 },
    { args: ['0001'], expected: 2 },
    { args: ['111'], expected: 3 },
    { args: ['1010'], expected: 8 },
    { args: ['0110'], expected: 5 },
  ],
};
