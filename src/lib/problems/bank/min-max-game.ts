import type { Problem } from '../types';

export const problem: Problem = {
  id: 'min-max-game',
  title: 'Min Max Game',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** integer array \`nums\` whose length is a **power of 2**.

Apply the following algorithm on \`nums\`:

1. Let \`n\` be the length of \`nums\`. If \`n == 1\`, **end** the process. Otherwise, create a new **0-indexed** integer array \`newNums\` of length \`n / 2\`.
2. For every **even** index \`i\` in range \`[0, n − 2]\`:
   - If \`i / 2\` is even, then \`newNums[i/2] = min(nums[i], nums[i+1])\`
   - If \`i / 2\` is odd, then \`newNums[i/2] = max(nums[i], nums[i+1])\`
3. Replace the array \`nums\` with \`newNums\`, then repeat the process.

Return the last number that remains in \`nums\` after applying the algorithm.`,
  constraints: [
    '1 <= nums.length <= 1024',
    'nums.length is a power of 2',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,2,4,8,2,2]',
      output: '1',
      explanation: 'Step 1: [min(1,3),max(5,2),min(4,8),max(2,2)] = [1,5,4,2]. Step 2: [min(1,5),max(4,2)] = [1,4]. Step 3: [min(1,4)] = [1].',
    },
    {
      input: 'nums = [3]',
      output: '3',
      explanation: 'n=1, return immediately.',
    },
  ],
  hints: [
    'Simulate the process directly: repeatedly build newNums by applying min/max based on whether the index i/2 is even or odd.',
    'Replace nums with newNums and repeat until only one element remains.',
    'The length halves each step, so there are log2(n) steps total.',
  ],
  functionName: 'minMaxGame',
  params: ['nums'],
  starterCode: {
    javascript: `function minMaxGame(nums) {
  while (nums.length > 1) {
    const next = [];
    for (let i = 0; i < nums.length / 2; i++) {
      next.push(i % 2 === 0 ? Math.min(nums[2*i], nums[2*i+1]) : Math.max(nums[2*i], nums[2*i+1]));
    }
    nums = next;
  }
  return nums[0];
}`,
    typescript: `function minMaxGame(nums: number[]): number {
  while (nums.length > 1) {
    const next: number[] = [];
    for (let i = 0; i < nums.length / 2; i++) {
      next.push(i % 2 === 0 ? Math.min(nums[2*i]!, nums[2*i+1]!) : Math.max(nums[2*i]!, nums[2*i+1]!));
    }
    nums = next;
  }
  return nums[0]!;
}`,
    python: `def minMaxGame(nums):
  if hasattr(nums, 'to_py'): nums = list(nums.to_py())
  while len(nums) > 1:
      next_nums = []
      for i in range(len(nums) // 2):
          next_nums.append(min(nums[2*i], nums[2*i+1]) if i % 2 == 0 else max(nums[2*i], nums[2*i+1]))
      nums = next_nums
  return nums[0]`,
  },
  visibleTests: [
    { args: [[1, 3, 5, 2, 4, 8, 2, 2]], expected: 1 },
    { args: [[3]], expected: 3 },
    { args: [[3, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 3, 5, 2, 4, 8, 2, 2]], expected: 1 },
    { args: [[3]], expected: 3 },
    { args: [[3, 1]], expected: 1 },
    { args: [[2, 4]], expected: 2 },
    { args: [[1, 2, 3, 4]], expected: 1 },
    { args: [[4, 3, 2, 1]], expected: 2 },
    { args: [[5, 5, 5, 5]], expected: 5 },
    { args: [[1, 9, 2, 8, 3, 7, 4, 6]], expected: 1 },
  ],
};
