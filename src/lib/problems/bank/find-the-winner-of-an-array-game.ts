import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-winner-of-an-array-game',
  title: 'Find the Winner of an Array Game',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `Given an integer array \`arr\` of **distinct** integers and an integer \`k\`.

A game will be played between the first two elements of the array (i.e., \`arr[0]\` and \`arr[1]\`). In each round of the game, we compare \`arr[0]\` with \`arr[1]\`, the larger integer wins and remains at position \`0\`, and the smaller integer moves to the end of the array. The game ends and we have a **winner** if for a certain element, it wins \`k\` **consecutive** games.

Return the integer which will win the game.

It is **guaranteed** there will be a winner of the game.`,
  constraints: [
    '`2 <= arr.length <= 10^5`',
    '`1 <= arr[i] <= 10^6`',
    '`arr` contains **distinct** integers.',
    '`1 <= k <= 10^9`',
  ],
  examples: [
    {
      input: 'arr = [2,1,3,5,4,6,7], k = 2',
      output: '5',
      explanation: '2 beats 1 (streak=1). 3 beats 2 (streak=1). 5 beats 3 (streak=1). 5 beats 4 (streak=2). Return 5.',
    },
    {
      input: 'arr = [3,2,1], k = 10',
      output: '3',
      explanation: '3 beats every element before seeing all; it is the global max.',
    },
  ],
  hints: [
    'If k ≥ n−1, the global maximum will eventually win (it beats everyone).',
    'Otherwise simulate: track the current winner and its consecutive win count.',
    'When the next element exceeds the current winner, update the winner and reset streak to 1.',
  ],
  functionName: 'getWinner',
  params: ['arr', 'k'],
  starterCode: {
    javascript: `function getWinner(arr, k) {
  let cur = arr[0], streak = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > cur) { cur = arr[i]; streak = 1; }
    else streak++;
    if (streak >= k) return cur;
  }
  return cur;
}`,
    typescript: `function getWinner(arr: number[], k: number): number {
  let cur = arr[0], streak = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > cur) { cur = arr[i]; streak = 1; }
    else streak++;
    if (streak >= k) return cur;
  }
  return cur;
}`,
    python: `def getWinner(arr, k):
    cur, streak = arr[0], 0
    for i in range(1, len(arr)):
        if arr[i] > cur: cur = arr[i]; streak = 1
        else: streak += 1
        if streak >= k: return cur
    return cur`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 5, 4, 6, 7], 2], expected: 5 },
    { args: [[3, 2, 1], 10], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2], 1], expected: 2 },
    { args: [[2, 1, 3], 1], expected: 2 },
    { args: [[1, 2, 3], 2], expected: 3 },
    { args: [[3, 1, 2], 2], expected: 3 },
    { args: [[1, 9, 8, 2, 3, 7, 6, 4, 5], 7], expected: 9 },
  ],
};
