import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-winner-of-array-game',
  title: 'Find the Winner of an Array Game',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array **arr** of **distinct** integers and an integer **k**.

A game will be played between the first two elements of the array (i.e. \`arr[0]\` and \`arr[1]\`). In each round of the game, we compare the two elements. The **larger** integer wins and remains at the front of the array. The **smaller** integer moves to the end of the array. When an integer wins **k** consecutive rounds, the game ends and that integer is declared the **winner**.

Return the integer which will win the game.

It is **guaranteed** there will be a winner of the game.

**Function signature:** \`getWinner(arr, k)\``,
  examples: [
    {
      input: 'arr = [2,1,3,5,4,6,7], k = 2',
      output: '5',
      explanation:
        'Round 1: 2 vs 1 — 2 wins (1 win). Round 2: 2 vs 3 — 3 wins (1 win). Round 3: 3 vs 5 — 5 wins (1 win). Round 4: 5 vs 4 — 5 wins (2 wins) = k. Winner is 5.',
    },
    {
      input: 'arr = [3,2,1], k = 10',
      output: '3',
      explanation:
        '3 beats 2 (1 win), 3 beats 1 (2 wins). After facing all others, 3 is the maximum and will always win. 3 is declared winner (it would win k rounds if we continued circling the array).',
    },
  ],
  constraints: [
    '2 <= arr.length <= 10^5',
    '1 <= arr[i] <= 10^6',
    '1 <= k <= 10^9',
    'All integers in arr are distinct.',
    'It is guaranteed there will be a winner of the game.',
  ],
  hints: [
    'You do not need to simulate the circular rotation literally. Instead, just walk forward through the array: if arr[i] > current front, the new element wins (reset wins to 1). Otherwise current front wins again (increment wins).',
    'If at any point wins reaches k, return the current winner. If you scan through the entire array without hitting k wins, the overall maximum is the winner (it will beat everyone once the array cycles back around).',
    'This runs in O(n) time — no simulation of the rotation needed.',
  ],
  functionName: 'getWinner',
  params: ['arr', 'k'],
  starterCode: {
    javascript: 'function getWinner(arr, k) {\n  \n}\n',
    typescript: "function getWinner(arr: number[], k: number): number {\n  \n}",

    python: 'def getWinner(arr, k):\n    ',
  },
  visibleTests: [
    { args: [[2, 1, 3, 5, 4, 6, 7], 2], expected: 5 },
    { args: [[3, 2, 1], 10], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 11, 22, 33, 44, 55, 66, 77, 88, 99], 1000000000], expected: 99 },
    // The maximum (99) will always win; no one beats it.
    { args: [[1, 2], 1], expected: 2 },
    // Round 1: 1 vs 2 — 2 wins, wins=1=k. Winner: 2.
    { args: [[5, 4, 3, 2, 1], 1], expected: 5 },
    // 5 vs 4 → 5 wins with 1 win = k=1. Winner: 5.
    { args: [[2, 1, 3, 5, 4, 6, 7], 3], expected: 7 },
    // 7 is the overall maximum; before reaching k=3 consecutive wins, no one accumulates 3.
    // Trace: current=2,w=0. i=1:1<2→w=1<3. i=2:3>2→cur=3,w=1<3. i=3:5>3→cur=5,w=1<3.
    // i=4:4<5→w=2<3. i=5:6>5→cur=6,w=1<3. i=6:7>6→cur=7,w=2<3. End → return 7.
    { args: [[4, 5, 1, 2, 3], 2], expected: 5 },
    // i=0:cur=4,w=0. i=1:5>4→cur=5,w=1<2. i=2:1<5→w=2=k. Return 5.
  ],
};
