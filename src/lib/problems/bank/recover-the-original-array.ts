import type { Problem } from '../types';

export const problem: Problem = {
  id: 'recover-the-original-array',
  title: 'Recover the Original Array',
  difficulty: 'hard',
  tags: ['arrays', 'hash-map', 'two-pointers'],
  description: `Alice had a **0-indexed** array \`arr\` consisting of \`n\` **positive** integers. She decided to encode it into another array \`encoded\` by creating two arrays \`lower\` and \`higher\` where \`lower[i] = arr[i] - k\` and \`higher[i] = arr[i] + k\` for some positive integer \`k > 0\`.

Unfortunately, Alice lost track of what \`k\` was and also mixed \`lower\` and \`higher\` together into a single array \`nums\` of length \`2n\`. She also sorted \`nums\`.

Given the sorted array \`nums\`, return the **original** array. If there are multiple valid original arrays, return **any** of them.

**Note:** \`k\` must be a positive integer. An element in \`lower\` cannot equal the corresponding element in \`higher\`.`,
  constraints: [
    '2 <= nums.length <= 1000',
    'nums.length is even.',
    '-10^9 <= nums[i] <= 10^9',
    'nums is sorted in non-decreasing order.',
    'There exists a valid original array that could have produced nums.',
  ],
  examples: [
    {
      input: 'nums = [2,10,6,4,8,12]',
      output: '[3,7,11]',
      explanation: 'If the original array is [3,7,11], then lower = [2,6,10] and higher = [4,8,12]. Merged and sorted: [2,4,6,8,10,12] — but since this is given as [2,10,6,4,8,12] (unsorted), the judge sorts both and compares. Original answer [3,7,11] is valid.',
    },
    {
      input: 'nums = [1,1,3,3]',
      output: '[2,2]',
      explanation: 'If arr=[2,2], then lower=[1,1] and higher=[3,3]. merged and sorted gives [1,1,3,3].',
    },
    {
      input: 'nums = [5,435]',
      output: '[220]',
      explanation: 'The only possible original array is [220] with k=215. lower=[5], higher=[435].',
    },
  ],
  hints: [
    'The smallest element of `nums` must always be in the `lower` array. Try each candidate `k` by pairing `nums[0]` with each subsequent element `nums[i]` — the difference `nums[i] - nums[0]` must be even and positive to give a valid `k`.',
    'For each candidate `k`, use a frequency map (multiset) to greedily pair elements: consume the smallest unmatched element as a `lower` element and check that `lower + 2k` exists in the map as its `higher` counterpart.',
    `\`\`\`js
function recoverArray(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length / 2;
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[0];
    if (diff === 0 || diff % 2 !== 0) continue;
    const k = diff / 2;
    const freq = new Map();
    for (const v of nums) freq.set(v, (freq.get(v) ?? 0) + 1);
    const result = [];
    let ok = true;
    for (const v of nums) {
      if (!freq.get(v)) continue;
      if (!freq.get(v + 2 * k)) { ok = false; break; }
      freq.set(v, freq.get(v) - 1);
      freq.set(v + 2 * k, freq.get(v + 2 * k) - 1);
      result.push(v + k);
    }
    if (ok) return result;
  }
  return [];
}
\`\`\``,
  ],
  functionName: 'recoverArray',
  params: ['nums'],
  preamble: {
    javascript: `function recoverArrayRunner(nums) {
  const result = recoverArray([...nums]);
  result.sort((a, b) => a - b);
  return result;
}`,
    python: `def recoverArrayRunner(nums):
    result = recoverArray(list(nums))
    result.sort()
    return result`,
  },
  starterCode: {
    javascript: `function recoverArray(nums) {

}`,
    typescript: 'function recoverArray(nums: number[]): number[] {\n\n}',
    python: `def recoverArray(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 10, 6, 4, 8, 12]], expected: [3, 7, 11] },
    { args: [[1, 1, 3, 3]], expected: [2, 2] },
    { args: [[5, 435]], expected: [220] },
  ],
  hiddenTests: [
    { args: [[1, 3]], expected: [2] },
    { args: [[1, 2, 3, 4]], expected: [2, 3] },
    { args: [[2, 4, 6, 8]], expected: [3, 7] },
    { args: [[2, 4, 6, 8, 10, 12]], expected: [3, 7, 11] },
    { args: [[100, 100, 102, 102]], expected: [101, 101] },
  ],
};
