import type { Problem } from '../types';

export const problem: Problem = {
  id: 'delete-and-earn',
  title: 'Delete and Earn',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an integer array \`nums\`. You want to maximize the number of points you get by performing the following operation any number of times:

- Pick any \`nums[i]\` and delete it to earn \`nums[i]\` points. Afterwards, you must delete **every** element equal to \`nums[i] - 1\` and every element equal to \`nums[i] + 1\`.

Return the **maximum number of points** you can earn by applying the above operation some number of times.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^4',
    '1 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [3,4,2]',
      output: '6',
      explanation: 'Delete 4 to earn 4 points (deletes 3 and 5), then delete 2 to earn 2 points. Total = 6.',
    },
    {
      input: 'nums = [2,2,3,3,3,4]',
      output: '9',
      explanation: 'Delete 3 to earn 9 points (3*3=9, deletes all 2s and 4s). Total = 9.',
    },
  ],
  hints: [
    'Build a sum array: sum[i] = total points earned if you take all elements equal to i.',
    'This reduces to House Robber: you cannot take both sum[i] and sum[i+1].',
  ],
  functionName: 'deleteAndEarn',
  params: ['nums'],
  starterCode: {
    javascript: 'function deleteAndEarn(nums) {\n\n}\n',
    python: 'def deleteAndEarn(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 4, 2]], expected: 6 },
    { args: [[2, 2, 3, 3, 3, 4]], expected: 9 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[3, 1]], expected: 4 },
    { args: [[1, 1, 1, 2, 4, 5, 5, 5]], expected: 18 },
  ],
};
