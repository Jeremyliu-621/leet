import type { Problem } from '../types';

export const problem: Problem = {
  id: 'two-furthest-houses-different-colors',
  title: 'Two Furthest Houses With Different Colors',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `There are \`n\` houses evenly lined up on the street, and each house is beautifully painted. You are given a **0-indexed** integer array \`colors\` of length \`n\`, where \`colors[i]\` represents the color of the \`i\`th house.

Return the **maximum distance** between **two** houses with **different** colors.

The distance between the \`i\`th and \`j\`th houses is \`|i - j|\`.`,
  constraints: [
    'n == colors.length',
    '2 <= n <= 100',
    '0 <= colors[i] <= 100',
    'Test data are generated such that at least two houses have different colors.',
  ],
  examples: [
    {
      input: 'colors = [1,1,1,6,1,1,1]',
      output: '3',
      explanation: 'House 0 (color 1) and house 3 (color 6): |0-3|=3. House 3 and house 6: same color.',
    },
    {
      input: 'colors = [1,8,3,8,3]',
      output: '4',
      explanation: 'House 0 (color 1) and house 4 (color 3): |0-4|=4.',
    },
  ],
  hints: [
    'Level 1: Try comparing the first and last house, then shrink inward when colors match.',
    'Level 2: The answer is either between house 0 and some house j (going right), or between some house i and house n-1 (going left).',
    'Level 3: const n=colors.length;let ans=0;for(let j=n-1;j>0;j--)if(colors[0]!==colors[j]){ans=j;break;}for(let i=0;i<n-1;i++)if(colors[i]!==colors[n-1]){ans=Math.max(ans,n-1-i);break;}return ans;',
  ],
  functionName: 'maxDistance',
  params: ['colors'],
  starterCode: {
    javascript: 'function maxDistance(colors) {\n  // your code here\n}\n',
    python: 'def maxDistance(colors):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 1, 6, 1, 1, 1]], expected: 3 },
    { args: [[1, 8, 3, 8, 3]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[0, 1]], expected: 1 },
    { args: [[1, 2, 1, 1, 1]], expected: 3 },
    { args: [[0, 0, 0, 1]], expected: 3 },
    { args: [[1, 0, 0, 0]], expected: 3 },
    { args: [[1, 2, 3]], expected: 2 },
  ],
};
