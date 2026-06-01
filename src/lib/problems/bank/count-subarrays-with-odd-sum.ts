import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-with-odd-sum',
  title: 'Count Subarrays with Odd Sum',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an array of integers \`arr\`, return the **number of subarrays** with an **odd sum**.

Since the answer can be large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= arr.length <= 10^5',
    '1 <= arr[i] <= 1000',
  ],
  examples: [
    {
      input: 'arr = [1,3,5]',
      output: '4',
      explanation: 'Odd-sum subarrays: [1],[3],[5],[1,3,5] — 4 total.',
    },
    {
      input: 'arr = [2,4,6]',
      output: '0',
      explanation: 'All elements are even; no subarray has odd sum.',
    },
    {
      input: 'arr = [1,2,3,4,5,6,7]',
      output: '16',
      explanation: '16 subarrays have odd sum.',
    },
  ],
  hints: [
    'A subarray sum is odd iff prefix[j] and prefix[i-1] have different parities.',
    'Track how many even and odd prefix sums you\'ve seen so far.',
    'For each new prefix sum, if it\'s even add the count of odd prefixes seen, otherwise add even prefixes.',
  ],
  functionName: 'numOfSubarrays',
  params: ['arr'],
  starterCode: {
    javascript: `function numOfSubarrays(arr) {
  const MOD = 1_000_000_007;
  let even = 1, odd = 0, prefix = 0, result = 0;
  for (const x of arr) {
    prefix += x;
    if (prefix % 2 === 0) { result = (result + odd) % MOD; even++; }
    else { result = (result + even) % MOD; odd++; }
  }
  return result;
}`,
    typescript: `function numOfSubarrays(arr: number[]): number {
  const MOD = 1_000_000_007;
  let even = 1, odd = 0, prefix = 0, result = 0;
  for (const x of arr) {
    prefix += x;
    if (prefix % 2 === 0) { result = (result + odd) % MOD; even++; }
    else { result = (result + even) % MOD; odd++; }
  }
  return result;
}`,
    python: `def numOfSubarrays(arr):
    arr = list(arr.to_py()) if hasattr(arr, 'to_py') else list(arr)
    MOD = 10**9 + 7
    even, odd, prefix, result = 1, 0, 0, 0
    for x in arr:
        prefix += x
        if prefix % 2 == 0:
            result = (result + odd) % MOD
            even += 1
        else:
            result = (result + even) % MOD
            odd += 1
    return result`,
  },
  visibleTests: [
    { args: [[1,3,5]], expected: 4 },
    { args: [[2,4,6]], expected: 0 },
    { args: [[1,2,3,4,5,6,7]], expected: 16 },
    { args: [[1]], expected: 1 },
    { args: [[2]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1,2]], expected: 2 },
    { args: [[100,200,300,101]], expected: 4 },
    { args: [[5,5,5,5]], expected: 6 },
    { args: [[1,2,3]], expected: 4 },
    { args: [[10,11,12]], expected: 4 },
    { args: [[1,1,1,1,1]], expected: 9 },
    { args: [[2,2,2,2,2]], expected: 0 },
    { args: [[1,2,1,2,1]], expected: 9 },
    { args: [[3,5,7]], expected: 4 },
    { args: [[2,3,4,5]], expected: 6 },
  ],
};
