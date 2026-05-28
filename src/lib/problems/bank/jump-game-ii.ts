import type { Problem } from '../types';

export const problem: Problem = {
  id: 'jump-game-ii',
  title: 'Jump Game II (Minimum Jumps)',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\` of length \`n\`. Starting at index \`0\`, each element \`nums[i]\` represents the **maximum** number of indices you can jump forward from position \`i\`.

Return the **minimum number of jumps** needed to reach the last index. It is guaranteed that you can always reach the last index.

**Example:** \`nums = [2,3,1,1,4]\` — jump from 0→1 (jump 3 forward to index 4) or 0→1→4, both take 2 jumps. Minimum is **2**.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '0 <= nums[i] <= 100',
    'It is guaranteed you can reach the last index',
  ],
  examples: [
    {
      input: 'nums = [2,3,1,1,4]',
      output: '2',
      explanation: 'Jump from index 0 to index 1 (jump 1), then from index 1 to the last index (jump 3). Total: 2 jumps.',
    },
    {
      input: 'nums = [2,3,0,1,4]',
      output: '2',
      explanation: 'Jump from index 0 to index 1, then from index 1 to the last index. Total: 2 jumps.',
    },
    {
      input: 'nums = [1,1,1,1]',
      output: '3',
      explanation: 'Must jump one step at a time: 0→1→2→3. Total: 3 jumps.',
    },
  ],
  hints: [
    'Use a greedy approach. At each "level" (range of indices reachable with the current number of jumps), track the farthest index reachable from any position in that level.',
    'Maintain three variables: `jumps` (count), `currentEnd` (end of the current jump level), and `farthest` (farthest index reachable from the current level). When you reach `currentEnd`, increment jumps and set `currentEnd = farthest`.',
    '`let jumps = 0, currentEnd = 0, farthest = 0;\nfor (let i = 0; i < nums.length - 1; i++) {\n  farthest = Math.max(farthest, i + nums[i]);\n  if (i === currentEnd) {\n    jumps++;\n    currentEnd = farthest;\n  }\n}\nreturn jumps;`',
  ],
  functionName: 'minJumps',
  params: ['nums'],
  starterCode: {
    javascript: 'function minJumps(nums) {\n  // your code here\n}\n',
    typescript: "function minJumps(nums: number[]): number {\n  // your code here\n}",

    python: 'def minJumps(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, 1, 1, 4]], expected: 2 },
    { args: [[2, 3, 0, 1, 4]], expected: 2 },
    { args: [[1, 1, 1, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2, 1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[5, 1, 1, 1, 1]], expected: 1 },
    { args: [[1, 2, 1, 1, 1]], expected: 3 },
  ],
};
