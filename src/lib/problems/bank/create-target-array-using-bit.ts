import type { Problem } from '../types';

export const problem: Problem = {
  id: 'create-target-array-using-bit',
  title: 'Create Target Array Using Insertions (BIT)',
  difficulty: 'hard',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `Given two arrays \`nums\` and \`index\`, create a **target** array under the following rules:

- Initially \`target\` is empty.
- For each \`i\` from \`0\` to \`nums.length − 1\`, insert \`nums[i]\` at position \`index[i]\` in \`target\` (shifting subsequent elements right).

Return the resulting \`target\` array.

**Challenge:** Implement this in O(n log n) using a Binary Indexed Tree to efficiently find the position of the \`k\`-th available (unoccupied) slot in the final array.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '0 <= index[i] <= i',
    '0 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [0,1,2,3,4], index = [0,1,2,2,1]',
      output: '[0,4,1,3,2]',
      explanation: 'Insert 0 at 0 → [0]. Insert 1 at 1 → [0,1]. Insert 2 at 2 → [0,1,2]. Insert 3 at 2 → [0,1,3,2]. Insert 4 at 1 → [0,4,1,3,2].',
    },
    {
      input: 'nums = [1,2,3,4,0], index = [0,1,2,3,0]',
      output: '[0,1,2,3,4]',
      explanation: 'Insert 1→[1], 2→[1,2], 3→[1,2,3], 4→[1,2,3,4], 0 at 0→[0,1,2,3,4].',
    },
    {
      input: 'nums = [1], index = [0]',
      output: '[1]',
    },
  ],
  hints: [
    'A naive O(n²) solution inserts each element by shifting. For an O(n log n) approach, think about the final positions: element inserted at logical index i[k] becomes the (i[k]+1)-th smallest unoccupied slot in the range of final positions.',
    'Use a BIT over n slots (1-indexed). Initially all n slots are free. To find the (k+1)-th free slot, use binary lifting on the BIT: find the smallest position p such that BIT.prefixSum(p) == k+1.',
    'Mark each selected slot as occupied (update BIT with −1 at that position). Process insertions in reverse order from right to left: element n−1 is placed first in the final array since it was inserted last (reversing the order avoids shifting).',
  ],
  functionName: 'createTargetArray',
  params: ['nums', 'index'],
  starterCode: {
    javascript: `function createTargetArray(nums, index) {
  // Simple O(n^2) approach: use an array and splice.
  // Or O(n log n) with BIT to find the k-th free slot.
}`,
    python: `def createTargetArray(nums, index):
    # Simple O(n^2) approach: use a list and insert at position.
    # Or O(n log n) with BIT to find the k-th free slot.
    pass`,
  },
  visibleTests: [
    { args: [[0, 1, 2, 3, 4], [0, 1, 2, 2, 1]], expected: [0, 4, 1, 3, 2] },
    { args: [[1, 2, 3, 4, 0], [0, 1, 2, 3, 0]], expected: [0, 1, 2, 3, 4] },
    { args: [[1], [0]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[0], [0]], expected: [0] },
    { args: [[1, 2], [0, 0]], expected: [2, 1] },
    { args: [[5, 3, 1], [0, 0, 0]], expected: [1, 3, 5] },
    { args: [[2, 4, 6, 8], [0, 1, 2, 3]], expected: [2, 4, 6, 8] },
    { args: [[3, 1, 2], [0, 1, 0]], expected: [2, 3, 1] },
  ],
};
