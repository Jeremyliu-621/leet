import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-group-all-ones',
  title: 'Minimum Swaps to Group All 1\'s Together',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `Given a binary array \`data\`, return the minimum number of swaps required to group all \`1\`s present in the array together in **any place** in the array.`,
  constraints: [
    '`1 <= data.length <= 10^5`',
    '`data[i]` is either `0` or `1`.',
  ],
  examples: [
    {
      input: 'data = [1,0,1,0,1]',
      output: '1',
      explanation: 'There are 3 ones. We need a window of size 3. The window [0,1,0] has 1 zero, so 1 swap.',
    },
    {
      input: 'data = [0,0,0,1,0]',
      output: '0',
      explanation: 'There is only 1 one, so it\'s already grouped.',
    },
    {
      input: 'data = [1,0,1,0,1,0,0,1,1,0,1]',
      output: '3',
    },
  ],
  hints: [
    'Count k = total number of 1s. Find a window of size k with the maximum number of 1s — the minimum swaps needed equals k minus that maximum count.',
    'Count total ones `k`. Use a sliding window of size `k` (circular, doubled array). The number of zeros in the window = swaps needed. Find the window with minimum zeros.',
    `\`\`\`js
const k = nums.reduce((a,b)=>a+b, 0);
if (!k) return 0;
const n = nums.length;
let zeros = nums.slice(0,k).filter(x=>!x).length, minZ = zeros;
for (let i = k; i < 2*n; i++) {
  zeros += (nums[i%n]?0:1) - (nums[(i-k+n)%n]?0:1);
  minZ = Math.min(minZ, zeros);
}
return minZ;\`\`\``
  ],
  functionName: 'minSwaps',
  params: ['data'],
  starterCode: {
    javascript: 'function minSwaps(data) {\n  \n}\n',
    python: 'def minSwaps(data):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 0, 1, 0, 1]], expected: 1 },
    { args: [[0, 0, 0, 1, 0]], expected: 0 },
    { args: [[1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[0]], expected: 0 },
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[1, 0, 0, 0, 1]], expected: 1 },
  ],
};
