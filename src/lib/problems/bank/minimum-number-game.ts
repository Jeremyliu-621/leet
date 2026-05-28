import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-game',
  title: 'Minimum Number Game',
  difficulty: 'easy',
  tags: ['arrays', 'heap'],
  description: `You are given a **0-indexed** integer array \`nums\` of **even** length. You play a game with two players. On each turn, both players perform the following steps **in order**:

1. The **first** player (Alice) removes the minimum element from \`nums\`.
2. The **second** player (Bob) removes the minimum element from the remaining \`nums\`.
3. Bob appends the element he removed to array \`arr\`.
4. Alice appends the element she removed to array \`arr\`.

The game continues until \`nums\` becomes empty. Return the resulting array \`arr\`.`,
  constraints: [
    '2 <= nums.length <= 100',
    'nums.length is even.',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [5,4,2,3]',
      output: '[3,2,5,4]',
      explanation: 'Round 1: Alice removes 2, Bob removes 3. arr=[3,2]. Round 2: Alice removes 4, Bob removes 5. arr=[3,2,5,4].',
    },
    {
      input: 'nums = [2,5]',
      output: '[5,2]',
      explanation: 'Alice removes 2, Bob removes 5. arr=[5,2].',
    },
  ],
  hints: [
    'Sort `nums` first to simulate picking the minimum efficiently.',
    'Iterate in pairs: for each pair (nums[i], nums[i+1]) after sorting, Bob gets nums[i+1] first, then Alice gets nums[i].',
    'In each round, the first pick goes to Alice, the second to Bob. Bob appends first to arr, then Alice.',
  ],
  functionName: 'numberGame',
  params: ['nums'],
  starterCode: {
    javascript: 'function numberGame(nums) {\n  \n}\n',
    typescript: "function numberGame(nums: number[]): number[] {\n  \n}",

    python: 'def numberGame(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 4, 2, 3]], expected: [3, 2, 5, 4] },
    { args: [[2, 5]], expected: [5, 2] },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: [2, 1] },
    { args: [[3, 3, 3, 3]], expected: [3, 3, 3, 3] },
    { args: [[10, 1, 5, 3]], expected: [3, 1, 10, 5] },
    { args: [[6, 2, 4, 8]], expected: [4, 2, 8, 6] },
    { args: [[1, 100]], expected: [100, 1] },
  ],
};
