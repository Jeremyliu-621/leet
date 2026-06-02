import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lexicographically-smallest-array-by-swapping-elements',
  title: 'Lexicographically Smallest Array by Swapping Elements',
  difficulty: 'medium',
  tags: ['arrays', 'union-find'],
  description: `You are given a **0-indexed** array of positive integers \`nums\` and a positive integer \`limit\`.

In one operation, you can swap the positions of two elements \`nums[i]\` and \`nums[j]\` if \`|nums[i] - nums[j]| <= limit\`.

Return the **lexicographically smallest** array that can be obtained by performing the operation any number of times.

Two arrays are lexicographically equal if all their elements are equal. A lexicographically smaller array has a smaller value at the first position where the arrays differ.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= limit <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,5,3,9,8], limit = 2',
      output: '[1,3,5,8,9]',
      explanation: '|5-3|=2<=limit, |3-9|=6>limit, |8-9|=1<=limit. Groups: {1}, {3,5}, {8,9}. Sort positions within groups: pos 1,2 get sorted values 3,5; pos 3,4 get 8,9.',
    },
    {
      input: 'nums = [1,7,6,18,2,1], limit = 3',
      output: '[1,6,7,18,1,2]',
      explanation: 'Groups by reachability: {1,2,1} at positions 0,4,5 and {7,6} at positions 1,2 and {18} at position 3. Sort each group\'s positions and values independently.',
    },
  ],
  hints: [
    'Level 1: Two elements can be swapped (directly or transitively) if they belong to the same "reachability group." Build groups by sorting elements: consecutive elements within limit distance are in the same group.',
    'Level 2: Sort (value, original index) pairs. Scan sorted order: whenever consecutive elements differ by > limit, start a new group.',
    'Level 3: For each group, sort the original indices and sort the values. Assign the i-th smallest value to the i-th smallest original index.',
  ],
  functionName: 'lexicographicallySmallestArray',
  params: ['nums', 'limit'],
  starterCode: {
    javascript: `function lexicographicallySmallestArray(nums, limit) {
  const n = nums.length;
  const sorted = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
  const result = new Array(n);
  let i = 0;
  while (i < n) {
    let j = i + 1;
    while (j < n && sorted[j][0] - sorted[j - 1][0] <= limit) j++;
    const group = sorted.slice(i, j);
    const indices = group.map(x => x[1]).sort((a, b) => a - b);
    const values = group.map(x => x[0]);
    for (let k = 0; k < indices.length; k++) result[indices[k]] = values[k];
    i = j;
  }
  return result;
}`,
    typescript: `function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
  const n = nums.length;
  const sorted = nums.map((v, i) => [v, i] as [number, number]).sort((a, b) => a[0] - b[0]);
  const result = new Array<number>(n);
  let i = 0;
  while (i < n) {
    let j = i + 1;
    while (j < n && sorted[j]![0] - sorted[j - 1]![0] <= limit) j++;
    const group = sorted.slice(i, j);
    const indices = group.map(x => x[1]).sort((a, b) => a - b);
    const values = group.map(x => x[0]);
    for (let k = 0; k < indices.length; k++) result[indices[k]!] = values[k]!;
    i = j;
  }
  return result;
}`,
    python: `def lexicographicallySmallestArray(nums, limit):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]; limit = int(limit)
    n = len(nums)
    sorted_pairs = sorted(enumerate(nums), key=lambda x: x[1])
    result = [0] * n
    i = 0
    while i < n:
        j = i + 1
        while j < n and sorted_pairs[j][1] - sorted_pairs[j - 1][1] <= limit:
            j += 1
        group = sorted_pairs[i:j]
        indices = sorted(x[0] for x in group)
        values = [x[1] for x in group]
        for k, idx in enumerate(indices):
            result[idx] = values[k]
        i = j
    return result`,
  },
  visibleTests: [
    { args: [[1, 5, 3, 9, 8], 2], expected: [1, 3, 5, 8, 9] },
    { args: [[1, 7, 6, 18, 2, 1], 3], expected: [1, 6, 7, 18, 1, 2] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[3, 1, 2], 1], expected: [1, 2, 3] },
    { args: [[3, 1, 2], 0], expected: [3, 1, 2] },
    { args: [[1, 2, 3, 4, 5], 1], expected: [1, 2, 3, 4, 5] },
    { args: [[5, 4, 3, 2, 1], 2], expected: [1, 2, 3, 4, 5] },
  ],
};
