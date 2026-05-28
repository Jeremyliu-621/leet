import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-possible-number-by-binary-concatenation',
  title: 'Maximum Possible Number by Binary Concatenation',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given an array \`nums\` of size **3**, consisting of positive integers. Return the **maximum** possible number whose binary representation can be formed by **concatenating** the binary representations of the elements in \`nums\` in **some order**.

**Note:** The number returned is the decimal interpretation of the concatenated binary string.`,
  constraints: [
    '`nums.length == 3`',
    '`1 <= nums[i] <= 127`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '30',
      explanation: 'Concatenating in order [3,1,2] gives binary "11" + "1" + "10" = "11110" = 30.',
    },
    {
      input: 'nums = [2,8,16]',
      output: '1296',
      explanation: 'Concatenating in order [2,8,16] gives "10" + "1000" + "10000" = "10100010000" = 1296.',
    },
  ],
  hints: [
    'There are only 3! = 6 possible orderings — try all permutations.',
    'For each ordering, concatenate the binary strings and parse the result with `parseInt(str, 2)`.',
    `\`\`\`js
function maximumBinaryString(nums) {
  const perms = [[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
  let maxVal = -Infinity;
  for (const p of perms) {
    const bin = nums[p[0]].toString(2) + nums[p[1]].toString(2) + nums[p[2]].toString(2);
    maxVal = Math.max(maxVal, parseInt(bin, 2));
  }
  return maxVal;
}\`\`\``,
  ],
  functionName: 'maximumBinaryString',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumBinaryString(nums) {

}`,
    typescript: 'function maximumBinaryString(nums: number[]): number {\n\n}',
    python: `def maximumBinaryString(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 30 },
    { args: [[2, 8, 16]], expected: 1296 },
    { args: [[1, 1, 1]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[5, 5, 5]], expected: 365 },
    { args: [[2, 3, 4]], expected: 116 },
    { args: [[7, 1, 3]], expected: 63 },
    { args: [[1, 127, 64]], expected: 32704 },
    { args: [[15, 7, 3]], expected: 511 },
    { args: [[100, 50, 25]], expected: 211300 },
  ],
};
