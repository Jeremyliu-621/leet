import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bitmask-dp-task-cover',
  title: 'Minimum Cost to Cover All Tasks',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'bit-manipulation'],
  description: `You have \`n\` tasks (numbered 0 to n−1) and a list of **groups**. Each group \`groups[i]\` is a subset of tasks represented as an array of task indices. Choosing group \`i\` costs \`costs[i]\` and completes all tasks in that group.

Return the **minimum total cost** to complete all \`n\` tasks by selecting any combination of groups (a group may be selected at most once). If it is impossible to cover all tasks, return **-1**.

\`n\` is small (at most 15), enabling a **bitmask DP** approach: represent the set of completed tasks as a bitmask and use DP over all 2^n subsets.

**Constraints guarantee** n ≤ 15 and groups.length ≤ 30.`,
  constraints: [
    '1 <= n <= 15',
    '1 <= groups.length <= 30',
    '0 <= groups[i][j] < n',
    '1 <= costs[i] <= 10^4',
  ],
  examples: [
    {
      input: 'n = 3, groups = [[0,1],[1,2],[0,2],[0,1,2]], costs = [2,3,4,8]',
      output: '5',
      explanation: 'Select group 0 (tasks {0,1}, cost 2) and group 1 (tasks {1,2}, cost 3). Together they cover all 3 tasks. Total cost = 5.',
    },
    {
      input: 'n = 2, groups = [[0],[1]], costs = [3,5]',
      output: '8',
      explanation: 'Must select both groups to cover tasks 0 and 1. Cost = 3 + 5 = 8.',
    },
    {
      input: 'n = 2, groups = [[0]], costs = [1]',
      output: '-1',
      explanation: 'Task 1 cannot be covered by any group.',
    },
  ],
  hints: [
    'With n ≤ 15, enumerate all 2^n subsets as bitmasks. For each group, precompute its bitmask. Use `dp[mask]` = minimum cost to have exactly the tasks in `mask` completed.',
    'Initialize `dp[0] = 0` and `dp[other] = Infinity`. For each group with bitmask `g` and cost `c`, transition: for each existing state `mask`, `dp[mask | g] = min(dp[mask | g], dp[mask] + c)`. Answer is `dp[(1<<n)-1]`.',
    `\`\`\`js\nfunction minCostCoverTasks(n, groups, costs) {\n  const full = (1 << n) - 1;\n  const dp = new Array(full + 1).fill(Infinity);\n  dp[0] = 0;\n  const gmasks = groups.map(g => g.reduce((m, t) => m | (1 << t), 0));\n  for (let mask = 0; mask <= full; mask++) {\n    if (dp[mask] === Infinity) continue;\n    for (let i = 0; i < groups.length; i++) {\n      const next = mask | gmasks[i];\n      dp[next] = Math.min(dp[next], dp[mask] + costs[i]);\n    }\n  }\n  return dp[full] === Infinity ? -1 : dp[full];\n}\n\`\`\``,
  ],
  functionName: 'minCostCoverTasks',
  params: ['n', 'groups', 'costs'],
  starterCode: {
    javascript: `function minCostCoverTasks(n, groups, costs) {\n\n}`,
    typescript: `function minCostCoverTasks(n: number, groups: number[][], costs: number[]): number {\n\n}`,
    python: `def min_cost_cover_tasks(n: int, groups: list[list[int]], costs: list[int]) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [3, [[0, 1], [1, 2], [0, 2], [0, 1, 2]], [2, 3, 4, 8]], expected: 5 },
    { args: [2, [[0], [1]], [3, 5]], expected: 8 },
    { args: [2, [[0]], [1]], expected: -1 },
    { args: [1, [[0]], [7]], expected: 7 },
  ],
  hiddenTests: [
    { args: [1, [[0], [0]], [5, 3]], expected: 3 },
    { args: [3, [[0], [1], [2]], [1, 2, 3]], expected: 6 },
    { args: [4, [[0, 1, 2, 3]], [10]], expected: 10 },
    { args: [3, [[0, 1], [2]], [4, 6]], expected: 10 },
    { args: [2, [[0, 1]], [5]], expected: 5 },
    { args: [3, [[0], [1], [0, 2]], [3, 4, 2]], expected: 6 },
    { args: [3, [[1, 2]], [9]], expected: -1 },
    { args: [4, [[0, 1], [2, 3], [0, 2], [1, 3]], [3, 3, 4, 4]], expected: 6 },
  ],
};
