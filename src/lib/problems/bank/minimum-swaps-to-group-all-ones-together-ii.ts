import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-group-all-ones-together-ii',
  title: 'Minimum Swaps to Group All 1\'s Together II',
  difficulty: 'medium',
  tags: ['sliding-window'],
  description: `A **swap** exchanges the positions of two elements in an array.

Given a **circular** binary array \`nums\` (i.e., the next element of \`nums[nums.length - 1]\` is \`nums[0]\`), return the **minimum number of swaps** required to group all \`1\`s present in the array together at any location.

**Approach:**
1. Count the total number of \`1\`s — call it \`k\`. This is the window size.
2. Use a **sliding window of size k** over the doubled array (\`nums\` concatenated with itself) to handle circularity.
3. Find the window with the **maximum number of 1s**. The answer is \`k - maxOnes\`.

**Example:** \`nums = [0,1,0,1,1]\`
- k = 3 (three 1s)
- Windows of size 3 over doubled array: count 1s in each. Max = 3.
- Answer = 3 - 3 = **0**`,
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is 0 or 1',
  ],
  examples: [
    {
      input: 'nums = [0,1,0,1,1,0,0]',
      output: '1',
      explanation: 'There are 3 ones. Best window of size 3: [1,1,0] or [1,1,1] after wrapping — we can form [1,1,1] with 1 swap.',
    },
    {
      input: 'nums = [0,1,1,1,0,0,1,1,0]',
      output: '2',
      explanation: 'There are 5 ones. Best window of size 5 contains 3 ones. Answer = 5 - 3 = 2.',
    },
    {
      input: 'nums = [1,1,0,0,1]',
      output: '0',
      explanation: 'There are 3 ones. The window [1,0,1] wraps around to [1,1,1] — already 3 ones in some window. Answer = 0.',
    },
  ],
  hints: [
    'Count the total number of 1s in the array. Call it k. You need a contiguous (circular) window of size k to contain all the 1s.',
    'To handle circularity, work with the doubled array (nums + nums) and apply a sliding window of size k. Never let the window extend beyond index n + k - 1 (where n = nums.length).',
    'Minimum swaps = k - (maximum number of 1s seen in any window of size k). Each 0 in the best window needs one swap with a 1 outside it.',
  ],
  functionName: 'minSwaps',
  params: ['nums'],
  starterCode: {
    javascript: 'function minSwaps(nums) {\n  // your code here\n}\n',
    python: 'def minSwaps(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[0,1,0,1,1,0,0]], expected: 1 },
    { args: [[0,1,1,1,0,0,1,1,0]], expected: 2 },
    { args: [[1,1,0,0,1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1,1,1,1,1]], expected: 0 },
    { args: [[0,0,0,0,0]], expected: 0 },
    { args: [[1,0,0,0,0]], expected: 0 },
    { args: [[1,0,1,0,1,0]], expected: 1 },
    { args: [[0,1,0,1,0,1]], expected: 1 },
    { args: [[1,1,0,0,0,0,1,1]], expected: 0 },
  ],
};
