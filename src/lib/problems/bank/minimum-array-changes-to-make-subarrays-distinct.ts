import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-array-changes-to-make-subarrays-distinct',
  title: 'Minimum Array Changes to Make Subarrays Distinct',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\` of length \`n\` and a positive integer \`k\`.

For each subarray of length \`k\`, you want all elements to be **distinct** (no duplicates within any window of size \`k\`).

You can change any element of \`nums\` to any value. Return the **minimum** number of elements you need to change to achieve this.

**Note:** A subarray of length \`k\` starting at index \`i\` contains \`nums[i], nums[i+1], ..., nums[i+k-1]\`.`,
  constraints: [
    '`1 <= n <= 10^4`',
    '`1 <= k <= n`',
    '`1 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,2,1,2], k = 2',
      output: '0',
      explanation: 'Every length-2 window already has distinct elements: [1,2],[2,1],[1,2],[2,1],[1,2].',
    },
    {
      input: 'nums = [1,1,1,1], k = 2',
      output: '2',
      explanation: 'Change indices 1 and 3 (or 0 and 2) so every pair is distinct.',
    },
    {
      input: 'nums = [1,2,1,2,3,4], k = 3',
      output: '2',
      explanation: 'Windows [1,2,1] and [2,1,2] each have duplicates. Two changes are needed — one fixes each overlap.',
    },
  ],
  hints: [
    'For no two elements within distance `k-1` to share the same value, consecutive occurrences of each value must be at least `k` indices apart.',
    'For each value, find all its positions and greedily keep those that are spaced >= k apart (skip the rest).',
    'The answer is the total number of elements skipped across all values.',
    `\`\`\`js
function minimumChanges(nums, k) {
  const positions = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!positions.has(nums[i])) positions.set(nums[i], []);
    positions.get(nums[i]).push(i);
  }
  let changes = 0;
  for (const pos of positions.values()) {
    let lastKept = -Infinity;
    for (const p of pos) {
      if (p >= lastKept + k) lastKept = p;
      else changes++;
    }
  }
  return changes;
}\`\`\``,
  ],
  functionName: 'minimumChanges',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minimumChanges(nums, k) {

}`,
    typescript: 'function minimumChanges(nums: number[], k: number): number {\n\n}',
    python: `def minimumChanges(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 1, 2, 1, 2], 2], expected: 0 },
    { args: [[1, 1, 1, 1], 2], expected: 2 },
    { args: [[1, 2, 1, 2, 3, 4], 3], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1, 1], 2], expected: 1 },
    { args: [[1, 2, 3, 1, 2, 3], 3], expected: 0 },
    { args: [[1, 1, 1, 1, 1], 3], expected: 3 },
    { args: [[5, 5, 5, 5], 1], expected: 0 },
    { args: [[1, 2, 1, 3, 1, 2, 2], 3], expected: 2 },
  ],
};
