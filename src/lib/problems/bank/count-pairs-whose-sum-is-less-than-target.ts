import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-whose-sum-is-less-than-target',
  title: 'Count Pairs Whose Sum Is Less Than Target',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given a **0-indexed** integer array \`nums\` of length \`n\` and an integer \`target\`, return the number of pairs \`(i, j)\` where \`0 <= i < j < n\` and \`nums[i] + nums[j] < target\`.`,
  constraints: [
    '1 <= n <= 50',
    '-50 <= nums[i] <= 50',
    '-50 <= target <= 50',
  ],
  examples: [
    {
      input: 'nums = [-1,1,2,3,1], target = 2',
      output: '3',
      explanation: 'Valid pairs: (0,1): -1+1=0, (0,2): -1+2=1, (0,4): -1+1=0. All are < 2.',
    },
    {
      input: 'nums = [-6,2,5,-2,-7,-1,3], target = -2',
      output: '10',
      explanation: 'There are 10 pairs whose sum is less than -2.',
    },
    {
      input: 'nums = [1,2,3,4], target = 5',
      output: '2',
      explanation: 'Valid pairs: (0,1): 1+2=3<5, (0,2): 1+3=4<5. All others are ≥ 5.',
    },
  ],
  hints: [
    'With n ≤ 50, a nested O(n²) loop over all (i,j) pairs is fast enough.',
    'Increment a counter for each pair where nums[i] + nums[j] < target.',
    'For an O(n log n) solution, sort and use two pointers from both ends.',
  ],
  functionName: 'countPairs',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function countPairs(nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0, lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    if (nums[lo] + nums[hi] < target) { count += hi - lo; lo++; }
    else hi--;
  }
  return count;
}`,
    typescript: `function countPairs(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let count = 0, lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    if (nums[lo]! + nums[hi]! < target) { count += hi - lo; lo++; }
    else hi--;
  }
  return count;
}`,
    python: `def countPairs(nums, target):
    nums.sort()
    count, lo, hi = 0, 0, len(nums) - 1
    while lo < hi:
        if nums[lo] + nums[hi] < target:
            count += hi - lo
            lo += 1
        else:
            hi -= 1
    return count`,
  },
  visibleTests: [
    { args: [[-1, 1, 2, 3, 1], 2], expected: 3 },
    { args: [[-6, 2, 5, -2, -7, -1, 3], -2], expected: 10 },
    { args: [[1, 2, 3, 4], 5], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0], 0], expected: 0 },
    { args: [[1, 1], 3], expected: 1 },
    { args: [[-5, 0, 5], 0], expected: 1 },
    { args: [[2, 2, 2, 2], 5], expected: 6 },
    { args: [[1, 1], 2], expected: 0 },
  ],
};
