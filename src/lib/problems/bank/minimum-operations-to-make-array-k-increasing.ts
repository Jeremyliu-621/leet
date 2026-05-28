import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-k-increasing',
  title: 'Minimum Operations to Make Array K-Increasing',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'binary-search', 'arrays'],
  description: `You are given a 0-indexed array \`arr\` of positive integers and a positive integer \`k\`.

The array \`arr\` is called **K-increasing** if for every index \`i\` satisfying \`i + k < arr.length\`, \`arr[i] <= arr[i + k]\`.

In one operation you may choose any index and change \`arr[i]\` to any positive integer.

Return the **minimum number of operations** needed to make \`arr\` k-increasing.

**Key insight:** Elements at indices with the same remainder when divided by \`k\` form independent subsequences. For example with \`k = 2\`, even-indexed elements form one subsequence and odd-indexed elements form another. Making \`arr\` k-increasing is equivalent to making each of these \`k\` subsequences non-decreasing.`,
  constraints: [
    '1 <= arr.length <= 10^5',
    '1 <= arr[i] <= 10^9',
    '1 <= k <= arr.length',
  ],
  examples: [
    {
      input: 'arr = [5,4,3,2,1], k = 1',
      output: '4',
      explanation:
        'With k=1 the entire array must be non-decreasing. Only 1 element can stay (e.g. keep the 1 and change [5,4,3,2] → [1,1,1,1]). Minimum changes = 5 − LIS = 5 − 1 = 4.',
    },
    {
      input: 'arr = [4,1,5,2,6,2], k = 2',
      output: '0',
      explanation:
        'Group 0 (even indices): [4,5,6] is already non-decreasing. Group 1 (odd indices): [1,2,2] is already non-decreasing. No operations needed.',
    },
    {
      input: 'arr = [4,1,5,2,6,2], k = 3',
      output: '2',
      explanation:
        'Group 0 (indices 0,3): [4,2] — need 1 change (LIS length 1, seq length 2). Group 1 (indices 1,4): [1,6] — already non-decreasing. Group 2 (indices 2,5): [5,2] — need 1 change. Total = 2.',
    },
  ],
  hints: [
    'Notice that arr[i] and arr[i+k] must satisfy arr[i] <= arr[i+k]. Group all indices by their remainder modulo k. Elements within each group must form a non-decreasing sequence, and the groups are completely independent.',
    'For each group, the minimum number of changes is: (group length) − (length of longest non-decreasing subsequence, LNDS). Elements can repeat (≤ not <), so use a patience-sort variant with \`bisect_right\` (upper bound) rather than \`bisect_left\`.',
    '```js\nfunction kIncreasing(arr, k) {\n  function minOps(seq) {\n    const tails = [];\n    for (const x of seq) {\n      let lo = 0, hi = tails.length;\n      while (lo < hi) {\n        const mid = (lo + hi) >> 1;\n        if (tails[mid] <= x) lo = mid + 1; else hi = mid;\n      }\n      tails[lo] = x;\n    }\n    return seq.length - tails.length;\n  }\n  let ops = 0;\n  for (let r = 0; r < k; r++) {\n    const seq = [];\n    for (let i = r; i < arr.length; i += k) seq.push(arr[i]);\n    ops += minOps(seq);\n  }\n  return ops;\n}\n```',
  ],
  functionName: 'kIncreasing',
  params: ['arr', 'k'],
  starterCode: {
    javascript: `function kIncreasing(arr, k) {

}`,
    typescript: "function kIncreasing(arr: number[], k: number): number {\n\n}",

    python: `def kIncreasing(arr: list[int], k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[5, 4, 3, 2, 1], 1], expected: 4 },
    { args: [[4, 1, 5, 2, 6, 2], 2], expected: 0 },
    { args: [[4, 1, 5, 2, 6, 2], 3], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 5, 3, 7, 4, 9], 2], expected: 0 },
    { args: [[10, 1, 2, 3, 1], 2], expected: 2 },
    { args: [[1], 1], expected: 0 },
    { args: [[3, 2, 1, 4, 5], 1], expected: 2 },
    { args: [[2, 1], 2], expected: 0 },
  ],
};
