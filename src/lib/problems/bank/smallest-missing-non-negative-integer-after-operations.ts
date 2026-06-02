import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-missing-non-negative-integer-after-operations',
  title: 'Smallest Missing Non-negative Integer After Operations',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`nums\` and an integer \`value\`.

In one operation, you can add or subtract \`value\` from any element of \`nums\`. You can apply this operation any number of times on any element.

Return the **smallest** missing non-negative integer after performing the operations optimally.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-100 <= nums[i] <= 100',
    '0 <= value <= 10',
  ],
  examples: [
    {
      input: 'nums = [0,1,2,3,4], value = 1',
      output: '5',
      explanation:
        'With value=1, every element can reach any integer (same remainder class mod 1). 5 elements cover 0–4, so MEX is 5.',
    },
    {
      input: 'nums = [0,2,4,6,8], value = 2',
      output: '1',
      explanation:
        'All elements are even; with value=2 they stay even. The smallest missing non-negative integer is 1 (odd).',
    },
  ],
  hints: [
    'When value=0, no element can change; find the MEX of the original array directly.',
    'When value>0, each element can only reach numbers with the same remainder mod value (adjusted to be non-negative).',
    'Count how many elements have each remainder class, then greedily fill slots 0,1,2,… — the first slot you cannot fill is the answer.',
  ],
  functionName: 'findSmallestInteger',
  params: ['nums', 'value'],
  starterCode: {
    javascript: `function findSmallestInteger(nums, value) {
  if (value === 0) {
    const s = new Set(nums.filter(x => x >= 0));
    let i = 0; while (s.has(i)) i++; return i;
  }
  const freq = new Array(value).fill(0);
  for (const n of nums) freq[((n % value) + value) % value]++;
  for (let x = 0; ; x++) { if (freq[x % value]-- <= 0) return x; }
}`,
    typescript: `function findSmallestInteger(nums: number[], value: number): number {
  if (value === 0) {
    const s = new Set(nums.filter(x => x >= 0));
    let i = 0; while (s.has(i)) i++; return i;
  }
  const freq = new Array(value).fill(0) as number[];
  for (const n of nums) freq[((n % value) + value) % value]!++;
  for (let x = 0; ; x++) { if (freq[x % value]!-- <= 0) return x; }
}`,
    python: `def findSmallestInteger(nums, value):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    if hasattr(value, 'to_py'): value = value.to_py()
    nums = [int(x) for x in nums]; value = int(value)
    if value == 0:
        s = set(x for x in nums if x >= 0)
        i = 0
        while i in s: i += 1
        return i
    freq = [0]*value
    for n in nums: freq[((n % value) + value) % value] += 1
    x = 0
    while True:
        if freq[x % value] <= 0: return x
        freq[x % value] -= 1; x += 1`,
  },
  visibleTests: [
    { args: [[0, 1, 2, 3, 4], 1], expected: 5 },
    { args: [[0, 2, 4, 6, 8], 2], expected: 1 },
    { args: [[0, 1, 2, 3, 4, 5, 6, 7], 2], expected: 8 },
    { args: [[1, 2, 3], 0], expected: 0 },
    { args: [[0, 1, 2], 0], expected: 3 },
  ],
  hiddenTests: [
    { args: [[0, 1, 2, 3], 1], expected: 4 },
    { args: [[-1, 0, 1, 2], 1], expected: 4 },
    { args: [[-5, 0, 5], 5], expected: 1 },
    { args: [[0, 3, 6, 9, 1, 4, 7, 10, 2, 5], 3], expected: 8 },
    { args: [[5, 5, 5], 0], expected: 0 },
  ],
};
