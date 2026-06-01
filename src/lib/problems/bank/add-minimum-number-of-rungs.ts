import type { Problem } from '../types';

export const problem: Problem = {
  id: 'add-minimum-number-of-rungs',
  title: 'Add Minimum Number of Rungs',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **strictly increasing** integer array \`rungs\` that represents the **height** of rungs on a ladder. You are currently on the **floor** at height \`0\`, and you want to reach the last rung.

You are given an integer \`dist\`. You can only climb to the next rung if the distance between where you are currently at (the floor or a rung) and the next rung is **at most** \`dist\`. You are able to insert rungs at any positive integer height if a rung is not already there.

Return the **minimum** number of rungs that must be added to the ladder in order for you to climb to the last rung.`,
  constraints: [
    '`1 <= rungs.length <= 10^5`',
    '`1 <= rungs[i] <= 10^9`',
    '`1 <= dist <= 10^9`',
    '`rungs` is strictly increasing.',
  ],
  examples: [
    {
      input: 'rungs = [1,3,5,10], dist = 2',
      output: '2',
      explanation: '0→1→3→5 are all within dist=2. Gap 5→10=5; need ceil(5/2)−1=2 extra rungs.',
    },
    {
      input: 'rungs = [3,6,8,10], dist = 3',
      output: '0',
      explanation: 'All consecutive gaps ≤ 3; no rungs needed.',
    },
  ],
  hints: [
    'Simulate the climb tracking your current position (starting from 0).',
    'If the gap to the next rung exceeds dist, you need to add rungs: count = ceil(gap / dist) - 1.',
    'Use integer arithmetic: (gap - 1) / dist gives ceil(gap/dist) - 1 without floating point.',
  ],
  functionName: 'addRungs',
  params: ['rungs', 'dist'],
  starterCode: {
    javascript: `function addRungs(rungs, dist) {
  let count = 0, prev = 0;
  for (const rung of rungs) {
    const gap = rung - prev;
    if (gap > dist) count += Math.ceil(gap / dist) - 1;
    prev = rung;
  }
  return count;
}`,
    typescript: `function addRungs(rungs: number[], dist: number): number {
  let count = 0, prev = 0;
  for (const rung of rungs) {
    const gap = rung - prev;
    if (gap > dist) count += Math.ceil(gap / dist) - 1;
    prev = rung;
  }
  return count;
}`,
    python: `def addRungs(rungs, dist):
    import math
    rungs = list(rungs.to_py()) if hasattr(rungs, 'to_py') else list(rungs)
    count = 0
    prev = 0
    for rung in rungs:
        gap = rung - prev
        if gap > dist:
            count += math.ceil(gap / dist) - 1
        prev = rung
    return count`,
  },
  visibleTests: [
    { args: [[1, 3, 5, 10], 2], expected: 2 },
    { args: [[3, 6, 8, 10], 3], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[5], 2], expected: 2 },
    { args: [[2, 4, 6, 8], 2], expected: 0 },
    { args: [[3, 6, 9], 4], expected: 0 },
    { args: [[1, 6], 2], expected: 2 },
  ],
};
