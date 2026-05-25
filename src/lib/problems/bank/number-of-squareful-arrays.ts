import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-squareful-arrays',
  title: 'Number of Squareful Arrays',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `An array is **squareful** if the sum of every pair of adjacent elements is a **perfect square**.

Given an integer array \`nums\`, return the number of permutations of \`nums\` that are squareful. Two permutations \`perm1\` and \`perm2\` are different if there is some index \`i\` such that \`perm1[i] != perm2[i]\`.

**Function signature:** \`numSquarefulPerms(nums)\`

**Example:**
- nums=[1,17,8] → 2 ([1,8,17] and [17,8,1]; 1+8=9, 8+17=25)
- nums=[2,2,2] → 1 (only [2,2,2]; 2+2=4)`,
  constraints: [
    '1 <= nums.length <= 12',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,17,8]',
      output: '2',
      explanation: '[1,8,17]: 1+8=9=3², 8+17=25=5². [17,8,1]: 17+8=25=5², 8+1=9=3². Both are squareful.',
    },
    {
      input: 'nums = [2,2,2]',
      output: '1',
      explanation: '[2,2,2]: 2+2=4=2², 2+2=4=2². Only one distinct permutation.',
    },
  ],
  hints: [
    'Level 1: Use backtracking to build all permutations, checking at each step that the new element forms a perfect square sum with the previous element. Handle duplicates by sorting and skipping repeated values.',
    'Level 2: Sort nums. Use a boolean `used` array. Skip nums[i] if used[i] is true. Skip if nums[i]===nums[i-1] and !used[i-1] (duplicate pruning). Skip if the accumulated path is non-empty and last+nums[i] is not a perfect square. Increment count when path length equals n.',
    'Level 3: const isSquare=x=>{const s=Math.sqrt(x);return Number.isInteger(s)&&s*s===x;}; nums.sort((a,b)=>a-b); const used=new Array(n).fill(false); let count=0; function bt(len,last){if(len===n){count++;return;} for(let i=0;i<n;i++){if(used[i])continue;if(i>0&&nums[i]===nums[i-1]&&!used[i-1])continue;if(len>0&&!isSquare(last+nums[i]))continue;used[i]=true;bt(len+1,nums[i]);used[i]=false;}} bt(0,-1); return count;',
  ],
  functionName: 'numSquarefulPerms',
  params: ['nums'],
  starterCode: {
    javascript: 'function numSquarefulPerms(nums) {\n  \n}\n',
    python: 'def numSquarefulPerms(nums):\n    ',
  },
  visibleTests: [
    { args: [[1, 17, 8]], expected: 2 },
    { args: [[2, 2, 2]], expected: 1 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0, 0]], expected: 1 },
    { args: [[8, 8]], expected: 1 },
    { args: [[1, 8, 1]], expected: 1 },
    { args: [[2, 2, 7]], expected: 3 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
};
