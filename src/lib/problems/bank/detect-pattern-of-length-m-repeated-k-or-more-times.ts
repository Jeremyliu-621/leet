import type { Problem } from '../types';

export const problem: Problem = {
  id: 'detect-pattern-of-length-m-repeated-k-or-more-times',
  title: 'Detect Pattern of Length M Repeated K or More Times',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `Given an array of positive integers \`arr\`, find a pattern of length \`m\` that is repeated \`k\` or more times.

A **pattern** is a subarray (consecutive subsequence) that appears at consecutive positions in \`arr\`. Specifically, a pattern of length \`m\` repeated \`k\` or more times means there exists an index \`i\` such that \`arr[i..i+m-1] === arr[i+m..i+2m-1] === ... === arr[i+(k-1)m..i+km-1]\`.

Return \`true\` if such a pattern exists, otherwise return \`false\`.`,
  constraints: [
    '`2 <= arr.length <= 100`',
    '`1 <= m <= 100`',
    '`2 <= k <= 100`',
    '`1 <= arr[i] <= 100`',
  ],
  examples: [
    {
      input: 'arr = [1,2,4,4,4,4], m = 1, k = 3',
      output: 'true',
      explanation: 'The pattern [4] of length 1 is repeated 4 times starting at index 2. 4 >= 3.',
    },
    {
      input: 'arr = [1,2,1,2,1,1,1,3], m = 2, k = 2',
      output: 'true',
      explanation: 'The pattern [1,2] of length 2 is repeated 2 times starting at index 0.',
    },
    {
      input: 'arr = [1,2,1,2,1,3], m = 2, k = 3',
      output: 'false',
      explanation: 'The pattern [1,2] repeats only twice. No pattern of length 2 repeats 3 or more times.',
    },
  ],
  hints: [
    'Brute force: for each starting index i, check if the subarray arr[i..i+m-1] repeats k times consecutively.',
    'The key check: arr[i+j] === arr[i+j+m] for all j in [0, m*(k-1)). If all match, return true.',
    'Outer loop over n-m*k+1 starting indices; inner check over m*(k-1) comparisons. Total O(n*m*k).',
  ],
  functionName: 'containsPattern',
  params: ['arr', 'm', 'k'],
  starterCode: {
    javascript: `function containsPattern(arr, m, k) {
  const n = arr.length;
  for (let i = 0; i + m * k <= n; i++) {
    let ok = true;
    for (let j = i; j < i + m * (k - 1); j++) {
      if (arr[j] !== arr[j + m]) { ok = false; break; }
    }
    if (ok) return true;
  }
  return false;
}`,
    typescript: `function containsPattern(arr: number[], m: number, k: number): boolean {
  const n = arr.length;
  for (let i = 0; i + m * k <= n; i++) {
    let ok = true;
    for (let j = i; j < i + m * (k - 1); j++) {
      if (arr[j] !== arr[j + m]) { ok = false; break; }
    }
    if (ok) return true;
  }
  return false;
}`,
    python: `def containsPattern(arr, m, k):
    n = len(arr)
    for i in range(n - m * k + 1):
        if all(arr[j] == arr[j + m] for j in range(i, i + m * (k - 1))):
            return True
    return False`,
  },
  visibleTests: [
    { args: [[1, 2, 4, 4, 4, 4], 1, 3], expected: true },
    { args: [[1, 2, 1, 2, 1, 1, 1, 3], 2, 2], expected: true },
    { args: [[1, 2, 1, 2, 1, 3], 2, 3], expected: false },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: true },
    { args: [[1, 1], 1, 2], expected: true },
    { args: [[1, 2], 1, 2], expected: false },
    { args: [[1, 1, 1], 1, 3], expected: true },
    { args: [[1, 2, 1, 2], 2, 2], expected: true },
    { args: [[1, 2, 3], 1, 2], expected: false },
    { args: [[3, 3, 3, 3, 3], 2, 2], expected: true },
    { args: [[1, 2, 3, 1, 2, 3, 1, 2, 3], 3, 3], expected: true },
  ],
};
