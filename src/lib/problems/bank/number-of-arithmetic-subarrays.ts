import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-arithmetic-subarrays',
  title: 'Number of Arithmetic Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `A sequence of numbers is called **arithmetic** if it consists of at least two elements, and the difference between every two consecutive elements is the same.

You are given an array of \`n\` integers, \`nums\`, and two arrays of \`m\` integers each, \`l\` and \`r\`, representing the \`m\` range queries, where the \`i\`th query asks whether the subarray \`nums[l[i]], nums[l[i]+1], ... , nums[r[i]]\` can be rearranged to form an **arithmetic** sequence.

Return a list of \`boolean\` elements \`answer\`, where \`answer[i]\` is \`true\` if the subarray from the \`i\`th query can be rearranged to form an arithmetic sequence, or \`false\` otherwise.`,
  constraints: [
    'n == nums.length',
    'm == l.length == r.length',
    '2 <= n <= 500',
    '1 <= m <= 500',
    '0 <= l[i] < r[i] < n',
    '-10^5 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]',
      output: '[true,false,true]',
      explanation: '[4,6,5] sorted → [4,5,6] diff=1 ✓. [4,6,5,9] sorted → [4,5,6,9] diff not uniform ✗. [5,9,3,7] sorted → [3,5,7,9] diff=2 ✓.',
    },
    {
      input: 'nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]',
      output: '[false,true,false,false,true,true]',
    },
  ],
  hints: [
    'Level 1: For each query, sort the subarray and check if all consecutive differences are equal.',
    'Level 2: A sorted array is arithmetic if max-min == (len-1)*diff where diff=(max-min)/(len-1).',
    'Level 3: return l.map((li,i)=>{const sub=[...nums.slice(li,r[i]+1)].sort((a,b)=>a-b);const d=sub[1]-sub[0];return sub.every((_,j)=>j===0||sub[j]-sub[j-1]===d);});',
  ],
  functionName: 'checkArithmeticSubarrays',
  params: ['nums', 'l', 'r'],
  starterCode: {
    javascript: 'function checkArithmeticSubarrays(nums, l, r) {\n  // your code here\n}\n',
    python: 'def checkArithmeticSubarrays(nums, l, r):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]], expected: [true, false, true] },
    { args: [[-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10], [0, 1, 6, 4, 8, 7], [4, 4, 9, 7, 9, 10]], expected: [false, true, false, false, true, true] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], [0], [2]], expected: [true] },
    { args: [[3, 1, 2], [0], [2]], expected: [true] },
    { args: [[1, 2, 4], [0], [2]], expected: [false] },
    { args: [[1, 3, 5, 7], [0, 1], [3, 3]], expected: [true, true] },
  ],
};
