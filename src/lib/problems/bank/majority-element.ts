import type { Problem } from '../types';

export const problem: Problem = {
  id: 'majority-element',
  title: 'Majority Element',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an array \`nums\` of size \`n\`, return the **majority element**: the element that appears **more than ⌊n/2⌋ times**.

It is guaranteed that a majority element always exists in the input.

Can you solve it in O(n) time and O(1) space?`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-10000 <= nums[i] <= 10000',
    'A majority element always exists.',
  ],
  examples: [
    {
      input: 'nums = [3,2,3]',
      output: '3',
      explanation: '3 appears 2 times out of 3 (> 3/2 = 1.5), so it is the majority element.',
    },
    {
      input: 'nums = [2,2,1,1,1,2,2]',
      output: '2',
      explanation: '2 appears 4 times out of 7 (> 3.5), so it is the majority element.',
    },
    {
      input: 'nums = [1]',
      output: '1',
      explanation: 'Single element is trivially the majority.',
    },
  ],
  hints: [
    'A naive approach uses a hash map to count frequencies. But can you do it with no extra space? Think about what happens when you "cancel out" different elements.',
    'Boyer-Moore Voting: maintain a `candidate` and a `count`. Iterate through the array — if count is 0 set the current element as candidate. If current equals candidate, increment count; otherwise decrement it. The final candidate is the majority element.',
    '`let candidate = nums[0], count = 1; for (let i = 1; i < nums.length; i++) { if (count === 0) { candidate = nums[i]; count = 1; } else if (nums[i] === candidate) { count++; } else { count--; } } return candidate;`',
  ],
  functionName: 'majorityElement',
  params: ['nums'],
  starterCode: {
    javascript: 'function majorityElement(nums) {\n  // your code here\n}\n',
    python: 'def majorityElement(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 2, 3]], expected: 3 },
    { args: [[2, 2, 1, 1, 1, 2, 2]], expected: 2 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[5, 5, 5]], expected: 5 },
    { args: [[-1, -1, 0]], expected: -1 },
    { args: [[1, 2, 1, 2, 1]], expected: 1 },
    { args: [[7, 7, 7, 1, 7]], expected: 7 },
    { args: [[0, 0, 1]], expected: 0 },
    { args: [[3, 3, 4, 4, 3]], expected: 3 },
  ],
};
