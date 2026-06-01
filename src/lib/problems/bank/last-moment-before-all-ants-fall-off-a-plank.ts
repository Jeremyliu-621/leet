import type { Problem } from '../types';

export const problem: Problem = {
  id: 'last-moment-before-all-ants-fall-off-a-plank',
  title: 'Last Moment Before All Ants Fall Off a Plank',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `We have a wooden plank of the length \`n\` units. Some ants are walking on the plank, each ant moves with a speed of 1 unit per second. Some ants move to the **left**, the others move to the **right**.

When two ants moving in two **different** directions meet at some point, they change their directions and continue moving again. Assume changing direction does not take any additional time.

When an ant reaches **one end** of the plank at time \`t\`, it falls out of the plank immediately.

Given an integer \`n\` and two integer arrays \`left\` and \`right\`, the positions of the ants moving to the left and the right, return *the moment when the last ant falls off of the plank*.`,
  constraints: [
    '1 <= n <= 10^4',
    '0 <= left.length <= n + 1',
    '0 <= right.length <= n + 1',
    '0 <= left[i] <= n',
    '0 <= right[i] <= n',
    '1 <= left.length + right.length',
    'All values of left and right are unique, and each value can appear only in one of the two arrays.',
  ],
  examples: [
    {
      input: 'n = 4, left = [4,3], right = [0,1]',
      output: '4',
      explanation: 'The last ant falls off at t=4.',
    },
    {
      input: 'n = 7, left = [], right = [0,1,2,3,4,5,6,7]',
      output: '7',
      explanation: 'All ants move right; the one at position 0 falls off at t=7.',
    },
    {
      input: 'n = 7, left = [0,1,2,3,4,5,6,7], right = []',
      output: '7',
      explanation: 'All ants move left; the one at position 7 falls off at t=7.',
    },
  ],
  hints: [
    'Level 1: Key insight: when two ants meet and reverse directions, it is equivalent to them passing through each other. The "identity" of each ant changes, but the set of positions at any time is the same.',
    'Level 2: Under the passing-through interpretation, each ant independently falls off: a left-ant at position p falls at time p, and a right-ant at position p falls at time n - p.',
    'Level 3: The answer is simply max(max(p for p in left), max(n - p for p in right)). O(n) total. If either array is empty, its contribution to the max is 0.',
  ],
  functionName: 'getLastMoment',
  params: ['n', 'left', 'right'],
  starterCode: {
    javascript: `function getLastMoment(n, left, right) {

}`,
    typescript: `function getLastMoment(n: number, left: number[], right: number[]): number {

}`,
    python: `def getLastMoment(n, left, right):
    pass`,
  },
  visibleTests: [
    { args: [4, [4, 3], [0, 1]], expected: 4 },
    { args: [7, [], [0, 1, 2, 3, 4, 5, 6, 7]], expected: 7 },
    { args: [7, [0, 1, 2, 3, 4, 5, 6, 7], []], expected: 7 },
  ],
  hiddenTests: [
    { args: [4, [2], [2]], expected: 2 },
    { args: [10, [10], [0]], expected: 10 },
    { args: [5, [0, 5], []], expected: 5 },
    { args: [3, [], [0, 3]], expected: 3 },
    { args: [4, [4, 3], [2]], expected: 4 },
    { args: [10, [5], [5]], expected: 5 },
  ],
};
