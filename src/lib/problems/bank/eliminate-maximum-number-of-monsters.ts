import type { Problem } from '../types';

export const problem: Problem = {
  id: 'eliminate-maximum-number-of-monsters',
  title: 'Eliminate Maximum Number of Monsters',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are playing a video game where you must defend a city from monsters. You are given two arrays \`dist\` and \`speed\`, where \`dist[i]\` is the initial distance (in km) of the i-th monster and \`speed[i]\` is the speed (km/min) of the i-th monster.

You have a weapon that can eliminate exactly **one monster per minute**, starting at minute 0. A monster reaches the city if it arrives **before** you can eliminate it (i.e., at a time ≤ the minute you would fire at it). Return the **maximum number of monsters** you can eliminate before any monster reaches the city.

**Key insight:** Sort monsters by arrival time \`ceil(dist[i] / speed[i])\`. At minute \`k\` (0-indexed), you fire at the k-th closest monster — if it arrives at or before minute \`k\`, you can't stop it.`,
  constraints: [
    '1 <= dist.length == speed.length <= 10^5',
    '1 <= dist[i], speed[i] <= 10^5',
  ],
  examples: [
    {
      input: 'dist = [1, 3, 4], speed = [1, 1, 1]',
      output: '3',
      explanation: 'Arrival times: [1, 3, 4]. At minute 0 eliminate monster 0 (arrives at 1 > 0). At minute 1, eliminate monster 1 (arrives at 3 > 1). At minute 2, eliminate monster 2 (arrives at 4 > 2). All eliminated.',
    },
    {
      input: 'dist = [1, 1, 2, 3], speed = [1, 1, 1, 1]',
      output: '1',
      explanation: 'Arrival times: [1, 1, 2, 3]. At minute 0 eliminate the earliest (arrival 1 > 0). At minute 1 there is still a monster with arrival time 1 ≤ 1, so it reaches the city.',
    },
    {
      input: 'dist = [3, 2, 4], speed = [5, 3, 2]',
      output: '1',
      explanation: 'Arrival times: [ceil(0.6)=1, ceil(0.67)=1, ceil(2)=2], sorted [1,1,2]. At minute 0 eliminate one (arrival 1>0). At minute 1 another arrives at time 1≤1. Only 1 eliminated.',
    },
  ],
  hints: [
    'Compute the arrival time for each monster as ceil(dist[i] / speed[i]).',
    'Sort monsters by arrival time. Process them in order — at minute k (0-indexed) you fire the weapon.',
    'If the k-th monster (0-indexed after sorting) has arrival time ≤ k, it reaches the city before you can fire. Return k at that point.',
  ],
  functionName: 'eliminateMaximum',
  params: ['dist', 'speed'],
  starterCode: {
    javascript: `function eliminateMaximum(dist, speed) {
  // Return maximum monsters eliminated before any reaches the city
}`,
    typescript: "function eliminateMaximum(dist: number[], speed: number[]): number {\n  // Return maximum monsters eliminated before any reaches the city\n}",

    python: `def eliminateMaximum(dist: list[int], speed: list[int]) -> int:
    # Return maximum monsters eliminated before any reaches the city
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 4], [1, 1, 1]], expected: 3 },
    { args: [[1, 1, 2, 3], [1, 1, 1, 1]], expected: 1 },
    { args: [[3, 2, 4], [5, 3, 2]], expected: 1 },
    { args: [[1], [1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 3, 4], [1, 1, 2]], expected: 3 },
    { args: [[5, 10, 15], [5, 3, 2]], expected: 3 },
    { args: [[2, 4, 6], [1, 1, 1]], expected: 3 },
    { args: [[1, 1, 1], [1, 1, 1]], expected: 1 },
    { args: [[10, 1], [5, 1]], expected: 2 },
    { args: [[4, 2, 1], [2, 1, 3]], expected: 2 },
    { args: [[4], [1]], expected: 1 },
    { args: [[2, 2], [1, 1]], expected: 2 },
  ],
};
