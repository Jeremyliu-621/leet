import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-rope-colorful',
  title: 'Minimum Time to Make Rope Colorful',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Alice has \`n\` balloons arranged on a rope. You are given a **0-indexed** string \`colors\` where \`colors[i]\` is the color of the \`i\`th balloon.

Alice wants the rope to be **colorful**. She does not want **two consecutive balloons** to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a **0-indexed** integer array \`neededTime\` where \`neededTime[i]\` is the time (in seconds) Bob needs to remove the \`i\`th balloon from the rope.

Return the **minimum time** Bob needs to make the rope colorful.`,
  constraints: [
    'n == colors.length == neededTime.length',
    '1 <= n <= 10^5',
    '1 <= neededTime[i] <= 10^4',
    'colors contains only lowercase English letters',
  ],
  examples: [
    {
      input: 'colors = "abaac", neededTime = [1,2,3,4,5]',
      output: '3',
      explanation: 'Remove the balloon at index 2 (cost 3). The remaining balloons are "abac".',
    },
    {
      input: 'colors = "abc", neededTime = [1,2,3]',
      output: '0',
      explanation: 'No two consecutive balloons have the same color.',
    },
    {
      input: 'colors = "aabaa", neededTime = [1,2,3,4,1]',
      output: '2',
      explanation: 'Remove balloons at index 0 (cost 1) and index 4 (cost 1).',
    },
  ],
  hints: [
    'Level 1: For each group of consecutive same-color balloons, we must remove all but the one with the highest cost. Cost to remove a group = totalCost(group) - maxCost(group).',
    'Level 2: Group consecutive same-color balloons. For each group, total time = sum(neededTime[i]) - max(neededTime[i]). Sum these across all groups.',
    'Level 3: let res=0,i=0;while(i<colors.length){let j=i,groupMax=0,groupSum=0;while(j<colors.length&&colors[j]===colors[i]){groupMax=Math.max(groupMax,neededTime[j]);groupSum+=neededTime[j];j++;}res+=groupSum-groupMax;i=j;}return res;',
  ],
  functionName: 'minCost',
  params: ['colors', 'neededTime'],
  starterCode: {
    javascript: 'function minCost(colors, neededTime) {\n  // your code here\n}\n',
    python: 'def minCost(colors, neededTime):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['abaac', [1, 2, 3, 4, 5]], expected: 3 },
    { args: ['abc', [1, 2, 3]], expected: 0 },
    { args: ['aabaa', [1, 2, 3, 4, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a', [1]], expected: 0 },
    { args: ['aa', [1, 2]], expected: 1 },
    { args: ['aaa', [1, 2, 3]], expected: 3 },
    { args: ['ab', [1, 2]], expected: 0 },
    { args: ['aabb', [1, 2, 1, 2]], expected: 2 },
  ],
};
