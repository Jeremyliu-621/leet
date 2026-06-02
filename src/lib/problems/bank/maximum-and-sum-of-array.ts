import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-and-sum-of-array',
  title: 'Maximum AND Sum of Array',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\` of length \`n\` and an integer \`numSlots\` such that \`2 * numSlots >= n\`. There are \`numSlots\` slots numbered from \`1\` to \`numSlots\`.

You have to place all \`n\` integers into the slots such that each slot contains **at most** 2 numbers. The **AND sum** of a given placement is the sum of \`nums[i] & j\` for all \`i\`, where \`j\` is the slot that \`nums[i]\` has been placed in.

Return the **maximum** possible AND sum of \`nums\` given \`numSlots\` slots.`,
  constraints: [
    'n == nums.length',
    '1 <= numSlots <= 9',
    '1 <= n <= 2 * numSlots',
    '1 <= nums[i] <= 15',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5,6], numSlots = 3',
      output: '9',
      explanation: 'Place: slot1=[1,4] (1&1+4&1=1+0=1), slot2=[2,6] (2&2+6&2=2+2=4), slot3=[3,5] (3&3+5&3=3+1=4). Total=9. Optimal!',
    },
    {
      input: 'nums = [1,3,10,4,7,1], numSlots = 9',
      output: '24',
    },
  ],
  hints: [
    'Since numSlots <= 9, each slot can hold at most 2 numbers. Represent each slot as having "0, 1, or 2 spots used" using a ternary state, or enumerate over bitmask of 2*numSlots positions.',
    'Use bitmask DP: represent each slot as 2 positions (slot j → positions 2j-2 and 2j-1). State mask = which of the 2*numSlots positions are occupied.',
    'Process nums one by one. For nums[k], try placing into each unoccupied position. dp[mask | (1<<pos)] = max(current, dp[mask] + nums[k] & slot(pos)).',
    'The slot number for position pos is pos/2 + 1. Answer is max dp[mask] over all masks with exactly n bits set.',
  ],
  functionName: 'maximumANDSum',
  params: ['nums', 'numSlots'],
  starterCode: {
    javascript: `function maximumANDSum(nums, numSlots) {
  const total = 2 * numSlots;
  const dp = new Array(1 << total).fill(0);
  for (let mask = 0; mask < (1 << total); mask++) {
    let pc = 0; for (let x = mask; x; x &= x-1) pc++;
    if (pc >= nums.length) continue;
    const num = nums[pc];
    for (let pos = 0; pos < total; pos++) {
      if (mask & (1 << pos)) continue;
      const slot = (pos >> 1) + 1, next = mask | (1 << pos);
      dp[next] = Math.max(dp[next], dp[mask] + (num & slot));
    }
  }
  return Math.max(...dp);
}`,
    typescript: `function maximumANDSum(nums: number[], numSlots: number): number {
  const total = 2 * numSlots;
  const dp = new Array<number>(1 << total).fill(0);
  for (let mask = 0; mask < (1 << total); mask++) {
    let pc = 0; for (let x = mask; x; x &= x-1) pc++;
    if (pc >= nums.length) continue;
    const num = nums[pc]!;
    for (let pos = 0; pos < total; pos++) {
      if (mask & (1 << pos)) continue;
      const slot = (pos >> 1) + 1, next = mask | (1 << pos);
      dp[next] = Math.max(dp[next]!, dp[mask]! + (num & slot));
    }
  }
  return Math.max(...dp);
}`,
    python: `def maximumANDSum(nums, numSlots):
    total = 2 * numSlots
    dp = [0] * (1 << total)
    for mask in range(1 << total):
        pc = bin(mask).count('1')
        if pc >= len(nums): continue
        num = nums[pc]
        for pos in range(total):
            if mask & (1 << pos): continue
            slot = (pos >> 1) + 1; nxt = mask | (1 << pos)
            dp[nxt] = max(dp[nxt], dp[mask] + (num & slot))
    return max(dp)`,
  },
  visibleTests: [
    { args: [[1,2,3,4,5,6], 3], expected: 9 },
    { args: [[1,3,10,4,7,1], 9], expected: 24 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1,1], 1], expected: 2 },
    { args: [[15,15], 1], expected: 2 },
    { args: [[1,2], 2], expected: 3 },
    { args: [[7,7,7,7], 2], expected: 6 },
    { args: [[3,3,3], 2], expected: 5 },
    { args: [[1,2,3], 3], expected: 6 },
    { args: [[15,14,13,12], 4], expected: 13 },
  ],
};
