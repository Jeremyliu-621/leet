import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bitwise-ors-of-subarrays',
  title: 'Bitwise ORs of Subarrays',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'arrays', 'dynamic-programming'],
  description: `Given an integer array \`arr\`, return the number of **distinct** values among the results of all non-empty subarrays' bitwise OR operations.

That is, count the distinct values in \`{arr[i] OR arr[i+1] OR ... OR arr[j] : 0 <= i <= j < arr.length}\`.`,
  constraints: [
    '`1 <= arr.length <= 5 * 10^4`',
    '`0 <= arr[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'arr = [0]',
      output: '1',
      explanation: 'There is only one possible result: 0.',
    },
    {
      input: 'arr = [1,1,2]',
      output: '3',
      explanation: 'Distinct OR values from all subarrays: {1, 3, 2}.',
    },
    {
      input: 'arr = [1,2,4]',
      output: '6',
      explanation: 'Distinct OR values: {1, 2, 3, 4, 6, 7}.',
    },
  ],
  hints: [
    'For each index j, track the set of OR values for all subarrays ending at j. When you extend to j+1, the new set is {x | arr[j+1] : x in prev} ∪ {arr[j+1]}.',
    'Key insight: the set of OR values ending at j has at most log(max_value) distinct elements, because each new OR value must have at least one more bit set than the previous.',
    'Use a running Set for subarrays ending at the current index, plus a global Set of all seen values.',
  ],
  functionName: 'subarrayBitwiseORs',
  params: ['arr'],
  starterCode: {
    javascript: `function subarrayBitwiseORs(arr) {
  const all = new Set();
  let cur = new Set();
  for (const x of arr) {
    const next = new Set([x]);
    for (const v of cur) next.add(v | x);
    for (const v of next) all.add(v);
    cur = next;
  }
  return all.size;
}`,
    typescript: `function subarrayBitwiseORs(arr: number[]): number {
  const all = new Set<number>();
  let cur = new Set<number>();
  for (const x of arr) {
    const next = new Set<number>([x]);
    for (const v of cur) next.add(v | x);
    for (const v of next) all.add(v);
    cur = next;
  }
  return all.size;
}`,
    python: `def subarrayBitwiseORs(arr):
    all_vals = set()
    cur = set()
    for x in arr:
        cur = {v | x for v in cur} | {x}
        all_vals |= cur
    return len(all_vals)`,
  },
  visibleTests: [
    { args: [[0]], expected: 1 },
    { args: [[1, 1, 2]], expected: 3 },
    { args: [[1, 2, 4]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[0, 0]], expected: 1 },
    { args: [[1, 1, 1, 1]], expected: 1 },
    { args: [[3, 5]], expected: 3 },
    { args: [[1, 2, 4, 8]], expected: 10 },
    { args: [[5, 5, 5]], expected: 1 },
  ],
};
