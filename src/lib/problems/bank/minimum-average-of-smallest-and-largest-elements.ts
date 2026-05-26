import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-average-of-smallest-and-largest-elements',
  title: 'Minimum Average of Smallest and Largest Elements',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You have an array of floating point numbers \`averages\` which is initially empty. You are given an array \`nums\` of \`n\` integers where \`n\` is even.

You repeat the following procedure \`n / 2\` times:
- Remove the **smallest** element, \`minElement\`, and the **largest** element, \`maxElement\`, from \`nums\`.
- Add \`(minElement + maxElement) / 2\` to \`averages\`.

Return the **minimum** element of \`averages\`.`,
  constraints: [
    '2 <= n == nums.length <= 50',
    'n is even.',
    '1 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [7,8,3,4,15,13,4,1]',
      output: '5.5',
      explanation: 'Sorted: [1,3,4,4,7,8,13,15]. Averages: 8,8,6,5.5. Minimum: 5.5.',
    },
    {
      input: 'nums = [1,9,8,3,10,5]',
      output: '5.5',
      explanation: 'Sorted: [1,3,5,8,9,10]. Averages: 5.5,6,6.5. Minimum: 5.5.',
    },
  ],
  hints: [
    'Sort nums. Take pairs (nums[0],nums[n-1]), (nums[1],nums[n-2]), etc.',
    'Compute average of each pair and return the minimum.',
    `\`\`\`js
function minimumAverage(nums) {
  nums.sort((a,b)=>a-b);
  let minAvg = Infinity;
  const n = nums.length;
  for (let i = 0; i < n/2; i++)
    minAvg = Math.min(minAvg, (nums[i]+nums[n-1-i])/2);
  return minAvg;
}\`\`\``,
  ],
  functionName: 'minimumAverage',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumAverage(nums) {

}`,
    python: `def minimumAverage(nums):
    pass`,
  },
  visibleTests: [
    { args: [[7, 8, 3, 4, 15, 13, 4, 1]], expected: 5.5 },
    { args: [[1, 9, 8, 3, 10, 5]], expected: 5.5 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4]], expected: 2.5 },
    { args: [[1, 10, 11, 100]], expected: 10.5 },
    { args: [[1, 1]], expected: 1 },
    { args: [[3, 3, 3, 3]], expected: 3 },
  ],
};
