import type { Problem } from '../types';

export const problem: Problem = {
  id: 'special-array-greater-equal',
  title: 'Special Array With X Elements Greater Than or Equal X',
  difficulty: 'easy',
  tags: ['arrays', 'binary-search'],
  description: `You are given an array \`nums\` of non-negative integers. \`nums\` is considered **special** if there exists a number \`x\` such that there are **exactly** \`x\` numbers in \`nums\` that are **greater than or equal to** \`x\`.

Return \`x\` if the array is special, otherwise, return \`-1\`. It can be proven that if \`nums\` is special, the value for \`x\` is **unique**.`,
  constraints: [
    '1 <= nums.length <= 100',
    '0 <= nums[i] <= 1000',
  ],
  examples: [
    { input: 'nums = [3,5]', output: '2', explanation: 'There are 2 values (3 and 5) that are >= 2. x=2 works.' },
    { input: 'nums = [0,0]', output: '-1', explanation: 'No x works.' },
    { input: 'nums = [0,4,3,0,4]', output: '3', explanation: 'There are exactly 3 values >= 3.' },
  ],
  hints: [
    'Level 1: x can only be in the range [0, n] where n is the array length. Try each value.',
    'Level 2: For each candidate x from 1 to n, count how many elements are >= x. Return x if the count equals x.',
    'Level 3: for(let x=0;x<=n;x++){const c=nums.filter(v=>v>=x).length;if(c===x)return x;}return -1;',
  ],
  functionName: 'specialArray',
  params: ['nums'],
  starterCode: {
    javascript: 'function specialArray(nums) {\n  // your code here\n}\n',
    python: 'def specialArray(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 5]], expected: 2 },
    { args: [[0, 0]], expected: -1 },
    { args: [[0, 4, 3, 0, 4]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[0]], expected: -1 },
    { args: [[1]], expected: 1 },
    { args: [[0, 1, 2, 3]], expected: 2 },
    { args: [[3, 6, 7, 7, 0]], expected: -1 },
    { args: [[0, 0, 3, 4, 4]], expected: 3 },
  ],
};
