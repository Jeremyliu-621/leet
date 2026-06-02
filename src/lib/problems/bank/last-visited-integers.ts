import type { Problem } from '../types';

export const problem: Problem = {
  id: 'last-visited-integers',
  title: 'Last Visited Integers',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `Given an integer array \`nums\` where \`nums[i]\` is either a positive integer or \`-1\`.

We need to find the last visited integers. For each index \`i\` starting from 0, we do the following:
- If \`nums[i] == -1\`, denote the value of the most recently added positive integer in \`nums\` as \`num\`. If no such positive integer has been added yet, the last visited integer is -1.
- If \`nums[i] > 0\`, the last visited integer is not updated.

More precisely, for each \`-1\` in the array, we look for the **k-th most recently seen positive integer** (where k = 1 for the first -1 in a consecutive run, k = 2 for the second, etc.). The count k **resets** to 1 whenever a positive integer is seen.

Return an array of the last visited integers in the order they are found.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`nums[i]` is either `-1` or a positive integer between `1` and `100`.',
  ],
  examples: [
    {
      input: 'nums = [1,2,-1,-1,-1]',
      output: '[2,1,-1]',
      explanation: 'First -1: k=1, last 1 positive = 2. Second -1: k=2, last 2 = 1. Third -1: k=3, no such integer, result = -1.',
    },
    {
      input: 'nums = [1,-1,2,-1,-1]',
      output: '[1,2,1]',
      explanation: 'First -1 (k=1): last 1 positive = 1. Then 2 is seen, resets k. Next -1 (k=1): last 1 = 2. Next -1 (k=2): last 2 = 1.',
    },
    {
      input: 'nums = [2,5,-1,-1,3,-1]',
      output: '[5,2,3]',
      explanation: 'First two -1s refer back to 5 and 2. After 3, the -1 refers to 3.',
    },
  ],
  hints: [
    'Maintain a list of seen positive integers in order. Keep a counter k that increments for each consecutive -1 and resets when a positive is seen.',
    'For each -1, look up the k-th from the end of the seen-positives list.',
    'If seen.length < k, append -1 to the result; otherwise append seen[seen.length - k].',
  ],
  functionName: 'lastVisitedIntegers',
  params: ['nums'],
  starterCode: {
    javascript: `function lastVisitedIntegers(nums) {
  const seen = [], res = [];
  let k = 0;
  for (const n of nums) {
    if (n === -1) {
      k++;
      res.push(seen.length >= k ? seen[seen.length - k] : -1);
    } else {
      seen.push(n);
      k = 0;
    }
  }
  return res;
}`,
    typescript: `function lastVisitedIntegers(nums: number[]): number[] {
  const seen: number[] = [], res: number[] = [];
  let k = 0;
  for (const n of nums) {
    if (n === -1) {
      k++;
      res.push(seen.length >= k ? seen[seen.length - k] : -1);
    } else {
      seen.push(n);
      k = 0;
    }
  }
  return res;
}`,
    python: `def lastVisitedIntegers(nums):
    seen, res, k = [], [], 0
    for n in nums:
        if n == -1:
            k += 1
            res.append(seen[-k] if len(seen) >= k else -1)
        else:
            seen.append(n); k = 0
    return res`,
  },
  visibleTests: [
    { args: [[1, 2, -1, -1, -1]], expected: [2, 1, -1] },
    { args: [[1, -1, 2, -1, -1]], expected: [1, 2, 1] },
    { args: [[2, 5, -1, -1, 3, -1]], expected: [5, 2, 3] },
  ],
  hiddenTests: [
    { args: [[-1]], expected: [-1] },
    { args: [[5, -1]], expected: [5] },
    { args: [[1, 2, 3, -1]], expected: [3] },
    { args: [[-1, -1]], expected: [-1, -1] },
    { args: [[3, -1, -1]], expected: [3, -1] },
    { args: [[1, 2, -1, 3, -1]], expected: [2, 3] },
    { args: [[10, 20, 30, -1, -1, -1]], expected: [30, 20, 10] },
    { args: [[5, -1, 10, -1, -1]], expected: [5, 10, 5] },
  ],
};
