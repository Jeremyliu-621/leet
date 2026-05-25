import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-performance-of-team',
  title: 'Maximum Performance of a Team',
  difficulty: 'hard',
  tags: ['heap', 'arrays'],
  description: `There are \`n\` engineers numbered from 1 to n. You are given two integer arrays \`speed\` and \`efficiency\` (both 1-indexed in the problem, 0-indexed in our arrays), where \`speed[i]\` and \`efficiency[i]\` represent the speed and efficiency of the \`i\`-th engineer.

Choose at most \`k\` engineers and form a team. The **performance** of the team is defined as:

\`\`\`
performance = sum(speed[selected]) × min(efficiency[selected])
\`\`\`

Return the **maximum performance** of this team modulo \`10^9 + 7\`.

**Greedy + Min-Heap:** Sort engineers by efficiency descending. For each engineer, they set the minimum efficiency. Use a min-heap of size ≤ k to maintain the top-k speeds seen so far. Maximize \`speedSum × currentEfficiency\`.`,
  constraints: [
    '1 <= n <= 100000',
    'speed.length == n',
    'efficiency.length == n',
    '1 <= speed[i] <= 100000',
    '1 <= efficiency[i] <= 100000000',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2',
      output: '60',
      explanation: 'Pick engineers with speed=10,eff=4 and speed=5,eff=7. Performance = (10+5) × 4 = 60.',
    },
    {
      input: 'n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3',
      output: '68',
      explanation: 'Pick engineers 1,2,5. Performance = (2+10+5) × 4 = 68.',
    },
    {
      input: 'n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 4',
      output: '72',
      explanation: 'Best is engineers with eff 9: (1) × 9 = 9? No — pick eff=7,5,4,9: (5+2+10+1)*4=72.',
    },
  ],
  hints: [
    'Sort engineers by efficiency in descending order. As you process each engineer, their efficiency is the minimum so far.',
    'Maintain a min-heap of at most k speeds. For each engineer: add their speed to the heap and the running total. If the heap exceeds k, remove the smallest speed.',
    'At each step, candidate performance = currentSpeedSum × currentEngineer.efficiency. Track the maximum.',
  ],
  functionName: 'maxPerformance',
  params: ['n', 'speed', 'efficiency', 'k'],
  starterCode: {
    javascript: 'function maxPerformance(n, speed, efficiency, k) {\n\n}\n',
    python: 'def maxPerformance(n: int, speed: list, efficiency: list, k: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [6, [2,10,3,1,5,8], [5,4,3,9,7,2], 2], expected: 60 },
    { args: [6, [2,10,3,1,5,8], [5,4,3,9,7,2], 3], expected: 68 },
    { args: [6, [2,10,3,1,5,8], [5,4,3,9,7,2], 4], expected: 72 },
  ],
  hiddenTests: [
    { args: [1, [10], [5], 1], expected: 50 },
    { args: [3, [2,8,2], [2,7,1], 2], expected: 56 },
    { args: [6, [2,10,3,1,5,8], [5,4,3,9,7,2], 6], expected: 72 },
  ],
};
