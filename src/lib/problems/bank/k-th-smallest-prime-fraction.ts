import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-th-smallest-prime-fraction',
  title: 'K-th Smallest Prime Fraction',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a sorted integer array \`arr\` that contains \`1\` and **prime numbers**. For every pair of indices \`(i, j)\` where \`0 <= i < j < arr.length\`, the fraction \`arr[i] / arr[j]\` is considered.

Return the \`k\`-th smallest fraction among all these fractions.

The answer is an array of two integers: \`[arr[i], arr[j]]\`.`,
  constraints: [
    '2 <= arr.length <= 1000',
    '1 <= arr[0] < arr[1] < ... < arr[arr.length - 1] <= 30000',
    'arr[0] == 1',
    'All elements in arr are prime numbers except arr[0] = 1.',
    '1 <= k <= arr.length * (arr.length - 1) / 2',
  ],
  examples: [
    {
      input: 'arr = [1,2,3,5], k = 3',
      output: '[2,5]',
      explanation:
        'All fractions in sorted order: 1/5, 1/3, 2/5, 1/2, 3/5, 2/3. The 3rd smallest is 2/5.',
    },
    {
      input: 'arr = [1,7], k = 1',
      output: '[1,7]',
      explanation: 'There is only one fraction: 1/7.',
    },
    {
      input: 'arr = [1,2,3,5], k = 1',
      output: '[1,5]',
      explanation: 'The smallest fraction is 1/5 = 0.2.',
    },
  ],
  hints: [
    'Level 1: Binary search on the value of the answer fraction f. For a given f, count how many fractions have value less than f.',
    'Level 2: To count fractions < f efficiently: for each denominator arr[j], use a pointer p starting at 0 and advance while arr[p] / arr[j] < f. The count for this j is p. Sum over all j. Also track the largest fraction seen that is still less than f — that\'s your candidate answer.',
    'Level 3: Binary search lo=0, hi=1. Compute mid=(lo+hi)/2, count and candidate. If count < k, set lo=mid; if count >= k set hi=mid. After ~100 iterations lo≈hi≈the answer; the tracked candidate [num, den] is the answer pair.',
  ],
  functionName: 'kthSmallestPrimeFraction',
  params: ['arr', 'k'],
  starterCode: {
    javascript: `function kthSmallestPrimeFraction(arr, k) {
  const fracs = [];
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      fracs.push([arr[i], arr[j]]);
  fracs.sort((a, b) => a[0] * b[1] - b[0] * a[1]);
  return fracs[k - 1];
}`,
    typescript: `function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
  const fracs: number[][] = [];
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      fracs.push([arr[i], arr[j]]);
  fracs.sort((a, b) => a[0] * b[1] - b[0] * a[1]);
  return fracs[k - 1];
}`,
    python: `def kthSmallestPrimeFraction(arr, k):
    fracs = [(arr[i], arr[j]) for i in range(len(arr)) for j in range(i+1, len(arr))]
    fracs.sort(key=lambda f: f[0]/f[1])
    return list(fracs[k-1])`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 5], 3], expected: [2, 5] },
    { args: [[1, 7], 1], expected: [1, 7] },
    { args: [[1, 2, 3, 5], 1], expected: [1, 5] },
  ],
  hiddenTests: [
    { args: [[1, 2], 1], expected: [1, 2] },
    { args: [[1, 2, 3], 2], expected: [1, 2] },
    { args: [[1, 2, 3, 5], 6], expected: [2, 3] },
    { args: [[1, 3, 5, 7], 4], expected: [3, 7] },
    { args: [[1, 2, 3, 5, 7], 7], expected: [1, 2] },
    { args: [[1, 2, 3, 5, 7, 11], 4], expected: [1, 5] },
    { args: [[1, 13], 1], expected: [1, 13] },
    { args: [[1, 2, 3, 5, 7], 5], expected: [2, 5] },
  ],
};
