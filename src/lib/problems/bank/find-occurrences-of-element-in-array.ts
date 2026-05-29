import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-occurrences-of-element-in-array',
  title: 'Find Occurrences of Element in Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`, another integer array \`queries\`, and an integer \`x\`.

For each query \`queries[i]\`, find the index of the \`queries[i]th\` **occurrence** of \`x\` in \`nums\`. If there are fewer than \`queries[i]\` occurrences of \`x\`, the answer for that query is **-1**.

Return an integer array \`answer\` of length equal to \`queries\`, where \`answer[i]\` is the answer to the \`i\`th query.

**Note:** The queries are **1-indexed** — the 1st occurrence is the first time \`x\` appears in \`nums\`.`,
  constraints: [
    '1 <= nums.length, queries.length <= 100',
    '1 <= nums[i], queries[i] <= 100',
    '1 <= x <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,3,1,7], queries = [1,3,2,4], x = 1',
      output: '[0,-1,2,-1]',
      explanation:
        'x=1 appears at indices 0 and 2. Query 1 → index 0; query 3 → only 2 occurrences so -1; query 2 → index 2; query 4 → -1.',
    },
    {
      input: 'nums = [1,2,3], queries = [10], x = 5',
      output: '[-1]',
      explanation: 'x=5 does not appear in nums at all.',
    },
  ],
  hints: [
    'Collect all indices where nums[i] === x into a positions array.',
    'For each query q, return positions[q-1] if it exists, else -1.',
    'Note that queries are 1-indexed: query 1 asks for the first occurrence, query 2 for the second, and so on.',
  ],
  functionName: 'occurrencesOfElement',
  params: ['nums', 'queries', 'x'],
  starterCode: {
    javascript: `function occurrencesOfElement(nums, queries, x) {\n  \n}`,
    typescript: `function occurrencesOfElement(nums: number[], queries: number[], x: number): number[] {\n  \n}`,
    python: `def occurrencesOfElement(nums, queries, x):\n    `,
  },
  visibleTests: [
    { args: [[1, 3, 1, 7], [1, 3, 2, 4], 1], expected: [0, -1, 2, -1] },
    { args: [[1, 2, 3], [10], 5], expected: [-1] },
    { args: [[1, 1, 1], [1, 2, 3], 1], expected: [0, 1, 2] },
  ],
  hiddenTests: [
    { args: [[1, 3, 1, 7], [1, 3, 2, 4], 1], expected: [0, -1, 2, -1] },
    { args: [[1, 2, 3], [10], 5], expected: [-1] },
    { args: [[1, 1, 1], [1, 2, 3], 1], expected: [0, 1, 2] },
    { args: [[5], [1], 5], expected: [0] },
    { args: [[5], [2], 5], expected: [-1] },
    { args: [[2, 3, 2, 3, 2], [1, 2, 3], 2], expected: [0, 2, 4] },
    { args: [[1, 2, 3, 4, 5], [1, 1], 6], expected: [-1, -1] },
    { args: [[7, 7, 7, 7, 7], [3, 5, 6], 7], expected: [2, 4, -1] },
  ],
};
