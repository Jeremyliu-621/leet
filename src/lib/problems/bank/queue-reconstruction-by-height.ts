import type { Problem } from '../types';

export const problem: Problem = {
  id: 'queue-reconstruction-by-height',
  title: 'Queue Reconstruction by Height',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an array of people \`people\`, where \`people[i] = [h_i, k_i]\` represents the \`i\`th person with height \`h_i\` and \`k_i\` others in front who have a height **greater than or equal to** \`h_i\`.

Reconstruct and return the queue that is represented by the input array \`people\`. The returned queue should be formatted as an array \`queue\`, where \`queue[j] = [h_j, k_j]\` is the attributes of the \`j\`th person in the queue (0-indexed).`,
  constraints: [
    '1 <= people.length <= 2000',
    '0 <= h_i <= 10^6',
    '0 <= k_i < people.length',
    'It is guaranteed that the queue can be reconstructed',
  ],
  examples: [
    {
      input: 'people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]',
      output: '[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]',
      explanation: 'Sort by height descending, then insert each person at position k.',
    },
    {
      input: 'people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]',
      output: '[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]',
    },
  ],
  hints: [
    'Sort people by height descending, breaking ties by k ascending.',
    'After sorting, insert each person at position k in the result array. Taller people are already placed, so inserting at position k maintains the k-count invariant.',
    'Use array splice/insert at index k for each person in the sorted order.',
  ],
  functionName: 'reconstructQueue',
  params: ['people'],
  starterCode: {
    javascript: 'function reconstructQueue(people) {\n  \n}\n',
    typescript: "function reconstructQueue(people: number[][]): number[][] {\n  \n}",

    python: 'def reconstructQueue(people):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]],
      expected: [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]],
    },
    {
      args: [[[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]]],
      expected: [[4, 0], [5, 0], [2, 2], [3, 2], [1, 4], [6, 0]],
    },
  ],
  hiddenTests: [
    {
      args: [[[1, 0]]],
      expected: [[1, 0]],
    },
    {
      args: [[[2, 0], [2, 1], [1, 0]]],
      expected: [[1, 0], [2, 0], [2, 1]],
    },
    {
      args: [[[5, 0], [4, 0], [4, 1], [3, 0], [3, 2], [2, 0]]],
      expected: [[2, 0], [3, 0], [4, 0], [3, 2], [4, 1], [5, 0]],
    },
  ],
};
