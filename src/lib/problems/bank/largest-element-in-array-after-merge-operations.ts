import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-element-in-array-after-merge-operations',
  title: 'Largest Element in an Array after Merge Operations',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** array \`nums\` consisting of positive integers.

You can perform the following operation **any number of times**:

- Choose an integer \`i\` such that \`0 <= i < nums.length - 1\` and \`nums[i] <= nums[i + 1]\`. Replace the element \`nums[i + 1]\` with \`nums[i] + nums[i + 1]\` and delete \`nums[i]\` from the array.

Return *the **maximum** value of an element in \`nums\` after performing any number of operations*.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [2,3,7,9,3]',
      output: '21',
      explanation: 'Merge 2 into 3 → [5,7,9,3]. Merge 5 into 7 → [12,9,3]. Merge 12 into … wait, 12 > 9, cannot. Actually merge 7+9=16 first? Let\'s trace optimally: merge from the right. 9+3→12 would require 9≤3 (no). Scan right-to-left: at index 3, nums[3]=3, cur=3. At index 2, nums[2]=9 > 3, so cur=9. At index 1, nums[1]=7 ≤ 9, so cur=9+7=16. At index 0, nums[0]=2 ≤ 16, so cur=16+2=18... Hmm let me re-check: the answer is 21 because we can merge left-to-right: 2≤3 so merge → [5,7,9,3]; 5≤7 so merge → [12,9,3]; cannot merge 12 into 9; cannot merge 9 into 3. Max is 12. Or: [2,3,7,9,3] → merge 7≤9 → [2,3,16,3] → merge 3≤16 → [2,19,3] → merge 2≤19 → [21,3]. Max = 21.',
    },
    {
      input: 'nums = [5,3,3]',
      output: '11',
      explanation: 'Merge 3≤3 → [5,6]. Merge 5≤6 → [11]. Max = 11.',
    },
  ],
  hints: [
    'Think greedy: which direction should you scan?',
    'Scanning right-to-left: maintain a running accumulator `cur`. If `nums[i] <= cur`, it can be merged in (so cur += nums[i]). Otherwise, reset cur = nums[i] (start a new group).',
    'The answer is the maximum value `cur` reaches during the scan.',
  ],
  functionName: 'largestElementAfterMergeOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function largestElementAfterMergeOperations(nums) {
  let cur = nums[nums.length - 1], ans = cur;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] <= cur) cur += nums[i]; else cur = nums[i];
    if (cur > ans) ans = cur;
  }
  return ans;
}`,
    typescript: `function largestElementAfterMergeOperations(nums: number[]): number {
  let cur = nums[nums.length - 1], ans = cur;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] <= cur) cur += nums[i]; else cur = nums[i];
    if (cur > ans) ans = cur;
  }
  return ans;
}`,
    python: `def largestElementAfterMergeOperations(nums):
    cur = ans = nums[-1]
    for i in range(len(nums) - 2, -1, -1):
        if nums[i] <= cur: cur += nums[i]
        else: cur = nums[i]
        ans = max(ans, cur)
    return ans`,
  },
  visibleTests: [
    { args: [[2, 3, 7, 9, 3]], expected: 21 },
    { args: [[5, 3, 3]], expected: 11 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 3 },
    { args: [[3, 2]], expected: 3 },
    { args: [[9, 5, 3]], expected: 9 },
    { args: [[1, 1, 1, 1]], expected: 4 },
    { args: [[1, 2, 3, 4, 5]], expected: 15 },
    { args: [[5, 4, 3, 2, 1]], expected: 5 },
    { args: [[2, 3, 7, 9, 3]], expected: 21 },
    { args: [[1000000, 1000000]], expected: 2000000 },
  ],
};
