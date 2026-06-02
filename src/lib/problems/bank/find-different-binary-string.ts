import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-different-binary-string',
  title: 'Find Unique Binary String',
  difficulty: 'easy',
  tags: ['strings', 'simulation'],
  description: `Given an array of strings \`nums\` containing \`n\` **unique** binary strings each of length \`n\`, return a binary string of length \`n\` that **does not appear** in \`nums\`. If there are multiple answers, you may return **any** of them.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 16',
    'nums[i].length == n',
    'nums[i] contains only \'0\' or \'1\'.',
    'All strings in nums are unique.',
  ],
  examples: [
    {
      input: 'nums = ["01","10"]',
      output: '"11"',
      explanation: '"11" does not appear in nums. "00" is also valid.',
    },
    {
      input: 'nums = ["00","01"]',
      output: '"10"',
      explanation: '"10" does not appear in nums. "11" is also valid.',
    },
    {
      input: 'nums = ["111","011","001"]',
      output: '"000"',
      explanation: '"000" does not appear in nums.',
    },
  ],
  hints: [
    'Level 1: Cantor\'s diagonal argument: construct a string that differs from each nums[i] in at least one position.',
    'Level 2: For each index i, look at nums[i][i] (the diagonal element). Flip it: if \'0\', use \'1\'; if \'1\', use \'0\'.',
    'Level 3: The resulting string differs from nums[0] at position 0, from nums[1] at position 1, ..., from nums[n-1] at position n-1. So it cannot equal any string in nums.',
  ],
  functionName: 'findDifferentBinaryString',
  params: ['nums'],
  starterCode: {
    javascript: `function findDifferentBinaryString(nums) {

}`,
    typescript: `function findDifferentBinaryString(nums: string[]): string {

}`,
    python: `def findDifferentBinaryString(nums):
    pass`,
  },
  visibleTests: [
    { args: [['01', '10']], expected: '11' },
    { args: [['00', '01']], expected: '10' },
    { args: [['111', '011', '001']], expected: '000' },
  ],
  hiddenTests: [
    { args: [['0']], expected: '1' },
    { args: [['1']], expected: '0' },
    { args: [['00', '11']], expected: '10' },
    { args: [['10', '01']], expected: '00' },
    { args: [['0000', '0001', '0010', '0011']], expected: '1100' },
    { args: [['01', '11']], expected: '10' },
    { args: [['10', '11']], expected: '00' },
    { args: [['000', '100', '010']], expected: '111' },
  ],
};
