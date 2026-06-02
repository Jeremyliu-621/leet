import type { Problem } from '../types';

export const problem: Problem = {
  id: 'contains-duplicate-ii',
  title: 'Contains Duplicate II',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return \`true\` if there are two **distinct indices** \`i\` and \`j\` in the array such that \`nums[i] == nums[j]\` and \`abs(i - j) <= k\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
    '0 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,1], k = 3',
      output: 'true',
    },
    {
      input: 'nums = [1,0,1,1], k = 1',
      output: 'true',
    },
    {
      input: 'nums = [1,2,3,1,2,3], k = 2',
      output: 'false',
    },
  ],
  hints: [
    'Use a sliding window of size k (a Set).',
    'As you advance the right pointer, check if the current element is in the set. If yes, return true.',
    'If the window exceeds size k, remove the leftmost element from the set.',
  ],
  functionName: 'containsNearbyDuplicate',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function containsNearbyDuplicate(nums, k) {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) return true;
    seen.add(nums[i]);
    if (seen.size > k) seen.delete(nums[i - k]);
  }
  return false;
}`,
    typescript: `function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const seen = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i]!)) return true;
    seen.add(nums[i]!);
    if (seen.size > k) seen.delete(nums[i - k]!);
  }
  return false;
}`,
    python: `def containsNearbyDuplicate(nums, k):
    seen = set()
    for i, x in enumerate(nums):
        if x in seen:
            return True
        seen.add(x)
        if len(seen) > k:
            seen.discard(nums[i - k])
    return False`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 1], 3], expected: true },
    { args: [[1, 0, 1, 1], 1], expected: true },
    { args: [[1, 2, 3, 1, 2, 3], 2], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1], expected: false },
    { args: [[1, 1], 1], expected: true },
    { args: [[99, 99], 2], expected: true },
    { args: [[1, 2, 1], 1], expected: false },
  ],
};
