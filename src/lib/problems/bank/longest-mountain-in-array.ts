import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-mountain-in-array',
  title: 'Longest Mountain in Array',
  difficulty: 'medium',
  tags: ['two-pointers', 'arrays'],
  description: `A **mountain** subarray is a contiguous subarray of \`arr\` with at least 3 elements where:
- The elements strictly increase to a peak, then
- Strictly decrease after the peak.

Formally, for a subarray \`arr[i..j]\` (i < j), there exists some index \`k\` with \`i < k < j\` such that:
- \`arr[i] < arr[i+1] < ... < arr[k]\`
- \`arr[k] > arr[k+1] > ... > arr[j]\`

Return the length of the longest mountain subarray in \`arr\`, or \`0\` if no mountain exists.`,
  constraints: [
    '1 <= arr.length <= 10000',
    '0 <= arr[i] <= 10000',
  ],
  examples: [
    {
      input: 'arr = [2,1,4,7,3,2,5]',
      output: '5',
      explanation: 'The longest mountain is [1,4,7,3,2] with length 5.',
    },
    {
      input: 'arr = [2,2,2]',
      output: '0',
      explanation: 'No strictly increasing-then-decreasing subarray of length >= 3 exists.',
    },
    {
      input: 'arr = [0,1,0]',
      output: '3',
      explanation: 'The entire array is a mountain.',
    },
  ],
  hints: [
    'Iterate over each possible peak position (every index except first and last). A peak at index k must have arr[k-1] < arr[k] > arr[k+1]. From each peak, expand left while strictly decreasing and right while strictly decreasing.',
    'Use two pointers: start both at the peak. Move the left pointer backward while the sequence strictly increases toward the peak. Move the right pointer forward while the sequence strictly decreases from the peak. The mountain length is right - left + 1.',
    '`let best = 0; for (let k = 1; k < arr.length - 1; k++) { if (arr[k-1] < arr[k] && arr[k] > arr[k+1]) { let l = k - 1, r = k + 1; while (l > 0 && arr[l-1] < arr[l]) l--; while (r < arr.length - 1 && arr[r] > arr[r+1]) r++; best = Math.max(best, r - l + 1); } } return best;`',
  ],
  functionName: 'longestMountain',
  params: ['arr'] as readonly string[],
  starterCode: {
    javascript: `function longestMountain(arr) {
  let best = 0;
  for (let k = 1; k < arr.length - 1; k++) {
    if (arr[k - 1] < arr[k] && arr[k] > arr[k + 1]) {
      let l = k - 1, r = k + 1;
      while (l > 0 && arr[l - 1] < arr[l]) l--;
      while (r < arr.length - 1 && arr[r] > arr[r + 1]) r++;
      best = Math.max(best, r - l + 1);
    }
  }
  return best;
}`,
    typescript: `function longestMountain(arr: number[]): number {
  let best = 0;
  for (let k = 1; k < arr.length - 1; k++) {
    if (arr[k - 1]! < arr[k]! && arr[k]! > arr[k + 1]!) {
      let l = k - 1, r = k + 1;
      while (l > 0 && arr[l - 1]! < arr[l]!) l--;
      while (r < arr.length - 1 && arr[r]! > arr[r + 1]!) r++;
      best = Math.max(best, r - l + 1);
    }
  }
  return best;
}`,
    python: `def longestMountain(arr):
    arr = list(arr.to_py()) if hasattr(arr, 'to_py') else list(arr)
    best = 0
    for k in range(1, len(arr) - 1):
        if arr[k - 1] < arr[k] > arr[k + 1]:
            l, r = k - 1, k + 1
            while l > 0 and arr[l - 1] < arr[l]: l -= 1
            while r < len(arr) - 1 and arr[r] > arr[r + 1]: r += 1
            best = max(best, r - l + 1)
    return best`,
  },
  visibleTests: [
    { args: [[2, 1, 4, 7, 3, 2, 5]], expected: 5 },
    { args: [[2, 2, 2]], expected: 0 },
    { args: [[0, 1, 0]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[2, 3, 3, 2, 0, 2]], expected: 0 },
    { args: [[1, 2, 3, 2, 1]], expected: 5 },
    { args: [[0, 1, 2, 1, 0, 1, 2]], expected: 5 },
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[0, 2, 0, 2, 0]], expected: 3 },
  ],
};
