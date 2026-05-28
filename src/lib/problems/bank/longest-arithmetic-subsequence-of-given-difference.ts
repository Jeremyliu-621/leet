import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-arithmetic-subsequence-of-given-difference',
  title: 'Longest Arithmetic Subsequence of Given Difference',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming', 'hash-map'],
  description: `Given an integer array \`arr\` and an integer \`difference\`, find the length of the **longest subsequence** in \`arr\` such that the difference between each two consecutive elements in the subsequence equals \`difference\`.

**Approach:** Single-pass DP. Maintain a hash map \`dp\` where \`dp[v]\` = length of the longest valid subsequence ending at value \`v\`. For each element \`x\`, \`dp[x] = dp[x - difference] + 1\`.`,
  constraints: [
    '1 <= arr.length <= 10^5',
    '-10^4 <= arr[i] <= 10^4',
    '-10^4 <= difference <= 10^4',
  ],
  examples: [
    {
      input: 'arr = [1,2,3,4], difference = 1',
      output: '4',
      explanation: 'The longest subsequence is [1,2,3,4].',
    },
    {
      input: 'arr = [1,3,5,7], difference = 1',
      output: '1',
      explanation: 'No two consecutive elements differ by 1.',
    },
    {
      input: 'arr = [1,5,7,8,5,3,4,2,1], difference = -2',
      output: '4',
      explanation: '[7,5,3,1] is a valid subsequence of length 4.',
    },
  ],
  hints: [
    'For each element `x`, the longest valid subsequence ending at `x` has length `dp[x - difference] + 1` (or 1 if `x - difference` hasn\'t been seen).',
    'Scan left to right. For each `x`, set `dp[x] = (dp[x - difference] ?? 0) + 1`. Track the running maximum.',
    '```js\nconst dp = new Map();\nlet ans = 1;\nfor (const x of arr) {\n  const prev = dp.get(x - difference) ?? 0;\n  dp.set(x, prev + 1);\n  ans = Math.max(ans, prev + 1);\n}\nreturn ans;\n```',
  ],
  functionName: 'longestSubsequence',
  params: ['arr', 'difference'],
  starterCode: {
    javascript: `function longestSubsequence(arr, difference) {
  // return the length of the longest arithmetic subsequence
  // with consecutive difference equal to 'difference'

}`,
    typescript: "function longestSubsequence(arr: number[], difference: number): number {\n  // return the length of the longest arithmetic subsequence\n  // with consecutive difference equal to 'difference'\n\n}",

    python: `def longestSubsequence(arr: list, difference: int) -> int:
    # return the length of the longest arithmetic subsequence
    # with consecutive difference equal to 'difference'
    pass
`,
  },
  visibleTests: [
    { args: [[1,2,3,4], 1], expected: 4 },
    { args: [[1,3,5,7], 1], expected: 1 },
    { args: [[1,5,7,8,5,3,4,2,1], -2], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: 1 },
    { args: [[1,2,3], 0], expected: 1 },
    { args: [[3,3,3], 0], expected: 3 },
    { args: [[1,2,3,4,5], 2], expected: 3 },
    { args: [[10,9,8,7,6], -1], expected: 5 },
  ],
};
