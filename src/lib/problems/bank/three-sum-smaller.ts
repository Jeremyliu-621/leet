import type { Problem } from '../types';

export const problem: Problem = {
  id: 'three-sum-smaller',
  title: 'Three Sum Smaller',
  difficulty: 'medium',
  tags: ['two-pointers', 'arrays'],
  description: `Given an array of \`n\` integers \`nums\` and an integer \`target\`, find the number of index triplets \`i\`, \`j\`, \`k\` with \`0 <= i < j < k < n\` that satisfy the condition \`nums[i] + nums[j] + nums[k] < target\`.

**Example:**

\`nums = [-2, 0, 1, 3]\`, \`target = 2\`

Triplets whose sum is less than 2:
- \`(-2, 0, 1)\` — sum is \`-1 < 2\`  ✓
- \`(-2, 0, 3)\` — sum is \`1 < 2\`   ✓
- \`(-2, 1, 3)\` — sum is \`2\`, not less ✗
- \`(0, 1, 3)\`  — sum is \`4\`, not less ✗

Answer: **2**`,
  constraints: [
    'n == nums.length',
    '0 <= n <= 3500',
    '-100 <= nums[i] <= 100',
    '-100 <= target <= 100',
  ],
  examples: [
    {
      input: 'nums = [-2,0,1,3], target = 2',
      output: '2',
      explanation: 'There are two triplets: (-2,0,1) with sum -1 and (-2,0,3) with sum 1, both less than 2.',
    },
    {
      input: 'nums = [], target = 0',
      output: '0',
      explanation: 'No triplets exist in an empty array.',
    },
    {
      input: 'nums = [0], target = 0',
      output: '0',
      explanation: 'Need at least 3 elements to form a triplet.',
    },
  ],
  hints: [
    'Sort the array first. Once sorted, fixing the first element and using two pointers for the other two lets you count valid pairs efficiently without checking every combination.',
    'After sorting, for each index i fix nums[i] as the smallest element. Use left = i+1 and right = n-1. If nums[i] + nums[left] + nums[right] < target, all elements between left and right also pair with left to give valid sums, so add (right - left) to the count and move left up. Otherwise move right down.',
    'Sort first: O(n log n). Two-pointer scan is O(n²) total. For each i from 0..n-3, l=i+1, r=n-1. While l<r: if sum < target, count += r-l, l++; else r--.',
  ],
  functionName: 'threeSumSmaller',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function threeSumSmaller(nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] < target) { count += r - l; l++; }
      else r--;
    }
  }
  return count;
}`,
    typescript: `function threeSumSmaller(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      if (nums[i]! + nums[l]! + nums[r]! < target) { count += r - l; l++; }
      else r--;
    }
  }
  return count;
}`,
    python: `def threeSumSmaller(nums, target):
    nums.sort()
    count = 0
    for i in range(len(nums) - 2):
        l, r = i + 1, len(nums) - 1
        while l < r:
            if nums[i] + nums[l] + nums[r] < target:
                count += r - l
                l += 1
            else:
                r -= 1
    return count
`,
  },
  visibleTests: [
    { args: [[-2, 0, 1, 3], 2], expected: 2 },
    { args: [[], 0], expected: 0 },
    { args: [[0], 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [[-2, 0, 1, 3], 5], expected: 4 },
    { args: [[1, 2, 3], 10], expected: 1 },
    { args: [[-4, -2, -1, 0, 1, 2], 0], expected: 14 },
    { args: [[0, 0, 0], 1], expected: 1 },
    { args: [[1, 1, 1], 3], expected: 0 },
    { args: [[-1, -1, -1], 0], expected: 1 },
  ],
};
