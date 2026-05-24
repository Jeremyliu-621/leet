import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-units-on-truck',
  title: 'Maximum Units on a Truck',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are assigned to put some amount of boxes onto **one truck**. You are given a 2D array \`boxTypes\`, where \`boxTypes[i] = [numberOfBoxes_i, numberOfUnitsPerBox_i]\`:

- \`numberOfBoxes_i\` is the number of boxes of type \`i\`.
- \`numberOfUnitsPerBox_i\` is the number of units in each box of type \`i\`.

You are also given an integer \`truckSize\`, which is the **maximum** number of boxes that can be put on the truck. You can choose **any** boxes to put on the truck as long as the number of boxes does not exceed \`truckSize\`.

Return the **maximum** total number of units that can be put on the truck.`,
  constraints: [
    '`1 <= boxTypes.length <= 1000`',
    '`1 <= numberOfBoxes_i, numberOfUnitsPerBox_i <= 1000`',
    '`1 <= truckSize <= 10^6`',
  ],
  examples: [
    {
      input: 'boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4',
      output: '8',
      explanation: 'We take 1 box of type 1 (3 units), 2 boxes of type 2 (4 units), 1 box of type 3 (1 unit). Total = 8.',
    },
    {
      input: 'boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10',
      output: '91',
    },
  ],
  hints: [
    'Sort box types by units per box in descending order. Greedily take as many boxes of the highest-value type as possible before moving to the next type.',
  ],
  functionName: 'maximumUnits',
  params: ['boxTypes', 'truckSize'],
  starterCode: {
    javascript: `function maximumUnits(boxTypes, truckSize) {

}`,
    python: `def maximumUnits(boxTypes, truckSize):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 3], [2, 2], [3, 1]], 4], expected: 8 },
    { args: [[[5, 10], [2, 5], [4, 7], [3, 9]], 10], expected: 91 },
  ],
  hiddenTests: [
    { args: [[[1, 1]], 3], expected: 1 },
    { args: [[[3, 5], [2, 8], [1, 10]], 5], expected: 36 },
    { args: [[[1000, 1000]], 1000], expected: 1000000 },
    { args: [[[2, 3], [3, 2]], 5], expected: 12 },
  ],
};
