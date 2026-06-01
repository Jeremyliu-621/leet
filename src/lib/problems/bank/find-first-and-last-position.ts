import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-first-and-last-position',
  title: 'Find First and Last Position of Element in Sorted Array',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `Given an array of integers \`nums\` sorted in non-decreasing order, find the **starting and ending position** of a given \`target\` value.

If \`target\` is not found in the array, return \`[-1, -1]\`.

You must write an algorithm with **O(log n)** runtime complexity.

**Approach:** Run binary search twice — once to find the leftmost occurrence (first position where \`nums[mid] >= target\` and \`nums[mid] === target\`), and once for the rightmost.`,
  constraints: [
    '0 <= nums.length <= 100000',
    '-10^9 <= nums[i] <= 10^9',
    'nums is sorted in non-decreasing order',
    '-10^9 <= target <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [5,7,7,8,8,10], target = 8',
      output: '[3,4]',
      explanation: 'Value 8 first appears at index 3 and last at index 4.',
    },
    {
      input: 'nums = [5,7,7,8,8,10], target = 6',
      output: '[-1,-1]',
      explanation: 'Value 6 is not in the array.',
    },
    {
      input: 'nums = [], target = 0',
      output: '[-1,-1]',
      explanation: 'Empty array has no positions.',
    },
  ],
  hints: [
    'Write a helper that binary-searches for the leftmost index where nums[mid] >= target (lower_bound). The first position is this index if nums[first] === target, else -1. For the last position, search for the leftmost index where nums[mid] > target and subtract 1.',
    'For leftmost: lo=0, hi=n-1, result=-1; while(lo<=hi): if nums[mid]===target set result=mid and hi=mid-1 (go left); elif nums[mid]<target lo=mid+1; else hi=mid-1. For rightmost: same but when match, set result=mid and lo=mid+1 (go right).',
    '`function search(nums, target, findFirst) { let lo=0,hi=nums.length-1,res=-1; while(lo<=hi){ const mid=(lo+hi)>>1; if(nums[mid]===target){ res=mid; if(findFirst)hi=mid-1; else lo=mid+1; } else if(nums[mid]<target) lo=mid+1; else hi=mid-1; } return res; } return [search(nums,target,true), search(nums,target,false)];`',
  ],
  functionName: 'searchRange',
  params: ['nums', 'target'] as readonly string[],
  starterCode: {
    javascript: `function searchRange(nums, target) {
  function search(findFirst) {
    let lo = 0, hi = nums.length - 1, res = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid] === target) { res = mid; if (findFirst) hi = mid - 1; else lo = mid + 1; }
      else if (nums[mid] < target) lo = mid + 1;
      else hi = mid - 1;
    }
    return res;
  }
  return [search(true), search(false)];
}`,
    typescript: `function searchRange(nums: number[], target: number): number[] {
  function search(findFirst: boolean): number {
    let lo = 0, hi = nums.length - 1, res = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid]! === target) { res = mid; if (findFirst) hi = mid - 1; else lo = mid + 1; }
      else if (nums[mid]! < target) lo = mid + 1;
      else hi = mid - 1;
    }
    return res;
  }
  return [search(true), search(false)];
}`,
    python: `def searchRange(nums, target):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    def search(find_first):
        lo, hi, res = 0, len(nums) - 1, -1
        while lo <= hi:
            mid = (lo + hi) // 2
            if nums[mid] == target:
                res = mid
                if find_first: hi = mid - 1
                else: lo = mid + 1
            elif nums[mid] < target: lo = mid + 1
            else: hi = mid - 1
        return res
    return [search(True), search(False)]`,
  },
  visibleTests: [
    { args: [[5,7,7,8,8,10], 8], expected: [3,4] },
    { args: [[5,7,7,8,8,10], 6], expected: [-1,-1] },
    { args: [[], 0], expected: [-1,-1] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [0,0] },
    { args: [[1], 2], expected: [-1,-1] },
    { args: [[1,1,1,1], 1], expected: [0,3] },
    { args: [[1,2,3,4,5], 3], expected: [2,2] },
    { args: [[1,3,3,5,5,5,8], 5], expected: [3,5] },
    { args: [[2,2], 2], expected: [0,1] },
  ],
};
