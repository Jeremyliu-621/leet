import type { Problem } from '../types';

export const problem: Problem = {
  id: 'missing-ranges',
  title: 'Missing Ranges',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an inclusive range \`[lower, upper]\` and a **sorted unique** integer array \`nums\`, where all elements are within the inclusive range.

A number \`x\` is considered **missing** if \`x\` is in \`[lower, upper]\` and \`x\` is not in \`nums\`.

Return the **smallest sorted** list of ranges that cover every missing number exactly. That is, no element of \`nums\` is covered by any range, and each missing number is covered by exactly one range.

Each range \`[a, b]\` in the list should be output as:
- \`"a->b"\` if \`a !== b\`
- \`"a"\` if \`a === b\``,
  examples: [
    {
      input: 'nums = [0,1,3,50,75], lower = 0, upper = 99',
      output: '["2","4->49","51->74","76->99"]',
      explanation: 'Missing: 2, 4-49, 51-74, 76-99.',
    },
    {
      input: 'nums = [-1], lower = -1, upper = -1',
      output: '[]',
      explanation: 'No numbers are missing.',
    },
  ],
  constraints: [
    '-10^9 <= lower <= upper <= 10^9',
    '0 <= nums.length <= 100',
    'lower <= nums[i] <= upper',
    'All values of nums are unique.',
  ],
  functionName: 'findMissingRanges',
  params: ['nums', 'lower', 'upper'],
  starterCode: {
    javascript: 'function findMissingRanges(nums, lower, upper) {\n  // your code here\n}\n',
    python: 'def findMissingRanges(nums, lower, upper):\n    # your code here\n    pass\n',
  },
  hints: [
    'Walk through the gaps: the gap before nums[0], between consecutive elements, and after nums[n-1].',
    'The prev pointer starts at lower - 1, and you compare the next number to prev + 1 to find gaps.',
    'For a gap from `a` to `b`, output `"a"` if a === b, else `"a->b"`.',
  ],
  visibleTests: [
    { args: [[0, 1, 3, 50, 75], 0, 99], expected: ['2', '4->49', '51->74', '76->99'] },
    { args: [[-1], -1, -1], expected: [] },
    { args: [[], 1, 5], expected: ['1->5'] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 1, 5], expected: [] },
    { args: [[0, 2, 4], 0, 5], expected: ['1', '3', '5'] },
    { args: [[-3], -5, 5], expected: ['-5->-4', '-2->5'] },
    { args: [[5], 0, 9], expected: ['0->4', '6->9'] },
  ],
};
