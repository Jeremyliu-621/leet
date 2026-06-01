import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-of-absolute-value-expression',
  title: 'Maximum of Absolute Value Expression',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given two arrays of integers with equal lengths, \`arr1\` and \`arr2\`, return the **maximum** value of:

$$|\\text{arr1}[i] - \\text{arr1}[j]| + |\\text{arr2}[i] - \\text{arr2}[j]| + |i - j|$$

where \`0 <= i < j < arr1.length\`.`,
  constraints: [
    '2 <= arr1.length == arr2.length <= 40000',
    '-10^6 <= arr1[i], arr2[i] <= 10^6',
  ],
  examples: [
    {
      input: 'arr1 = [1,2,3,4], arr2 = [1,2,3,4]',
      output: '9',
      explanation: 'i=0, j=3: |1-4|+|1-4|+|0-3| = 3+3+3 = 9.',
    },
    {
      input: 'arr1 = [1,-2,-5,0,-3], arr2 = [-4,3,0,5,4]',
      output: '16',
      explanation: 'i=0, j=4: |1-(-3)|+|(-4)-4|+4 = 4+8+4 = 16.',
    },
    {
      input: 'arr1 = [1,2], arr2 = [2,1]',
      output: '3',
      explanation: 'Only pair (0,1): |1-2|+|2-1|+1 = 1+1+1 = 3.',
    },
  ],
  hints: [
    'Level 1: Expand using the identity |a|+|b|+|c| = max over 4 sign combinations (±a±b+c). Each combination can be computed in O(n) with a running max and min.',
    'Level 2: For each (s1, s2) ∈ {+1, −1}², define f(i) = s1·arr1[i] + s2·arr2[i] + i. The answer includes max(f) − min(f) over these 4 combos.',
    'Level 3: The four sign combinations cover all 8 possibilities because negating all signs swaps max and min, giving the same range. Total O(4n).',
  ],
  functionName: 'maxAbsValExpr',
  params: ['arr1', 'arr2'],
  starterCode: {
    javascript: `function maxAbsValExpr(arr1, arr2) {
  let ans = 0;
  for (const s1 of [1, -1]) {
    for (const s2 of [1, -1]) {
      let mx = -Infinity, mn = Infinity;
      for (let i = 0; i < arr1.length; i++) {
        const v = s1 * arr1[i] + s2 * arr2[i] + i;
        mx = Math.max(mx, v);
        mn = Math.min(mn, v);
      }
      ans = Math.max(ans, mx - mn);
    }
  }
  return ans;
}`,
    typescript: `function maxAbsValExpr(arr1: number[], arr2: number[]): number {
  let ans = 0;
  for (const s1 of [1, -1] as const) {
    for (const s2 of [1, -1] as const) {
      let mx = -Infinity, mn = Infinity;
      for (let i = 0; i < arr1.length; i++) {
        const v = s1 * arr1[i] + s2 * arr2[i] + i;
        mx = Math.max(mx, v);
        mn = Math.min(mn, v);
      }
      ans = Math.max(ans, mx - mn);
    }
  }
  return ans;
}`,
    python: `def maxAbsValExpr(arr1, arr2):
    ans = 0
    for s1 in (1, -1):
        for s2 in (1, -1):
            mx, mn = float('-inf'), float('inf')
            for i in range(len(arr1)):
                v = s1 * arr1[i] + s2 * arr2[i] + i
                mx = max(mx, v)
                mn = min(mn, v)
            ans = max(ans, mx - mn)
    return ans`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], [1, 2, 3, 4]], expected: 9 },
    { args: [[1, -2, -5, 0, -3], [-4, 3, 0, 5, 4]], expected: 16 },
    { args: [[1, 2], [2, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 3, 5], [2, 4, 6]], expected: 10 },
    { args: [[0, 0, 0], [0, 0, 0]], expected: 2 },
    { args: [[1, 2, 3], [3, 2, 1]], expected: 6 },
    { args: [[0, 5, 0], [0, 5, 0]], expected: 11 },
    { args: [[-1, -2], [-3, -4]], expected: 3 },
    { args: [[1000000, -1000000], [-1000000, 1000000]], expected: 4000001 },
  ],
};
