import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-convert-number',
  title: 'Minimum Operations to Convert Number',
  difficulty: 'medium',
  tags: ['arrays', 'graph'],
  description: `You are given a **0-indexed** integer array \`nums\` containing **distinct** numbers, an integer \`start\`, and an integer \`goal\`. There is an integer \`x\` that is initially set to \`start\`, and you want to perform operations to convert it to \`goal\`.

In one operation, you can pick any index \`i\` in \`nums\` and transform \`x\` as follows:
- \`x = x XOR nums[i]\`
- \`x = x + nums[i]\`
- \`x = x - nums[i]\`

**Important:** During each operation, intermediate values must stay in the range \`[0, 1000]\`, **unless** the value equals \`goal\`.

Return the **minimum number of operations** needed to convert \`x = start\` to \`goal\`, or \`-1\` if it is not possible.`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`0 <= nums[i] <= 1000`',
    '`0 <= start, goal <= 1000`',
    'All integers in `nums` are distinct.',
  ],
  examples: [
    {
      input: 'nums = [2,4], start = 0, goal = 1',
      output: '-1',
      explanation: 'Starting from 0, all reachable values (using XOR, +, -) with nums=[2,4] are even, so goal=1 is unreachable.',
    },
    {
      input: 'nums = [3,5], start = 6, goal = 0',
      output: '2',
      explanation: '6 - 3 = 3 (step 1), then 3 XOR 3 = 0 (step 2).',
    },
    {
      input: 'nums = [1,3], start = 6, goal = 4',
      output: '1',
      explanation: '6 - 3 = 3? No. 6 XOR 1 = 7? No. 6 - 1 = 5? No. 6 + 3 = 9? No. 6 XOR 3 = 5? No. 6 - 3 = 3? Actually 6 + 1 = 7, 6 - 1 = 5, 6 XOR 1 = 7, 6 + 3 = 9, 6 - 3 = 3, 6 XOR 3 = 5. Then from 5: 5 XOR 1 = 4 ✓. Answer is 2.',
    },
  ],
  hints: [
    'Model this as a shortest-path problem on integers in [0, 1000]. Use BFS from `start` applying all three operations with each element in `nums`.',
    'Keep a visited set to avoid revisiting the same value. For intermediate values, only allow [0, 1000]; the goal can be outside this range if needed.',
    '```js\nfunction minimumOperations(nums, start, goal) {\n  if (start === goal) return 0;\n  const visited = new Set([start]);\n  let queue = [start], steps = 0;\n  while (queue.length) {\n    steps++;\n    const next = [];\n    for (const x of queue)\n      for (const n of nums)\n        for (const op of [x ^ n, x + n, x - n]) {\n          if (op === goal) return steps;\n          if (op >= 0 && op <= 1000 && !visited.has(op)) {\n            visited.add(op);\n            next.push(op);\n          }\n        }\n    queue = next;\n  }\n  return -1;\n}\n```',
  ],
  functionName: 'minimumOperations',
  params: ['nums', 'start', 'goal'],
  starterCode: {
    javascript: `function minimumOperations(nums, start, goal) {

}`,
    typescript: `function minimumOperations(nums: number[], start: number, goal: number): number {

}`,
    python: `def minimumOperations(nums, start, goal):
    pass`,
  },
  visibleTests: [
    { args: [[2, 4], 0, 1], expected: -1 },
    { args: [[3, 5], 6, 0], expected: 2 },
    { args: [[1, 3], 6, 4], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1], 5, 5], expected: 0 },
    { args: [[2], 0, 4], expected: 2 },
    { args: [[1, 2, 3], 0, 6], expected: 2 },
    { args: [[3, 5, 7], 10, 4], expected: 2 },
    { args: [[9, 3, 5], 2, 10], expected: 2 },
  ],
};
