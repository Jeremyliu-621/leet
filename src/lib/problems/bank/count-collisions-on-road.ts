import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-collisions-on-road',
  title: 'Count Collisions on a Road',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `There are \`n\` cars on an infinitely long road. The cars are numbered from \`0\` to \`n - 1\` from left to right and each car is at a unique point.

You are given a **0-indexed** string \`directions\` of length \`n\`. \`directions[i]\` can be either \`'L'\`, \`'R'\`, or \`'S'\` denoting whether the \`i\`th car is moving to the **left**, to the **right**, or **staying** in place, respectively. Two cars will **collide** if they are moving in opposite directions or if a moving car hits a stationary car.

Return the **total number of collisions** with the following simulation behavior: when two cars collide, both stop. When a moving car hits a stationary car, the moving car stops.`,
  constraints: [
    '1 <= directions.length <= 10^5',
    "directions[i] is either 'L', 'R', or 'S'.",
  ],
  examples: [
    {
      input: 'directions = "RLRSLL"',
      output: '5',
      explanation: 'Various collisions occur; 5 cars total change from moving to stationary.',
    },
    {
      input: 'directions = "LLRR"',
      output: '0',
      explanation: 'L cars escape left; R cars escape right. No collisions.',
    },
  ],
  hints: [
    'Level 1: Observation: leading \'L\' cars (from the left) always escape — they never encounter anything. Trailing \'R\' cars (from the right) always escape. All other L and R cars will eventually collide.',
    'Level 2: The answer equals the count of \'L\' and \'R\' characters in the string after stripping leading \'L\'s and trailing \'R\'s.',
    'Level 3: let l=0,r=s.length-1;while(l<s.length&&s[l]===\'L\')l++;while(r>=0&&s[r]===\'R\')r--;let ans=0;for(let i=l;i<=r;i++)if(s[i]!==\'S\')ans++;return ans;',
  ],
  functionName: 'countCollisions',
  params: ['directions'],
  starterCode: {
    javascript: 'function countCollisions(directions) {\n  // your code here\n}\n',
    python: 'def countCollisions(directions):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['RLRSLL'], expected: 5 },
    { args: ['LLRR'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['S'], expected: 0 },
    { args: ['RL'], expected: 2 },
    { args: ['SSRSSRLL'], expected: 4 },
    { args: ['RRRR'], expected: 0 },
    { args: ['RSSL'], expected: 2 },
  ],
};
