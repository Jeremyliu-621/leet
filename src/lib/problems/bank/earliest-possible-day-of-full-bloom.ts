import type { Problem } from '../types';

export const problem: Problem = {
  id: 'earliest-possible-day-of-full-bloom',
  title: 'Earliest Possible Day of Full Bloom',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You have \`n\` flower seeds. Every seed must be planted first before it can begin to grow, then bloom. Planting a seed takes time and so does the growth period of a flower after planting.

You are given two **0-indexed** integer arrays \`plantTime\` and \`growTime\`, of length \`n\` each:
- \`plantTime[i]\` is the number of **full days** it takes you to **plant** the \`i\`th seed. Every day, you can work on planting exactly one seed. You **do not** have to work on planting the same seed on consecutive days, but the planting of a seed is not complete **until** you have worked \`plantTime[i]\` days on it in total.
- \`growTime[i]\` is the number of **full days** it takes the \`i\`th seed to grow after being completely planted. **After** the last day of its growth, the flower **blooms** and stays bloomed forever.

Return the **earliest** possible day where **all** seeds are blooming.`,
  constraints: [
    'n == plantTime.length == growTime.length',
    '1 <= n <= 10^5',
    '1 <= plantTime[i], growTime[i] <= 10^4',
  ],
  examples: [
    {
      input: 'plantTime = [1,4,3], growTime = [2,3,1]',
      output: '9',
      explanation: 'Sort by growTime descending: plant seed 1 (day 0-3), seed 2 (day 4-6), seed 0 (day 7). Bloom days: 10, 9, 9. Earliest all bloom: day 9.',
    },
    {
      input: 'plantTime = [1,2,3,2], growTime = [2,1,2,1]',
      output: '9',
      explanation: 'Optimal order gives bloom by day 9.',
    },
    {
      input: 'plantTime = [1], growTime = [1]',
      output: '2',
      explanation: 'Plant on day 0, grows for 1 day, blooms on day 2.',
    },
  ],
  hints: [
    'Greedily, plant the seed with the longest grow time first.',
    'Sort by growTime descending. Simulate: track the current planting end day.',
    'Bloom day for seed i = plantEnd + growTime[i]. Answer is the max bloom day.',
  ],
  functionName: 'earliestFullBloom',
  params: ['plantTime', 'growTime'],
  starterCode: {
    javascript: 'function earliestFullBloom(plantTime, growTime) {\n  \n}\n',
    python: 'def earliestFullBloom(plantTime, growTime):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 4, 3], [2, 3, 1]], expected: 9 },
    { args: [[1, 2, 3, 2], [2, 1, 2, 1]], expected: 9 },
    { args: [[1], [1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 1], [1, 1]], expected: 3 },
    { args: [[2, 2], [3, 2]], expected: 6 },
    { args: [[1, 2], [3, 1]], expected: 4 },
    { args: [[3, 1, 1], [2, 3, 2]], expected: 7 },
    { args: [[1, 1, 1, 1], [1, 1, 1, 1]], expected: 5 },
  ],
};
