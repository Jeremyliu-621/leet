import type { Problem } from '../types';

export const problem: Problem = {
  id: 'missing-ranges',
  title: 'Missing Ranges',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an inclusive range \`[lower, upper]\` and a **sorted unique** integer array \`nums\`, where all elements are within the inclusive range.

A number \`x\` is considered **missing** if \`x\` is in the range \`[lower, upper]\` and \`x\` is not in \`nums\`.

Return the **shortest sorted** list of ranges that **exactly cover** all the missing numbers. That is, no element of \`nums\` is in any of the ranges, and each missing number is covered by one of the ranges.

A range \`[a, b]\` is represented as \`"a->b"\` if \`a < b\`, or \`"a"\` if \`a === b\`.`,
  constraints: [
    '`-10^9 <= lower <= upper <= 10^9`',
    '`0 <= nums.length <= 100`',
    '`lower <= nums[i] <= upper`',
    'All the values of `nums` are **unique**',
  ],
  examples: [
    {
      input: 'nums = [0,1,3,50,75], lower = 0, upper = 99',
      output: '["2","4->49","51->74","76->99"]',
      explanation: 'Missing ranges: 2, 4-49, 51-74, 76-99.',
    },
    {
      input: 'nums = [-1], lower = -1, upper = -1',
      output: '[]',
      explanation: 'The only number in the range is already in nums.',
    },
  ],
  hints: [
    'Iterate through gaps: before the first element, between consecutive elements, and after the last element.',
    'For each gap [start, end], if start === end output "start", otherwise output "start->end".',
    `\`\`\`js
function findMissingRanges(nums, lower, upper) {
  const res = [];
  const addRange = (lo, hi) => {
    if (lo > hi) return;
    res.push(lo===hi ? String(lo) : \`\${lo}->\${hi}\`);
  };
  addRange(lower, (nums[0]??upper+1)-1);
  for (let i=1; i<nums.length; i++) addRange(nums[i-1]+1, nums[i]-1);
  addRange((nums[nums.length-1]??lower-1)+1, upper);
  return res;
}\`\`\``,
  ],
  functionName: 'findMissingRanges',
  params: ['nums', 'lower', 'upper'],
  starterCode: {
    javascript: `function findMissingRanges(nums, lower, upper) {

}`,
    python: `def findMissingRanges(nums, lower, upper):
    pass`,
  },
  visibleTests: [
    { args: [[0,1,3,50,75], 0, 99], expected: ['2', '4->49', '51->74', '76->99'] },
    { args: [[-1], -1, -1], expected: [] },
  ],
  hiddenTests: [
    { args: [[], 1, 1], expected: ['1'] },
    { args: [[], -3, -1], expected: ['-3->-1'] },
    { args: [[1, 3], 0, 5], expected: ['0', '2', '4->5'] },
    { args: [[0, 1, 2, 3, 4], 0, 4], expected: [] },
  ],
};
