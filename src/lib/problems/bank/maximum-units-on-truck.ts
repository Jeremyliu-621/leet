import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-units-on-truck',
  title: 'Maximum Units on a Truck',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are assigned to put some amount of boxes onto **one truck**. You are given a 2D array \`boxTypes\`, where \`boxTypes[i] = [numberOfBoxes_i, unitsPerBox_i]\`:

- \`numberOfBoxes_i\` is the number of boxes of type \`i\`.
- \`unitsPerBox_i\` is the number of units in each box of the type \`i\`.

You are also given an integer \`truckSize\`, which is the **maximum** number of **boxes** that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed \`truckSize\`.

Return the **maximum** total number of **units** that can be put on the truck.`,
  constraints: [
    '1 <= boxTypes.length <= 1000',
    '1 <= numberOfBoxes_i, unitsPerBox_i <= 1000',
    '1 <= truckSize <= 10^6',
  ],
  examples: [
    {
      input: 'boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4',
      output: '8',
      explanation:
        'Sort by units descending: [[1,3],[2,2],[3,1]]. Take 1 box with 3 units, 2 boxes with 2 units, and 1 box with 1 unit (4 boxes total). Units = 3 + 4 + 1 = 8.',
    },
    {
      input: 'boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10',
      output: '91',
      explanation:
        'Sort descending by units: [[5,10],[3,9],[4,7],[2,5]]. Take 5 boxes@10=50, 3 boxes@9=27, 2 boxes@7=14. Total = 91.',
    },
  ],
  hints: [
    'Level 1: To maximize units, you want to greedily load box types with the highest units per box first. What sorting order achieves this?',
    'Level 2: Sort boxTypes by unitsPerBox in descending order. Then iterate: for each box type, take as many boxes as possible without exceeding the remaining truckSize.',
    'Level 3: boxTypes.sort((a,b)=>b[1]-a[1]);let units=0;for(const[n,u]of boxTypes){const take=Math.min(n,truckSize);units+=take*u;truckSize-=take;if(truckSize===0)break;}return units;',
  ],
  functionName: 'maximumUnits',
  params: ['boxTypes', 'truckSize'],
  starterCode: {
    javascript:
      'function maximumUnits(boxTypes, truckSize) {\n  // your code here\n}\n',
    typescript: "function maximumUnits(boxTypes: number[][], truckSize: number): number {\n  // your code here\n}",

    python:
      'def maximumUnits(boxTypes, truckSize):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 3], [2, 2], [3, 1]], 4], expected: 8 },
    { args: [[[5, 10], [2, 5], [4, 7], [3, 9]], 10], expected: 91 },
  ],
  hiddenTests: [
    { args: [[[1, 3], [2, 2], [3, 1]], 6], expected: 10 },
    { args: [[[1, 1]], 1], expected: 1 },
    { args: [[[2, 10], [2, 5]], 3], expected: 25 },
    { args: [[[3, 5], [5, 2], [2, 8]], 7], expected: 35 },
    { args: [[[1, 100], [1, 50], [1, 25]], 2], expected: 150 },
  ],
};
