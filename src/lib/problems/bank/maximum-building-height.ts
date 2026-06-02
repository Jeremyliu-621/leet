import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-building-height',
  title: 'Maximum Building Height',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You want to build \`n\` new buildings in a city. The new buildings will be built in a line and are labeled from \`1\` to \`n\`.

However, there are city restrictions on the heights of the new buildings:

- The height of each building must be a **non-negative** integer.
- The height of the first building **must** be \`0\`.
- The height difference between any two adjacent buildings **cannot exceed** \`1\`.

Additionally, there are city restrictions at specific buildings. You are given a **2D** integer array \`restrictions\` where \`restrictions[i] = [id_i, maxHeight_i]\` indicates that building \`id_i\` must have a height **less than or equal to** \`maxHeight_i\`.

It is **guaranteed** that each building will appear **at most once** in the restrictions, and building \`1\` will **not** be in the restrictions.

Return *the **maximum possible height** of the **tallest** building.*`,
  constraints: [
    '2 <= n <= 10^9',
    '0 <= restrictions.length <= min(n - 1, 10^5)',
    '2 <= id_i <= n',
    'id_i is unique.',
    '0 <= maxHeight_i <= 10^9',
  ],
  examples: [
    {
      input: 'n = 5, restrictions = [[2,1],[4,1]]',
      output: '2',
      explanation: 'Buildings: 1=0, 2≤1, 3=2, 4≤1, 5=2. The tallest is 2.',
    },
    {
      input: 'n = 6, restrictions = []',
      output: '5',
      explanation: 'No restrictions — heights can be 0,1,2,3,4,5. Tallest is 5.',
    },
    {
      input: 'n = 10, restrictions = [[5,3],[2,5],[7,4],[10,3]]',
      output: '5',
      explanation: 'After propagating constraints, the maximum achievable height is 5.',
    },
  ],
  hints: [
    'Sort restrictions by id. Add sentinel restrictions for building 1 (height 0) and building n.',
    'Propagate constraints left-to-right: restrict[i].maxHeight = min(restrict[i].maxHeight, restrict[i-1].maxHeight + (restrict[i].id - restrict[i-1].id)).',
    'Propagate right-to-left similarly to tighten bounds.',
    'Between consecutive restricted buildings i and j with heights h_i and h_j, the max peak = (h_i + h_j + (j.id - i.id)) / 2 (integer floor). Take max over all segments.',
  ],
  functionName: 'maxBuilding',
  params: ['n', 'restrictions'],
  starterCode: {
    javascript: `function maxBuilding(n, restrictions) {
  restrictions.push([1, 0]);
  restrictions.sort((a, b) => a[0] - b[0]);
  const m = restrictions.length;
  for (let i = 1; i < m; i++)
    restrictions[i][1] = Math.min(restrictions[i][1], restrictions[i-1][1] + (restrictions[i][0] - restrictions[i-1][0]));
  for (let i = m - 2; i >= 0; i--)
    restrictions[i][1] = Math.min(restrictions[i][1], restrictions[i+1][1] + (restrictions[i+1][0] - restrictions[i][0]));
  let ans = restrictions[m-1][1] + (n - restrictions[m-1][0]);
  for (let i = 0; i < m - 1; i++) {
    const [id1, h1] = restrictions[i], [id2, h2] = restrictions[i+1];
    ans = Math.max(ans, Math.floor((h1 + h2 + id2 - id1) / 2));
  }
  return ans;
}`,
    typescript: `function maxBuilding(n: number, restrictions: number[][]): number {
  restrictions.push([1, 0]);
  restrictions.sort((a, b) => a[0]! - b[0]!);
  const m = restrictions.length;
  for (let i = 1; i < m; i++)
    restrictions[i]![1] = Math.min(restrictions[i]![1]!, restrictions[i-1]![1]! + (restrictions[i]![0]! - restrictions[i-1]![0]!));
  for (let i = m - 2; i >= 0; i--)
    restrictions[i]![1] = Math.min(restrictions[i]![1]!, restrictions[i+1]![1]! + (restrictions[i+1]![0]! - restrictions[i]![0]!));
  let ans = restrictions[m-1]![1]! + (n - restrictions[m-1]![0]!);
  for (let i = 0; i < m - 1; i++) {
    const [id1, h1] = restrictions[i]!, [id2, h2] = restrictions[i+1]!;
    ans = Math.max(ans, Math.floor((h1! + h2! + id2! - id1!) / 2));
  }
  return ans;
}`,
    python: `def maxBuilding(n, restrictions):
    restrictions.append([1, 0])
    restrictions.sort()
    m = len(restrictions)
    for i in range(1, m):
        restrictions[i][1] = min(restrictions[i][1], restrictions[i-1][1] + (restrictions[i][0] - restrictions[i-1][0]))
    for i in range(m-2, -1, -1):
        restrictions[i][1] = min(restrictions[i][1], restrictions[i+1][1] + (restrictions[i+1][0] - restrictions[i][0]))
    ans = restrictions[-1][1] + (n - restrictions[-1][0])
    for i in range(m - 1):
        id1, h1 = restrictions[i]
        id2, h2 = restrictions[i+1]
        ans = max(ans, (h1 + h2 + id2 - id1) // 2)
    return ans`,
  },
  visibleTests: [
    { args: [5, [[2, 1], [4, 1]]], expected: 2 },
    { args: [6, []], expected: 5 },
    { args: [10, [[5, 3], [2, 5], [7, 4], [10, 3]]], expected: 5 },
  ],
  hiddenTests: [
    { args: [2, []], expected: 1 },
    { args: [2, [[2, 0]]], expected: 0 },
    { args: [3, [[2, 1]]], expected: 2 },
    { args: [1000000000, []], expected: 999999999 },
    { args: [7, [[3, 2], [6, 4]]], expected: 5 },
  ],
};
