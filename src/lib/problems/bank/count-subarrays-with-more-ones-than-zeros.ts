import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-with-more-ones-than-zeros',
  title: 'Count Subarrays With More Ones Than Zeros',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a binary array \`nums\` containing only \`0\`s and \`1\`s.

Return the number of subarrays that have **strictly more** \`1\`s than \`0\`s.

Since the answer may be very large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 1',
  ],
  examples: [
    {
      input: 'nums = [0,1,1,0,1]',
      output: '9',
      explanation: 'Subarrays with more 1s than 0s: [1](index 1), [1](index 2), [1,1](indices 1-2), [0,1,1](indices 0-2), [1](index 4), [1,1,0,1](indices 1-4), [0,1](indices 3-4) are some of the valid ones. Total is 9.',
    },
    {
      input: 'nums = [0]',
      output: '0',
      explanation: 'No subarray has more 1s than 0s.',
    },
    {
      input: 'nums = [1]',
      output: '1',
      explanation: 'The only subarray [1] has one 1 and zero 0s.',
    },
  ],
  hints: [
    'Map 0 → -1, keep 1 → +1. Now count subarrays with positive sum.',
    'Use prefix sums: subarray [i+1..j] has positive sum iff prefix[j] > prefix[i].',
    'For each j, count how many previous prefix values are strictly less than prefix[j].',
    'Use a Binary Indexed Tree (Fenwick tree) over the offset prefix sum range.',
  ],
  functionName: 'subarraysWithMoreZerosThanOnes',
  params: ['nums'],
  starterCode: {
    javascript: `function subarraysWithMoreZerosThanOnes(nums) {
  const MOD = 1e9 + 7;
  const n = nums.length;
  // Map balance to [0, 2n] by offset n; balance ranges [-n, n]
  const offset = n;
  const bit = new Array(2 * n + 2).fill(0);

  function update(i) {
    for (i++; i < bit.length; i += i & (-i)) bit[i]++;
  }
  function query(i) {
    let s = 0;
    for (i++; i > 0; i -= i & (-i)) s += bit[i];
    return s;
  }

  let count = 0, balance = 0;
  update(offset); // prefix[0] = 0
  for (const num of nums) {
    balance += num === 1 ? 1 : -1;
    // Count previous prefixes strictly less than current balance
    // i.e., query [0, balance-1] in BIT
    if (balance - 1 + offset >= 0) {
      count = (count + query(balance - 1 + offset)) % MOD;
    }
    update(balance + offset);
  }
  return count;
}`,
    typescript: `function subarraysWithMoreZerosThanOnes(nums: number[]): number {
  const MOD = 1e9 + 7;
  const n = nums.length;
  const offset = n;
  const bit = new Array(2 * n + 2).fill(0);

  function update(i: number): void {
    for (i++; i < bit.length; i += i & (-i)) bit[i]++;
  }
  function query(i: number): number {
    let s = 0;
    for (i++; i > 0; i -= i & (-i)) s += bit[i];
    return s;
  }

  let count = 0, balance = 0;
  update(offset);
  for (const num of nums) {
    balance += num === 1 ? 1 : -1;
    if (balance - 1 + offset >= 0) {
      count = (count + query(balance - 1 + offset)) % MOD;
    }
    update(balance + offset);
  }
  return count;
}`,
    python: `def subarraysWithMoreZerosThanOnes(nums):
    MOD = 10**9 + 7
    n = len(nums)
    offset = n
    bit = [0] * (2 * n + 2)

    def update(i):
        i += 1
        while i < len(bit):
            bit[i] += 1
            i += i & (-i)

    def query(i):
        i += 1
        s = 0
        while i > 0:
            s += bit[i]
            i -= i & (-i)
        return s

    count = 0
    balance = 0
    update(offset)
    for num in nums:
        balance += 1 if num == 1 else -1
        if balance - 1 + offset >= 0:
            count = (count + query(balance - 1 + offset)) % MOD
        update(balance + offset)
    return count
`,
  },
  visibleTests: [
    { args: [[0, 1, 1, 0, 1]], expected: 9 },
    { args: [[0]], expected: 0 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0, 1, 1, 0, 1]], expected: 9 },
    { args: [[0]], expected: 0 },
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 3 },
    { args: [[0, 1]], expected: 1 },
    { args: [[1, 0, 1]], expected: 3 },
    { args: [[0, 0, 1, 1, 1]], expected: 9 },
    { args: [[1, 1, 1, 1]], expected: 10 },
  ],
};
