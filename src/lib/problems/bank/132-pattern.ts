import type { Problem } from '../types';

export const problem: Problem = {
  id: '132-pattern',
  title: '132 Pattern',
  difficulty: 'medium',
  tags: ['stack'],
  description: `Given an array of \`n\` integers \`nums\`, return \`true\` *if there is a **132 pattern** in* \`nums\`, *otherwise return* \`false\`.

A **132 pattern** is a subsequence of three integers \`nums[i]\`, \`nums[j]\` and \`nums[k]\` such that \`i < j < k\` and \`nums[i] < nums[k] < nums[j]\`.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 2 * 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    { input: 'nums = [1,2,3,4]', output: 'false', explanation: 'No 132 pattern.' },
    { input: 'nums = [3,1,4,2]', output: 'true', explanation: '(1,4,2) is a 132 pattern.' },
    { input: 'nums = [-1,3,2,0]', output: 'true', explanation: '(-1,3,0) and (-1,3,2) are valid.' },
  ],
  hints: [
    'Iterate from right to left maintaining a monotone decreasing stack.',
    'Track `min3` — the most recently popped value, which is the best candidate for the "2" in 132.',
    'If the current element is less than `min3`, a valid pattern exists.',
  ],
  functionName: 'find132pattern',
  params: ['nums'],
  starterCode: {
    javascript: `function find132pattern(nums) {
  const stack = [];
  let min3 = -Infinity;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < min3) return true;
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      min3 = stack.pop();
    }
    stack.push(nums[i]);
  }
  return false;
}`,
    typescript: `function find132pattern(nums: number[]): boolean {
  const stack: number[] = [];
  let min3 = -Infinity;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < min3) return true;
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      min3 = stack.pop()!;
    }
    stack.push(nums[i]);
  }
  return false;
}`,

    python: `def find132pattern(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    stack = []
    min3 = float('-inf')
    for i in range(len(nums) - 1, -1, -1):
        if nums[i] < min3:
            return True
        while stack and stack[-1] < nums[i]:
            min3 = stack.pop()
        stack.append(nums[i])
    return False`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: false },
    { args: [[3, 1, 4, 2]], expected: true },
    { args: [[-1, 3, 2, 0]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: false },
    { args: [[1, 2, 3]], expected: false },
    { args: [[1, 2, 3, 4, 0]], expected: false },
    { args: [[3, 5, 0, 3, 4]], expected: true },
    { args: [[2, 4, 3, 1]], expected: true },
  ],
};
