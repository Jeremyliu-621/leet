import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-bags-full-capacity',
  title: 'Maximum Bags With Full Capacity of Rocks',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You have \`n\` bags numbered from \`0\` to \`n - 1\`. You are given two **0-indexed** integer arrays \`capacity\` and \`rocks\`. The \`i\`th bag can hold a maximum of \`capacity[i]\` rocks and currently contains \`rocks[i]\` rocks. You are also given an integer \`additionalRocks\`, the number of additional rocks you can place in **any** of the bags.

Return the **maximum** number of bags that could have full capacity after placing the additional rocks in some bags.`,
  constraints: [
    'n == capacity.length == rocks.length',
    '1 <= n <= 5 * 10^4',
    '1 <= capacity[i] <= 10^9',
    '0 <= rocks[i] <= capacity[i]',
    '1 <= additionalRocks <= 10^9',
  ],
  examples: [
    {
      input: 'capacity = [2,3,4,5], rocks = [1,2,4,4], additionalRocks = 2',
      output: '3',
      explanation: 'Remaining: [1,1,0,1]. Sort ascending. Fill 0 (1 bag full, 2 left), fill 1 (2 bags full, 1 left), fill 1 (3 bags full, 0 left). Answer: 3.',
    },
    {
      input: 'capacity = [10,2,2], rocks = [2,2,0], additionalRocks = 100',
      output: '3',
      explanation: 'Enough rocks to fill all three bags.',
    },
  ],
  hints: [
    'Level 1: Compute how many more rocks each bag needs: remaining[i] = capacity[i] - rocks[i].',
    'Level 2: Sort remaining ascending. Greedily fill bags with smallest remaining space first.',
    'Level 3: const rem=capacity.map((c,i)=>c-rocks[i]).sort((a,b)=>a-b);let bags=0;for(const r of rem){if(r<=additionalRocks){additionalRocks-=r;bags++;}else break;}return bags;',
  ],
  functionName: 'maximumBags',
  params: ['capacity', 'rocks', 'additionalRocks'],
  starterCode: {
    javascript: 'function maximumBags(capacity, rocks, additionalRocks) {\n  // your code here\n}\n',
    typescript: "function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {\n  // your code here\n}",

    python: 'def maximumBags(capacity, rocks, additionalRocks):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, 4, 5], [1, 2, 4, 4], 2], expected: 3 },
    { args: [[10, 2, 2], [2, 2, 0], 100], expected: 3 },
  ],
  hiddenTests: [
    { args: [[5], [5], 1], expected: 1 },
    { args: [[5], [4], 0], expected: 0 },
    { args: [[1, 1, 1], [0, 0, 0], 2], expected: 2 },
    { args: [[1, 2, 3], [0, 1, 2], 2], expected: 2 },
    { args: [[10, 10], [0, 0], 1], expected: 0 },
  ],
};
