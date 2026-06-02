import type { Problem } from '../types';

export const problem: Problem = {
  id: 'single-element-in-a-sorted-array',
  title: 'Single Element in a Sorted Array',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a sorted array consisting of only integers where every element appears **exactly twice**, except for one element which appears **exactly once**.

Return *the single element that appears only once*.

Your solution must run in \`O(log n)\` time and \`O(1)\` space.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^5',
    'nums.length is odd.',
  ],
  examples: [
    {
      input: 'nums = [1,1,2,3,3,4,4,8,8]',
      output: '2',
    },
    {
      input: 'nums = [3,3,7,7,10,11,11]',
      output: '10',
    },
  ],
  hints: [
    'Level 1: In a sorted array of all pairs, the first element of each pair is at an even index. Once a single element shifts this pattern, all pairs after it start at odd indices.',
    'Level 2: Binary search on even indices only. At even index mid: if nums[mid]==nums[mid+1], the single is strictly to the right (lo=mid+2); otherwise it\'s at mid or to the left (hi=mid).',
    'Level 3: Force mid to be even by clearing the lowest bit: if mid is odd, mid--. Then apply the rule above.',
  ],
  functionName: 'singleNonDuplicate',
  params: ['nums'],
  starterCode: {
    javascript: `function singleNonDuplicate(nums) {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    let mid = (lo + hi) >> 1;
    if (mid % 2 === 1) mid--;
    if (nums[mid] === nums[mid + 1]) lo = mid + 2;
    else hi = mid;
  }
  return nums[lo];
}`,
    typescript: `function singleNonDuplicate(nums: number[]): number {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    let mid = (lo + hi) >> 1;
    if (mid % 2 === 1) mid--;
    if (nums[mid] === nums[mid + 1]) lo = mid + 2;
    else hi = mid;
  }
  return nums[lo]!;
}`,
    python: `def singleNonDuplicate(nums):
    nums = [int(x) for x in (nums.to_py() if hasattr(nums, 'to_py') else nums)]
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        mid = (lo + hi) >> 1
        if mid % 2 == 1:
            mid -= 1
        if nums[mid] == nums[mid + 1]:
            lo = mid + 2
        else:
            hi = mid
    return nums[lo]`,
  },
  visibleTests: [
    { args: [[1, 1, 2, 3, 3, 4, 4, 8, 8]], expected: 2 },
    { args: [[3, 3, 7, 7, 10, 11, 11]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1, 2]], expected: 2 },
    { args: [[2, 3, 3]], expected: 2 },
    { args: [[1, 2, 2, 3, 3, 4, 4]], expected: 1 },
    { args: [[1, 1, 2, 2, 3]], expected: 3 },
  ],
};
