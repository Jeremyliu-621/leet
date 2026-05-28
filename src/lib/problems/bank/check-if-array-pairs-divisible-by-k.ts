import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-array-pairs-divisible-by-k',
  title: 'Check If Array Pairs Are Divisible by k',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an array of integers \`arr\` of even length \`n\` and an integer \`k\`, determine if you can divide the array into exactly \`n / 2\` pairs such that the sum of each pair is divisible by \`k\`.

Return \`true\` if you can, otherwise \`false\`.`,
  constraints: [
    'arr.length == n',
    '1 <= n <= 10^5',
    'n is even',
    '-10^9 <= arr[i] <= 10^9',
    '1 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'arr = [1,2,3,4,5,10,6,7,8,9], k = 5',
      output: 'true',
      explanation: 'Pairs: (1,9), (2,8), (3,7), (4,6), (5,10) — each sums to a multiple of 5.',
    },
    {
      input: 'arr = [1,2,3,4,5,6], k = 7',
      output: 'true',
      explanation: 'Pairs: (1,6), (2,5), (3,4).',
    },
    {
      input: 'arr = [1,2,3,4,5,6], k = 10',
      output: 'false',
      explanation: 'No valid pairing exists.',
    },
  ],
  hints: [
    'Level 1: Count remainders modulo k. For remainder r, we need its complement (k-r) to appear the same number of times. Special cases: remainder 0 must be even, and if k is even, remainder k/2 must be even.',
    'Level 2: Build freq map of (x % k + k) % k. For r=0: freq[0] must be even. For r in 1..k/2-1: freq[r] must equal freq[k-r]. If k is even: freq[k/2] must be even.',
    'Level 3: const freq=Array(k).fill(0);for(const x of arr)freq[((x%k)+k)%k]++;if(freq[0]%2!==0)return false;for(let r=1;r<=Math.floor(k/2);r++){if(r===k-r){if(freq[r]%2!==0)return false;}else if(freq[r]!==freq[k-r])return false;}return true;',
  ],
  functionName: 'canArrange',
  params: ['arr', 'k'],
  starterCode: {
    javascript: 'function canArrange(arr, k) {\n  // your code here\n}\n',
    typescript: "function canArrange(arr: number[], k: number): boolean {\n  // your code here\n}",

    python: 'def canArrange(arr, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5], expected: true },
    { args: [[1, 2, 3, 4, 5, 6], 7], expected: true },
    { args: [[1, 2, 3, 4, 5, 6], 10], expected: false },
  ],
  hiddenTests: [
    { args: [[1, -1], 2], expected: true },
    { args: [[1, 1], 2], expected: true },
    { args: [[-1, -1, -1, -1], 2], expected: true },
    { args: [[4, 5, 1, -1], 3], expected: true },
    { args: [[2, 2, 2, 2], 4], expected: true },
  ],
};
