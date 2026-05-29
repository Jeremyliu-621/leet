import type { Problem } from '../types';

export const problem: Problem = {
  id: 'eliminate-maximum-number-of-monsters',
  title: 'Eliminate Maximum Number of Monsters',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are playing a video game where you are defending your city from an array of monsters. You are given a 0-indexed integer array \`dist\` of size \`n\`, where \`dist[i]\` is the initial distance (in km) of the i-th monster from the city. You are also given a 0-indexed integer array \`speed\` of size \`n\`, where \`speed[i]\` is the speed (in km/min) of the i-th monster.

The monsters start advancing toward the city simultaneously. You have a weapon that can eliminate **exactly one monster per minute**. You can fire at minutes 0, 1, 2, ... (one shot per minute).

A monster **reaches the city** if its arrival time is **≤** the minute you would fire at it (i.e., you can't eliminate it in time).

Return the **maximum number of monsters** you can eliminate before any monster reaches the city.`,
  constraints: [
    '1 <= dist.length == speed.length <= 10^5',
    '1 <= dist[i], speed[i] <= 10^5',
  ],
  examples: [
    {
      input: 'dist = [1,3,4], speed = [1,1,1]',
      output: '3',
      explanation: 'Arrival times: [1,3,4]. Minute 0: eliminate monster 0 (arrives at 1 > 0). Minute 1: eliminate monster 1 (arrives at 3 > 1). Minute 2: eliminate monster 2 (arrives at 4 > 2). All 3 eliminated.',
    },
    {
      input: 'dist = [1,1,2,3], speed = [1,2,1,1]',
      output: '1',
      explanation: 'Arrival times: [1, 0.5, 2, 3]. Sorted: [0.5, 1, 2, 3]. Minute 0: the fastest monster arrives at 0.5 ≤ 0? No, 0.5 > 0, eliminate it. Minute 1: next has arrival 1 ≤ 1, so it reaches. Only 1 eliminated.',
    },
    {
      input: 'dist = [3,2,4], speed = [5,3,2]',
      output: '1',
      explanation: 'Arrival times: [0.6, 0.67, 2]. Sorted: [0.6, 0.67, 2]. Minute 0: 0.6 > 0, eliminate. Minute 1: 0.67 ≤ 1, so it reaches. Only 1 eliminated.',
    },
  ],
  hints: [
    'Compute each monster\'s arrival time as dist[i] / speed[i]. Sort monsters by arrival time.',
    'You eliminate the monster at sorted position k at minute k (0-indexed). If arrival_time[k] ≤ k, you cannot eliminate that monster in time.',
    'Return the index of the first monster that reaches the city before you can eliminate it, or n if all monsters are eliminated.',
  ],
  functionName: 'eliminateMaximum',
  params: ['dist', 'speed'],
  starterCode: {
    javascript: 'function eliminateMaximum(dist, speed) {\n\n}\n',
    typescript: 'function eliminateMaximum(dist: number[], speed: number[]): number {\n\n}',
    python: 'def eliminateMaximum(dist, speed):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 4], [1, 1, 1]], expected: 3 },
    { args: [[1, 1, 2, 3], [1, 2, 1, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[3, 2, 4], [5, 3, 2]], expected: 1 },
    { args: [[1], [1]], expected: 1 },
    { args: [[3, 5, 7, 8, 9], [1, 1, 1, 1, 1]], expected: 5 },
    { args: [[10, 3], [3, 1]], expected: 2 },
    { args: [[1, 3], [2, 1]], expected: 2 },
  ],
};
