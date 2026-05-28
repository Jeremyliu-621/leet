import type { Problem } from '../types';

export const problem: Problem = {
  id: 'how-many-numbers-smaller-than-current',
  title: 'How Many Numbers Are Smaller Than the Current Number',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given the array \`nums\`, for each \`nums[i]\` find out how many numbers in the array are smaller than it. That is, for each \`nums[i]\` you have to count the number of valid \`j\`'s such that \`j != i\` **and** \`nums[j] < nums[i]\`.

Return the answer in an array.`,
  constraints: [
    '`2 <= nums.length <= 500`',
    '`0 <= nums[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums = [8,1,2,2,3]',
      output: '[4,0,1,1,3]',
      explanation: 'For nums[0]=8: four numbers are smaller (1,2,2,3). For nums[1]=1: zero numbers are smaller. For nums[2]=2 and nums[3]=2: one number is smaller (1). For nums[4]=3: three numbers are smaller (1,2,2).',
    },
    {
      input: 'nums = [6,5,4,8]',
      output: '[2,1,0,3]',
    },
    {
      input: 'nums = [7,7,7,7]',
      output: '[0,0,0,0]',
    },
  ],
  hints: [
    'Sort a copy of the array. For each element, the number of smaller elements equals its first occurrence index in the sorted array.',
    'Use a hash map to store the result for each unique value after sorting to avoid recomputation.',
    `\`\`\`js
function smallerNumbersThanCurrent(nums) {
  const sorted = [...nums].sort((a,b)=>a-b);
  return nums.map(n => sorted.indexOf(n)); // O(n²); optimize with Map
}\`\`\``,
  ],
  functionName: 'smallerNumbersThanCurrent',
  params: ['nums'],
  starterCode: {
    javascript: `function smallerNumbersThanCurrent(nums) {

}`,
    python: `def smallerNumbersThanCurrent(nums):
    pass`,
  },
  visibleTests: [
    { args: [[8, 1, 2, 2, 3]], expected: [4, 0, 1, 1, 3] },
    { args: [[6, 5, 4, 8]], expected: [2, 1, 0, 3] },
    { args: [[7, 7, 7, 7]], expected: [0, 0, 0, 0] },
  ],
  hiddenTests: [
    { args: [[0]], expected: [0] },
    { args: [[0, 0, 0]], expected: [0, 0, 0] },
    { args: [[1, 2, 3]], expected: [0, 1, 2] },
    { args: [[5, 0, 10, 0, 10, 6]], expected: [2, 0, 4, 0, 4, 3] },
  ],
};
