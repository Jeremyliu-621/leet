import type { Problem } from '../types';

export const problem: Problem = {
  id: 'merge-similar-items',
  title: 'Merge Similar Items',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You have two arrays, \`items1\` and \`items2\`, representing two sets of items. Each array \`items[i] = [valuei, weighti]\` represents the value and weight of the \`i\`th item in that array.

- The value of each item in \`items1\` is **unique**.
- The value of each item in \`items2\` is **unique**.

Return a **2D integer array** \`ret\` where \`ret[i] = [valuei, weighti]\`, with \`weighti\` being the **sum of weights** of all items with value \`valuei\`. Note: \`ret\` should be returned in **ascending** order by value.`,
  constraints: [
    '1 <= items1.length, items2.length <= 1000',
    'items1[i].length == items2[i].length == 2',
    '1 <= valuei, weighti <= 1000',
    'All the valuei in items1 are unique.',
    'All the valuei in items2 are unique.',
  ],
  examples: [
    {
      input: 'items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]]',
      output: '[[1,6],[3,9],[4,5]]',
      explanation: 'Value 1: 1+5=6, Value 3: 8+1=9, Value 4: 5.',
    },
    {
      input: 'items1 = [[1,1],[3,2],[2,3]], items2 = [[2,1],[3,2],[1,3]]',
      output: '[[1,4],[2,4],[3,4]]',
    },
  ],
  hints: [
    'Level 1: Use a Map to accumulate weights by value.',
    'Level 2: Add all items from both arrays into the Map. Then sort by value and return.',
    'Level 3: const m=new Map();for(const[v,w]of[...items1,...items2])m.set(v,(m.get(v)??0)+w);return[...m].sort((a,b)=>a[0]-b[0]);',
  ],
  functionName: 'mergeSimilarItems',
  params: ['items1', 'items2'],
  starterCode: {
    javascript: 'function mergeSimilarItems(items1, items2) {\n  // your code here\n}\n',
    typescript: "function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {\n  // your code here\n}",

    python: 'def mergeSimilarItems(items1, items2):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 1], [4, 5], [3, 8]], [[3, 1], [1, 5]]], expected: [[1, 6], [3, 9], [4, 5]] },
    { args: [[[1, 1], [3, 2], [2, 3]], [[2, 1], [3, 2], [1, 3]]], expected: [[1, 4], [2, 4], [3, 4]] },
  ],
  hiddenTests: [
    { args: [[[1, 5]], [[2, 3]]], expected: [[1, 5], [2, 3]] },
    { args: [[[1, 1], [2, 2]], [[1, 3], [2, 4]]], expected: [[1, 4], [2, 6]] },
    { args: [[[5, 10]], [[5, 5]]], expected: [[5, 15]] },
    { args: [[[3, 1]], [[1, 2], [2, 3]]], expected: [[1, 2], [2, 3], [3, 1]] },
  ],
};
