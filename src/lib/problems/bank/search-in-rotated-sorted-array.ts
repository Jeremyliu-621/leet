import type { Problem } from '../types';

export const problem: Problem = {
  id: 'search-in-rotated-sorted-array',
  title: 'Search in Rotated Sorted Array',
  difficulty: 'medium',
  tags: ['binary-search'],
  description: `There is an integer array \`nums\` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, \`nums\` is **possibly rotated** at an unknown pivot index \`k\` (\`1 <= k < nums.length\`) such that the resulting array is \`[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]\` (\`0-indexed\`).

Given the array \`nums\` after the possible rotation and an integer \`target\`, return the index of \`target\` if it is in \`nums\`, or \`-1\` if it is not in \`nums\`.

You must write an algorithm with \`O(log n)\` runtime complexity.`,
  constraints: [
    '1 <= nums.length <= 5000',
    '-10^4 <= nums[i] <= 10^4',
    'All values of nums are unique.',
    'nums is an ascending array that is possibly rotated.',
    '-10^4 <= target <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [4,5,6,7,0,1,2], target = 0',
      output: '4',
    },
    {
      input: 'nums = [4,5,6,7,0,1,2], target = 3',
      output: '-1',
    },
    {
      input: 'nums = [1], target = 0',
      output: '-1',
    },
  ],
  hints: [
    'At each step, one half of the array is always sorted.',
    'Determine which half is sorted, then check if target falls in that sorted half.',
    `\`\`\`js
function search(nums, target) {
  let lo=0,hi=nums.length-1;
  while(lo<=hi){
    const mid=(lo+hi)>>1;
    if(nums[mid]===target) return mid;
    if(nums[lo]<=nums[mid]){
      if(nums[lo]<=target&&target<nums[mid])hi=mid-1;else lo=mid+1;
    } else {
      if(nums[mid]<target&&target<=nums[hi])lo=mid+1;else hi=mid-1;
    }
  }
  return -1;
}\`\`\``,
  ],
  functionName: 'search',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function search(nums, target) {\n\n}\n',
    typescript: "function search(nums: number[], target: number): number {\n\n}",

    python: 'def search(nums, target):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
    { args: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
    { args: [[1], 0], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[3, 1], 1], expected: 1 },
    { args: [[5, 1, 3], 3], expected: 2 },
    { args: [[1, 3, 5], 5], expected: 2 },
  ],
};
