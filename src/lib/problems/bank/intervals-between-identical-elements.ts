import type { Problem } from '../types';

export const problem: Problem = {
  id: 'intervals-between-identical-elements',
  title: 'Intervals Between Identical Elements',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** array of \`n\` integers, \`arr\`.

The **interval** of two elements in \`arr\` is defined as \`|i - j|\`, where \`i\` and \`j\` are their indices in the array.

More formally, the **interval** between the elements at index \`i\` and index \`j\` is \`|arr[i] - arr[j]|\`.

Wait — more precisely, the **interval** between two elements with the **same** value is the absolute difference of their **indices**.

Return an array \`intervals\` of length \`n\` where \`intervals[i]\` is the **sum of intervals** between the \`i\`th element of \`arr\` and all other elements with the same value as \`arr[i]\`.`,
  constraints: [
    'n == arr.length',
    '2 <= n <= 10^5',
    '1 <= arr[i] <= 10^5',
  ],
  examples: [
    {
      input: 'arr = [2,1,3,1,2,3,3]',
      output: '[4,2,7,2,4,4,5]',
      explanation: 'Element at index 0 (value 2): |0-4| = 4. Element at index 1 (value 1): |1-3| = 2. And so on.',
    },
    {
      input: 'arr = [10,5,10,10]',
      output: '[5,0,3,4]',
      explanation: 'Indices of value 10 are [0,2,3]. For index 0: |0-2|+|0-3|=5. For index 2: |2-0|+|2-3|=3. For index 3: |3-0|+|3-2|=4.',
    },
  ],
  hints: [
    'Group indices by value. For a group of indices [i0, i1, ..., ik] (sorted), use prefix sums to compute the answer for each index in O(1).',
    'For index iₘ in the sorted group: left sum = iₘ * m - prefixSum[m], right sum = (suffixSum[m] - iₘ * (count - m)). Total = left + right.',
    'Build a prefix sum array of the group indices; then for each position m, compute left contribution and right contribution in O(1).',
  ],
  functionName: 'getDistances',
  params: ['arr'],
  starterCode: {
    javascript: `function getDistances(arr) {
  const groups = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!groups.has(arr[i])) groups.set(arr[i], []);
    groups.get(arr[i]).push(i);
  }
  const ans = new Array(arr.length).fill(0);
  for (const indices of groups.values()) {
    const n = indices.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + indices[i];
    for (let m = 0; m < n; m++) {
      const left = indices[m] * m - prefix[m];
      const right = (prefix[n] - prefix[m + 1]) - indices[m] * (n - m - 1);
      ans[indices[m]] = left + right;
    }
  }
  return ans;
}`,
    typescript: `function getDistances(arr: number[]): number[] {
  const groups = new Map<number, number[]>();
  for (let i = 0; i < arr.length; i++) {
    if (!groups.has(arr[i])) groups.set(arr[i], []);
    groups.get(arr[i])!.push(i);
  }
  const ans = new Array(arr.length).fill(0);
  for (const indices of groups.values()) {
    const n = indices.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + indices[i];
    for (let m = 0; m < n; m++) {
      const left = indices[m] * m - prefix[m];
      const right = (prefix[n] - prefix[m + 1]) - indices[m] * (n - m - 1);
      ans[indices[m]] = left + right;
    }
  }
  return ans;
}`,
    python: `def getDistances(arr):
    from collections import defaultdict
    groups = defaultdict(list)
    for i, v in enumerate(arr): groups[v].append(i)
    ans = [0] * len(arr)
    for indices in groups.values():
        n = len(indices)
        prefix = [0] * (n + 1)
        for i in range(n): prefix[i + 1] = prefix[i] + indices[i]
        for m in range(n):
            left = indices[m] * m - prefix[m]
            right = (prefix[n] - prefix[m + 1]) - indices[m] * (n - m - 1)
            ans[indices[m]] = left + right
    return ans`,
  },
  visibleTests: [
    { args: [[2,1,3,1,2,3,3]], expected: [4,2,7,2,4,4,5] },
    { args: [[10,5,10,10]], expected: [5,0,3,4] },
  ],
  hiddenTests: [
    { args: [[1,1]], expected: [1,1] },
    { args: [[1,2,1,2,1]], expected: [6,2,4,2,6] },
    { args: [[1,1,1,1]], expected: [6,4,4,6] },
    { args: [[5]], expected: [0] },
    { args: [[1,2,3,4,5]], expected: [0,0,0,0,0] },
  ],
};
