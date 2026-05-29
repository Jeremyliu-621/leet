import type { Problem } from '../types';

export const problem: Problem = {
  id: 'distribute-elements-into-two-arrays-i',
  title: 'Distribute Elements Into Two Arrays I',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given a **1-indexed** array of **distinct** integers \`nums\`.

We will use the following procedure to create two arrays \`arr1\` and \`arr2\`:

1. ​If \`nums[1] > nums[2]\`, put \`nums[1]\` into \`arr1\` and \`nums[2]\` into \`arr2\`.
2. Otherwise, put \`nums[1]\` into \`arr2\` and \`nums[2]\` into \`arr1\`.
3. For \`i\` from \`3\` to \`n\`:
   - If \`arr1[last] > arr2[last]\`, put \`nums[i]\` into \`arr1\`.
   - Otherwise, put \`nums[i]\` into \`arr2\`.

Return the array formed by concatenating \`arr1\` and \`arr2\`.`,
  constraints: [
    '3 <= nums.length <= 100',
    '1 <= nums[i] <= 200',
    'All elements in nums are distinct.',
  ],
  examples: [
    {
      input: 'nums = [2,1,3]',
      output: '[2,3,1]',
      explanation: 'nums[1]=2>nums[2]=1 → arr1=[2], arr2=[1]. nums[3]=3: arr1.last=2>arr2.last=1, so add to arr1=[2,3]. Result: [2,3]+[1]=[2,3,1].',
    },
    {
      input: 'nums = [5,4,3,8]',
      output: '[5,3,4,8]',
      explanation: 'nums[1]=5>nums[2]=4 → arr1=[5], arr2=[4]. nums[3]=3: 5>4 → arr1=[5,3]. nums[4]=8: 3<4 → arr2=[4,8]. Result: [5,3]+[4,8]=[5,3,4,8].',
    },
  ],
  hints: [
    'Follow the procedure exactly as described.',
    'Initialize arr1 and arr2 from the first two elements based on which is larger.',
    'For each remaining element, compare the last elements of arr1 and arr2.',
  ],
  functionName: 'resultArray',
  params: ['nums'],
  starterCode: {
    javascript: `function resultArray(nums) {\n  \n}`,
    typescript: `function resultArray(nums: number[]): number[] {\n  \n}`,
    python: `def resultArray(nums):\n    `,
  },
  visibleTests: [
    { args: [[2, 1, 3]], expected: [2, 3, 1] },
    { args: [[5, 4, 3, 8]], expected: [5, 3, 4, 8] },
    { args: [[1, 2, 3]], expected: [2, 3, 1] },
  ],
  hiddenTests: [
    { args: [[2, 1, 3]], expected: [2, 3, 1] },
    { args: [[5, 4, 3, 8]], expected: [5, 3, 4, 8] },
    { args: [[1, 2, 3]], expected: [2, 3, 1] },
    { args: [[3, 1, 2]], expected: [3, 2, 1] },
    { args: [[10, 20, 5, 15]], expected: [20, 5, 10, 15] },
    { args: [[1, 3, 2]], expected: [3, 2, 1] },
    { args: [[7, 4, 6, 5, 1]], expected: [7, 6, 5, 1, 4] },
    { args: [[100, 1, 50, 75, 25]], expected: [100, 50, 75, 25, 1] },
  ],
};
