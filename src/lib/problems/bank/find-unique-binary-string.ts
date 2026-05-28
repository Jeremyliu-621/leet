import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-unique-binary-string',
  title: 'Find Unique Binary String',
  difficulty: 'medium',
  tags: ['arrays', 'strings'],
  description: `Given an array \`nums\` of \`n\` unique binary strings each of length \`n\`, return **any** binary string of length \`n\` that does **not** appear in \`nums\`.

It is guaranteed that a valid answer exists.`,
  constraints: [
    '1 <= n <= 16',
    'nums.length == n',
    'nums[i].length == n',
    'nums[i] consists only of "0" and "1".',
    'All strings in nums are unique.',
  ],
  examples: [
    {
      input: 'nums = ["01","10"]',
      output: '"00"',
      explanation: '"00" does not appear in nums. "11" is also a valid answer.',
    },
    {
      input: 'nums = ["00","01"]',
      output: '"11"',
      explanation: '"11" does not appear in nums. "10" is also a valid answer.',
    },
    {
      input: 'nums = ["111","011","001"]',
      output: '"000"',
      explanation: '"000" does not appear in nums. "100" and "010" are also valid answers.',
    },
  ],
  hints: [
    'There are 2^n binary strings of length n but only n are in nums, so many valid answers exist.',
    'Consider Cantor\'s diagonal argument: for each i, make position i differ from nums[i][i].',
    'Build a string where result[i] = "1" if nums[i][i] == "0", else "0". This guarantees it differs from every string in nums at position i.',
  ],
  functionName: 'findDifferentBinaryString',
  params: ['nums'],
  starterCode: {
    javascript: `function findDifferentBinaryString(nums) {

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
    { args: [['01', '11']], expected: '10' },
    { args: [['0000', '0001', '0010', '0100']], expected: '1101' },
    { args: [['10', '00']], expected: '01' },
  ],
};
