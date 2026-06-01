import type { Problem } from '../types';

export const problem: Problem = {
  id: 'jump-game',
  title: 'Jump Game',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\`. Each element \`nums[i]\` represents the maximum jump length from that position.

Starting at index \`0\`, return \`true\` if you can reach the last index, or \`false\` otherwise.

You can jump any number of steps from 1 to \`nums[i]\` from position \`i\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '0 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [2,3,1,1,4]',
      output: 'true',
      explanation: 'Jump 1 step from index 0 to 1, then 3 steps to the last index.',
    },
    {
      input: 'nums = [3,2,1,0,4]',
      output: 'false',
      explanation: 'You always reach index 3 with value 0, which blocks you from going further.',
    },
    {
      input: 'nums = [0]',
      output: 'true',
      explanation: 'Already at the last index.',
    },
  ],
  hints: [
    'You don\'t need to simulate every jump. Think about what the farthest index reachable at any given point tells you.',
    'Maintain a variable `maxReach` — the farthest index you can currently reach. Iterate from left to right; if your current index ever exceeds `maxReach`, you\'re stuck. Otherwise update `maxReach = max(maxReach, i + nums[i])`.',
    '`let maxReach = 0; for (let i = 0; i < nums.length; i++) { if (i > maxReach) return false; maxReach = Math.max(maxReach, i + nums[i]); } return true;`',
  ],
  functionName: 'canJump',
  params: ['nums'],
  starterCode: {
    javascript: `function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
}`,
    typescript: `function canJump(nums: number[]): boolean {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]!);
  }
  return true;
}`,
    python: `def canJump(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    max_reach = 0
    for i, v in enumerate(nums):
        if i > max_reach: return False
        max_reach = max(max_reach, i + v)
    return True`,
  },
  visibleTests: [
    { args: [[2, 3, 1, 1, 4]], expected: true },
    { args: [[3, 2, 1, 0, 4]], expected: false },
    { args: [[0]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 0]], expected: true },
    { args: [[0, 1]], expected: false },
    { args: [[2, 0, 0]], expected: true },
    { args: [[1, 1, 0, 1]], expected: false },
    { args: [[5, 0, 0, 0, 0]], expected: true },
    { args: [[1, 2, 3, 0, 0]], expected: true },
  ],
};
