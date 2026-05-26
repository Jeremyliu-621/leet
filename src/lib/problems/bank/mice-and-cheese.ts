import type { Problem } from '../types';

export const problem: Problem = {
  id: 'mice-and-cheese',
  title: 'Mice and Cheese',
  difficulty: 'medium',
  tags: ['arrays', 'heap', 'dynamic-programming'],
  description: `There are two mice and \`n\` different types of cheese, each of which has been consumed by exactly one mouse.

- Mouse 1 **must** eat exactly \`k\` types of cheese.
- Mouse 2 eats the remaining \`n - k\` types.

You are given two **0-indexed** integer arrays \`reward1\` and \`reward2\`, each of length \`n\`, where:
- \`reward1[i]\` is the reward for giving cheese \`i\` to mouse 1.
- \`reward2[i]\` is the reward for giving cheese \`i\` to mouse 2.

Return the **maximum** total reward after assigning the cheeses optimally.

**Example:**
- \`reward1 = [1, 1, 3, 4]\`, \`reward2 = [4, 4, 1, 1]\`, \`k = 2\`
- Give cheeses 2 and 3 to mouse 1 (reward 3 + 4 = 7), cheeses 0 and 1 to mouse 2 (reward 4 + 4 = 8).
- Total reward = **15**

**Constraints:**
- \`1 ≤ n ≤ 10⁵\`
- \`0 ≤ reward1[i], reward2[i] ≤ 1000\`
- \`0 ≤ k ≤ n\``,
  constraints: [
    '1 ≤ n ≤ 10⁵',
    '0 ≤ reward1[i], reward2[i] ≤ 1000',
    '0 ≤ k ≤ n',
  ],
  examples: [
    {
      input: 'reward1 = [1,1,3,4], reward2 = [4,4,1,1], k = 2',
      output: '15',
      explanation: 'Give cheeses 2 and 3 to mouse 1 (3+4=7), cheeses 0 and 1 to mouse 2 (4+4=8). Total = 15.',
    },
    { input: 'reward1 = [1,1], reward2 = [1,1], k = 2', output: '2' },
  ],
  hints: [
    'Start by giving all cheeses to mouse 2. The total reward would be `sum(reward2)`. Now, for each cheese you "swap" from mouse 2 to mouse 1, the reward changes by `reward1[i] - reward2[i]`.',
    'To maximize the total, you want to pick the `k` cheeses with the largest `reward1[i] - reward2[i]` deltas. Sort by this difference descending and pick the top `k`.',
    'Answer = `sum(reward2) + sum of the k largest (reward1[i] - reward2[i]) values`.',
  ],
  functionName: 'miceAndCheese',
  params: ['reward1', 'reward2', 'k'],
  starterCode: {
    javascript: `function miceAndCheese(reward1, reward2, k) {
  // Return maximum total reward: mouse 1 eats exactly k cheeses, mouse 2 eats the rest
}`,
    python: `def miceAndCheese(reward1: list[int], reward2: list[int], k: int) -> int:
    # Return maximum total reward: mouse 1 eats exactly k cheeses, mouse 2 eats the rest
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 3, 4], [4, 4, 1, 1], 2], expected: 15 },
    { args: [[1, 1], [1, 1], 2], expected: 2 },
    { args: [[1, 2, 3], [3, 2, 1], 1], expected: 8 },
  ],
  hiddenTests: [
    { args: [[5], [5], 0], expected: 5 },
    { args: [[5], [5], 1], expected: 5 },
    { args: [[0, 0, 0], [1, 1, 1], 0], expected: 3 },
    { args: [[1, 1, 1], [0, 0, 0], 3], expected: 3 },
    { args: [[3, 1, 2], [0, 2, 1], 2], expected: 7 },
    { args: [[10, 1, 5], [1, 10, 5], 1], expected: 25 },
    { args: [[1000, 1000], [1000, 1000], 1], expected: 2000 },
  ],
};
