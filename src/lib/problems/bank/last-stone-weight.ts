import type { Problem } from '../types';

export const problem: Problem = {
  id: 'last-stone-weight',
  title: 'Last Stone Weight',
  difficulty: 'easy',
  tags: ['heap', 'arrays'],
  description: `You are given an array of integers \`stones\` where \`stones[i]\` is the weight of the \`i\`th stone.

Each turn, we choose the **two heaviest stones** and smash them together. Suppose the heaviest two stones have weights \`x\` and \`y\` where \`x <= y\`:

- If \`x == y\`, both stones are **destroyed**.
- If \`x != y\`, the stone of weight \`x\` is destroyed and the stone of weight \`y\` gets new weight \`y - x\`.

At the end of the game, there is **at most one** stone left. Return the weight of the last remaining stone. If there are no stones left, return \`0\`.`,
  constraints: [
    '1 <= stones.length <= 30',
    '1 <= stones[i] <= 1000',
  ],
  examples: [
    {
      input: 'stones = [2,7,4,1,8,1]',
      output: '1',
      explanation:
        'Smash 7 and 8 → 1. Array: [2,4,1,1,1]. Smash 2 and 4 → 2. Array: [2,1,1,1]. Smash 2 and 1 → 1. Array: [1,1,1]. Smash 1 and 1 → gone. Array: [1]. Last stone weighs 1.',
    },
    {
      input: 'stones = [1]',
      output: '1',
    },
  ],
  hints: [
    'You need to repeatedly pick the two heaviest stones. What data structure gives you the maximum efficiently?',
    'A max-heap (priority queue) extracts the maximum in O(log n). JavaScript has no built-in heap, but for this small input (≤ 30 stones) you can sort the array each round.',
    'Sort the array ascending each turn, pop the last two values as y and x. If y ≠ x push (y − x) back. Repeat until at most one element remains.',
  ],
  functionName: 'lastStoneWeight',
  params: ['stones'],
  starterCode: {
    javascript: `function lastStoneWeight(stones) {

}`,
    python: `def lastStoneWeight(stones):
    pass`,
  },
  visibleTests: [
    { args: [[2, 7, 4, 1, 8, 1]], expected: 1 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, 2]], expected: 0 },
    { args: [[1, 3]], expected: 2 },
    { args: [[10, 4, 2, 10]], expected: 2 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[31, 26, 33, 21, 40]], expected: 9 },
  ],
};
