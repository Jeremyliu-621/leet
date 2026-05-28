import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-flowers-in-full-bloom',
  title: 'Number of Flowers in Full Bloom',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `You are given a **0-indexed** 2D integer array \`flowers\` where \`flowers[i] = [start_i, end_i]\` means the \`i\`-th flower will be in full bloom from \`start_i\` to \`end_i\` (inclusive).

You are also given a **0-indexed** integer array \`people\` of size \`n\`, where \`people[i]\` is the time that the \`i\`-th person arrives to see the flowers.

Return an integer array \`answer\` of size \`n\`, where \`answer[i]\` is the number of flowers in full bloom when the \`i\`-th person arrives.`,
  constraints: [
    '1 <= flowers.length <= 5 * 10^4',
    'flowers[i].length == 2',
    '1 <= start_i <= end_i <= 10^9',
    '1 <= people.length <= 5 * 10^4',
    '1 <= people[i] <= 10^9',
  ],
  examples: [
    {
      input: 'flowers = [[1,6],[3,7],[9,12],[4,13]], people = [2,3,7,11]',
      output: '[1,2,2,2]',
      explanation: 'At t=2: flower [1,6] blooms (1 flower). At t=3: [1,6],[3,7] (2). At t=7: [3,7],[4,13] (2). At t=11: [9,12],[4,13] (2).',
    },
    {
      input: 'flowers = [[1,10],[3,3]], people = [3,3,2]',
      output: '[2,2,1]',
      explanation: 'At t=3: both [1,10] and [3,3] are in bloom. At t=2: only [1,10] blooms.',
    },
  ],
  hints: [
    'Sort the start times and end times separately.',
    'For query time t: the number of flowers that have started = upper_bound(starts, t).',
    'The number that have ended = lower_bound(ends, t). Blooming = started - ended.',
  ],
  functionName: 'fullBloomFlowers',
  params: ['flowers', 'people'],
  starterCode: {
    javascript: `function fullBloomFlowers(flowers, people) {

}`,
    typescript: "function fullBloomFlowers(flowers: number[][], people: number[]): number[] {\n\n}",

    python: `def fullBloomFlowers(flowers, people):
    pass`,
  },
  visibleTests: [
    { args: [[[1,6],[3,7],[9,12],[4,13]], [2,3,7,11]], expected: [1,2,2,2] },
    { args: [[[1,10],[3,3]], [3,3,2]], expected: [2,2,1] },
  ],
  hiddenTests: [
    { args: [[[1,1]], [1]], expected: [1] },
    { args: [[[1,100]], [50,100,101]], expected: [1,1,0] },
    { args: [[[1,5],[6,10]], [5,6]], expected: [1,1] },
  ],
};
