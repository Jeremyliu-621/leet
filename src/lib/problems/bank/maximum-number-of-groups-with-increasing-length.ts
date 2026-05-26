import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-groups-with-increasing-length',
  title: 'Maximum Number of Groups With Increasing Length',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** array \`usageLimits\` of length \`n\`.

Your task is to create **groups** using numbers from \`0\` to \`n - 1\`, ensuring each number \`i\` is used **at most** \`usageLimits[i]\` times in total across **all** groups. You must also satisfy the following conditions:

- Each group must consist of **distinct** numbers.
- The length of the \`j\`-th group (**1-indexed**) must be **strictly greater** than \`j - 1\`. That is, group 1 has length ≥ 1, group 2 has length ≥ 2, and so on.

Return the **maximum number of groups** you can create while satisfying these conditions.`,
  constraints: [
    '1 <= usageLimits.length <= 10^5',
    '1 <= usageLimits[i] <= 10^9',
  ],
  examples: [
    {
      input: 'usageLimits = [1,2,5]',
      output: '3',
      explanation: 'Form group 1 with {2}, group 2 with {1,2}, group 3 with {0,1,2}. Total uses: 0→1, 1→2, 2→3, all within limits.',
    },
    {
      input: 'usageLimits = [2,1,2]',
      output: '2',
      explanation: 'We can form group 1 with {0} and group 2 with {0,2}. We cannot form 3 groups because the total required (1+2+3=6) exceeds the sum of limits (5).',
    },
  ],
  hints: [
    'Sort usageLimits. Groups 1..m require at least 1+2+...+m = m*(m+1)/2 total slots.',
    'After sorting, element i (0-indexed) can contribute at most min(usageLimits[i], m) to m groups.',
    'Binary search on the answer m: check if sum(min(usageLimits[i], m)) >= m*(m+1)/2.',
  ],
  functionName: 'maximumGroups',
  params: ['usageLimits'],
  starterCode: {
    javascript: 'function maximumGroups(usageLimits) {\n  \n}\n',
    python: 'def maximumGroups(usageLimits):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 5]], expected: 3 },
    { args: [[2, 1, 2]], expected: 2 },
    { args: [[1, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1000000000]], expected: 1 },
    { args: [[1, 1, 1, 1]], expected: 2 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[5, 5, 5, 5, 5]], expected: 5 },
  ],
};
