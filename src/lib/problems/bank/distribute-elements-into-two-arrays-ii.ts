import type { Problem } from '../types';

export const problem: Problem = {
  id: 'distribute-elements-into-two-arrays-ii',
  title: 'Distribute Elements Into Two Arrays II',
  difficulty: 'hard',
  tags: ['arrays', 'binary-indexed-tree'],
  description: `You are given a **0-indexed** integer array \`nums\` of length \`n\`.

We apply the following procedure:

1. Let \`arr1\` = [\`nums[0]\`] and \`arr2\` = [\`nums[1]\`].
2. For each subsequent element \`nums[i]\` (2 <= i < n):
   - Let \`greaterCount(arr, val)\` = the number of elements in \`arr\` that are **strictly greater** than \`val\`.
   - If \`greaterCount(arr1, nums[i]) > greaterCount(arr2, nums[i])\`, append \`nums[i]\` to \`arr1\`.
   - If \`greaterCount(arr1, nums[i]) < greaterCount(arr2, nums[i])\`, append \`nums[i]\` to \`arr2\`.
   - If they are **equal**, append \`nums[i]\` to \`arr1\`.

Return the concatenation of \`arr1\` and \`arr2\` as the result array.`,
  constraints: [
    '`3 <= n <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
    '`nums[0] != nums[1]`',
  ],
  examples: [
    {
      input: 'nums = [2,1,3,3]',
      output: '[2,3,3,1]',
      explanation: 'arr1=[2], arr2=[1]. For 3: greaterCount([2],3)=0, greaterCount([1],3)=0 — tie, append to arr1 → arr1=[2,3]. For second 3: greaterCount([2,3],3)=0, greaterCount([1],3)=0 — tie, append to arr1 → arr1=[2,3,3]. Result: [2,3,3,1].',
    },
    {
      input: 'nums = [5,14,3,1,2]',
      output: '[5,3,1,2,14]',
      explanation: 'arr1=[5], arr2=[14]. For 3: greaterCount([5],3)=1, greaterCount([14],3)=1 — tie → arr1=[5,3]. For 1: greaterCount([5,3],1)=2, greaterCount([14],1)=1 → arr1=[5,3,1]. For 2: greaterCount([5,3,1],2)=2, greaterCount([14],2)=1 → arr1=[5,3,1,2]. 14 goes to arr2. Result: [5,3,1,2,14].',
    },
    {
      input: 'nums = [3,3,3,3]',
      output: '[3,3,3,3]',
      explanation: 'All ties result in appending to arr1. arr1=[3,3,3], arr2=[3]. Result: [3,3,3,3].',
    },
  ],
  hints: [
    'A naive O(n²) approach recomputes greaterCount by scanning each array. Too slow for n=10^5.',
    'Coordinate-compress all values to ranks 1..m. Maintain two Binary Indexed Trees (BITs), one per array.',
    'greaterCount(arr, val) = arr.length - BIT.prefixQuery(rank(val)). A prefix query up to rank(val) counts elements ≤ val.',
    'When adding val to an array, call update(BIT, rank(val)) to increment. Each operation is O(log n).',
  ],
  functionName: 'resultArray',
  params: ['nums'],
  starterCode: {
    javascript: `function resultArray(nums) {
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((v, i) => [v, i + 1]));
  const m = sorted.length;
  const newBit = () => new Int32Array(m + 2);
  const update = (bit, i) => { for (; i <= m; i += i & -i) bit[i]++; };
  const query = (bit, i) => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; };
  const bit1 = newBit(), bit2 = newBit();
  const arr1 = [nums[0]], arr2 = [nums[1]];
  update(bit1, rank.get(nums[0]));
  update(bit2, rank.get(nums[1]));
  for (let i = 2; i < nums.length; i++) {
    const r = rank.get(nums[i]);
    const gc1 = arr1.length - query(bit1, r);
    const gc2 = arr2.length - query(bit2, r);
    if (gc1 >= gc2) { arr1.push(nums[i]); update(bit1, r); }
    else { arr2.push(nums[i]); update(bit2, r); }
  }
  return [...arr1, ...arr2];
}`,
    typescript: `function resultArray(nums: number[]): number[] {
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((v, i) => [v, i + 1]));
  const m = sorted.length;
  const newBit = () => new Int32Array(m + 2);
  const update = (bit: Int32Array, i: number) => { for (; i <= m; i += i & -i) bit[i]!++; };
  const query = (bit: Int32Array, i: number) => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]!; return s; };
  const bit1 = newBit(), bit2 = newBit();
  const arr1 = [nums[0]!], arr2 = [nums[1]!];
  update(bit1, rank.get(nums[0]!)!);
  update(bit2, rank.get(nums[1]!)!);
  for (let i = 2; i < nums.length; i++) {
    const r = rank.get(nums[i]!)!;
    const gc1 = arr1.length - query(bit1, r);
    const gc2 = arr2.length - query(bit2, r);
    if (gc1 >= gc2) { arr1.push(nums[i]!); update(bit1, r); }
    else { arr2.push(nums[i]!); update(bit2, r); }
  }
  return [...arr1, ...arr2];
}`,
    python: `def resultArray(nums):
    vals = sorted(set(nums))
    rank = {v: i+1 for i, v in enumerate(vals)}
    m = len(vals)
    def new_bit():
        return [0] * (m + 2)
    def update(bit, i):
        while i <= m:
            bit[i] += 1
            i += i & -i
    def query(bit, i):
        s = 0
        while i > 0:
            s += bit[i]
            i -= i & -i
        return s
    bit1, bit2 = new_bit(), new_bit()
    arr1, arr2 = [nums[0]], [nums[1]]
    update(bit1, rank[nums[0]])
    update(bit2, rank[nums[1]])
    for i in range(2, len(nums)):
        r = rank[nums[i]]
        gc1 = len(arr1) - query(bit1, r)
        gc2 = len(arr2) - query(bit2, r)
        if gc1 >= gc2:
            arr1.append(nums[i])
            update(bit1, r)
        else:
            arr2.append(nums[i])
            update(bit2, r)
    return arr1 + arr2`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 3]], expected: [2, 3, 3, 1] },
    { args: [[5, 14, 3, 1, 2]], expected: [5, 3, 1, 2, 14] },
    { args: [[3, 3, 3, 3]], expected: [3, 3, 3, 3] },
  ],
  hiddenTests: [
    { args: [[3, 2, 1]], expected: [3, 1, 2] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 3, 4, 5, 2] },
    { args: [[5, 4, 3, 2, 1]], expected: [5, 3, 2, 1, 4] },
    { args: [[1, 1000000000, 500000000]], expected: [1, 1000000000, 500000000] },
  ],
};
