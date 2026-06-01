import type { Problem } from '../types';

export const problem: Problem = {
  id: 'final-array-state-after-k-multiplication-operations-ii',
  title: 'Final Array State After K Multiplication Operations II',
  difficulty: 'hard',
  tags: ['arrays', 'heap', 'math'],
  description: `You are given an integer array \`nums\`, an integer \`k\`, and an integer \`multiplier\`.

You need to perform \`k\` operations on \`nums\`. In each operation you **multiply the minimum value** in \`nums\` by \`multiplier\`. If multiple elements share the minimum, the element with the **smallest index** is chosen.

After completing all \`k\` operations, return the **final state** of \`nums\` after applying all multiplications. Since the answer may be large, each element of the result should be returned **modulo 10^9 + 7**.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= 10^9',
    '1 <= multiplier <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2,1,3,5,6], k = 5, multiplier = 2',
      output: '[8,4,6,5,6]',
      explanation:
        'Op1: select 1(idx1) → [2,2,3,5,6]. Op2: select 2(idx0) → [4,2,3,5,6]. Op3: select 2(idx1) → [4,4,3,5,6]. Op4: select 3(idx2) → [4,4,6,5,6]. Op5: select 4(idx0) → [8,4,6,5,6].',
    },
    {
      input: 'nums = [1,2], k = 3, multiplier = 4',
      output: '[16,8]',
      explanation:
        'Op1: select 1(idx0) → [4,2]. Op2: select 2(idx1) → [4,8]. Op3: select 4(idx0) → [16,8]. Result mod 10^9+7 = [16,8].',
    },
  ],
  hints: [
    'Level 1: Simulate with a min-heap. The heap can hold large values — use BigInt or Python\'s arbitrary-precision integers for comparisons to avoid overflow.',
    'Level 2: Use two phases. Phase 1: simulate until the heap is "balanced" — until min_element * multiplier > max_element. This takes at most O(n × log_m(max/min)) operations. Phase 2: the remaining ops distribute evenly: floor(remaining/n) full rounds to every element, plus remainder/n extra to the current smallest elements.',
    'Level 3: In Phase 2, each element\'s final value = nums[i] × multiplier^(count_i + full_rounds + bonus_i) mod 10^9+7, where count_i is the count from Phase 1, full_rounds = remaining // n, and bonus_i = 1 if the element\'s rank among current values < (remaining % n), else 0.',
  ],
  functionName: 'getFinalState',
  params: ['nums', 'k', 'multiplier'],
  starterCode: {
    javascript: `function getFinalState(nums, k, multiplier) {
  const MOD = 1000000007n;
  const n = nums.length;
  if (multiplier === 1) return nums;
  const mul = BigInt(multiplier);

  // Min-heap of [BigInt value, index]
  const h = nums.map((v, i) => [BigInt(v), i]);
  const less = (a, b) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]);
  const sift = (i) => {
    const sz = h.length;
    for (;;) {
      let m = i, l = 2*i+1, r = 2*i+2;
      if (l < sz && less(h[l], h[m])) m = l;
      if (r < sz && less(h[r], h[m])) m = r;
      if (m === i) break;
      [h[i], h[m]] = [h[m], h[i]]; i = m;
    }
  };
  for (let i = (n >> 1) - 1; i >= 0; i--) sift(i);

  let maxVal = nums.reduce((a, b) => a > b ? a : b, 0);
  let maxBig = BigInt(maxVal);
  const counts = new Array(n).fill(0);
  let ops = 0;
  while (ops < k && h[0][0] * mul <= maxBig) {
    const [val, idx] = h[0];
    const nv = val * mul;
    counts[idx]++;
    if (nv > maxBig) maxBig = nv;
    h[0] = [nv, idx];
    sift(0);
    ops++;
  }

  const modpow = (b, e, m) => {
    let r = 1n; b = b % m;
    for (let x = e; x > 0; x >>= 1) {
      if (x & 1) r = r * b % m;
      b = b * b % m;
    }
    return r;
  };

  if (ops === k)
    return nums.map((v, i) => Number(BigInt(v) * modpow(mul, counts[i], MOD) % MOD));

  const remaining = k - ops;
  const fullRounds = Math.floor(remaining / n);
  const extra = remaining % n;
  const sortedH = [...h].sort((a, b) =>
    a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : a[1] - b[1]);
  const result = new Array(n);
  for (let rank = 0; rank < n; rank++) {
    const [, origIdx] = sortedH[rank];
    const bonus = rank < extra ? 1 : 0;
    result[origIdx] = Number(BigInt(nums[origIdx]) * modpow(mul, counts[origIdx] + fullRounds + bonus, MOD) % MOD);
  }
  return result;
}`,
    typescript: `function getFinalState(nums: number[], k: number, multiplier: number): number[] {
  const MOD = 1000000007n;
  const n = nums.length;
  if (multiplier === 1) return nums;
  const mul = BigInt(multiplier);

  // Min-heap of [BigInt value, index]
  const h: [bigint, number][] = nums.map((v, i) => [BigInt(v), i]);
  const less = (a: [bigint, number], b: [bigint, number]) =>
    a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]);
  const sift = (i: number) => {
    const sz = h.length;
    for (;;) {
      let m = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < sz && less(h[l]!, h[m]!)) m = l;
      if (r < sz && less(h[r]!, h[m]!)) m = r;
      if (m === i) break;
      [h[i], h[m]] = [h[m]!, h[i]!]; i = m;
    }
  };
  for (let i = (n >> 1) - 1; i >= 0; i--) sift(i);

  let maxBig = BigInt(nums.reduce((a, b) => a > b ? a : b, 0));
  const counts = new Array<number>(n).fill(0);
  let ops = 0;
  while (ops < k && h[0]![0] * mul <= maxBig) {
    const [val, idx] = h[0]!;
    const nv = val * mul;
    counts[idx]++;
    if (nv > maxBig) maxBig = nv;
    h[0] = [nv, idx];
    sift(0);
    ops++;
  }

  const modpow = (b: bigint, e: number, m: bigint): bigint => {
    let r = 1n; b = b % m;
    for (let x = e; x > 0; x >>= 1) {
      if (x & 1) r = r * b % m;
      b = b * b % m;
    }
    return r;
  };

  if (ops === k)
    return nums.map((v, i) => Number(BigInt(v) * modpow(mul, counts[i]!, MOD) % MOD));

  const remaining = k - ops;
  const fullRounds = Math.floor(remaining / n);
  const extra = remaining % n;
  const sortedH = [...h].sort((a, b) =>
    a![0] < b![0] ? -1 : a![0] > b![0] ? 1 : a![1] - b![1]);
  const result = new Array<number>(n);
  for (let rank = 0; rank < n; rank++) {
    const [, origIdx] = sortedH[rank]!;
    const bonus = rank < extra ? 1 : 0;
    result[origIdx] = Number(BigInt(nums[origIdx]!) * modpow(mul, counts[origIdx]! + fullRounds + bonus, MOD) % MOD);
  }
  return result;
}`,
    python: `import heapq
def getFinalState(nums, k, multiplier):
    MOD = 10**9 + 7
    n = len(nums)
    if multiplier == 1:
        return nums
    heap = [(v, i) for i, v in enumerate(nums)]
    heapq.heapify(heap)
    max_val = max(nums)
    counts = [0] * n
    ops = 0
    while ops < k and heap[0][0] * multiplier <= max_val:
        val, idx = heapq.heappop(heap)
        new_val = val * multiplier
        counts[idx] += 1
        if new_val > max_val:
            max_val = new_val
        heapq.heappush(heap, (new_val, idx))
        ops += 1
    if ops == k:
        return [nums[i] * pow(multiplier, counts[i], MOD) % MOD for i in range(n)]
    remaining = k - ops
    full_rounds, extra = divmod(remaining, n)
    cur_sorted = sorted(heap)
    ans = [0] * n
    for rank, (val, idx) in enumerate(cur_sorted):
        bonus = 1 if rank < extra else 0
        ans[idx] = nums[idx] * pow(multiplier, counts[idx] + full_rounds + bonus, MOD) % MOD
    return ans`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 5, 6], 5, 2], expected: [8, 4, 6, 5, 6] },
    { args: [[1, 2], 3, 4], expected: [16, 8] },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 3, 3], expected: [3, 3, 3] },
    { args: [[2], 1, 2], expected: [4] },
    { args: [[100, 200, 300], 5, 2], expected: [800, 400, 600] },
    { args: [[1, 1], 5, 2], expected: [8, 4] },
    { args: [[5, 2, 3, 1, 4], 2, 3], expected: [5, 6, 3, 3, 4] },
    { args: [[5, 3, 1], 10, 1], expected: [5, 3, 1] },
    { args: [[1, 2, 3], 1, 1000000], expected: [1000000, 2, 3] },
  ],
};
