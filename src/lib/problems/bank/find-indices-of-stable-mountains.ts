import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-indices-of-stable-mountains',
  title: 'Find Indices of Stable Mountains',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There are \`n\` mountains in a row, and each mountain has a height. You are given a **0-indexed** integer array \`height\` where \`height[i]\` represents the height of mountain \`i\`, and an integer \`threshold\`.

A mountain is called **stable** if the mountain just before it (to its left) has a height **strictly greater** than \`threshold\`. Note that mountain 0 is never stable.

Return an array containing the indices of all **stable** mountains in **any order**.`,
  constraints: [
    '2 <= n == height.length <= 100',
    '1 <= height[i] <= 100',
    '1 <= threshold <= 100',
  ],
  examples: [
    {
      input: 'height = [1,2,3,4,5], threshold = 2',
      output: '[3,4]',
      explanation: 'height[2]=3>2 so index 3 is stable. height[3]=4>2 so index 4 is stable.',
    },
    {
      input: 'height = [10,1,10,1,10], threshold = 3',
      output: '[1,3]',
      explanation: 'height[0]=10>3 so index 1 is stable. height[2]=10>3 so index 3 is stable.',
    },
    {
      input: 'height = [10,1,10,1,10], threshold = 10',
      output: '[]',
      explanation: 'No mountain has a left neighbor with height strictly greater than 10.',
    },
  ],
  hints: [
    'Level 1: Iterate from index 1 and check if height[i-1] > threshold.',
    'Level 2: Collect all such indices i where the previous height exceeds the threshold.',
    'Level 3: const res=[];for(let i=1;i<height.length;i++){if((height[i-1]??0)>threshold)res.push(i);}return res;',
  ],
  functionName: 'stableMountains',
  params: ['height', 'threshold'],
  starterCode: {
    javascript: 'function stableMountains(height, threshold) {\n  // your code here\n}\n',
    typescript: "function stableMountains(height: number[], threshold: number): number[] {\n  // your code here\n}",

    python: 'def stableMountains(height, threshold):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: [3, 4] },
    { args: [[10, 1, 10, 1, 10], 3], expected: [1, 3] },
    { args: [[10, 1, 10, 1, 10], 10], expected: [] },
  ],
  hiddenTests: [
    { args: [[1, 2], 1], expected: [] },
    { args: [[1, 1], 1], expected: [] },
    { args: [[5, 5, 5], 4], expected: [1, 2] },
    { args: [[3, 2, 1], 2], expected: [1] },
    { args: [[100, 50, 100, 50], 99], expected: [1, 3] },
    { args: [[1, 1, 1, 1], 5], expected: [] },
  ],
};
