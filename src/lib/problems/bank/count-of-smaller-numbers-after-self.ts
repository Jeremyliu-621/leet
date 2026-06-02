import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-smaller-numbers-after-self',
  title: 'Count of Smaller Numbers After Self',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return *an integer array* \`counts\` *where* \`counts[i]\` *is the number of smaller elements to the right of* \`nums[i]\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`-10^4 <= nums[i] <= 10^4`',
  ],
  examples: [
    {
      input: 'nums = [5,2,6,1]',
      output: '[2,1,1,0]',
      explanation:
        'To the right of 5 there are 2 smaller elements (2 and 1). To the right of 2 there is only 1 smaller element (1). To the right of 6 there is 1 smaller element (1). To the right of 1 there are 0 smaller elements.',
    },
    {
      input: 'nums = [-1]',
      output: '[0]',
    },
    {
      input: 'nums = [-1,-1]',
      output: '[0,0]',
    },
  ],
  hints: [
    'Process from right to left, maintaining a sorted structure of seen elements.',
    'A Binary Indexed Tree (BIT/Fenwick Tree) over coordinate-compressed values works in O(n log n).',
    'Alternatively, use merge sort: during merge, count elements from the right half that were placed before the current left-half element.',
  ],
  functionName: 'countSmaller',
  params: ['nums'],
  starterCode: {
    javascript: `function countSmaller(nums) {
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((v, i) => [v, i + 1]));
  const m = sorted.length;
  const bit = new Array(m + 1).fill(0);
  const update = i => { for (; i <= m; i += i & -i) bit[i]++; };
  const query = i => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; };
  const result = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    const r = rank.get(nums[i]);
    result[i] = query(r - 1);
    update(r);
  }
  return result;
}`,
    typescript: `function countSmaller(nums: number[]): number[] {
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  const rank = new Map<number, number>(sorted.map((v, i) => [v, i + 1]));
  const m = sorted.length;
  const bit = new Array(m + 1).fill(0);
  const update = (i: number) => { for (; i <= m; i += i & -i) bit[i]++; };
  const query = (i: number) => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; };
  const result = new Array<number>(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    const r = rank.get(nums[i]!)!;
    result[i] = query(r - 1);
    update(r);
  }
  return result;
}`,
    python: `def countSmaller(nums):
    sorted_unique = sorted(set(nums))
    rank = {v: i + 1 for i, v in enumerate(sorted_unique)}
    m = len(sorted_unique)
    bit = [0] * (m + 1)
    def update(i):
        while i <= m:
            bit[i] += 1
            i += i & -i
    def query(i):
        s = 0
        while i > 0:
            s += bit[i]
            i -= i & -i
        return s
    result = [0] * len(nums)
    for i in range(len(nums) - 1, -1, -1):
        r = rank[nums[i]]
        result[i] = query(r - 1)
        update(r)
    return result`,
  },
  visibleTests: [
    { args: [[5, 2, 6, 1]], expected: [2, 1, 1, 0] },
    { args: [[-1]], expected: [0] },
    { args: [[-1, -1]], expected: [0, 0] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [0] },
    { args: [[2, 0, 1]], expected: [2, 0, 0] },
    { args: [[5, 4, 3, 2, 1]], expected: [4, 3, 2, 1, 0] },
    { args: [[1, 2, 3, 4, 5]], expected: [0, 0, 0, 0, 0] },
    { args: [[3, 2, 2, 6, 1]], expected: [3, 1, 1, 1, 0] },
  ],
};
