import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-stay-in-same-place-after-some-steps',
  title: 'Number of Ways to Stay in the Same Place After Some Steps',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You have a pointer at index 0 in an array of size \`arrLen\`. At each step you can move left, right, or stay in place. After exactly \`steps\` steps, the pointer must be back at index 0. Return the number of ways (mod 10^9 + 7).

**DP:** \`dp[pos][step]\` = ways to be at \`pos\` after \`step\` steps. Max useful pos = \`min(arrLen-1, steps//2)\`. Transition from each pos: can go left (\`pos-1\`), right (\`pos+1\`), or stay.`,
  constraints: [
    '1 <= steps <= 500',
    '1 <= arrLen <= 10^6',
  ],
  examples: [
    {
      input: 'steps = 3, arrLen = 2',
      output: '4',
    },
    {
      input: 'steps = 2, arrLen = 4',
      output: '2',
    },
    {
      input: 'steps = 4, arrLen = 2',
      output: '8',
    },
  ],
  hints: [
    'Limit max useful position to min(arrLen-1, steps//2) since you need enough steps to return.',
    'dp[pos] = ways at pos. At each step, update right-to-left: ndp[i] = dp[i-1]+dp[i]+dp[i+1].',
    'Use rolling array (prev/curr) for space efficiency.',
  ],
  functionName: 'numWays',
  params: ['steps', 'arrLen'],
  starterCode: {
    javascript: 'function numWays(steps, arrLen) {\n\n}\n',
    typescript: "function numWays(steps: number, arrLen: number): number {\n\n}",

    python: 'def numWays(steps: int, arrLen: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [3, 2], expected: 4 },
    { args: [2, 4], expected: 2 },
    { args: [4, 2], expected: 8 },
  ],
  hiddenTests: [
    { args: [1, 2], expected: 1 },
    { args: [2, 2], expected: 2 },
    { args: [3, 4], expected: 4 },
    { args: [10, 7], expected: 2188 },
  ],
};
