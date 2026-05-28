import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-duplicates',
  title: 'Find All Duplicates in Array',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` of length \`n\` where all integers are in the range \`[1, n]\` and each integer appears **once or twice**, return an array of all integers that appear **exactly twice**.

Return the result in **ascending order**.

**Example:** For \`nums = [4,3,2,7,8,2,3,1]\`, the duplicates are \`[2, 3]\`.

You should aim for O(n) time and O(1) extra space (beyond the output).`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= nums.length',
    'Each integer appears once or twice.',
  ],
  examples: [
    {
      input: 'nums = [4,3,2,7,8,2,3,1]',
      output: '[2,3]',
      explanation: '2 and 3 each appear twice. Result is sorted ascending.',
    },
    {
      input: 'nums = [1,1,2]',
      output: '[1]',
      explanation: '1 appears twice.',
    },
    {
      input: 'nums = [1]',
      output: '[]',
      explanation: 'No duplicates.',
    },
  ],
  hints: [
    'A straightforward solution uses a Set or a frequency map to track which numbers have been seen before. But can you do it with O(1) extra space?',
    'Since all values are in [1, n], use the array itself as a visited marker. For each number `x`, look at index `|x| - 1`. If `nums[|x|-1]` is already negative, `x` is a duplicate. Otherwise negate `nums[|x|-1]` to mark it visited.',
    '`const res = []; for (let i = 0; i < nums.length; i++) { const idx = Math.abs(nums[i]) - 1; if (nums[idx] < 0) { res.push(idx + 1); } else { nums[idx] = -nums[idx]; } } return res.sort((a, b) => a - b);`',
  ],
  functionName: 'findAllDuplicates',
  params: ['nums'],
  starterCode: {
    javascript: 'function findAllDuplicates(nums) {\n  // your code here\n}\n',
    typescript: "function findAllDuplicates(nums: number[]): number[] {\n  // your code here\n}",

    python: 'def findAllDuplicates(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 3, 2, 7, 8, 2, 3, 1]], expected: [2, 3] },
    { args: [[1, 1, 2]], expected: [1] },
    { args: [[1]], expected: [] },
  ],
  hiddenTests: [
    { args: [[2, 2]], expected: [2] },
    { args: [[1, 2, 3, 4]], expected: [] },
    { args: [[3, 1, 3, 1, 2]], expected: [1, 3] },
    { args: [[5, 4, 3, 2, 1, 3, 4]], expected: [3, 4] },
    { args: [[1, 2, 3, 1, 2, 3]], expected: [1, 2, 3] },
    { args: [[2, 1, 2, 1]], expected: [1, 2] },
  ],
};
