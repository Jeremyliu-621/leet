import type { Problem } from '../types';

export const problem: Problem = {
  id: 'fruit-into-baskets',
  title: 'Fruit Into Baskets',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'hash-map'],
  description: `You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array \`fruits\` where \`fruits[i]\` is the **type** of fruit the \`i\`th tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules:

- You only have **two baskets**, and each basket can only hold a **single type** of fruit.
- Starting from any tree, you must pick **exactly one fruit** from **every** tree (including the start tree) while moving to the right.
- You must stop when you reach a tree with fruit that cannot fit in your baskets.

Given the integer array \`fruits\`, return the **maximum** number of fruits you can pick.`,
  constraints: [
    '1 <= fruits.length <= 10^5',
    '0 <= fruits[i] < fruits.length',
  ],
  examples: [
    {
      input: 'fruits = [1,2,1]',
      output: '3',
      explanation: 'We can pick from all 3 trees.',
    },
    {
      input: 'fruits = [0,1,2,2]',
      output: '3',
      explanation: 'We can pick from the last 3 trees [1,2,2]. If we start from the first tree, we would only pick 2 fruits.',
    },
  ],
  hints: [
    'Level 1: Use a sliding window to find the longest subarray with at most 2 distinct values. Maintain a frequency map of fruit types in the window.',
    'Level 2: Use two pointers l, r. Expand r, add fruits[r] to map. If map has > 2 distinct types, shrink from left until it has ≤ 2. Track max window size.',
    'Level 3: const freq=new Map();let l=0,ans=0;for(let r=0;r<fruits.length;r++){freq.set(fruits[r],(freq.get(fruits[r])??0)+1);while(freq.size>2){const f=fruits[l++];freq.set(f,freq.get(f)-1);if(freq.get(f)===0)freq.delete(f);}ans=Math.max(ans,r-l+1);}return ans;',
  ],
  functionName: 'totalFruit',
  params: ['fruits'],
  starterCode: {
    javascript: 'function totalFruit(fruits) {\n  // your code here\n}\n',
    typescript: "function totalFruit(fruits: number[]): number {\n  // your code here\n}",

    python: 'def totalFruit(fruits):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 1]], expected: 3 },
    { args: [[0, 1, 2, 2]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 2, 2]], expected: 4 },
    { args: [[0]], expected: 1 },
    { args: [[1, 1]], expected: 2 },
    { args: [[3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]], expected: 5 },
    { args: [[1, 0, 1, 4, 1, 4, 1, 2, 3]], expected: 5 },
  ],
};
