import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-units-on-a-truck',
  title: 'Maximum Units on a Truck',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are assigned to put some amount of boxes onto **one truck**. You are given a 2D array \`boxTypes\`, where \`boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]\`:

- \`numberOfBoxesi\` is the number of boxes of type \`i\`.
- \`numberOfUnitsPerBoxi\` is the number of units in each box of the type \`i\`.

You are also given an integer \`truckSize\`, which is the **maximum** number of **boxes** that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed \`truckSize\`.

Return the **maximum** total number of **units** that can be put on the truck.`,
  constraints: [
    '`1 <= boxTypes.length <= 1000`',
    '`1 <= numberOfBoxesi, numberOfUnitsPerBoxi <= 1000`',
    '`1 <= truckSize <= 10^6`',
  ],
  examples: [
    {
      input: 'boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4',
      output: '8',
      explanation: 'Take the 1 box of type 1 (3 units) and 2 boxes of type 2 (2 units each), and 1 box of type 3 (1 unit). Total = 3+2+2+1=8.',
    },
    {
      input: 'boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10',
      output: '91',
      explanation: 'Take all type 3 (30 units) + all type 1 (50 units) + 3 of type 2 (21 units? no wait). Sort by units/box descending: 10, 9, 7, 5. Take 5 boxes of 10=50, 3 boxes of 9=27, 2 boxes of 7=14. Total=91.',
    },
  ],
  hints: [
    'Greedy: always pick boxes with the most units per box first.',
    'Sort by units per box in descending order. Take as many as possible of each type until the truck is full.',
    '```js\nfunction maximumUnits(boxTypes, truckSize) {\n  boxTypes.sort((a, b) => b[1] - a[1]);\n  let units = 0;\n  for (const [count, unitsPerBox] of boxTypes) {\n    const take = Math.min(count, truckSize);\n    units += take * unitsPerBox;\n    truckSize -= take;\n    if (truckSize === 0) break;\n  }\n  return units;\n}\n```',
  ],
  functionName: 'maximumUnits',
  params: ['boxTypes', 'truckSize'],
  starterCode: {
    javascript: `function maximumUnits(boxTypes, truckSize) {

}`,
    typescript: `function maximumUnits(boxTypes: number[][], truckSize: number): number {

}`,
    python: `def maximumUnits(boxTypes, truckSize):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 3], [2, 2], [3, 1]], 4], expected: 8 },
    { args: [[[5, 10], [2, 5], [4, 7], [3, 9]], 10], expected: 91 },
  ],
  hiddenTests: [
    { args: [[[1, 3]], 1], expected: 3 },
    { args: [[[10, 1]], 5], expected: 5 },
    { args: [[[1, 5], [3, 2], [1, 1]], 3], expected: 9 },
  ],
};
