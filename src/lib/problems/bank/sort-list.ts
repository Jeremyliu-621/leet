import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-list',
  title: 'Sort an Array (Merge Sort)',
  difficulty: 'hard',
  tags: ['two-pointers', 'arrays'],
  description: `Given an array of integers \`nums\`, sort it in ascending order using **merge sort** in O(n log n) time and O(log n) space.

**Merge sort approach:** Recursively split the array in half, sort each half, then merge the sorted halves using two pointers.`,
  constraints: [
    '1 <= nums.length <= 50000',
    '-50000 <= nums[i] <= 50000',
  ],
  examples: [
    {
      input: 'nums = [5,2,3,1]',
      output: '[1,2,3,5]',
    },
    {
      input: 'nums = [5,1,1,2,0,0]',
      output: '[0,0,1,1,2,5]',
    },
  ],
  hints: [
    'Use divide-and-conquer. Split the array at the midpoint: `merge(sort(left), sort(right))`. The merge step uses two pointers — one into each sorted half.',
    'For merge: use indices `i` into the left half and `j` into the right half. At each step take the smaller element. When one pointer is exhausted, append the rest of the other.',
    '`function merge(a,b){let i=0,j=0,r=[];while(i<a.length&&j<b.length)r.push(a[i]<=b[j]?a[i++]:b[j++]);return r.concat(a.slice(i),b.slice(j));} function ms(a){if(a.length<=1)return a;const m=a.length>>1;return merge(ms(a.slice(0,m)),ms(a.slice(m)));} return ms(nums);`',
  ],
  functionName: 'sortArray',
  params: ['nums'],
  starterCode: {
    javascript: 'function sortArray(nums) {\n  // your code here\n}\n',
    typescript: "function sortArray(nums: number[]): number[] {\n  // your code here\n}",

    python: 'def sortArray(nums: list) -> list:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 2, 3, 1]], expected: [1, 2, 3, 5] },
    { args: [[5, 1, 1, 2, 0, 0]], expected: [0, 0, 1, 1, 2, 5] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[2, 1]], expected: [1, 2] },
    { args: [[-1, 5, -3, 0, 2]], expected: [-3, -1, 0, 2, 5] },
    { args: [[3, 3, 3]], expected: [3, 3, 3] },
  ],
};
