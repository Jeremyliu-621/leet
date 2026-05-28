import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-segment-sum-after-removals',
  title: 'Maximum Segment Sum After Removals',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `You are given two 0-indexed integer arrays \`nums\` and \`removeQueries\`, both of length \`n\`. For the \`i\`th query, the element \`nums[removeQueries[i]]\` is removed from \`nums\`.

Return an integer array \`answer\` of length \`n\` where \`answer[i]\` is the **maximum** segment sum of \`nums\` after the \`i\`th removal.

**Note**: Segment sum is the sum of the elements in a contiguous subarray of the remaining elements. A query can remove the same index at most once (all indices in \`removeQueries\` are distinct).`,
  constraints: [
    'n == nums.length == removeQueries.length',
    '1 <= n <= 10^5',
    '1 <= nums[i] <= 10^9',
    '0 <= removeQueries[i] < n',
  ],
  examples: [
    {
      input: 'nums = [1,2,5,6,1], removeQueries = [0,3,2,4,1]',
      output: '[14,7,2,2,0]',
    },
    {
      input: 'nums = [3,2,11,1], removeQueries = [3,2,1,0]',
      output: '[16,5,3,0]',
    },
  ],
  hints: [
    'Process removals in reverse: add elements back and merge segments using Union-Find.',
    'When adding index i back, merge with neighbors i-1 and i+1 if they are present.',
    'Track the segment sum for each component root. The maximum segment sum is the global max.',
  ],
  functionName: 'maximumSegmentSum',
  params: ['nums', 'removeQueries'],
  starterCode: {
    javascript: 'function maximumSegmentSum(nums, removeQueries) {\n\n}\n',
    typescript: "function maximumSegmentSum(nums: number[], removeQueries: number[]): number[] {\n\n}",

    python: 'def maximumSegmentSum(nums, removeQueries):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,2,5,6,1], [0,3,2,4,1]], expected: [14,7,2,2,0] },
    { args: [[3,2,11,1], [3,2,1,0]], expected: [16,5,3,0] },
  ],
  hiddenTests: [
    { args: [[1], [0]], expected: [0] },
    { args: [[5,3], [0,1]], expected: [3,0] },
    { args: [[1,2,3,4,5], [2,0,4,1,3]], expected: [9,9,4,4,0] },
  ],
};
