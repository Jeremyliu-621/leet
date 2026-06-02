import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-duplicates-sorted',
  title: 'Remove Duplicates From Sorted Array',
  difficulty: 'easy',
  tags: ['two-pointers'],
  description: `Given a **sorted** integer array \`nums\`, return a new array containing only the unique elements in the same order.

Because the array is sorted, all duplicates of a value appear consecutively. You can exploit this to solve the problem efficiently in a single pass.`,
  constraints: [
    '0 <= nums.length <= 1000',
    'nums is sorted in non-decreasing order.',
    'All values are integers.',
  ],
  examples: [
    {
      input: 'nums = [1,1,2]',
      output: '[1,2]',
      explanation: 'The duplicate 1 is removed.',
    },
    {
      input: 'nums = [0,0,1,1,1,2,2,3,3,4]',
      output: '[0,1,2,3,4]',
      explanation: 'Each value appears exactly once in the output.',
    },
    {
      input: 'nums = []',
      output: '[]',
      explanation: 'Empty input gives empty output.',
    },
  ],
  hints: [
    'Use a "write pointer" that tracks where to place the next unique element. When the current element differs from the previous one, it is unique — copy it forward.',
    'Walk the array with a read pointer. Skip elements equal to the element before them. Copy the rest to the write position.',
    '`const out = []; for (let i = 0; i < nums.length; i++) { if (i === 0 || nums[i] !== nums[i - 1]) out.push(nums[i]); } return out;`',
  ],
  functionName: 'removeDuplicatesSorted',
  params: ['nums'],
  starterCode: {
    javascript: 'function removeDuplicatesSorted(nums) {\n  const out = [];\n  for (let i = 0; i < nums.length; i++) {\n    if (i === 0 || nums[i] !== nums[i - 1]) out.push(nums[i]);\n  }\n  return out;\n}\n',
    typescript: "function removeDuplicatesSorted(nums: number[]): number[] {\n  const out: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    if (i === 0 || nums[i] !== nums[i - 1]) out.push(nums[i]!);\n  }\n  return out;\n}",

    python: 'def removeDuplicatesSorted(nums):\n    if hasattr(nums, \'to_py\'): nums = nums.to_py()\n    nums = [int(x) for x in nums]\n    return [x for i, x in enumerate(nums) if i == 0 or x != nums[i-1]]\n',
  },
  visibleTests: [
    { args: [[1, 1, 2]], expected: [1, 2] },
    { args: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]], expected: [0, 1, 2, 3, 4] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 1]], expected: [1] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
    { args: [[-3, -3, -1, 0, 0, 2]], expected: [-3, -1, 0, 2] },
    { args: [[5, 5, 5, 5, 5]], expected: [5] },
    { args: [[1, 1, 2, 2, 3, 3]], expected: [1, 2, 3] },
  ],
};
