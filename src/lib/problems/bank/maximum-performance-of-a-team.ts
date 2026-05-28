import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-performance-of-a-team',
  title: 'Maximum Performance of a Team',
  difficulty: 'hard',
  tags: ['heap', 'arrays', 'math'],
  description: `You are given two integers \`n\` and \`k\` and two integer arrays \`speed\` and \`efficiency\`, both of length \`n\`. There are \`n\` engineers numbered from \`1\` to \`n\`. \`speed[i]\` and \`efficiency[i]\` represent the speed and efficiency of the \`i\`th engineer respectively.

Choose **at most** \`k\` different engineers out of the \`n\` engineers to form a team with the **maximum performance**.

The performance of a team is the **sum of the engineers' speeds** multiplied by the **minimum efficiency** among all engineers in the team.

Return the maximum performance of this team. Since the answer can be a huge number, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '`1 <= k <= n <= 100000`',
    '`speed.length == n`',
    '`efficiency.length == n`',
    '`1 <= speed[i] <= 10^5`',
    '`1 <= efficiency[i] <= 10^8`',
  ],
  examples: [
    {
      input: 'n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2',
      output: '60',
      explanation:
        'Pick engineers 2 (speed=10, eff=4) and 5 (speed=5, eff=7): performance = (10+5) * min(4,7) = 15*4 = 60.',
    },
    {
      input: 'n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3',
      output: '68',
      explanation:
        'Pick engineers 2 (speed=10), 5 (speed=5), and 4 (speed=1, eff=9): performance = (10+5+1)*min(4,7,9) = 16*4? No — sort by eff desc and use min-heap; best is (10+5+1)*4 is not optimal. Best team: engineers 4(eff=9,spd=1), 5(eff=7,spd=5), 2(eff=4,spd=10): sum=16, minEff=4, perf=64. But when engineer 2 is added, k=3 heap=[1,5,10], speedSum=16, minEff=4, perf=64. With engineer 4 as anchor (eff=9), sum=1, perf=9. After all: max is 68 from speedSum=17*4.',
    },
  ],
  hints: [
    'Sort engineers by efficiency in descending order. For each engineer, treat their efficiency as the minimum of the team.',
    'Maintain a min-heap of speeds of size at most `k`. When you add a new engineer, if the heap exceeds `k`, remove the engineer with the smallest speed. Track the running sum of speeds in the heap.',
    '```js\nfunction maxPerformance(n, speed, efficiency, k) {\n  const MOD = 1_000_000_007n;\n  const engineers = speed.map((s, i) => [efficiency[i], s]).sort((a, b) => b[0] - a[0]);\n  // min-heap via sorted insertion (use a proper heap for large n)\n  const heap = [];\n  let speedSum = 0n, best = 0n;\n  for (const [eff, spd] of engineers) {\n    heap.push(spd);\n    heap.sort((a, b) => a - b);\n    speedSum += BigInt(spd);\n    if (heap.length > k) speedSum -= BigInt(heap.shift());\n    const perf = speedSum * BigInt(eff);\n    if (perf > best) best = perf;\n  }\n  return Number(best % MOD);\n}\n```',
  ],
  functionName: 'maxPerformance',
  params: ['n', 'speed', 'efficiency', 'k'],
  starterCode: {
    javascript: `function maxPerformance(n, speed, efficiency, k) {

}`,
    python: `def maxPerformance(n: int, speed: list[int], efficiency: list[int], k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 2], expected: 60 },
    { args: [6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 3], expected: 68 },
  ],
  hiddenTests: [
    { args: [1, [7], [10], 1], expected: 70 },
    { args: [3, [3, 1, 2], [4, 5, 3], 2], expected: 16 },
    { args: [4, [5, 3, 4, 2], [6, 5, 7, 3], 3], expected: 60 },
  ],
};
