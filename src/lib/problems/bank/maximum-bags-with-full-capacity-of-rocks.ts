import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-bags-with-full-capacity-of-rocks',
  title: 'Maximum Bags With Full Capacity of Rocks',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You have \`n\` bags, where the i-th bag can hold at most \`capacity[i]\` rocks and currently contains \`rocks[i]\` rocks. You also have \`additionalRocks\` extra rocks that you can distribute however you like.

Return the **maximum number of bags** that you can fill to **full capacity**.

**Key insight:** Sort bags by their remaining space (\`capacity[i] - rocks[i]\`). Greedily fill the easiest (least remaining space) bags first.`,
  constraints: [
    'n == capacity.length == rocks.length',
    '1 <= n <= 5 * 10^4',
    '0 <= rocks[i] <= capacity[i] <= 10^9',
    '1 <= additionalRocks <= 10^9',
  ],
  examples: [
    {
      input: 'capacity = [2, 3, 4, 5], rocks = [1, 2, 4, 4], additionalRocks = 2',
      output: '3',
      explanation: 'Remaining space: [1, 1, 0, 1]. Sort: [0, 1, 1, 1]. Fill bag 2 (0 rocks), bag 0 (1 rock), bag 1 (1 rock). Total used = 2. 3 bags full.',
    },
    {
      input: 'capacity = [10, 2, 2], rocks = [2, 2, 0], additionalRocks = 100',
      output: '3',
      explanation: 'Remaining: [8, 0, 2]. Sort: [0, 2, 8]. 100 rocks is more than enough to fill all 3 bags.',
    },
    {
      input: 'capacity = [5], rocks = [3], additionalRocks = 1',
      output: '0',
      explanation: 'Remaining space is 2 but we only have 1 additional rock. Cannot fill any bag.',
    },
  ],
  hints: [
    'Compute the remaining space for each bag: capacity[i] - rocks[i].',
    'Sort by remaining space in ascending order. Greedily fill bags with the least remaining space first.',
    'Accumulate the rocks used. Stop when additionalRocks is exhausted.',
  ],
  functionName: 'maximumBags',
  params: ['capacity', 'rocks', 'additionalRocks'],
  starterCode: {
    javascript: `function maximumBags(capacity, rocks, additionalRocks) {
  // Return the maximum number of bags filled to full capacity
}`,
    python: `def maximumBags(capacity: list[int], rocks: list[int], additionalRocks: int) -> int:
    # Return the maximum number of bags filled to full capacity
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 4, 5], [1, 2, 4, 4], 2], expected: 3 },
    { args: [[10, 2, 2], [2, 2, 0], 100], expected: 3 },
    { args: [[5], [3], 2], expected: 1 },
    { args: [[5], [3], 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], [0, 0, 0], 3], expected: 2 },
    { args: [[3, 3, 3], [0, 0, 0], 4], expected: 1 },
    { args: [[2, 2, 2], [0, 0, 0], 4], expected: 2 },
    { args: [[5, 5, 5], [5, 5, 5], 0], expected: 3 },
    { args: [[1], [1], 0], expected: 1 },
    { args: [[10], [0], 5], expected: 0 },
    { args: [[4, 4, 4], [4, 4, 0], 4], expected: 3 },
  ],
};
