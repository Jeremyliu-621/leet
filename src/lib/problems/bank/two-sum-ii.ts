import type { Problem } from '../types';

export const problem: Problem = {
  id: 'two-sum-ii',
  title: 'Two Sum II - Input Array Is Sorted',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers', 'binary-search'],
  description: `Given a **1-indexed** array of integers \`numbers\` that is already **sorted in non-decreasing order**, find two numbers such that they add up to a specific \`target\` number. Let these two numbers be \`numbers[index1]\` and \`numbers[index2]\` where \`1 <= index1 < index2 <= numbers.length\`.

Return the indices of the two numbers as an integer array \`[index1, index2]\` of length 2.

The tests are generated such that there is **exactly one solution**. You may not use the same element twice.

Your solution must use only constant extra space.`,
  constraints: [
    '2 <= numbers.length <= 3 * 10^4',
    '-1000 <= numbers[i] <= 1000',
    'numbers is sorted in non-decreasing order.',
    '-1000 <= target <= 1000',
    'The tests are generated such that there is exactly one solution.',
  ],
  examples: [
    { input: 'numbers = [2,7,11,15], target = 9', output: '[1,2]', explanation: 'numbers[1] + numbers[2] = 2 + 7 = 9.' },
    { input: 'numbers = [2,3,4], target = 6', output: '[1,3]', explanation: '2 + 4 = 6.' },
    { input: 'numbers = [-1,0], target = -1', output: '[1,2]' },
  ],
  hints: [
    'Level 1: Use two pointers: one at the start, one at the end. Move them based on sum vs target.',
    'Level 2: If sum < target, move left pointer right. If sum > target, move right pointer left. If equal, return [l+1, r+1].',
    'Level 3: let l=0,r=numbers.length-1;while(l<r){const s=numbers[l]+numbers[r];if(s===target)return[l+1,r+1];if(s<target)l++;else r--;}return[-1,-1];',
  ],
  functionName: 'twoSumII',
  params: ['numbers', 'target'],
  starterCode: {
    javascript: `function twoSumII(numbers, target) {
  let lo = 0, hi = numbers.length - 1;
  while (lo < hi) {
    const s = numbers[lo] + numbers[hi];
    if (s === target) return [lo + 1, hi + 1];
    if (s < target) lo++; else hi--;
  }
  return [];
}`,
    typescript: `function twoSumII(numbers: number[], target: number): number[] {
  let lo = 0, hi = numbers.length - 1;
  while (lo < hi) {
    const s = numbers[lo]! + numbers[hi]!;
    if (s === target) return [lo + 1, hi + 1];
    if (s < target) lo++; else hi--;
  }
  return [];
}`,
    python: `def twoSumII(numbers, target):
    if hasattr(numbers, 'to_py'): numbers = numbers.to_py()
    numbers = [int(x) for x in numbers]; target = int(target)
    lo, hi = 0, len(numbers) - 1
    while lo < hi:
        s = numbers[lo] + numbers[hi]
        if s == target: return [lo + 1, hi + 1]
        if s < target: lo += 1
        else: hi -= 1
    return []`,
  },
  visibleTests: [
    { args: [[2, 7, 11, 15], 9], expected: [1, 2] },
    { args: [[2, 3, 4], 6], expected: [1, 3] },
    { args: [[-1, 0], -1], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 9], expected: [4, 5] },
    { args: [[-3, -2, 0, 4, 5], 2], expected: [1, 5] },
    { args: [[1, 3, 4, 5, 7, 10, 11], 9], expected: [3, 4] },
    { args: [[5, 25, 75], 100], expected: [2, 3] },
  ],
};
