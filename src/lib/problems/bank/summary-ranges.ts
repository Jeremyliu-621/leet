import type { Problem } from '../types';

export const problem: Problem = {
  id: 'summary-ranges',
  title: 'Summary Ranges',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **sorted unique** integer array \`nums\`.

A **range** \`[a,b]\` is the set of all integers from \`a\` to \`b\` (inclusive).

Return *the **smallest sorted** list of ranges that **cover all the numbers in the array exactly***. That is, each element of \`nums\` is covered by exactly one of the ranges, and there is no integer \`x\` such that \`x\` is in one of the ranges but not in \`nums\`.

Each range \`[a,b]\` in the list should be output as:
- \`"a->b"\` if \`a != b\`
- \`"a"\` if \`a == b\``,
  constraints: [
    '0 <= nums.length <= 20',
    '-2^31 <= nums[i] <= 2^31 - 1',
    'All the values of nums are unique.',
    'nums is sorted in ascending order.',
  ],
  examples: [
    {
      input: 'nums = [0,1,2,4,5,7]',
      output: '["0->2","4->5","7"]',
      explanation: 'The ranges are: [0,2] --> "0->2", [4,5] --> "4->5", [7,7] --> "7"',
    },
    {
      input: 'nums = [0,2,3,4,6,8,9]',
      output: '["0","2->4","6","8->9"]',
      explanation: 'The ranges are: [0,0] --> "0", [2,4] --> "2->4", [6,6] --> "6", [8,9] --> "8->9"',
    },
  ],
  hints: [
    'Iterate through nums, tracking the start of the current range.',
    'When the next element is not consecutive, close the current range and start a new one.',
    'Format the range as "a->b" if a != b, otherwise just "a".',
  ],
  functionName: 'summaryRanges',
  params: ['nums'],
  starterCode: {
    javascript: `function summaryRanges(nums) {
  // Return list of compact range strings
}`,
    python: `def summaryRanges(nums):
    # Return list of compact range strings
    pass`,
  },
  visibleTests: [
    { args: [[0, 1, 2, 4, 5, 7]], expected: ['0->2', '4->5', '7'] },
    { args: [[0, 2, 3, 4, 6, 8, 9]], expected: ['0', '2->4', '6', '8->9'] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1]], expected: ['1'] },
    { args: [[0, 1, 2, 3, 4]], expected: ['0->4'] },
    { args: [[-1, 0, 1]], expected: ['-1->1'] },
    { args: [[0, 2, 4, 6]], expected: ['0', '2', '4', '6'] },
  ],
};
