import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-xor-of-numbers-which-appear-twice',
  title: 'Find the XOR of Numbers Which Appear Twice',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map', 'math'],
  description: `You are given an array \`nums\`, where each number in the range \`[1, 50]\` appears **either once or twice**.

Return the bitwise \`XOR\` of all numbers that appear **twice** in the array, or \`0\` if no number appears twice.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 50',
    'Each number in nums appears either once or twice.',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,3]',
      output: '1',
      explanation: 'Only 1 appears twice. XOR of duplicates = 1.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'No numbers appear twice.',
    },
    {
      input: 'nums = [5,4,6,5,4]',
      output: '1',
      explanation: '5 and 4 appear twice. 5 XOR 4 = 1.',
    },
  ],
  hints: [
    'Use a hash map to count frequencies of each number.',
    'XOR together all numbers with frequency 2.',
    `\`\`\`js
function duplicateNumbersXOR(nums) {
  const freq = {};
  for (const n of nums) freq[n] = (freq[n]||0)+1;
  return Object.entries(freq)
    .filter(([,c])=>c===2)
    .reduce((xor,[k])=>xor^Number(k), 0);
}\`\`\``,
  ],
  functionName: 'duplicateNumbersXOR',
  params: ['nums'],
  starterCode: {
    javascript: `function duplicateNumbersXOR(nums) {

}`,
    python: `def duplicateNumbersXOR(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 1, 3]], expected: 1 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[5, 4, 6, 5, 4]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[10, 10, 2, 2, 3, 3, 4, 4]], expected: 15 },
    { args: [[1, 1]], expected: 1 },
    { args: [[7, 3, 7, 3]], expected: 4 },

    { args: [[50]], expected: 0 },
  ],
};
