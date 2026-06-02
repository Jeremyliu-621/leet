import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-numbers-disappeared-in-an-array',
  title: 'Find All Numbers Disappeared in an Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an array \`nums\` of \`n\` integers where \`nums[i]\` is in the range \`[1, n]\`, return an array of all the integers in the range \`[1, n]\` that do not appear in \`nums\`.`,
  constraints: [
    '`n == nums.length`',
    '`1 <= n <= 10^5`',
    '`1 <= nums[i] <= n`',
  ],
  examples: [
    {
      input: 'nums = [4,3,2,7,8,2,3,1]',
      output: '[5,6]',
      explanation: 'In range [1,8], only 5 and 6 are missing.',
    },
    {
      input: 'nums = [1,1]',
      output: '[2]',
      explanation: 'In range [1,2], only 2 is missing.',
    },
  ],
  hints: [
    'Use a Set (or boolean array) to track which numbers appear in nums.',
    'Then iterate 1..n and collect numbers not in the set.',
    'Alternatively, mark visited by negating nums[nums[i]-1] in-place for O(1) extra space.',
  ],
  functionName: 'findDisappearedNumbers',
  params: ['nums'],
  starterCode: {
    javascript: `function findDisappearedNumbers(nums) {
  const seen = new Set(nums);
  const result = [];
  for (let i = 1; i <= nums.length; i++) if (!seen.has(i)) result.push(i);
  return result;
}`,
    typescript: `function findDisappearedNumbers(nums: number[]): number[] {
  const seen = new Set(nums);
  const result: number[] = [];
  for (let i = 1; i <= nums.length; i++) if (!seen.has(i)) result.push(i);
  return result;
}`,
    python: `def findDisappearedNumbers(nums):
    seen = set(nums)
    return [i for i in range(1, len(nums) + 1) if i not in seen]`,
  },
  visibleTests: [
    { args: [[4, 3, 2, 7, 8, 2, 3, 1]], expected: [5, 6] },
    { args: [[1, 1]], expected: [2] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [] },
    { args: [[2]], expected: [1] },
    { args: [[2, 2]], expected: [1] },
    { args: [[3, 3, 3]], expected: [1, 2] },
    { args: [[1, 2, 3]], expected: [] },
    { args: [[1, 2, 4, 4]], expected: [3] },
  ],
};
