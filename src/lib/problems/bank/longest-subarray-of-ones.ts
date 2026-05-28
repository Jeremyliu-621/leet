import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subarray-of-ones',
  title: 'Longest Subarray of 1s After Deleting One Element',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `Given a binary array \`nums\` (containing only \`0\`s and \`1\`s), delete **exactly one element** and return the length of the **longest subarray of \`1\`s** that remains.

You must delete exactly one element (it can be a \`0\` or a \`1\`).

**Example:** For \`[1,1,0,1]\`, deleting the \`0\` leaves \`[1,1,1]\`, length \`3\`.

If the entire array is \`1\`s, you must still delete one — so the answer is \`nums.length - 1\`.`,
  constraints: [
    '1 <= nums.length <= 10000',
    'nums[i] is 0 or 1',
  ],
  examples: [
    {
      input: 'nums = [1,1,0,1]',
      output: '3',
      explanation: 'Delete the 0 at index 2. The remaining array [1,1,1] has length 3.',
    },
    {
      input: 'nums = [0,1,1,1,0,1,1,0,1]',
      output: '5',
      explanation: 'Delete the 0 at index 4. The subarray [1,1,1,0,1,1] becomes length 5 after the deletion.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '2',
      explanation: 'Must delete one element; deleting any 1 leaves [1,1] with length 2.',
    },
  ],
  hints: [
    'Think about a sliding window that allows at most one 0 inside it. When you remove that one 0, what you have left is all 1s — the window size minus 1 (for the deleted element).',
    'Use two pointers `left` and `right`. Expand `right` freely; if you encounter more than one 0, advance `left` until the window contains at most one 0. Track the max of `(right - left)` — this is window size minus the one deleted element.',
    '`let left = 0, zeros = 0, best = 0; for (let right = 0; right < nums.length; right++) { if (nums[right] === 0) zeros++; while (zeros > 1) { if (nums[left] === 0) zeros--; left++; } best = Math.max(best, right - left); } return best;`',
  ],
  functionName: 'longestSubarrayOfOnes',
  params: ['nums'],
  starterCode: {
    javascript: 'function longestSubarrayOfOnes(nums) {\n  // your code here\n}\n',
    python: 'def longestSubarrayOfOnes(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 0, 1]], expected: 3 },
    { args: [[0, 1, 1, 1, 0, 1, 1, 0, 1]], expected: 5 },
    { args: [[1, 1, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[1]], expected: 0 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1, 0, 1, 0, 1]], expected: 2 },
    { args: [[1, 1, 0, 0, 1, 1, 1]], expected: 3 },
    { args: [[0, 1, 1, 1, 1, 0]], expected: 4 },
    { args: [[1, 1, 1, 0, 1]], expected: 4 },
  ],
};
