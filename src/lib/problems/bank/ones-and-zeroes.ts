import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ones-and-zeroes',
  title: 'Ones and Zeroes',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an array of binary strings \`strs\` and two integers \`m\` and \`n\`.

Return the size of the largest subset of \`strs\` such that there are at most \`m\` \`0\`s and \`n\` \`1\`s in the subset.

A set \`x\` is a **subset** of a set \`y\` if all elements of \`x\` are also elements of \`y\`.`,
  constraints: [
    '`1 <= strs.length <= 600`',
    '`1 <= strs[i].length <= 100`',
    '`strs[i]` consists only of digits `\'0\'` and `\'1\'`',
    '`0 <= m, n <= 100`',
  ],
  examples: [
    {
      input: 'strs = ["10","0001","111001","1","0"], m = 5, n = 3',
      output: '4',
      explanation:
        'The largest subset with at most 5 zeros and 3 ones is {"10","0001","1","0"}: 1+3+0+1=5 zeros and 1+1+1+0=3 ones.',
    },
    {
      input: 'strs = ["10","0","1"], m = 1, n = 1',
      output: '2',
      explanation:
        'The largest subset is {"0","1"}: 1 zero and 1 one, which is within budget.',
    },
  ],
  hints: [
    'This is a 0/1 knapsack problem with two capacities. Define `dp[i][j]` as the maximum number of strings you can select using at most `i` zeros and `j` ones.',
    'For each string, count its zeros and ones. Update the DP table in reverse order (to avoid using a string more than once): `dp[i][j] = max(dp[i][j], dp[i-zeros][j-ones] + 1)` for all valid `i`, `j`.',
    '```js\nfunction findMaxForm(strs, m, n) {\n  const dp = Array.from({length: m+1}, () => new Array(n+1).fill(0));\n  for (const s of strs) {\n    const zeros = s.split("").filter(c => c==="0").length;\n    const ones = s.length - zeros;\n    for (let i = m; i >= zeros; i--)\n      for (let j = n; j >= ones; j--)\n        dp[i][j] = Math.max(dp[i][j], dp[i-zeros][j-ones] + 1);\n  }\n  return dp[m][n];\n}\n```',
  ],
  functionName: 'findMaxForm',
  params: ['strs', 'm', 'n'],
  starterCode: {
    javascript: `function findMaxForm(strs, m, n) {

}`,
    python: `def findMaxForm(strs: list[str], m: int, n: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [['10', '0001', '111001', '1', '0'], 5, 3], expected: 4 },
    { args: [['10', '0', '1'], 1, 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [['0'], 0, 1], expected: 0 },
    { args: [['1', '0'], 1, 1], expected: 2 },
    { args: [['10', '01', '001', '011'], 3, 3], expected: 2 },
    { args: [['0', '00', '000'], 2, 0], expected: 1 },
    { args: [['1'], 0, 0], expected: 0 },
  ],
};
