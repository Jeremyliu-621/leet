import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-number-k-sum-pairs',
  title: 'Max Number of K-Sum Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'two-pointers'],
  description: `You are given an integer array \`nums\` and an integer \`k\`.

In one operation, you can pick two numbers from the array whose **sum equals** \`k\` and remove them from the array.

Return the **maximum number of operations** you can perform on the array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4], k = 5',
      output: '2',
      explanation: 'Remove 1+4=5 and 2+3=5. 2 operations.',
    },
    {
      input: 'nums = [3,1,3,4,3], k = 6',
      output: '1',
      explanation: 'Remove one pair of (3,3). 1 operation.',
    },
  ],
  hints: [
    'Level 1: Use a frequency map. For each number x, check if k-x has been seen. If k-x exists in the map, form a pair and decrement both counts.',
    'Level 2: Build a frequency map. For each num: if freq[k-num] > 0, increment count and decrement freq[k-num]. Otherwise increment freq[num].',
    'Level 3: const freq=new Map();let cnt=0;for(const n of nums){const c=k-n;if(freq.get(c)>0){cnt++;freq.set(c,freq.get(c)-1);}else freq.set(n,(freq.get(n)??0)+1);}return cnt;',
  ],
  functionName: 'maxOperations',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function maxOperations(nums, k) {\n  // your code here\n}\n',
    python: 'def maxOperations(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], 5], expected: 2 },
    { args: [[3, 1, 3, 4, 3], 6], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1, 1], 2], expected: 1 },
    { args: [[1, 1, 1, 1], 2], expected: 2 },
    { args: [[2, 2, 2, 3, 3], 5], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 6], expected: 2 },
  ],
};
