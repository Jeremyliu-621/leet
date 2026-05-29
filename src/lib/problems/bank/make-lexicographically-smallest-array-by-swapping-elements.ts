import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-lexicographically-smallest-array-by-swapping-elements',
  title: 'Make Lexicographically Smallest Array by Swapping Elements',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a 0-indexed array of positive integers \`nums\` and a positive integer \`limit\`.

In one operation, you can swap the values of any two indices \`i\` and \`j\` if \`|nums[i] - nums[j]| <= limit\`.

Return the **lexicographically smallest array** that can be obtained by performing the operation any number of times.

**Constraints:**
- \`1 ≤ nums.length ≤ 10^5\`
- \`1 ≤ nums[i] ≤ 10^9\`
- \`1 ≤ limit ≤ 10^9\``,
  examples: [
    {
      input: 'nums = [1,5,3,9,8], limit = 2',
      output: '[1,3,5,8,9]',
      explanation: 'Elements {1} are alone. {3,5} can swap (|3-5|=2≤2). {8,9} can swap (|8-9|=1≤2). Minimise each group: indices [1,2]→[3,5], indices [3,4]→[8,9].',
    },
    {
      input: 'nums = [1,7,6,18,2,1], limit = 3',
      output: '[1,6,7,18,1,2]',
      explanation: 'Group {1,2,1} (indices 0,4,5): sorted values [1,1,2] → assign to sorted indices. Group {6,7} (indices 1,2): sorted [6,7].',
    },
  ],
  constraints: ['Sort elements by value; consecutive elements with difference ≤ limit are in the same group. Within each group, assign sorted values to sorted indices.'],
  hints: [
    'Create (value, index) pairs and sort them by value.',
    'Two elements belong to the same "swap group" if consecutive elements in the sorted list differ by ≤ limit (transitively). Identify all such groups.',
    'Within each group, the values and original indices can be independently sorted; assign the k-th smallest value to the k-th smallest index.',
  ],
  params: ['nums', 'limit'],
  starterCode: {
    javascript: `function lexicographicallySmallestArray(nums, limit) {

}`,
    typescript: `function lexicographicallySmallestArray(nums: number[], limit: number): number[] {

}`,
    python: `def lexicographicallySmallestArray(nums: list[int], limit: int) -> list[int]:
    pass`,
  },
  functionName: 'lexicographicallySmallestArray',
  visibleTests: [
    { args: [[1, 5, 3, 9, 8], 2], expected: [1, 3, 5, 8, 9] },
    { args: [[1, 7, 6, 18, 2, 1], 3], expected: [1, 6, 7, 18, 1, 2] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[1, 2, 3, 4], 1], expected: [1, 2, 3, 4] },
    { args: [[4, 3, 2, 1], 1], expected: [1, 2, 3, 4] },
    { args: [[5, 3, 1], 4], expected: [1, 3, 5] },
    { args: [[1, 10, 2, 9, 3, 8], 1], expected: [1, 8, 2, 9, 3, 10] },
    { args: [[3, 3, 3], 0], expected: [3, 3, 3] },
    { args: [[1, 5, 3, 9, 8], 4], expected: [1, 3, 5, 8, 9] },
  ],
};
