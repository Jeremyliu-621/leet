import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apple-redistribution-into-boxes',
  title: 'Apple Redistribution into Boxes',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an array \`packages\` where \`packages[i]\` is the number of apples in the \`i\`-th package. You are also given an array \`capacity\` where \`capacity[j]\` is the maximum number of apples box \`j\` can hold.

Return the **minimum** number of boxes you need to select from \`capacity\` such that all apples from all packages can be packed in selected boxes.

**Note:** You can distribute the apples from a package into multiple boxes, and multiple packages can go into one box.`,
  constraints: [
    '1 <= packages.length <= 100',
    '1 <= packages[i] <= 10^3',
    '1 <= capacity.length <= 10^5',
    '1 <= capacity[j] <= 10^5',
    'The sum of capacity is greater than or equal to the sum of packages.',
  ],
  examples: [
    {
      input: 'packages = [1,3,2], capacity = [4,3,1,5,2]',
      output: '2',
      explanation: 'Total apples = 6. Sort capacity descending: [5,4,3,2,1]. Pick the largest box (capacity 5): 5 < 6, need more. Pick the next largest (capacity 4): 5+4=9 >= 6. Two boxes suffice.',
    },
    {
      input: 'packages = [5,5], capacity = [10,10]',
      output: '1',
      explanation: 'Total apples = 10. Largest box has capacity 10 >= 10. One box is enough.',
    },
    {
      input: 'packages = [1,1,1,1,1], capacity = [2,2,2]',
      output: '3',
      explanation: 'Total = 5. Sorted capacity desc: [2,2,2]. After 3 boxes: 2+2+2=6 >= 5. All 3 boxes needed.',
    },
  ],
  hints: [
    'Sum all the apples in packages — this is the total you need to fit.',
    'Sort capacity in descending order, then greedily pick the largest boxes first.',
    'Stop as soon as the cumulative capacity of selected boxes is ≥ the total apple count.',
  ],
  functionName: 'minimumBoxes',
  params: ['packages', 'capacity'],
  starterCode: {
    javascript: 'function minimumBoxes(packages, capacity) {\n  \n}\n',
    typescript: 'function minimumBoxes(packages: number[], capacity: number[]): number {\n  \n}',
    python: 'def minimumBoxes(packages, capacity):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 2], [4, 3, 1, 5, 2]], expected: 2 },
    { args: [[5, 5], [10, 10]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[3, 3, 3], [3, 3, 3]], expected: 3 },
    { args: [[2, 3, 4], [10]], expected: 1 },
    { args: [[1, 1, 1, 1, 1], [2, 2, 2]], expected: 3 },
  ],
};
